import React, { useRef } from "react";
import { motion } from "framer-motion";

import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");

          form.current.reset();
        },
        () => {
          toast.error("Failed to send message");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20"
    >
      <ToastContainer />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Contact Me
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="glass rounded-3xl p-8"
          >

            <h2 className="text-3xl font-bold text-cyan-400 mb-8">
              Let's Connect
            </h2>

            <p className="text-gray-300 leading-8 mb-10">
              I'm actively seeking opportunities in Data Science,
              Machine Learning, AI Engineering, and Analytics.
              Feel free to connect with me for collaborations,
              internships, or full-time opportunities.
            </p>

            {/* Contact Info */}

            <div className="space-y-6">

              <div className="flex items-center gap-5">
                <div className="p-4 rounded-xl bg-cyan-500/20 text-cyan-400 text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-gray-400">
                    sangaviannadhurai@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="p-4 rounded-xl bg-pink-500/20 text-pink-400 text-xl">
                  <FaPhone />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-gray-400">
                    +91 9025635983
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="p-4 rounded-xl bg-purple-500/20 text-purple-400 text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Location
                  </h3>

                  <p className="text-gray-400">
                    Chennai, India
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}

            <div className="flex gap-5 mt-10">

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

          </motion.div>

          {/* Right Side Form */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="glass rounded-3xl p-8"
          >

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Message"
                required
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
              ></textarea>

              <button
                type="submit"
                className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl font-semibold"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;