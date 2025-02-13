import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] pb-8 pt-16 flex items-center justify-center bg-white text-gray-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="animate-pulse-slow bg-gradient-to-r from-purple-100 to-indigo-100 w-64 h-64 rounded-full blur-3xl opacity-50"></div>
        <div className="animate-pulse-slow bg-gradient-to-r from-teal-100 to-blue-100 w-64 h-64 rounded-full blur-3xl opacity-50 mt-20 ml-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-3xl md:text-2xl font-bold mb-6 animate-fade-in-up">
          🚀 Backend Developer | System Architect | Cybersecurity
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in-up delay-100">
          Hi, my name is Bhekumuzi Tshuma. This is where I share my work with
          the world. I do a little short survey every year, I'd be happy if
          you'd participate. Share insights on coding trends, salaries, and
          tools shaping{" "}
          <span className="gradient-text">Africa's tech industry.</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <Link href="/projects" legacyBehavior>
            <a className="btn bg-base-300 hover:text-green-600 transition-transform transform hover:scale-105">
              🔗 See My Work
            </a>
          </Link>
          <a
            href="https://muzie-bt.medium.com/"
            className="btn bg-base-300 hover:text-green-600 transition-transform transform hover:scale-105"
          >
            📝 Read the Blog
          </a>
          <Link href="/tech-stack-survey/take" legacyBehavior>
            <a className="btn bg-base-300 hover:text-green-600 transition-transform transform hover:scale-105">
              📊 Tech Stack Survey
            </a>
          </Link>
        </div>
      </div>

      {/* Animated stars (black for contrast) */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-black rounded-full animate-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
