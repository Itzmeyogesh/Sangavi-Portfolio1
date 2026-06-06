import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../assets/Profile.jpeg";
import resume from "../assets/Resume.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="glass p-8 rounded-3xl">

            <h2 className="text-cyan-400 text-xl font-semibold mb-3">
              Hello, I'm
            </h2>

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Sangavi A
            </h1>

            <div className="text-2xl md:text-3xl font-semibold mb-6 text-pink-400">
              <TypeAnimation
                sequence={[
                  "Data Scientist",
                  2000,
                  "Machine Learning Engineer",
                  2000,
                  "AI Engineer",
                  2000,
                  "Python Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-gray-300 leading-8 mb-8">
              Enthusiastic and results-driven aspiring Data Scientist with a
              strong foundation in Data Analysis, Machine Learning, Deep
              Learning, SQL, Power BI, NLP, and Computer Vision.
              Passionate about transforming data into actionable insights and
              building intelligent solutions that create real-world impact.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">

              <a
                href={resume}
                download
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition duration-300 flex items-center gap-2"
              >
                <FaDownload />
                Download CV
              </a>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-6 py-3 rounded-xl border border-pink-500 hover:bg-pink-500 transition duration-300 cursor-pointer flex items-center gap-2"
              >
                <FaEnvelope />
                Contact Me
              </Link>

            </div>

            {/* Social Icons */}
            <div className="flex gap-5">

              <a
                href="https://github.com/sangavi0309"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/sangavi-annadhurai586159342"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src={profile}
              alt="Sangavi"
              className="relative w-[320px] md:w-[420px] rounded-full border-4 border-cyan-500 shadow-2xl"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;