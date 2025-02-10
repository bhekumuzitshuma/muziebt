import React from "react";
import {
  FaHome,
  FaShoppingCart,
  FaLaptopCode,
  FaHospitalSymbol,
} from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Off-rez",
      description:
        "A student accommodation platform connecting tenants with verified /agents.",
      icon: <FaHome className="w-12 h-12 text-blue-600" />,
      bgColor: "bg-gradient-to-r from-blue-50 to-blue-100",
      link: "/",
    },
    {
      id: 2,
      title: "EcomDjango",
      description:
        "A scalable e-commerce platform built with Django and React. Implements Stripe",
      icon: <FaShoppingCart className="w-12 h-12 text-purple-600" />,
      bgColor: "bg-gradient-to-r from-purple-50 to-purple-100",
      link: "/",
    },
    {
      id: 3,
      title: "Lyncteck",
      description:
        "A software development company specializing in custom solutions. Made over 10 projects.",
      icon: <FaLaptopCode className="w-12 h-12 text-green-600" />,
      bgColor: "bg-gradient-to-r from-green-50 to-green-100",
      link: "/",
    },
    {
      id: 4,
      title: "HMS App",
      description:
        "A full blown Hospital Management System windows application for managing hospital records, inventory and appointments.",
      icon: <FaHospitalSymbol className="w-12 h-12 text-red-600" />,
      bgColor: "bg-gradient-to-r from-red-50 to-red-100",
      link: "/",
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-blue-50 to-purple-50 animate-gradient"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-black">
            Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <a
              href={`${project.link}`}
              target="_blank"
              rel="noreferrer"
              key={project.id}
            >
              <div
                key={project.id}
                className={`${project.bgColor} rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">{project.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-xs">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 pt-7 max-w-2xl mx-auto">
        <a
          href="/projects"
          className="btn bg-base-300 hover:text-green-600 transition-transform transform hover:scale-105"
        >
          ⚒️ View More Projects
        </a>
      </div>

      {/* Tailwind CSS for Animated Gradient */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
