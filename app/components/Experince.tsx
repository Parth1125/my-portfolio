"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";

// Sample data structure - replace with your actual experience data
const experienceData = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Codebia Solutions Private Limited.",
    duration: "Jan 2024 - Present",
    description:
      "Utilized a robust tech stack comprising JavaScript, React.js, Formik, Primeflex, and Material UI to elevate project development. This comprehensive approach ensured streamlined processes, resulting in a 20% reduction in development time and an enriched user experience",
    skills: ["React", "PrimeReact", "JavaScript", "Primeflex CSS", "Formik"],
    // link: "https://techinnovations.example",
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "Blazify Private Limited.",
    duration: "Jan 2023- March 2023",
    description:
      "•Led Full Stack Development of an e-commerce website utilizing modern technology's to create user-friendly and scalable online platform",
    skills: ["JavaScript", "React", "CSS", "Firebase", "Chakra"],
    // link: "https://digitalsolutions.example",
  },
];

export default function ExperienceSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-5xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {/*  eslint-disable react/no-unescaped-entities, @typescript-eslint/no-explicit-any  */}
            A timeline of my professional journey, showcasing the companies I've
            worked with and the skills I've developed along the way.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-emerald-300 dark:bg-emerald-700 h-full rounded-full"
          ></motion.div>

          {/* Experience items */}
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row md:items-center mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              onMouseEnter={() => setHoveredId(experience.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-800 z-10"
              ></motion.div>

              {/* Content */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-3">
                    <Briefcase className="w-5 h-5 text-emerald-500 mr-2" />
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      {experience.role}
                    </h3>
                  </div>

                  <div className="flex items-center mb-4">
                    <motion.div
                      animate={
                        hoveredId === experience.id ? { x: [0, 5, 0] } : {}
                      }
                      transition={{
                        repeat:
                          hoveredId === experience.id
                            ? Number.POSITIVE_INFINITY
                            : 0,
                        duration: 1,
                      }}
                    >
                      <ChevronRight className="w-4 h-4 text-emerald-500 mr-1" />
                    </motion.div>
                    <h4 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                      {experience.company}
                    </h4>
                  </div>

                  <div className="flex items-center mb-4 text-slate-600 dark:text-slate-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{experience.duration}</span>
                  </div>

                  <p className="mb-4 text-slate-600 dark:text-slate-300">
                    {experience.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ y: -3 }}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm rounded-full"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    <span className="mr-1">Visit website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a> */}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
