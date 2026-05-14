import Navbar from "../components/Navbar";
import MouseGlow from "../components/MouseGlow";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      <Navbar />

      <MouseGlow />

      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-20 relative z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-black mb-16"
        >
          ABOUT
          <span className="text-cyan-400"> ME</span>
        </motion.h1>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              Who I Am
            </h2>

           <p className="text-zinc-300 text-lg md:text-xl leading-9 max-w-4xl mt-8 font-light">

  I’m a passionate

  <span className="text-cyan-400 font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
    {" "}Full Stack Web Developer
  </span>

  {" "}focused on building scalable, high-performance, and visually immersive web applications using modern technologies.

  I specialize in creating dynamic digital experiences with

  <span className="text-cyan-400 font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
    {" "}React.js
  </span>,

  <span className="text-cyan-400 font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
    {" "}Node.js
  </span>,

  <span className="text-cyan-400 font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
    {" "}Express.js
  </span>,

  <span className="text-cyan-400 font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
    {" "}MongoDB
  </span>

  {" "}and modern frontend technologies like

  <span className="text-cyan-400 font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
    {" "}Three.js
  </span>

  {" "}and

  <span className="text-cyan-400 font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
    {" "}Tailwind CSS
  </span>.

  {" "}I enjoy developing responsive, interactive, and futuristic user experiences that combine clean backend architecture with premium modern UI/UX design.

</p>

          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="p-8 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-xl">
              <h2 className="text-5xl font-black text-cyan-400">
                1+
              </h2>

              <p className="mt-4 text-zinc-300">
                Years Learning
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-xl">
              <h2 className="text-5xl font-black text-purple-400">
                10+
              </h2>

              <p className="mt-4 text-zinc-300">
                Projects
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-pink-500/10 border border-pink-500/20 backdrop-blur-xl">
              <h2 className="text-5xl font-black text-pink-400">
                5+
              </h2>

              <p className="mt-4 text-zinc-300">
                Technologies
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-green-500/10 border border-green-500/20 backdrop-blur-xl">
              <h2 className="text-5xl font-black text-green-400">
                ∞
              </h2>

              <p className="mt-4 text-zinc-300">
                Creativity
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
}