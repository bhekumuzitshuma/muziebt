import { FaProjectDiagram, FaPlug, FaChartBar, FaTools } from "react-icons/fa";

const features = [
  {
    icon: (
      <FaProjectDiagram className="text-indigo-600 group-hover:text-white text-3xl" />
    ),
    title: "Career & Portfolio",
    description:
      "Any recruiters? Here's a detailed overview of my career and portfolio.",
  },
  {
    icon: <FaPlug className="text-pink-600 group-hover:text-white text-3xl" />,
    title: "My Projects",
    description:
      "A collection of all projects I have worked on have worked on. List is growing by day.",
  },
  {
    icon: (
      <FaChartBar className="text-teal-600 group-hover:text-white text-3xl" />
    ),
    title: "Tech Stack Survey",
    description:
      "Getting insights about trends to help beginners make informed decisions.",
  },
  {
    icon: (
      <FaTools className="text-orange-600 group-hover:text-white text-3xl" />
    ),
    title: "Blog & YouTube",
    description:
      "I create content. Stay updated with blogs and videos on tech and development.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
        <div className="mb-14 text-center">
          <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600">
            @muzie_bt. Intro 👊
          </span>
          <h2 className="text-4xl font-bold text-gray-900 py-5">
            Explore My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-black">
              Code Universe
            </span>
          </h2>
          <p className="font-normal  max-w-2xl mx-auto">
            This is where I share my journey, projects, and insights. I am a
            backend developer with a passion for building scalable, efficient
            and secure applications and love to share my knowledge with the
            community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          {features.map((feature, index) => (
            <div key={index} className="w-full text-center group">
              <div className="bg-gray-100 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto transition-all duration-500 group-hover:bg-green-900">
                {feature.icon}
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize group-hover:text-green-600">
                {feature.title}
              </h4>
              <p className="text-sm font-normal text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
