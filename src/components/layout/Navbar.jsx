import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-base-100">
      <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu z-50 menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/" legacyBehavior>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <a href="https://muzie-bt.medium.com/" target="_blank">
                  Blog
                </a>
              </li>
              <li>
                <a>Developer Survey</a>
                <ul className="p-2">
                  <li className="border-b">
                    <Link href="/tech-stack-survey/take" legacyBehavior>
                      <a>Take the 2025 Developer Survey</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tech-stack-survey/survey-results"
                      legacyBehavior
                    >
                      <a>2024 Developer Survey Results</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/projects" legacyBehavior>
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/my-career" legacyBehavior>
                  <a>My Career</a>
                </Link>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-black">
              @bhekumuzi
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/" legacyBehavior>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <a href="https://muzie-bt.medium.com/" target="_blank">
                Blog
              </a>
            </li>
            <li>
              <details>
                <summary>Developer Survey</summary>
                <ul className="p-2 z-50 border rounded-sm w-[300px]">
                  <li>
                    <Link href="/tech-stack-survey/take" legacyBehavior>
                      <a className="hover:text-green-900">
                        Take the 2025 Developer Survey
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tech-stack-survey/survey-results"
                      legacyBehavior
                    >
                      <a className="hover:text-green-900">
                        2025 Developer Survey Results
                        <span className=" gradient-text text-xs font-bold p-1 rounded-lg">
                          live
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/projects" legacyBehavior>
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/my-career" legacyBehavior>
                <a>My Career</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="tel:0779016823" className="green-btn">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
