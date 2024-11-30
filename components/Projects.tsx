"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Promptia",
    description:
      "Promptia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
    image: "/images/projects/promptia.png",
    link: "https://promptia-xi.vercel.app/",
    tags: ["Next.js", "Tailwind", "MongoDB"],
  },
  {
    title: "Great Quotes",
    description:
      "A responsive web app for providing inspiring quotes and author details.",
    image: "/images/projects/great quotes.png",
    link: "https://greatquotes-18d54.web.app/quotes",
    tags: ["React", "Firebase", "Material-UI"],
  },
  {
    title: "Blog CMS",
    description:
      "A content management system for blogs with a user-friendly admin interface.",
    image: "/images/projects/blog-cms.png",
    link: "#",
    tags: ["Next.js", "Express", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800 transition duration-300 inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
