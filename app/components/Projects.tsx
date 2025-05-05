"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Core AI",
    description:
      "Your personal AI voice fitness coach. Build custom workouts, track goals, and stay motivated—all with your voice.",
    image: "/images/projects/coreai.png",
    link: "https://core-ai-five.vercel.app/",
    tags: ["Next.js", "Express", "PostgreSQL"],
    liveUrl: "https://core-ai-five.vercel.app/",
    githubUrl: "https://github.com/Parth1125/Core-AI",
  },
  {
    title: "Promptia",
    description:
      "Promptia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
    image: "/images/projects/promptia.png",
    link: "https://promptia-xi.vercel.app/",
    tags: ["Next.js", "Tailwind", "MongoDB"],
    liveUrl: "https://promptia-xi.vercel.app/",
    githubUrl: "https://github.com/Parth1125/promptia",
  },
  {
    title: "Great Quotes",
    description:
      "A responsive web app for providing inspiring quotes and author details.",
    image: "/images/projects/great quotes.png",
    link: "https://greatquotes-18d54.web.app/quotes",
    tags: ["React", "Firebase", "Material-UI"],
    liveUrl: "https://greatquotes-18d54.web.app/quotes",
    githubUrl: "https://github.com/Parth1125/Great-Quotes",
  },

  // Add more projects here
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <motion.section
      className="container mx-auto px-4 py-20"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <motion.div className="text-center mb-16" variants={sectionVariants}>
        <h2 className="text-4xl font-bold mb-4">
          My Creative Works
          <span className="text-primary"> Latest Projects</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Check out some of my recent projects that showcase my skills and
          expertise
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              y: -15,
              transition: { duration: 0.3 },
            }}
            className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="h-full w-full"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-700"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="p-6">
              <motion.h3
                className="text-xl font-semibold mb-2"
                initial={{ y: 0 }}
                whileHover={{ y: -3, color: "var(--primary)" }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgb(var(--primary-rgb)/0.2)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Source Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
