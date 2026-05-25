import React from "react";
import { motion } from "framer-motion";

import {
  FaUserGraduate,
  FaMapMarkerAlt,
  FaBrain,
  FaDatabase,
  FaLaptopCode,
  FaUniversity,
  FaProjectDiagram,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl w-full">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          About Me
        </motion.h1>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="glass rounded-3xl p-8"
          >

            <h2 className="text-3xl font-bold mb-6 text-cyan-400">
              Career Objective
            </h2>

            <p className="text-gray-300 leading-8 mb-8">
              Enthusiastic and results-driven aspiring Data Scientist with a
              strong foundation in Data Analysis, Machine Learning, Deep
              Learning, NLP, Computer Vision, SQL, and Power BI.
              Passionate about building intelligent AI solutions and generating
              actionable insights from real-world datasets.
            </p>

            {/* Personal Information */}
            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-cyan-500/20 text-cyan-400 text-2xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-400">Chennai, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-pink-500/20 text-pink-400 text-2xl">
                  <FaBrain />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Specialization</h3>
                  <p className="text-gray-400">
                    Data Science & Machine Learning
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-purple-500/20 text-purple-400 text-2xl">
                  <FaDatabase />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Core Skills</h3>
                  <p className="text-gray-400">
                    Python, SQL, Deep Learning, NLP
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >

            {/* Education Card */}
            <div className="glass rounded-3xl p-8">

              <div className="flex items-center gap-4 mb-6">
                <FaUniversity className="text-3xl text-cyan-400" />

                <h2 className="text-3xl font-bold">
                  Education
                </h2>
              </div>

              {/* IIT-M */}
              <div className="border-l-4 border-cyan-400 pl-6 mb-8">

                <h3 className="text-xl font-semibold text-cyan-400">
                  IIT-M GUVI
                </h3>

                <p className="text-lg mt-2">
                  Advanced Programming Professional & Master Data Science
                </p>

                <p className="text-gray-400 mt-1">
                  July 2025 – Sept 2025 | Chennai
                </p>

              </div>

              {/* College */}
              <div className="border-l-4 border-pink-400 pl-6">

                <h3 className="text-xl font-semibold text-pink-400">
                  Veltech Rangarajan Dr. Sagunthala R&D Institute
                </h3>

                <p className="text-lg mt-2">
                  Bachelor of Technology in Biotechnology
                </p>

                <p className="text-gray-400 mt-1">
                  Jun 2021 – May 2025 | Chennai
                </p>

              </div>

            </div>

            {/* Stats Cards */}
            <div className="grid sm:grid-cols-2 gap-6">

              <div className="glass rounded-3xl p-6 text-center">

                <FaProjectDiagram className="text-5xl text-cyan-400 mx-auto mb-4" />

                <h2 className="text-4xl font-bold mb-2">
                  3+
                </h2>

                <p className="text-gray-400">
                  Major Projects
                </p>

              </div>

              <div className="glass rounded-3xl p-6 text-center">

                <FaLaptopCode className="text-5xl text-pink-400 mx-auto mb-4" />

                <h2 className="text-4xl font-bold mb-2">
                  15+
                </h2>

                <p className="text-gray-400">
                  Technical Skills
                </p>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;