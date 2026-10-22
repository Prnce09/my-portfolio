
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import MouseGlow from "../components/MouseGlow";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Prnce09",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/prince-yadav-a2b7b7365",
    Icon: FaLinkedin,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/sr_krtz",
    Icon: FaInstagram,
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const submittingRef = useRef(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const shouldReduceMotion = useReducedMotion();

  const animation = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
      };

  const sendEmail = async (event) => {
    event.preventDefault();

    if (submittingRef.current || !formRef.current) {
      return;
    }

    submittingRef.current = true;
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        "service_1d1rwfk",
        "template_bd4hu5u",
        formRef.current,
        "DkRBL1coUCfuUjwZs"
      );

      formRef.current?.reset();

      setStatus({
        type: "success",
        message: "Message sent successfully! Thank you for reaching out.",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message:
          "Failed to send your message. Please try again or email me directly.",
      });
    } finally {
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050A12] text-white">
      <Navbar />

      <div className="pointer-events-none hidden md:block">
        <MouseGlow />
      </div>

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
      />

      <main className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-32 sm:px-8 lg:px-10 lg:pt-36">
        {/* Header */}
        <motion.div {...animation} className="mb-12">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-cyan-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Contact / Connect
            </p>
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Connect.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            Have a project idea, job opportunity, or
            question? Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact layout */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left card */}
          <motion.section
            {...animation}
            className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Get In Touch
            </p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              Let's build something{" "}
              <span className="text-cyan-400">
                meaningful.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-zinc-400 sm:text-base">
              I'm a full-stack developer working with
              the MERN stack. I'm currently open to
              full-time and internship opportunities,
              as well as interesting collaborations.
            </p>

            {/* Availability */}
            <div className="mt-8 flex w-fit items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />

              <span className="text-xs font-medium text-emerald-300 sm:text-sm">
                Open to Full-Time & Internship Roles
              </span>
            </div>

            {/* Email */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Email Me
              </p>

              <a
                href="mailto:lukiyarykez@gmail.com"
                className="inline-flex max-w-full items-center gap-3 text-sm text-white transition-colors hover:text-cyan-300 sm:text-base"
              >
                <FaEnvelope
                  aria-hidden="true"
                  className="shrink-0 text-cyan-400"
                />

                <span className="break-all">
                  lukiyarykez@gmail.com
                </span>
              </a>
            </div>

            {/* Social links */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Connect With Me
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ name, url, Icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${name} profile`}
                    title={name}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0B1420] text-xl text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Right card: Contact form */}
          <motion.section
            {...animation}
            className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Send A Message
            </p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              Tell me about your{" "}
              <span className="text-cyan-400">
                idea.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Fill out the form below and I'll get
              back to you as soon as possible.
            </p>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="mt-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-white/10 bg-[#0B1420] px-4 py-3.5 text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-cyan-400 disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="user_email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-white/10 bg-[#0B1420] px-4 py-3.5 text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-cyan-400 disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  required
                  disabled={isSubmitting}
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#0B1420] px-4 py-3.5 text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-cyan-400 disabled:opacity-60"
                />
              </div>

              {status.message && (
                <p
                  role={status.type === "error" ? "alert" : "status"}
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                      : "border-red-400/20 bg-red-400/10 text-red-300"
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-black transition-colors hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send Message ↗"}
              </button>
            </form>
          </motion.section>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 py-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Prince Yadav. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
}
