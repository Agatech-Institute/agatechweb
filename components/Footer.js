"use client"
import Link from "next/link";
import { useState,useEffect } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const date = new Date().getFullYear();

  const courses = [
    "Mobile app development",
    "Fullstack web development",
    "Data science and analytics",
    "UI/UX product design",
    "Cybersecurity analyst",
  ];

  const socialLinks = [
    { label: "Instagram", href: "#", icon: <FaInstagram /> },
    { label: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
    { label: "X", href: "#", icon: <FaXTwitter /> },
    { label: "GitHub", href: "#", icon: <FaGithub /> },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-agatech-primarybg text-sm text-white">A</span>
              Agatech
            </Link>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Practical technology education for the people building what comes next.
            </p>
            <div className="mt-6 flex items-center gap-1">
              {socialLinks.map((social) => (
                <Tooltip key={social.label} title={social.label} arrow>
                  <IconButton
                    component="a"
                    href={social.href}
                    aria-label={social.label}
                    sx={{
                      color: "#94a3b8",
                      "&:hover": { color: "#ffffff", backgroundColor: "#164e63" },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">Programs</h2>
            <ul className="mt-5 space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <Link href="/auth/courses" className="text-sm capitalize text-slate-400 transition-colors hover:text-white">
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">Explore</h2>
            <ul className="mt-5 space-y-3">
              <li><Link href="/" className="text-sm text-slate-400 transition-colors hover:text-white">Home</Link></li>
              <li><Link href="/auth/about" className="text-sm text-slate-400 transition-colors hover:text-white">About Agatech</Link></li>
              <li><Link href="/auth/login" className="text-sm text-slate-400 transition-colors hover:text-white">Student login</Link></li>
              <li><Link href="/auth/coursereg" className="text-sm text-slate-400 transition-colors hover:text-white">Register for a course</Link></li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/4] p-6">
            <p className="text-sm font-semibold text-white">Ready to start learning?</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Find the right program and take your next step with Agatech.</p>
            <Link href="/auth/courses" className="mt-5 inline-flex items-center rounded-lg bg-agatech-primary px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300">
              View programs
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy;{date}  Agatech Institute. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="transition-colors hover:text-slate-300">Privacy policy</Link>
            <Link href="#" className="transition-colors hover:text-slate-300">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
