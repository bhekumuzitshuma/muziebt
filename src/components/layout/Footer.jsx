import React from "react";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-300 p-10">
        <aside>
          <p className="font-bold">
            @muzie_bt.
            <br />I live for this sh##
            <br />
            <span className="underline font-light">
              <a href="https://www.youtube.com/@thematrixexploit">
                Subscribe to my Youtube 👇
              </a>
            </span>
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.youtube.com/@thematrixexploit">
              <BsYoutube size={24} />
            </a>
            <a href="https://x.com/muzie_bt">
              <BsTwitterX size={24} />
            </a>
            <a href="https://www.instagram.com/muzie_bt/">
              <AiFillInstagram size={24} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
