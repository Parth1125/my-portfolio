"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <h1 className="font-bold text-5xl md:text-7xl tracking-tight text-gray-900">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Parth Gera
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-600 font-light">
              Freelance Web Developer
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-light">
              Transforming ideas into powerful web solutions. Let's bring your
              vision to life!
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 
                text-white rounded-full font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl 
                transition-all duration-200"
              >
                <span>View My Work</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-3.5 border-2 border-blue-600 text-blue-600 
                rounded-full font-medium hover:bg-blue-50 transition-all duration-200"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-3xl" />
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/parth photo.jpg"
                alt="Parth Gera"
                fill
                className="rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
