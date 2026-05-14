import Navbar from "../components/Navbar";
import MouseGlow from "../components/MouseGlow";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_1d1rwfk",
        "template_bd4hu5u",
        form.current,
        "DkRBL1coUCfuUjwZs"
      )

      .then(
        () => {

          alert("Message Sent Successfully ");

          e.target.reset();
        },

        () => {

          alert("Failed To Send Message Try Again");

        }
      );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      <Navbar />

      <MouseGlow />

      {/* Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6 pt-40 pb-20 relative z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-black mb-16"
        >
          CONTACT
          <span className="text-cyan-400"> ME</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <h2 className="text-4xl font-bold mb-6">
              Let’s Build Something Amazing 🚀
            </h2>

            <p className="text-zinc-400 leading-8 text-lg mb-10">
              Feel free to contact me for projects, collaborations
              or just to connect with me.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6">

              <a
                href="https://github.com/Prnce09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/prince-yadav-a2b7b7365"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/sr_krtz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
              >
                <FaInstagram />
              </a>

            </div>

          </motion.div>

          {/* Right Side Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >

            {/* Name */}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 mb-6 outline-none focus:border-cyan-400 transition duration-300"
            />

            {/* Email */}
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 mb-6 outline-none focus:border-cyan-400 transition duration-300"
            />

            {/* Message */}
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 mb-6 outline-none focus:border-cyan-400 transition duration-300"
            />

            {/* Button */}
            <button
              className="w-full py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-[1.02] transition duration-300 shadow-lg shadow-cyan-500/30"
              type="submit"
            >
              Send Message
            </button>

          </motion.form>

        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-white/10 pt-8 text-center text-zinc-500">
          © 2025 Prince Yadav • All Rights Reserved
        </div>

      </div>
    </div>
  );
}