import React from "react";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About Me</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Projects</a>
          <a className="link link-hover">My Career</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <div className="grid grid-flow-col gap-4">
              <a href="https://www.youtube.com/@thematrixexploit">
                <BsYoutube size={24} className="hover:text-green-600" />
              </a>
              <a href="https://x.com/muzie_bt">
                <BsTwitterX size={24} className="hover:text-green-600" />
              </a>
              <a href="https://www.instagram.com/muzie_bt/">
                <AiFillInstagram size={24} className="hover:text-green-600" />
              </a>
            </div>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            @muzie_bt.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
