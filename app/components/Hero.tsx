"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import parthPhoto from "../../public/images/parth photo1.png";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            className="text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome
          </motion.p>
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I am <span className="text-primary">Software Developer</span>{" "}
          </motion.h1>
          {/*  eslint-disable react/no-unescaped-entities, @typescript-eslint/no-explicit-any  */}
          <motion.p
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I'm Parth, a Software developer. I've been helping businesses to
            solve their problems with my development for 1 year.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgb(var(--primary-rgb)/0.9)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#00c172",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects →
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div
            className="relative w-[400px] h-[400px] border-8 border-primary/20 rounded-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={parthPhoto}
              alt="Profile"
              fill
              className="object-cover rounded"
            />
          </motion.div>
          <motion.div
            className="absolute -right-4 top-4 flex flex-col gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {[
              { icon: "github", href: "https://github.com/Parth1125" },
              {
                icon: "linkedin",
                href: "https://www.linkedin.com/in/parthgera326/",
              },
              { icon: "twitter", href: "https://x.com/parthgera25" },
            ].map((social, index) => (
              <motion.a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white shadow-lg rounded-lg flex items-center justify-center hover:text-primary transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  color: "rgb(var(--primary-rgb))",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="h-5 w-5 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {social.icon === "github" && (
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  )}
                  {social.icon === "linkedin" && (
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  )}
                  {social.icon === "twitter" && (
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a14.207 14.207 0 007.667 2.283c9.2 0 14.222-7.617 14.222-14.223 0-.215-.005-.43-.014-.645a10.063 10.063 0 002.479-2.591z" />
                  )}
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
