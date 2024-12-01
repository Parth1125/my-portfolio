"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-semibold">P</span>
        </div>
        <span className="font-medium">Portfolio</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="#about" className="hover:text-primary transition-colors">
          About
        </Link>
        <Link href="#skills" className="hover:text-primary transition-colors">
          Skills
        </Link>
        <Link href="#projects" className="hover:text-primary transition-colors">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
      </nav>

      <a
        href="/Parth-Gera-Resume.pdf"
        download
        className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
      >
        Download CV
      </a>
    </header>
  );
}
