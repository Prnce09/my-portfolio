import Navbar from "../components/Navbar";
import MouseGlow from "../components/MouseGlow";
import { motion } from "framer-motion";
import socialMediaImg from "../assets/projects/social-media.png";

const projects = [
  {
    title: "Social_Media_Platform",
    image: socialMediaImg,
    description:
      "Modern social media platform built using the MERN stack with features like create post, follow/unfollow users, messaging, edit profile, and a unique challenge system where admins create challenges for users to participate, receive votes, and compete for the top position on the leaderboard.",
    tech: ["Mern Stack", "Tailwind-CSS", "ImageKit", "Clerk"],
    live: "https://social-media-eta-wine.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      <Navbar />

      {/* Mouse Glow - Desktop Only */}
      <div className="hidden md:block">
        <MouseGlow />
      </div>

      {/* Glow Effect */}
      <div
        className="
          pointer-events-none
          absolute
          top-40
          right-[-100px]
          sm:right-0
          w-[300px]
          h-[300px]
          sm:w-[400px]
          sm:h-[400px]
          bg-cyan-500/20
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          pt-32
          sm:pt-40
          pb-16
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
          MY
          <span className="text-cyan-400"> PROJECTS</span>
        </motion.h1>

        {/* ================= PROJECTS GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="
                p-5
                sm:p-6
                md:p-8
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                hover:border-cyan-400/40
                transition
                duration-300
              "
            >

              {/* ================= PROJECT TITLE ================= */}

              <h2
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-bold
                  mb-4
                  text-cyan-400
                  break-words
                "
              >
                {project.title}
              </h2>

              {/* ================= PROJECT IMAGE ================= */}

              <div className="overflow-hidden rounded-2xl mb-5 sm:mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[180px]
                    sm:h-[220px]
                    md:h-[240px]
                    object-cover
                    rounded-2xl
                    border
                    border-white/10
                    hover:scale-[1.02]
                    transition
                    duration-500
                  "
                />
              </div>

              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  text-zinc-300
                  text-sm
                  sm:text-base
                  leading-7
                  sm:leading-relaxed
                  mb-5
                  sm:mb-6
                "
              >
                {project.description}
              </p>

              {/* ================= TECH STACK ================= */}

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">

                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      px-3
                      sm:px-4
                      py-1.5
                      sm:py-2
                      rounded-full
                      bg-cyan-500/10
                      border
                      border-cyan-400/20
                      text-xs
                      sm:text-sm
                      text-cyan-300
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* ================= BUTTON ================= */}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    sm:w-auto
                    text-center
                    px-6
                    py-3
                    rounded-xl
                    border
                    border-cyan-400
                    text-cyan-300
                    hover:bg-cyan-500/10
                    hover:scale-105
                    transition
                    duration-300
                  "
                >
                  Live Demo ↗
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}