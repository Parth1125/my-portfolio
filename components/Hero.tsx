"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-12 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Hi, I'm Parth Gera
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-4 text-gray-600"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            Freelance Web Developer
          </motion.p>
          <motion.p
            className="text-lg mb-8 text-gray-600"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          >
            Transforming ideas into powerful web solutions. Let's bring your
            vision to life!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="space-x-4"
          >
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
            >
              View My Work
            </a>
            <a
              href="#footer"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition duration-300 inline-block"
            >
              Hire Me
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/images/parth photo.jpg"
              alt="Parth Gera"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
