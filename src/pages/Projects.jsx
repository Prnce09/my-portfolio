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
    live: "https://social-media-eta-wine.vercel.app/"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      <Navbar />

      <MouseGlow />

      {/* Glow Effect */}
      <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-20 relative z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-black mb-16"
        >
          MY
          <span className="text-cyan-400"> PROJECTS</span>
        </motion.h1>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 transition duration-300"
            >

              {/* Project Title */}
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">
                {project.title}
              </h2>
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[220px] object-cover rounded-2xl mb-6 border border-white/10 hover:scale-[1.02] transition duration-500"
              />
              {/* Description */}
              <p className="text-zinc-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">

                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <a
                  href={project.live}
                  className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 transition duration-300"
                >
                  Live Demo
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}
