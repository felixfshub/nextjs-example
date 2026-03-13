"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = (
  <>
    <Link href="/home">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/login">Login</Link>
    <Link href="/signup">Signup</Link>
  </>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 w-full p-2 border-b border-border bg-bg md:bg-bg/70 md:backdrop-blur-md">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl">
          Next.js Example
        </Link>

        <ul className="hidden md:flex gap-6">{links}</ul>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      <div
        className={`absolute left-0 right-0 overflow-hidden mt-2 transition-all duration-300 md:hidden border-b border-border bg-bg ${
          open ? "max-h-60 pt-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-2">{links}</ul>
      </div>
    </nav>
  );
}
