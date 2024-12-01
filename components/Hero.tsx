"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <p className="text-primary">Welcome</p>
          <h1 className="text-5xl font-bold">
            I have <span className="text-primary">Creative Design</span>{" "}
            Experience
          </h1>
          <p className="text-gray-600">
            I'm Tanvi, a creative Product Designer. I've been helping businesses
            to solve their problems with my design for 2 years.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Projects →
            </a>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative w-[400px] h-[400px] border-8 border-primary/20 rounded-lg">
            <Image
              src="/images/parth photo.jpg"
              alt="Profile"
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="absolute -right-4 top-4 flex flex-col gap-2">
            {["facebook", "twitter", "linkedin"].map((social) => (
              <div
                key={social}
                className="w-10 h-10 bg-white shadow-lg rounded-lg flex items-center justify-center"
              >
                <Image
                  src={`/icons/${social}.svg`}
                  alt={social}
                  width={20}
                  height={20}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
