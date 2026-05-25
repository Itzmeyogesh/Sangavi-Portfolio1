import React from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaDatabase,
} from "react-icons/fa";

import project1 from "../assets/Project1.jpg";
import project2 from "../assets/Project2.jpg";
import project3 from "../assets/Project3.jpg";

const projects = [
  {
    title: "Harvard Artifacts Collection",
    image: project1,
    icon: <FaDatabase />,
    description:
      "Developed an ETL pipeline using the Harvard Art Museum API. Extracted and transformed nested JSON data into structured relational tables and generated analytical insights using SQL queries.",

    tech: [
      "Python",
      "SQL",
      "JSON",
      "API",
      "ETL",
    ],

    github:
      "https://github.com/sangavi0309",

    live:
      "https://your-live-demo-link.com",
  },

  {
    title: "Choco Crunch Analytics",
    image: project2,
    icon: <FaDatabase />,
    description:
      "Built a large-scale data pipeline using Open Food Facts API. Extracted 12,000+ product records, designed relational schemas, and created visual dashboards to analyze nutritional trends.",

    tech: [
      "Python",
      "REST API",
      "SQL",
      "Pandas",
      "Power BI",
    ],

    github:
      "https://github.com/sangavi0309",

    live:
      "https://your-live-demo-link.com",
  },

  {
    title: "Eco Type Forest Cover Classification",
    image: project3,
    icon: <FaDatabase />,
    description:
      "Machine Learning project predicting forest cover types using 145K+ geospatial records. Implemented Random Forest and XGBoost models and deployed predictions using Streamlit.",

    tech: [
      "Machine Learning",
      "XGBoost",
      "Random Forest",
      "Python",
      "Streamlit",
    ],

    github:
      "https://github.com/sangavi0309",

    live:
      "https://your-live-demo-link.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Featured Projects
        </motion.h1>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="glass rounded-3xl overflow-hidden border border-slate-700"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Title */}
                <div className="flex items-center gap-3 mb-4">

                  <div className="text-cyan-400 text-2xl">
                    {project.icon}
                  </div>

                  <h2 className="text-xl font-bold">
                    {project.title}
                  </h2>

                </div>

                {/* Description */}
                <p className="text-gray-300 leading-7 mb-5">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-500/20 text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-lg hover:text-cyan-400 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-lg hover:text-pink-400 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="glass mt-16 p-10 rounded-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">
            More Projects Coming Soon
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto leading-8">
            Continuously exploring Data Science, Machine Learning,
            Artificial Intelligence, NLP, and Cloud technologies to
            build impactful and scalable solutions.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;