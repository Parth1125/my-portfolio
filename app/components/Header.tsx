"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div
            className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="text-white font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              P
            </motion.span>
          </motion.div>
          <motion.span
            className="font-medium"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Portfolio
          </motion.span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Link
                href={item.href}
                className="hover:text-primary transition-colors relative group"
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full"
                  transition={{ duration: 0.3 }}
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.a
          href="/Parth-Gera-Resume.pdf"
          download
          className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors relative overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span className="relative z-10" whileHover={{ color: "#000" }}>
            Download CV
          </motion.span>
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0 bg-primary/10"
            initial={{ height: 0 }}
            whileHover={{ height: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      </header>
    </motion.div>
  );
}
