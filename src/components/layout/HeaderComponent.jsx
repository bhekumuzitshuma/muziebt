import React from "react";

const HeaderComponent = ({ title, breadcrumbs }) => {
  return (
    <div className="max-w-4xl mx-auto py-10 flex items-center justify-center flex-col">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>

      {/* Breadcrumbs */}
      <nav className="mt-2">
        <ul className="flex space-x-2 text-sm text-gray-600">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center ">
              {index > 0 && <span className="mx-2">/</span>}
              <a
                href={crumb.link}
                className="hover:text-gray-900 hover:underline text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-black transition-colors duration-200"
              >
                {crumb.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
