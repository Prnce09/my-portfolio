
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import MouseGlow from "../components/MouseGlow";

const capabilities = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Building responsive interfaces and intuitive user experiences using React.js, JavaScript, and Tailwind CSS.",
  },
  {
    number: "02",
    title: "Backend & APIs",
    description:
      "Developing server-side features, RESTful APIs, and application logic with Node.js and Express.js.",
  },
  {
    number: "03",
    title: "Database & Integration",
    description:
      "Working with MongoDB, Mongoose, authentication flows, and third-party services in full-stack applications.",
  },
];
const problemSolvingSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Read the problem carefully and identify inputs, outputs, and constraints.",
  },
  {
    number: "02",
    title: "Break Down",
    description:
      "Work through examples, identify patterns, and consider edge cases.",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "Choose appropriate data structures and algorithms, then write a clear solution.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Test the solution, analyze time and space complexity, and look for improvements.",
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.55,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#050A12] text-white">
      <Navbar />

      {/* Existing desktop mouse effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block"
      >
        <MouseGlow />
      </div>

      {/* Subtle ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-32 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.08] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-20 h-[400px] w-[400px] rounded-full bg-blue-600/[0.06] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 lg:px-10 lg:pt-36">
        {/* Header */}
        <motion.header
          {...reveal(0.05)}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-9 bg-cyan-400"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              About / Profile
            </p>
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Building with{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              purpose.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I'm Prince Yadav, a full-stack developer focused
            on building practical, well-crafted digital
            products — from intuitive interfaces to
            dependable backend systems.
          </p>
        </motion.header>

        {/* Main content */}
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Professional overview */}
          <motion.section
            {...reveal(0.1)}
            aria-labelledby="overview-title"
            className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10"
          >
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-white/10 pb-6">
              <h2
                id="overview-title"
                className="text-2xl font-bold tracking-tight sm:text-3xl"
              >
                Professional Overview
              </h2>

              <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-cyan-400 sm:block">
                01 / Profile
              </span>
            </div>

            <div className="space-y-5 text-sm leading-8 text-zinc-300 sm:text-base">
              <p>
                I specialize in the{" "}
                <span className="font-semibold text-cyan-300">
                  MERN stack
                </span>
                , working across frontend interfaces,
                backend APIs, and database-driven
                application features.
              </p>

              <p>
                My approach combines clean, maintainable
                code with thoughtful design. I enjoy
                solving practical problems, improving
                user experiences, and understanding how
                different parts of an application work
                together.
              </p>

              <p>
                I've applied these skills in projects
                involving social interactions, messaging,
                authentication, content management,
                and third-party integrations.
              </p>

              <p>
                I'm currently seeking full-time and
                internship opportunities where I can
                contribute to meaningful products,
                learn from experienced engineers,
                and continue strengthening my
                development skills.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Explore My Work ↗
              </Link>

              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Get In Touch ↗
              </Link>
            </div>
          </motion.section>

          {/* Education and project */}
          <div className="flex flex-col gap-6">
            {/* Education */}
            <motion.section
              {...reveal(0.2)}
              aria-labelledby="education-title"
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8"
            >
              <div className="mb-7 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <h2
                  id="education-title"
                  className="text-xl font-bold tracking-tight sm:text-2xl"
                >
                  Education
                </h2>

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                  02 / Academic
                </span>
              </div>

              <div className="relative border-l border-cyan-400/40 pl-6">
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full bg-cyan-400"
                />

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  B.Tech · CSIT | 2026
                </p>

                <h3 className="mt-3 text-xl font-bold leading-snug text-white">
                  Bachelor of Technology
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Computer Science & Information Technology
                </p>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  Acropolis Institute of Technology
                  and Research
                </p>
              </div>
            </motion.section>

            {/* Practical experience */}
            <motion.section
              {...reveal(0.3)}
              aria-labelledby="experience-title"
              className="flex flex-1 flex-col justify-between rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.07] to-transparent p-6 sm:p-8"
            >
              <div>
                <div className="mb-7 flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <h2
                    id="experience-title"
                    className="text-xl font-bold tracking-tight sm:text-2xl"
                  >
                    Project Experience
                  </h2>

                  <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-cyan-400 sm:block">
                    03 / Work
                  </span>
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Featured Full-Stack Project
                </p>

                <h3 className="mt-3 text-xl font-bold text-white">
                  Social Media Platform
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Developed a MERN-based social platform
                  featuring posts, follow/unfollow,
                  messaging, profile management, and
                  community engagement functionality.
                </p>

                <p className="mt-4 text-xs leading-6 text-zinc-500">
                  React.js · Node.js · Express.js ·
                  MongoDB · Tailwind CSS
                </p>
              </div>

              <Link
                to="/projects"
                className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
              >
                View Project Details
                <span aria-hidden="true">↗</span>
              </Link>
            </motion.section>
          </div>
        </div>

        {/* Capabilities */}

{/* Problem Solving & DSA */}
<motion.section
  {...reveal(0.1)}
  aria-labelledby="problem-solving-title"
  className="relative mt-8 overflow-hidden rounded-3xl border border-cyan-400/15 bg-white/[0.035] p-6 sm:p-8 lg:p-10"
>
  {/* Decorative ambient glow */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/[0.08] blur-3xl"
  />

  <div className="relative z-10">
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
        Problem Solving Mindset
      </p>

      <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
        04 / Approach
      </span>
    </div>

    <h2
      id="problem-solving-title"
      className="max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl"
    >
      How I Approach{" "}
      <span className="text-cyan-400">
        DSA Problems
      </span>
    </h2>

    <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
      When solving a coding challenge, I focus on
      understanding the problem before jumping into code.
      I break it into smaller parts, explore possible
      solutions, and refine my approach for clarity
      and efficiency.
    </p>

    <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {problemSolvingSteps.map((step, index) => (
        <motion.article
          key={step.number}
          {...reveal(index * 0.08)}
          className="rounded-2xl border border-white/10 bg-[#0B1420]/80 p-5 transition-colors hover:border-cyan-400/30 sm:p-6"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
            {step.number}
          </span>

          <h3 className="mt-5 text-lg font-bold text-white">
            {step.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            {step.description}
          </p>
        </motion.article>
      ))}
    </div>

    <p className="mt-7 border-t border-white/10 pt-5 text-sm leading-7 text-zinc-400">
      My goal is not just to reach a working solution,
      but to understand{" "}
      <span className="font-medium text-zinc-200">
        why it works, how efficient it is, and
        how it can be improved.
      </span>
    </p>
  </div>
</motion.section>

        <section
          aria-labelledby="capabilities-title"
          className="mt-20"
        >
          <motion.div
            {...reveal(0.05)}
            className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
          >
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Core Competencies
              </p>

              <h2
                id="capabilities-title"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Areas of{" "}
                <span className="text-cyan-400">
                  Focus
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-zinc-500">
              The technologies and development practices
              I use to bring web applications to life.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {capabilities.map((item, index) => (
              <motion.article
                key={item.number}
                {...reveal(index * 0.1)}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-cyan-400/30 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
                    {item.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-white/15 transition-colors group-hover:bg-cyan-400/50"
                  />
                </div>

                <h3 className="mt-8 text-xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
