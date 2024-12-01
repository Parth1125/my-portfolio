"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Promptia",
    description:
      "Promptia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
    image: "/images/projects/promptia.png",
    link: "https://promptia-xi.vercel.app/",
    tags: ["Next.js", "Tailwind", "MongoDB"],
    liveUrl: "https://promptia-xi.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Great Quotes",
    description:
      "A responsive web app for providing inspiring quotes and author details.",
    image: "/images/projects/great quotes.png",
    link: "https://greatquotes-18d54.web.app/quotes",
    tags: ["React", "Firebase", "Material-UI"],
    liveUrl: "https://greatquotes-18d54.web.app/quotes",
    githubUrl: "#",
  },
  {
    title: "Blog CMS",
    description:
      "A content management system for blogs with a user-friendly admin interface.",
    image: "/images/projects/blog-cms.png",
    link: "#",
    tags: ["Next.js", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  // Add more projects here
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Projects() {
  return (
    <section className="container mx-auto px-4 py-20" id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          My Creative Works
          <span className="text-primary"> Latest Projects</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Check out some of my recent projects that showcase my skills and
          expertise
        </p>
      </div>

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
            className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-64 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
