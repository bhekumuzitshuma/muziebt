import Link from "next/link";
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
    <section className="">
      <div className="relative py-16  px-4 sm:px-6  bg-gradient-to-r text-gray-800 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Tech Stack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-black">
              Survey
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Dummy Stats */}
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <FaChartPie className="mr-2 text-green-500" /> Last Year's
                Results (fake - 2025 loading)
              </h3>
              <div className="space-y-4">
                <p className="text-black">Most Used Programming Languages</p>
                {dummyStats.map((stat, index) => (
                  <div key={index} className="flex text-black items-center">
                    <div
                      className={`w-8 flex items-center justify-center h-8 rounded-full bg-white border border-black mr-4`}
                    >
                      <p className="font-black">{index + 1}</p>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{stat.name}</span>
                        <span className="text-sm font-medium jetbrains">
                          {stat.value}%
                        </span>
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
                Africa. Participate and contribute your insights on the tools
                and technologies you use daily, whether in personal projects or
                professional work!
              </p>
              <div className="space-y-4">
                <Link href="/tech-stack-survey/take" legacyBehavior>
                  <a className="w-full  sm:w-auto flex items-center justify-center bg-gradient-to-r from-green-600 to-black hover:from-black hover:to-green-600 text-white px-6 py-3 rounded-lg hover:scale-105 transform transition-all duration-300">
                    <FaPoll className="mr-2" /> Take the Current Survey
                  </a>
                </Link>
                <Link href="/tech-stack-survey/survey-results" legacyBehavior>
                  <a className="w-full sm:w-auto flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:text-green-400 hover:bg-gray-600 hover:scale-105 transform transition-all duration-300">
                    <FaArrowRight className="mr-2" /> View Last Year's Results
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSurvey;
