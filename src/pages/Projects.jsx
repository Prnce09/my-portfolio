
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import MouseGlow from "../components/MouseGlow";

import socialMediaImg from "../assets/projects/social-media.png";

const project = {
  title: "Social Media Platform",
  category: "Featured Full-Stack Project",
  image: socialMediaImg,
  live: "https://social-media-eta-wine.vercel.app/",

  description:
    "A full-stack social media application built with the MERN stack, combining content sharing, user connections, messaging, and community-driven challenges.",

  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Clerk",
    "ImageKit",
  ],

  features: [
    {
      number: "01",
      title: "Content Sharing",
      description:
        "Create and share posts through an interactive social feed.",
    },
    {
      number: "02",
      title: "Social Connections",
      description:
        "Follow and unfollow users to build connections within the platform.",
    },
    {
      number: "03",
      title: "Messaging & Profiles",
      description:
        "Communicate through messaging and manage personal profile information.",
    },
    {
      number: "04",
      title: "Community Challenges",
      description:
        "Participate in admin-created challenges, receive votes, and compete on the leaderboard.",
    },
  ],
};

function Reveal({ children, delay = 0, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#050A12] text-white">
      <Navbar />

      {/* Desktop mouse glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block"
      >
        <MouseGlow />
      </div>

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-28 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.08] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[65%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.06] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 lg:px-10 lg:pt-36">
        {/* Page heading */}
        <Reveal className="mb-12 max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-9 bg-cyan-400"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Portfolio / Projects
            </p>
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Selected{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Work.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-lg">
            A closer look at what I've built, the
            technologies I've used, and the problems
            I've worked on solving through real
            development projects.
          </p>
        </Reveal>

        {/* Featured Project */}
        <section aria-labelledby="featured-project-title">
          <Reveal>
            <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
              <div className="grid items-center gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                {/* Project preview */}
                <div className="relative border-b border-white/10 bg-[#07111D] p-5 sm:p-7 lg:h-full lg:border-b-0 lg:border-r lg:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.07] via-transparent to-blue-500/[0.05]"
                  />

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Social Media Platform live demo in a new tab"
                    className="relative block overflow-hidden rounded-2xl border border-white/10 bg-[#0B1420] shadow-2xl shadow-black/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                  >
                    <img
                      src={project.image}
                      alt="Screenshot of the Social Media Platform application"
                      loading="lazy"
                      decoding="async"
                      className="block aspect-[16/10] w-full object-cover object-top transition-transform duration-500 motion-safe:hover:scale-[1.025]"
                    />
                  </a>

                  <p className="relative mt-4 text-center text-xs text-zinc-500">
                    Application preview · Click to explore live
                  </p>
                </div>

                {/* Project details */}
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    {project.category}
                  </p>

                  <h2
                    id="featured-project-title"
                    className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                  >
                    {project.title}
                  </h2>

                  <p className="mt-5 text-sm leading-8 text-zinc-400 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-7">
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
                      Technologies Used
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-2 text-xs font-medium text-cyan-200 sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:w-auto"
                    >
                      View Live Project ↗
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </section>

        {/* Project Features */}
        <section
          aria-labelledby="features-title"
          className="mt-20"
        >
          <Reveal className="mb-9">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Inside the Application
            </p>

            <h2
              id="features-title"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Key{" "}
              <span className="text-cyan-400">
                Features
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              Core functionality implemented in the
              Social Media Platform.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {project.features.map((feature, index) => (
              <Reveal
                key={feature.number}
                delay={index * 0.07}
                className="h-full"
              >
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-cyan-400/25 sm:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                      {feature.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="h-px w-10 bg-cyan-400/40"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <Reveal className="mt-20">
          <section
            aria-labelledby="project-contact-title"
            className="flex flex-col justify-between gap-6 rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.06] to-transparent p-6 sm:p-8 lg:flex-row lg:items-center lg:p-10"
          >
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Let's Build Something
              </p>

              <h2
                id="project-contact-title"
                className="text-2xl font-bold tracking-tight sm:text-3xl"
              >
                Interested in working{" "}
                <span className="text-cyan-400">
                  together?
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                I'm open to full-time and internship
                opportunities where I can contribute
                to meaningful software projects.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400 px-6 py-3 text-sm font-semibold text-cyan-300 transition-colors hover:bg-cyan-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Get In Touch ↗
            </Link>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
