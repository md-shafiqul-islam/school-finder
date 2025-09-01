"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path) =>
    pathname === path
      ? "px-3 py-2 rounded-md bg-white text-link-hover font-semibold shadow-md underline decoration-2 underline-offset-4 transition-all duration-200"
      : "px-3 py-2 rounded-md text-white hover:text-link-hover transition-all duration-200";

  return (
    <div className="navbar bg-gradient-to-r from-primary-dark to-primary px-6 shadow-lg">
      {/* Logo / Brand */}
      <div className="flex-1">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide text-accent hover:scale-105 transition-transform"
        >
          SchoolFinder
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-medium">
          <li>
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/addSchool" className={linkClasses("/addSchool")}>
              Add School
            </Link>
          </li>
          <li>
            <Link href="/schools" className={linkClasses("/schools")}>
              Show Schools
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-gradient-to-r from-primary-dark to-primary rounded-box w-44 font-medium"
        >
          <li>
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/addSchool" className={linkClasses("/addSchool")}>
              Add School
            </Link>
          </li>
          <li>
            <Link href="/schools" className={linkClasses("/schools")}>
              Show Schools
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
