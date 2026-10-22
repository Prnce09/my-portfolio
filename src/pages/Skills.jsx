
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import MouseGlow from "../components/MouseGlow";

// Primary MERN stack technologies
const coreStack = [
  {
    number: "01",
    name: "React.js",
    category: "Frontend",
    description:
      "Building reusable components, responsive interfaces, and interactive user experiences.",
  },
  {
    number: "02",
    name: "Node.js",
    category: "Runtime",
    description:
      "Developing JavaScript-powered backend functionality and server-side application logic.",
  },
  {
    number: "03",
    name: "Express.js",
    category: "Backend",
    description:
      "Creating REST APIs, handling routes, and implementing middleware for web applications.",
  },
  {
    number: "04",
    name: "MongoDB",
    category: "Database",
    description:
      "Managing application data using MongoDB and Mongoose.",
  },
];

// Technical skill categories
const skillGroups = [
  {
    number: "01",
    title: "Programming & Web Fundamentals",
    description:
      "Languages and foundational technologies used for web development and problem solving.",
    skills: ["JavaScript", "C++", "HTML5", "CSS3"],
  },
  {
    number: "02",
    title: "Frontend & UI",
    description:
      "Technologies for responsive interfaces and interactive digital experiences.",
    skills: [
      "React.js",
      "Tailwind CSS",
      "Three.js",
      "Framer Motion",
    ],
  },
  {
    number: "03",
    title: "Backend & Database",
    description:
      "Tools and technologies for APIs, server-side features, and data management.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
    ],
  },
  {
    number: "04",
    title: "Development Tools",
    description:
      "Tools I use for coding, version control, collaboration, and API testing.",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

// Development process
const workflow = [
  {
    number: "01",
    title: "Plan",
    description:
      "Understand requirements, identify features, and organize the implementation.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Develop reusable UI components, backend logic, and database integrations.",
  },
  {
    number: "03",
    title: "Test",
    description:
      "Verify application functionality, API responses, edge cases, and responsive behavior.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Refine code quality, user experience, maintainability, and performance.",
  },
];

// Reusable animation wrapper
function Reveal({ children, delay = 0, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 20 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#050A12] text-white">
      <Navbar />

      {/* Existing desktop mouse glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block"
      >
        <MouseGlow />
      </div>

      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-28 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.08] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[55%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.06] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 lg:px-10 lg:pt-36">
        {/* Page heading */}
        <Reveal className="mb-14 max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-9 bg-cyan-400"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Skills / Expertise
            </p>
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            My Technical{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Stack.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-lg">
            A practical toolkit for building modern web
            applications — from responsive interfaces
            to backend APIs, databases, and
            user-focused features.
          </p>
        </Reveal>

        {/* Core Stack */}
        <section aria-labelledby="core-stack-title">
          <Reveal className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Primary Technologies
              </p>

              <h2
                id="core-stack-title"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Core{" "}
                <span className="text-cyan-400">
                  Stack
                </span>
              </h2>
            </div>

            <p className="text-sm text-zinc-500">
              MERN Stack Development
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreStack.map((skill, index) => (
              <Reveal
                key={skill.name}
                delay={index * 0.07}
                className="h-full"
              >
                <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-cyan-400/30 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
                      {skill.number}
                    </span>

                    <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1 text-xs text-cyan-300">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-bold tracking-tight text-white">
                    {skill.name}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">
                    {skill.description}
                  </p>

                  <div
                    aria-hidden="true"
                    className="mt-7 h-px w-full bg-gradient-to-r from-cyan-400/40 to-transparent"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Development Toolkit */}
        <section
          aria-labelledby="toolkit-title"
          className="mt-20"
        >
          <Reveal className="mb-9">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Technical Expertise
            </p>

            <h2
              id="toolkit-title"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Development{" "}
              <span className="text-cyan-400">
                Toolkit
              </span>
            </h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <Reveal
                key={group.number}
                delay={index * 0.06}
                className="h-full"
              >
                <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-cyan-400">
                        {group.number} / TOOLKIT
                      </p>

                      <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                        {group.title}
                      </h3>
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-2 h-px w-10 shrink-0 bg-cyan-400/40"
                    />
                  </div>

                  <p className="max-w-lg flex-1 text-sm leading-7 text-zinc-400">
                    {group.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-[#0B1420] px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Development Workflow */}
        <section
          aria-labelledby="workflow-title"
          className="mt-20"
        >
          <Reveal className="mb-9">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              How I Build
            </p>

            <h2
              id="workflow-title"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Development{" "}
              <span className="text-cyan-400">
                Workflow
              </span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.06] to-transparent p-6 sm:p-8 lg:p-10">
              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                {workflow.map((step) => (
                  <article key={step.number}>
                    <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                      {step.number}
                    </span>

                    <h3 className="mt-4 text-xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Skills in Practice */}
        <section
          aria-labelledby="skills-in-action"
          className="mt-20"
        >
          <Reveal>
            <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:flex-row lg:items-center lg:p-10">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Skills in Practice
                </p>

                <h2
                  id="skills-in-action"
                  className="text-2xl font-bold tracking-tight sm:text-3xl"
                >
                  From Technologies to{" "}
                  <span className="text-cyan-400">
                    Real Projects
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  I applied my full-stack development
                  skills while building a Social Media
                  Platform featuring posts, social
                  interactions, messaging, profile
                  management, and community features.
                </p>
              </div>

              <Link
                to="/projects"
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Explore My Projects ↗
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
