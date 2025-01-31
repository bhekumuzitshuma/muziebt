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
          Building systems that don't fail, securing them from people who do.
        </p>
        <p className="text-base text-gray-600 mb-12 animate-fade-in-up delay-200">
          I write software that works, break software that shouldn't, and
          automate everything in between. If you're here to explore my projects,
          read my blog rants, or see which tech stacks are taking over Zimbabwe
          (ZW), congratulations—you have good taste.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a
            href="#work"
            className="btn bg-base-300 hover:text-green-600 transition-transform transform hover:scale-105"
          >
            🔗 See My Work
          </a>
          <a
            href="#blog"
            className="btn bg-base-300 hover:text-green-600 transition-transform transform hover:scale-105"
          >
            📝 Read the Blog
          </a>
          <a
            href="#survey"
            className="btn bg-base-300 hover:text-green-600 transition-transform transform hover:scale-105"
          >
            📊 Tech Stack Survey
          </a>
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
