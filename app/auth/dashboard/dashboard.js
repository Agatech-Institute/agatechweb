"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import { Button, Card, CardContent, Chip, CircularProgress, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ArrowForward, Delete, School, Schedule } from "@mui/icons-material";
import { db } from "../../../config/firebase";

const formatPrice = (price) => `₦${Number(price || 0).toLocaleString("en-NG")}`;

const availableCourses = [
	{ id: 1, title: "App Development", image: "/APP.png", duration: "12 Weeks", price: 85000 },
	{ id: 2, title: "Web Development", image: "/WEB.png", duration: "14 Weeks", price: 95000 },
	{ id: 3, title: "Data Science", image: "/DATA.png", duration: "16 Weeks", price: 110000 },
	{ id: 4, title: "UI/UX Design", image: "/UI.png", duration: "10 Weeks", price: 75000 },
	{ id: 5, title: "AI & Machine Learning", image: "/AI.png", duration: "18 Weeks", price: 125000 },
	{ id: 6, title: "Cloud & DevOps", image: "/AI.png", duration: "12 Weeks", price: 100000 },
];

export default function Dashboard({ userId, userName, userEmail }) {
	const [registrations, setRegistrations] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	const [isCoursePickerOpen, setIsCoursePickerOpen] = useState(false);
	const [isAddingCourse, setIsAddingCourse] = useState(false);
	const [addCourseError, setAddCourseError] = useState("");
	const [newCourseExperience, setNewCourseExperience] = useState("");
	const [deletingId, setDeletingId] = useState("");

	useEffect(() => {
		let isMounted = true;

		async function loadRegistrations() {
			try {
				const registrationsQuery = query(
					collection(db, "courseRegistrations"),
					where("userId", "==", userId),
				);
				const snapshot = await getDocs(registrationsQuery);
				const records = snapshot.docs
					.map((document) => ({ id: document.id, ...document.data() }))
					.sort((first, second) => {
						const firstTime = first.createdAt?.toMillis?.() || 0;
						const secondTime = second.createdAt?.toMillis?.() || 0;
						return secondTime - firstTime;
					});

				if (isMounted) setRegistrations(records);
			} catch (loadError) {
				console.error("Unable to load course registrations", loadError);
				if (isMounted) setError("We could not load your registered courses.");
			} finally {
				if (isMounted) setIsLoading(false);
			}
		}

		loadRegistrations();

		return () => {
			isMounted = false;
		};
	}, [userId]);

	const registeredCourseIds = new Set(registrations.map((registration) => registration.course?.id));
	const coursesToAdd = availableCourses.filter((course) => !registeredCourseIds.has(course.id));

	const addCourse = async (course) => {
		const profile = registrations[0];
		if (!profile) return;
		if (!newCourseExperience) {
			setAddCourseError("Select your experience level before adding a course.");
			return;
		}

		setIsAddingCourse(true);
		setAddCourseError("");
		try {
			const document = await addDoc(collection(db, "courseRegistrations"), {
				firstName: profile.firstName,
				lastName: profile.lastName,
				email: profile.email,
				phone: profile.phone,
				address: profile.address,
				experience: newCourseExperience,
				careerPath: profile.careerPath,
				userId,
				course,
				createdAt: serverTimestamp(),
			});
			setRegistrations((current) => [{ ...profile, id: document.id, course, experience: newCourseExperience }, ...current]);
			setIsCoursePickerOpen(false);
			setNewCourseExperience("");
		} catch (addError) {
			console.error("Unable to add course", addError);
			setAddCourseError("We could not add that course. Please try again.");
		} finally {
			setIsAddingCourse(false);
		}
	};

	const deleteCourse = async (registration) => {
		const courseTitle = registration.course?.title || "this course";
		if (!window.confirm(`Remove ${courseTitle} from your registered courses?`)) return;

		setDeletingId(registration.id);
		setError("");
		try {
			await deleteDoc(doc(db, "courseRegistrations", registration.id));
			setRegistrations((current) => current.filter((item) => item.id !== registration.id));
		} catch (deleteError) {
			console.error("Unable to delete course registration", deleteError);
			setError("We could not remove that course. Please try again.");
		} finally {
			setDeletingId("");
		}
	};

	return (
		<main className="min-h-screen bg-slate-50 px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
			<div className="mx-auto max-w-7xl">
				<section className="relative overflow-hidden rounded-2xl bg-slate-950 px-6 py-10 text-white shadow-xl sm:px-10 lg:px-14">
					<div className="absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-teal-900/70 to-transparent" />
					<div className="relative max-w-2xl">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Student dashboard</p>
						<h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
							Welcome back{userName ? `, ${userName.split(" ")[0]}` : ""}.
						</h1>
						<p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
							{userName || "Your learning journey"} is in motion. Keep building practical skills one course at a time.
						</p>
					</div>
				</section>

				<div className="mt-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-agatech-primarybg">Your learning plan</p>
						<h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Registered courses</h2>
					</div>
					<Button
						onClick={() => setIsCoursePickerOpen((open) => !open)}
						variant="contained"
						endIcon={<ArrowForward />}
						sx={{ backgroundColor: "#0A7C6E", "&:hover": { backgroundColor: "#115E59" }, textTransform: "none", fontWeight: 700, borderRadius: "8px", boxShadow: "none" }}
					>
						Add another course
					</Button>
				</div>

				{isCoursePickerOpen && registrations.length > 0 && (
					<div className="mt-5 rounded-2xl border border-teal-100 bg-teal-50/60 p-5">
						<div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
							<div>
								<h3 className="font-bold text-slate-950">Choose a course to add</h3>
								<p className="mt-1 text-sm text-slate-600">Your existing registration details will be reused.</p>
							</div>
							{coursesToAdd.length === 0 && <p className="text-sm font-semibold text-agatech-primarybg">All courses registered</p>}
						</div>
						{coursesToAdd.length > 0 && (
							<div>
								<FormControl size="small" sx={{ minWidth: 240, backgroundColor: "white" }}>
									<InputLabel id="new-course-experience-label">Experience level</InputLabel>
									<Select
										labelId="new-course-experience-label"
										value={newCourseExperience}
										label="Experience level"
										onChange={(event) => {
											setNewCourseExperience(event.target.value);
											setAddCourseError("");
										}}
									>
										<MenuItem value=""><em>Select level</em></MenuItem>
										<MenuItem value="beginner">Beginner</MenuItem>
										<MenuItem value="intermediate">Intermediate</MenuItem>
										<MenuItem value="advanced">Advanced</MenuItem>
									</Select>
								</FormControl>
								<div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
								{coursesToAdd.map((course) => (
									<button key={`add-course-${course.id}`} type="button" onClick={() => addCourse(course)} disabled={isAddingCourse || !newCourseExperience} className="flex items-center gap-3 rounded-xl bg-white p-3 text-left ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:ring-agatech-primarybg disabled:cursor-not-allowed disabled:opacity-60">
										<span className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100"><Image src={course.image} alt="" fill sizes="64px" className="object-cover" /></span>
										<span><strong className="block text-sm text-slate-950">{course.title}</strong><small className="mt-1 block text-xs text-slate-500">{course.duration}</small></span>
									</button>
								))}
								</div>
							    </div>
							
						)}
						{addCourseError && <p role="alert" className="mt-3 text-sm font-semibold text-red-700">{addCourseError}</p>}
					</div>
				)}

				{isLoading && (
					<div className="flex min-h-64 items-center justify-center">
						<CircularProgress sx={{ color: "#0A7C6E" }} />
					</div>
				)}

				{!isLoading && error && (
					<div role="alert" className="mt-6 rounded-xl bg-red-50 p-5 text-sm font-semibold text-red-700">{error}</div>
				)}

				{!isLoading && !error && registrations.length === 0 && (
					<div className="mt-6 rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-200">
						<School sx={{ color: "#0A7C6E", fontSize: 42 }} />
						<h3 className="mt-4 text-xl font-bold text-slate-950">No courses registered yet</h3>
						<p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">Choose a course and complete the registration form to see it in your dashboard.</p>
					</div>
				)}

				{!isLoading && !error && registrations.length > 0 && (
					<div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
						{registrations.map((registration) => (
							<Card key={registration.id} elevation={0} sx={{ borderRadius: "16px", border: "1px solid #e2e8f0", overflow: "hidden" }}>
								<div className="relative aspect-16/9] bg-slate-100">
									{registration.course?.image && (
										<Image src={registration.course.image} alt={registration.course.title || "Registered course"} fill sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" className="object-cover" />
									)}
									<div className="absolute inset-0 bg-linear-to-t from-slate-950/70 to-transparent" />
									<Chip label="Registered" size="small" sx={{ position: "absolute", left: 16, bottom: 16, backgroundColor: "#F59E0B", color: "#0f172a", fontWeight: 700 }} />
								</div>
								<CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
									<div className="flex items-start justify-between gap-3">
										<h3 className="text-xl font-bold text-slate-950">{registration.course?.title || "Course"}</h3>
										<Button
											onClick={() => deleteCourse(registration)}
											disabled={deletingId === registration.id}
											aria-label={`Delete ${registration.course?.title || "course"}`}
											 title="Delete course"
											color="error"
											 sx={{ minWidth: 40, width: 40, height: 40, borderRadius: "8px" }}
										>
											<Delete />
										</Button>
									</div>
									<div className="mt-5 space-y-3 text-sm text-slate-600">
										<div className="flex items-center gap-2"><Schedule sx={{ color: "#0A7C6E", fontSize: 19 }} />{registration.course?.duration || "Schedule to be announced"}</div>
										<div className="flex items-center gap-2"><School sx={{ color: "#F59E0B", fontSize: 19 }} />{formatPrice(registration.course?.price)}</div>
									</div>
									<p className="mt-5 border-t border-slate-100 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{registration.experience || "Experience level not provided"} experience</p>
								</CardContent>
							</Card>
						))}
					</div>
				)}
			</div>
		</main>
	);
}
