
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Scene from "../components/Scene";
import MouseGlow from "../components/MouseGlow";

export default function Home() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#050A12] text-white">
      <Navbar />

      {/* Mouse glow — desktop only */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block"
      >
        <MouseGlow />
      </div>

      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
      />

      {/* Main hero section */}
      <section
        aria-labelledby="hero-title"
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:pb-16 lg:pt-24"
      >
        {/* Left content */}
        <div className="relative z-10 mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          {/* Availability badge */}
          <motion.div
            {...fadeUp(0.05)}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300 sm:text-sm"
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-emerald-400"
            />
            Available for Full-Time & Internship Roles
          </motion.div>

          {/* Greeting */}
          <motion.p
            {...fadeUp(0.1)}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.2)}
            id="hero-title"
            className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl"
          >
            Prince{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Yadav
            </span>
          </motion.h1>

          {/* Professional title */}
          <motion.h2
            {...fadeUp(0.3)}
            className="mt-5 text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl xl:text-3xl"
          >
            Full Stack Developer
            <span className="text-cyan-400">
              {" "}| MERN Stack
            </span>
          </motion.h2>

          {/* Short introduction */}
          <motion.p
            {...fadeUp(0.4)}
            className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8 lg:mx-0"
          >
            I build responsive, scalable, and user-focused web
            applications using the MERN stack. I enjoy turning
            ideas into polished digital experiences through
            clean code and thoughtful design.
          </motion.p>

          {/* Career objective */}
          <motion.div
            {...fadeUp(0.5)}
            className="mx-auto mt-5 max-w-xl rounded-xl border border-white/10 border-l-cyan-400 bg-white/[0.04] px-5 py-3.5 text-left backdrop-blur-sm lg:mx-0"
          >
            <p className="text-sm leading-6 text-zinc-300">
              <span className="font-semibold text-cyan-300">
                Career Objective
              </span>

              <span className="mt-1 block">
                To build reliable, impactful applications,
                contribute to meaningful software projects,
                and grow as a full-stack engineer.
              </span>
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            {...fadeUp(0.6)}
            className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link
              to="/projects"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition-colors hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Explore Projects ↗
            </Link>

            <a
              href="mailto:lukiyarykez@gmail.com?subject=Full%20Stack%20Developer%20Opportunity"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-cyan-400 px-6 py-3 font-semibold text-cyan-300 transition-colors hover:bg-cyan-400 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Hire Me ↗
            </a>

            <a
              href="/Prince_Yadav_Resume.pdf"
              download="Prince_Yadav_Resume.pdf"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Download CV ↓
            </a>
          </motion.div>
        </div>

        {/* Right 3D visual */}
        <motion.div
          {...fadeUp(0.35)}
          className="relative mx-auto h-[320px] w-full max-w-[480px] sm:h-[420px] lg:h-[540px] lg:max-w-none"
        >
          {/* Soft cyan halo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[15%] rounded-full bg-cyan-500/15 blur-3xl"
          />

          <Scene />

          {/* Decorative bottom line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[12%] bottom-5 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          />
        </motion.div>
      </section>
    </main>
  );
}
