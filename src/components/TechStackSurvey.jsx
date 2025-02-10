import React from "react";
import { FaChartPie, FaPoll, FaArrowRight } from "react-icons/fa";

const TechStackSurvey = () => {
  // Dummy stats for the previous year's survey
  const dummyStats = [
    { name: "JavaScript", value: 40, color: "text-yellow-400" },
    { name: "C#", value: 22, color: "text-cyan-400" },
    { name: "Java", value: 21, color: "text-green-500" },
    { name: "Python", value: 16, color: "text-blue-500" },
    { name: "Other", value: 2, color: "text-blue-600" },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-green-100 text-gray-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-white to-green-200 animate-gradient"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Tech Stack{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-black">
            Survey
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Dummy Stats */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FaChartPie className="mr-2 text-green-500" /> Last Year's Results
            </h3>
            <div className="space-y-4">
              <p className="text-white">Most Used Programming Languages</p>
              {dummyStats.map((stat, index) => (
                <div key={index} className="flex text-white items-center">
                  <div
                    className={`w-8 h-8 rounded-full ${stat.color} mr-4`}
                  ></div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{stat.name}</span>
                      <span className="text-sm font-medium">{stat.value}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="h-2 rounded-full text-green-500 bg-green-500"
                        style={{ width: `${stat.value}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Buttons and Description */}
          <div className="space-y-8">
            <p className="text-lg text-gray-900">
              Hi, there! 👋
              <br /> Each year, I conduct a comprehensive survey to analyze
              emerging trends in the tech stacks favored by developers across
              Africa. Participate and contribute your insights on the tools and
              technologies you use daily, whether in personal projects or
              professional work!
            </p>
            <div className="space-y-4">
              <button className="w-full  sm:w-auto flex items-center justify-center bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-6 py-3 rounded-lg hover:scale-105 transform transition-all duration-300">
                <FaPoll className="mr-2" /> Take the Current Survey
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:text-green-400 hover:bg-gray-600 hover:scale-105 transform transition-all duration-300">
                <FaArrowRight className="mr-2" /> View Last Year's Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSurvey;
