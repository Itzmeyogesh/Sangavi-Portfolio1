import React from "react";
import { motion } from "framer-motion";

import {
  FaPython,
  FaDatabase,
  FaAws,
  FaChartBar,
  FaBrain,
  FaCode,
} from "react-icons/fa";

import {
  SiMysql,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiOpencv,
  SiScikitlearn,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming & Database",
    skills: [
      {
        name: "Python",
        icon: <FaPython />,
        level: 95,
      },
      {
        name: "SQL",
        icon: <SiMysql />,
        level: 90,
      },
      {
        name: "Data Structures",
        icon: <FaDatabase />,
        level: 85,
      },
    ],
  },

  {
    title: "Data Analytics",
    skills: [
      {
        name: "Power BI",
        icon: <FaChartBar />,
        level: 90,
      },
      {
        name: "Pandas",
        icon: <SiPandas />,
        level: 95,
      },
      {
        name: "NumPy",
        icon: <SiNumpy />,
        level: 90,
      },
      {
        name: "Statistics",
        icon: <FaChartBar />,
        level: 88,
      },
    ],
  },

  {
    title: "Machine Learning & AI",
    skills: [
      {
        name: "Machine Learning",
        icon: <SiScikitlearn />,
        level: 92,
      },
      {
        name: "Deep Learning",
        icon: <SiTensorflow />,
        level: 88,
      },
      {
        name: "Computer Vision",
        icon: <SiOpencv />,
        level: 85,
      },
      {
        name: "NLP",
        icon: <FaBrain />,
        level: 82,
      },
      {
        name: "CNN",
        icon: <FaBrain />,
        level: 85,
      },
      {
        name: "Hugging Face",
        icon: <FaCode />,
        level: 80,
      },
    ],
  },

  {
    title: "Cloud & Tools",
    skills: [
      {
        name: "AWS Cloud",
        icon: <FaAws />,
        level: 80,
      },
      {
        name: "Google Analytics",
        icon: <FaChartBar />,
        level: 85,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-bold mb-16"
        >
          Skills & Technologies
        </motion.h1>

        <div className="space-y-10">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="glass rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-8">
                {category.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="bg-slate-900/50 border border-slate-700 rounded-2xl p-5"
                  >
                    <div className="flex justify-between items-center mb-4">

                      <div className="flex items-center gap-3">
                        <span className="text-3xl text-cyan-400">
                          {skill.icon}
                        </span>

                        <span className="font-semibold text-lg">
                          {skill.name}
                        </span>
                      </div>

                      <span className="font-bold text-cyan-400">
                        {skill.level}%
                      </span>

                    </div>

                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        transition={{
                          duration: 1,
                        }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full"
                      />

                    </div>
                  </motion.div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;