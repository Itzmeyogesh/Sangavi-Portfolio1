import React, { useState } from "react";
import { Link } from "react-scroll";

import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      id: "home",
      title: "Home",
      icon: <FaHome />,
    },
    {
      id: "about",
      title: "About",
      icon: <FaUser />,
    },
    {
      id: "skills",
      title: "Skills",
      icon: <FaCode />,
    },
    {
      id: "projects",
      title: "Projects",
      icon: <FaProjectDiagram />,
    },
    {
      id: "contact",
      title: "Contact",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 left-5 z-50 p-3 rounded-xl glass md:hidden"
      >
        {open ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 h-screen w-24 glass flex-col justify-center items-center gap-8 z-40">

        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            activeClass="active-menu"
            className="cursor-pointer group"
          >
            <div className="flex flex-col items-center gap-2">

              <div className="text-2xl p-3 rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-all duration-300">
                {item.icon}
              </div>

              <span className="text-xs text-gray-300">
                {item.title}
              </span>

            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 glass z-40 transform transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="mt-24 flex flex-col gap-6 px-8">

          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-cyan-500/20 transition-all">

                <span className="text-xl">
                  {item.icon}
                </span>

                <span className="text-lg">
                  {item.title}
                </span>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </>
  );
};

export default Sidebar;