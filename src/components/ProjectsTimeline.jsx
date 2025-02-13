import {
  FaHospital,
  FaGamepad,
  FaBuilding,
  FaShoppingCart,
  FaBriefcase,
  FaHashtag,
  FaBrain,
} from "react-icons/fa";

const projects = [
  {
    year: "2018",
    title: "Hospital Management System",
    description:
      "Developed a comprehensive Hospital Management System using VB.NET and MS SQL Server. The system facilitated efficient patient record management, appointment scheduling, medical billing, and staff administration. It included role-based access control for doctors, nurses, and receptionists, ensuring secure data handling.",
    icon: <FaHospital />,
  },
  {
    year: "2019",
    title: "Car Video Game (Windows Forms)",
    description:
      "Designed and developed a 2D traffic-avoidance game in VB.NET using Windows Forms. The game featured dynamic difficulty scaling, real-time collision detection, and a scoring system. Players controlled a vehicle to avoid obstacles while increasing their score, making for an engaging arcade-style experience.",
    icon: <FaGamepad />,
  },
  {
    year: "2019",
    title: "Construction Company Website",
    description:
      "Designed and developed a professional website for a South African construction company. The site featured project showcases, service descriptions, a contact form, and an interactive gallery. Built with HTML, CSS, JavaScript, and PHP for backend functionality, ensuring a seamless user experience.",
    icon: <FaBuilding />,
  },
  {
    year: "2020",
    title: "E-Commerce Platform",
    description:
      "Developed a feature-rich e-commerce platform using Django, integrating product management, user authentication, a shopping cart system, order tracking, and a secure payment gateway. The platform also supported discount codes and an admin dashboard for inventory and sales tracking.",
    icon: <FaShoppingCart />,
  },
  {
    year: "2021-2023",
    title: "Client Projects",
    description:
      "Worked on various client-based projects, including web applications, mobile apps, and system integrations. Notable projects included CRM systems, API integrations, and business automation solutions. Focused on delivering scalable and efficient solutions tailored to client needs.",
    icon: <FaBriefcase />,
  },
  {
    year: "2024",
    title: "Number Website for StixMedia",
    description:
      "Developed a specialized number-related website for StixMedia Pvt Ltd, featuring dynamic number generation, verification, and analytical tools. The platform incorporated real-time data processing and API integrations to ensure accuracy and efficiency.",
    icon: <FaHashtag />,
  },
  {
    year: "2024",
    title: "AI-Powered Cattle Disease Detection App (School Group Project)",
    description:
      "Built an AI-driven cross-platform mobile app using TensorFlow and React Native. The app utilized machine learning models to analyze cattle symptoms and detect potential diseases. It included offline functionality, real-time notifications, and a farmer-friendly interface to assist in early disease detection and livestock health management.",
    icon: <FaBrain />,
  },
];

export default function ProjectsTimeline() {
  return (
    <div className="max-w-2xl mx-auto p-6 ">
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="flex gap-x-4 items-start relative">
            {/* Icon */}
            <div className="relative flex justify-center items-center w-10 h-10 bg-gray-100 rounded-full text-green-700">
              {project.icon}
            </div>
            {/* Timeline Connector */}
            {index !== projects.length - 1 && (
              <div className="absolute top-12 left-5 w-px h-12 bg-gray-300"></div>
            )}
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-x-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {project.description}
              </p>
              <span className="text-xs font-black gradient-text text-green-500">
                {project.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
