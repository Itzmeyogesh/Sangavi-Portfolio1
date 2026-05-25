import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10">

      <div className="glass">

        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            {/* Left */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400">
                Sangavi A
              </h2>

              <p className="text-gray-400 mt-2 max-w-md">
                Aspiring Data Scientist passionate about
                Machine Learning, Deep Learning,
                NLP, Computer Vision, and Data Analytics.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">

              <a
                href="https://github.com/sangavi0309"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl hover:text-cyan-400 hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/sangavi-annadhurai586159342"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl hover:text-cyan-400 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:sangaviannadhurai@gmail.com"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl hover:text-cyan-400 hover:scale-110 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Divider */}
          <div className="my-8 border-t border-white/10"></div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-400 text-center">
              © {year} Sangavi A. All Rights Reserved.
            </p>

            <a
              href="#home"
              className="flex items-center gap-2 text-cyan-400 hover:text-white transition"
            >
              <FaArrowUp />
              Back To Top
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;