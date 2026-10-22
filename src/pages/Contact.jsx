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
          alert("Message Sent Successfully");
          e.target.reset();
        },
        () => {
          alert("Failed To Send Message. Try Again");
        }
      );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      <Navbar />

      {/* Mouse Glow - Desktop Only */}
      <div className="hidden md:block">
        <MouseGlow />
      </div>

      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-100px]
          left-[-100px]
          sm:left-0
          w-[300px]
          h-[300px]
          sm:w-[500px]
          sm:h-[500px]
          bg-cyan-500/20
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          pt-32
          sm:pt-40
          pb-12
          sm:pb-20
          relative
          z-10
        "
      >

        {/* ================= HEADING ================= */}

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-black
            mb-10
            sm:mb-16
            leading-tight
          "
        >
          CONTACT
          <span className="text-cyan-400"> ME</span>
        </motion.h1>

        {/* ================= CONTENT ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-stretch">

          {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >

            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-bold
                mb-5
                sm:mb-6
                leading-tight
              "
            >
              Let’s Build Something Amazing 🚀
            </h2>

            <p
              className="
                text-zinc-400
                leading-7
                sm:leading-8
                text-base
                sm:text-lg
                mb-8
                sm:mb-10
              "
            >
              Feel free to contact me for projects, collaborations
              or just to connect with me.
            </p>

            {/* Social Icons */}

            <div className="flex gap-3 sm:gap-6">

              {/* GitHub */}
              <a
                href="https://github.com/Prnce09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-12
                  h-12
                  sm:w-14
                  sm:h-14
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-xl
                  sm:text-2xl
                  hover:border-cyan-400
                  hover:text-cyan-400
                  hover:scale-105
                  transition
                  duration-300
                "
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/prince-yadav-a2b7b7365"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-12
                  h-12
                  sm:w-14
                  sm:h-14
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-xl
                  sm:text-2xl
                  hover:border-cyan-400
                  hover:text-cyan-400
                  hover:scale-105
                  transition
                  duration-300
                "
              >
                <FaLinkedin />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/sr_krtz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  w-12
                  h-12
                  sm:w-14
                  sm:h-14
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-xl
                  sm:text-2xl
                  hover:border-cyan-400
                  hover:text-cyan-400
                  hover:scale-105
                  transition
                  duration-300
                "
              >
                <FaInstagram />
              </a>

            </div>

          </motion.div>

          {/* ================= RIGHT SIDE FORM ================= */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
              p-5
              sm:p-7
              md:p-10
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
            "
          >

            {/* Name */}

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="
                w-full
                p-3.5
                sm:p-4
                rounded-2xl
                bg-black/40
                border
                border-white/10
                mb-4
                sm:mb-6
                outline-none
                focus:border-cyan-400
                transition
                duration-300
                text-sm
                sm:text-base
              "
            />

            {/* Email */}

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="
                w-full
                p-3.5
                sm:p-4
                rounded-2xl
                bg-black/40
                border
                border-white/10
                mb-4
                sm:mb-6
                outline-none
                focus:border-cyan-400
                transition
                duration-300
                text-sm
                sm:text-base
              "
            />

            {/* Message */}

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="
                w-full
                p-3.5
                sm:p-4
                rounded-2xl
                bg-black/40
                border
                border-white/10
                mb-4
                sm:mb-6
                outline-none
                focus:border-cyan-400
                transition
                duration-300
                resize-none
                text-sm
                sm:text-base
              "
            />

            {/* Button */}

            <button
              className="
                w-full
                py-3.5
                sm:py-4
                rounded-2xl
                bg-cyan-400
                text-black
                font-bold
                hover:scale-[1.02]
                active:scale-[0.98]
                transition
                duration-300
                shadow-lg
                shadow-cyan-500/30
              "
              type="submit"
            >
              Send Message
            </button>

          </motion.form>

        </div>

        {/* ================= FOOTER ================= */}

        <div
          className="
            mt-14
            sm:mt-20
            border-t
            border-white/10
            pt-6
            sm:pt-8
            text-center
            text-xs
            sm:text-sm
            text-zinc-500
          "
        >
          © 2025 Prince Yadav • All Rights Reserved
        </div>

      </div>
    </div>
  );
}