import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Scene from "../components/Scene";
import MouseGlow from "../components/MouseGlow";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      
      <Navbar />
      <MouseGlow />
      <Scene />

      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />

      {/* Hero */}
      <div className="flex flex-col items-center justify-center h-screen text-center px-6 relative z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black leading-tight"
        >
          FUTURISTIC
          <br />

          <span className="text-cyan-400">
            DEVELOPER
          </span>
        </motion.h1>

        {/* Paragraph */}
    <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
  className="text-zinc-300 text-lg md:text-xl leading-9 max-w-3xl mt-8 font-light"
>

  <span className="text-cyan-400 font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
    Full Stack Web Developer
  </span>

  {" "}specializing in building modern, scalable, and high-performance web applications using the MERN stack.

  Passionate about creating immersive digital experiences with

  <span className="text-cyan-400 font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
    {" "}React.js
  </span>,

  <span className="text-cyan-400 font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
    {" "}Node.js
  </span>,

  <span className="text-cyan-400 font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
    {" "}MongoDB
  </span>,

  <span className="text-cyan-400 font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
    {" "}Express.js
  </span>

  {" "}and modern UI/UX design. I focus on developing responsive, visually engaging, and user-centric applications that combine clean architecture with smooth interactive experiences.

</motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex gap-6 mt-10"
        >

          <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30">
            View Projects
          </button>

          <button className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300">
            Contact Me
          </button>

        </motion.div>

      </div>
    </div>
  );
}