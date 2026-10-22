import Navbar from "../components/Navbar";
import MouseGlow from "../components/MouseGlow";
import { motion } from "framer-motion";

const languages = [
  "JavaScript",
  "C++",
  "HTML",
  "CSS",
];

const technologies = [
  "React JS",
  "Node JS",
  "Express JS",
  "MongoDB",
  "Tailwind CSS",
  "Three.js",
  "Framer Motion",
];

const tools = [
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
];

const mainSkills = [
  {
    name: "React JS",
    level: "90%",
  },
  {
    name: "Express JS",
    level: "75%",
  },
  {
    name: "Node JS",
    level: "80%",
  },
  {
    name: "MongoDB",
    level: "70%",
  },
];

export default function Skills() {
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
          top-40
          left-[-100px]
          sm:left-0
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
            mb-12
            sm:mb-20
            leading-tight
          "
        >
          MY
          <span className="text-cyan-400"> SKILLS</span>
        </motion.h1>

        {/* ================= LANGUAGES ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12 sm:mb-16"
        >

          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-bold
              mb-6
              sm:mb-8
              text-cyan-400
            "
          >
            Languages
          </h2>

          <div className="flex flex-wrap gap-3 sm:gap-5">

            {languages.map((lang, index) => (
              <div
                key={index}
                className="
                  px-4
                  sm:px-6
                  py-3
                  sm:py-4
                  text-sm
                  sm:text-base
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  backdrop-blur-xl
                  hover:scale-105
                  hover:border-cyan-400
                  transition
                  duration-300
                "
              >
                {lang}
              </div>
            ))}

          </div>
        </motion.div>

        {/* ================= TECHNOLOGIES ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-12 sm:mb-16"
        >

          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-bold
              mb-6
              sm:mb-8
              text-cyan-400
            "
          >
            Technologies
          </h2>

          <div className="flex flex-wrap gap-3 sm:gap-5">

            {technologies.map((tech, index) => (
              <div
                key={index}
                className="
                  px-4
                  sm:px-6
                  py-3
                  sm:py-4
                  text-sm
                  sm:text-base
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  hover:border-cyan-400
                  hover:scale-105
                  transition
                  duration-300
                "
              >
                {tech}
              </div>
            ))}

          </div>
        </motion.div>

        {/* ================= TOOLS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mb-16 sm:mb-20"
        >

          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-bold
              mb-6
              sm:mb-8
              text-cyan-400
            "
          >
            Tools
          </h2>

          <div className="flex flex-wrap gap-3 sm:gap-5">

            {tools.map((tool, index) => (
              <div
                key={index}
                className="
                  px-4
                  sm:px-6
                  py-3
                  sm:py-4
                  text-sm
                  sm:text-base
                  rounded-2xl
                  border
                  border-purple-400/20
                  bg-purple-500/10
                  backdrop-blur-xl
                  hover:border-purple-400
                  hover:scale-105
                  transition
                  duration-300
                "
              >
                {tool}
              </div>
            ))}

          </div>
        </motion.div>

        {/* ================= MAIN SKILLS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
        >

          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-bold
              mb-8
              sm:mb-10
              text-cyan-400
            "
          >
            Main Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-10">

            {mainSkills.map((skill, index) => (

              <div
                key={index}
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

                {/* Skill Name + Percentage */}

                <div className="flex items-center justify-between gap-4 mb-4">

                  <h2
                    className="
                      text-lg
                      sm:text-xl
                      md:text-2xl
                      font-bold
                    "
                  >
                    {skill.name}
                  </h2>

                  <span className="text-cyan-400 font-bold text-sm sm:text-base">
                    {skill.level}
                  </span>

                </div>

                {/* Progress Bar */}

                <div className="w-full h-3 sm:h-4 bg-zinc-800 rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: skill.level }}
                    transition={{ duration: 1.5 }}
                    className="
                      h-full
                      bg-cyan-400
                      rounded-full
                      shadow-lg
                      shadow-cyan-500/50
                    "
                  />

                </div>

              </div>

            ))}

          </div>

        </motion.div>

      </div>
    </div>
  );
}