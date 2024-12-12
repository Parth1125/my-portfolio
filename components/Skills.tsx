"use client";

import { motion } from "framer-motion";
import { skills } from "../data/skills";
import Image from "next/image";
// import { motion } from "framer-motion";

// const skills = {
//   frontend: [
//     { name: "HTML", icon: "/icons/html.svg" },
//     { name: "CSS", icon: "/icons/css.svg" },
//     { name: "JavaScript", icon: "/icons/javascript.svg" },
//     { name: "TypeScript", icon: "/icons/typescript.svg" },
//     { name: "React", icon: "/icons/react.svg" },
//     { name: "Next.js", icon: "/icons/nextjs.svg" },
//     { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
//   ],
//   backend: [
//     { name: "Node.js", icon: "/icons/nodejs.svg" },
//     { name: "Express.js", icon: "/icons/express.svg" },
//     { name: "MongoDB", icon: "/icons/mongodb.svg" },
//   ],
//   tools: [
//     { name: "Git", icon: "/icons/git.svg" },
//     { name: "GitHub", icon: "/icons/github.svg" },
//     { name: "Bit Bucket", icon: "/icons/bitbucket.svg" },
//   ],
// };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Skills() {
  return (
    <section className="container mx-auto px-4 py-20" id="skills">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          My Software Development <span className="text-primary">Toolkit</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A comprehensive set of technologies I use to bring ideas to life
        </p>
      </div>

      <div className="space-y-16">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold capitalize mb-8 text-center">
              {category}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6"
            >
              {items.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-4 border border-gray-100"
                >
                  <div className="relative w-12 h-12">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-medium text-gray-800">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
