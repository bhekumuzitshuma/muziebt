import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiGraphql,
  SiBurpsuite,
  SiKalilinux,
} from "react-icons/si";

const InfiniteLogoCarousel = () => {
  // List of tech icons
  const techIcons = [
    <FaReact className="w-10 h-10 text-blue-500" />,
    <FaNodeJs className="w-10 h-10 text-green-600" />,
    <FaPython className="w-10 h-10 text-yellow-500" />,
    <FaAws className="w-10 h-10 text-orange-500" />,
    <FaDocker className="w-10 h-10 text-blue-400" />,
    <FaGitAlt className="w-10 h-10 text-red-500" />,
    <FaJava className="w-10 h-10 text-red-600" />,
    <FaHtml5 className="w-10 h-10 text-orange-600" />,
    <FaCss3Alt className="w-10 h-10 text-blue-600" />,
    <SiKalilinux className="w-10 h-10 text-blue-600" />,
    <FaJsSquare className="w-10 h-10 text-yellow-400" />,
    <SiNextdotjs className="w-10 h-10 text-black" />,
    <SiTailwindcss className="w-10 h-10 text-teal-500" />,
    <SiTypescript className="w-10 h-10 text-blue-600" />,
    <SiMongodb className="w-10 h-10 text-green-500" />,
    <SiPostgresql className="w-10 h-10 text-blue-700" />,
    <SiRedis className="w-10 h-10 text-red-600" />,
    <SiKubernetes className="w-10 h-10 text-blue-600" />,
    <SiGraphql className="w-10 h-10 text-pink-600" />,
    <SiBurpsuite className="w-10 h-10 text-pink-600" />,
  ];

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Fade effect on the left */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>

      {/* Fade effect on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* Infinite Logo Carousel */}
      <div className="flex space-x-8 animate-infinite-scroll">
        {techIcons.map((icon, index) => (
          <div key={index} className="flex-shrink-0">
            {icon}
          </div>
        ))}
        {/* Duplicate the icons for seamless looping */}
        {techIcons.map((icon, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLogoCarousel;
