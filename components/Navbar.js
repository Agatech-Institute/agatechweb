'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button, IconButton } from "@mui/material";
import { ArrowForward, Close, Menu } from "@mui/icons-material";
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => pathname === path || (path !== '/' && pathname.startsWith(path));

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/auth/courses' },
    { label: 'About', href: '/auth/about' },
   
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex h-19 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-agatech-primarybg text-lg font-bold text-white shadow-sm transition-transform group-hover:rotate-3">
              A
            </span>
            <span className="text-xl font-bold tracking-tight text-slate-950">Agatech</span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full bg-slate-50 p-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'bg-white text-agatech-primarybg shadow-sm'
                    : 'text-slate-600 hover:bg-white hover:text-slate-950'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              component={Link}
              href="/auth/login"
              variant="text"
              sx={{ color: '#334155', textTransform: 'none', fontWeight: 700, borderRadius: '8px', px: 2 }}
            >
              Login
            </Button>
            <Button
              component={Link}
              href="/auth/coursereg"
              variant="contained"
              endIcon={<ArrowForward sx={{ fontSize: 17 }} />}
              sx={{ backgroundColor: '#0A7C6E', '&:hover': { backgroundColor: '#115E59' }, textTransform: 'none', fontWeight: 700, borderRadius: '8px', px: 2.2, py: 1.1, boxShadow: 'none' }}
            >
              Start learning
            </Button>
          </div>

          <div className="md:hidden">
            <IconButton
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              sx={{ color: '#0f172a', '&:hover': { backgroundColor: '#f1f5f9' } }}
            >
              {isOpen ? <Close /> : <Menu />}
            </IconButton>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 shadow-lg md:hidden sm:px-8">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`block rounded-lg px-4 py-3 text-base font-semibold transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'bg-teal-50 text-agatech-primarybg'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 grid gap-2 border-t border-slate-100 pt-4">
            <Button component={Link} href="/auth/login" onClick={closeMenu} variant="outlined" sx={{ color: '#334155', borderColor: '#cbd5e1', textTransform: 'none', fontWeight: 700, borderRadius: '8px', py: 1.2 }}>
              Login
            </Button>
            <Button component={Link} href="/auth/coursereg" onClick={closeMenu} variant="contained" endIcon={<ArrowForward />} sx={{ backgroundColor: '#0A7C6E', '&:hover': { backgroundColor: '#115E59' }, textTransform: 'none', fontWeight: 700, borderRadius: '8px', py: 1.2, boxShadow: 'none' }}>
              Start learning
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}