"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../config/firebase";

const courses = [
  {
    id: 1,
    title: "App Development",
    image: "/APP.png",
    duration: "12 Weeks",
    price: 85000,
  },
  {
    id: 2,
    title: "Web Development",
    image: "/WEB.png",
    duration: "14 Weeks",
    price: 95000,
  },
  {
    id: 3,
    title: "Data Science",
    image: "/DATA.png",
    duration: "16 Weeks",
    price: 110000,
  },
  {
    id: 4,
    title: "UI/UX Design",
    image: "/UI.png",
    duration: "10 Weeks",
    price: 75000,
  },
  {
    id: 5,
    title: "AI & Machine Learning",
    image: "/AI.png",
    duration: "18 Weeks",
    price: 125000,
  },
  {
    id: 6,
    title: "Cloud & DevOps",
    image: "/AI.png",
    duration: "12 Weeks",
    price: 100000,
  },
];

const validationSchema = Yup.object({
  firstName: Yup.string().trim().required("First name is required"),
  lastName: Yup.string().trim().required("Last name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string().trim().required("Phone number is required"),
  address: Yup.string().trim().required("Address is required"),
  experience: Yup.string().required("Select your experience level"),
  careerPath: Yup.boolean().oneOf(
    [true],
    "Please confirm that you are interested in a technology career",
  ),
});

const formatPrice = (price) => `₦${price.toLocaleString("en-NG")}`;

export default function CourseRegistration({ userId }) {
  const router = useRouter();
  
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [showCourseOptions, setShowCourseOptions] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const courseId = Number(
      new URLSearchParams(window.location.search).get("course"),
    );
    const course = courses.find((item) => item.id === courseId);

    if (course) {
      setSelectedCourse(course);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      experience: "",
      careerPath: false,
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await addDoc(collection(db, "courseRegistrations"), {
          ...values,
          userId: userId || null,
          course: selectedCourse,
          createdAt: serverTimestamp(),
        });
        setSubmitted(true);
        router.push("/auth/dashboard");
      } catch (error) {
        console.error("Unable to save course registration", error);
        formik.setStatus("Unable to save your registration. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  const fieldError = (field) =>
    formik.touched[field] && Boolean(formik.errors[field]);

  const fieldHelperText = (field) =>
    formik.touched[field] ? formik.errors[field] : " ";

  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#f8fafc",
      borderRadius: "8px",
      "& fieldset": { borderColor: "#e2e8f0" },
      "&:hover fieldset": { borderColor: "#94a3b8" },
      "&.Mui-focused": {
        backgroundColor: "#ffffff",
        "& fieldset": { borderColor: "#0A7C6E", borderWidth: 2 },
      },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "#0A7C6E" },
    "& .MuiFormHelperText-root": { marginLeft: 0 },
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <Link
            href="/auth/courses"
            className="text-sm font-bold text-agatech-primarybg hover:text-teal-800"
          >
             Back to courses
          </Link>
         <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-agatech-primarybg">
            Register your interest
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Take the first step.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Tell us a little about yourself and we will help you get started
            with the right program.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="h-fit overflow-hidden rounded-2xl bg-slate-950 shadow-xl shadow-slate-200/70">
            <button
              type="button"
              onClick={() => setShowCourseOptions((isOpen) => !isOpen)}
              aria-expanded={showCourseOptions}
              aria-controls="course-options"
              className="group relative block aspect-4/3 w-full overflow-hidden text-left"
              title="Change selected program"
            >
              <Image
                src={selectedCourse.image}
                alt={selectedCourse.title}
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-950">
                Your selected program
              </span>
              <span className="absolute right-5 top-5 rounded-lg bg-slate-950/75 px-3 py-2 text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                Change program
              </span>
            </button>
            {showCourseOptions && (
              <div id="course-options" className="border-t border-white/10 p-4">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  Choose another program
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {courses
                    .filter((course) => course.id !== selectedCourse.id)
                    .map((course) => (
                      <button
                        key={course.id}
                        type="button"
                        onClick={() => {
                          setSelectedCourse(course);
                          setShowCourseOptions(false);
                        }}
                        className="group overflow-hidden rounded-lg text-left ring-1 ring-white/10 transition hover:ring-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={course.image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 12vw, 40vw"
                            className="object-cover transition duration-300 group-hover:scale-105"
                          />
                        </div>
                        <span className="block px-2 py-2 text-xs font-semibold leading-4 text-white">
                          {course.title}
                        </span>
                      </button>
                    ))}
                </div>
              </div>
            )}
            <div className="p-6 text-white sm:p-8">
              <h2 className="text-2xl font-bold">{selectedCourse.title}</h2>
              <div className="mt-6 space-y-4 border-t border-white/15 pt-5 text-sm">
                <div className="flex justify-between gap-4 text-slate-300">
                  <span>Duration</span>
                  <strong className="text-white">
                    {selectedCourse.duration}
                  </strong>
                </div>
                <div className="flex justify-between gap-4 text-slate-300">
                  <span>Estimated tuition</span>
                  <strong className="text-xl text-amber-300">
                    {formatPrice(selectedCourse.price)}
                  </strong>
                </div>
              </div>
            </div>
          </aside>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
            {submitted ? (
              <div className="flex min-h-96 flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-2xl text-agatech-primarybg">
                  ✓
                </span>
                <h2 className="mt-5 text-2xl font-bold text-slate-950">
                  Thanks for your interest
                </h2>
                <p className="mt-3 max-w-sm leading-7 text-slate-600">
                  We have received your interest in {selectedCourse.title}. Our
                  team will be in touch with the next steps.
                </p>
                <Link
                  href="/auth/courses"
                  className="mt-7 rounded-lg bg-agatech-primarybg px-5 py-3 text-sm font-bold text-white hover:bg-teal-800"
                >
                  Browse more courses
                </Link>
              </div>
            ) : (
              <form
                onSubmit={formik.handleSubmit}
                className="space-y-6"
                noValidate
              >
                <div>
                  <h2 className="text-2xl font-bold text-slate-950">
                    Tell us about yourself
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Share your details and our team will guide you through the
                    next steps.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="First name"
                    placeholder="Daniel"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={fieldError("firstName")}
                    helperText={fieldHelperText("firstName")}
                    sx={inputStyles}
                  />
                  <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    placeholder="Ejeh"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={fieldError("lastName")}
                    helperText={fieldHelperText("lastName")}
                    sx={inputStyles}
                  />
                </div>

                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  label="Email address"
                  placeholder="you@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={fieldError("email")}
                  helperText={fieldHelperText("email")}
                  sx={inputStyles}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Phone number"
                    placeholder="0800 000 0000"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={fieldError("phone")}
                    helperText={fieldHelperText("phone")}
                    sx={inputStyles}
                  />
                  <FormControl fullWidth error={fieldError("experience")} sx={inputStyles}>
                    <InputLabel id="experience-label">Experience level</InputLabel>
                    <Select
                      labelId="experience-label"
                      id="experience"
                      name="experience"
                      value={formik.values.experience}
                      label="Experience level"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <MenuItem value=""><em>Select level</em></MenuItem>
                      <MenuItem value="beginner">Beginner</MenuItem>
                      <MenuItem value="intermediate">Intermediate</MenuItem>
                      <MenuItem value="advanced">Advanced</MenuItem>
                    </Select>
                    <FormHelperText>{fieldHelperText("experience")}</FormHelperText>
                  </FormControl>
                </div>

                <TextField
                  fullWidth
                  id="address"
                  name="address"
                  label="Home address"
                  placeholder="Street, city, state"
                  multiline
                  minRows={3}
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={fieldError("address")}
                  helperText={fieldHelperText("address")}
                  sx={inputStyles}
                />

                <FormControl error={fieldError("careerPath")}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="careerPath"
                        name="careerPath"
                        checked={formik.values.careerPath}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{ color: "#94a3b8", "&.Mui-checked": { color: "#0A7C6E" } }}
                      />
                    }
                    label="I am interested in building a career in technology."
                    sx={{ color: "#475569", alignItems: "flex-start" }}
                  />
                  <FormHelperText>{fieldHelperText("careerPath")}</FormHelperText>
                </FormControl>

                {formik.status && (
                  <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    {formik.status}
                  </p>
                )}

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  disableElevation
                  sx={{
                    backgroundColor: "#0A7C6E",
                    borderRadius: "8px",
                    fontWeight: 700,
                    paddingY: 1.7,
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#115E59" },
                  }}
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? (
                    <CircularProgress size={22} sx={{ color: "white" }} aria-label="Saving registration" />
                  ) : (
                    <>
                      Register my interest <span aria-hidden="true" className="ml-2">-&gt;</span>
                    </>
                  )}
                </Button>
              </form>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
