import React from "react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Experience data
  const experiences = [
    {
      title: "Full Stack Engineer & Architect",
      duration: "2019 - 2023",
      company: "Upwork Freelance",
      description:
        "Designed and built scalable, high-performance web applications for clients worldwide. Architected systems that handle millions of requests without breaking a sweat. ",
      icon: "💻",
    },
    {
      title: "Web Developer",
      duration: "2023 - 2023",
      company: "Stixmedia Pvt Ltd",
      description:
        "I handcrafted pixel-perfect, mind-blowingly responsive websites that made clients weep with joy. Optimized performance and SEO so well that Google itself probably considered hiring me.",
      icon: "🌐",
    },
    {
      title: "Software Engineer",
      duration: "2024 - Present",
      company: "Gwanda State University",
      description:
        "Building cutting-edge software solutions to solve real-world problems. Teaching machines to think and systems to self-heal. ",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900"
        >
          💻 Work Experience
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 text-center mb-16"
        >
          I build systems that don’t break.
        </motion.p>

        {/* Vertical Timeline */}
        <ol className="relative border-s border-gray-200">
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="mb-10 ms-6"
            >
              {/* Timeline Icon */}
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                <span className="text-sm">{exp.icon}</span>
              </span>

              {/* Experience Content */}
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                {exp.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                {exp.duration} | {exp.company}
              </time>
              <p className="text-base font-normal text-gray-500">
                {exp.description}
              </p>

              {/* Call to Action */}
              {index === 0 && (
                <a
                  href="#work"
                  className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100"
                >
                  🔗 Download My CV
                </a>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
