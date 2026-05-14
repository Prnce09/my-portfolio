import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[999]">

      <div className="flex flex-col items-center">

        {/* Spinning Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className="w-24 h-24 rounded-full border-4 border-cyan-400 border-t-transparent"
        />

        {/* Text */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
          className="mt-8 text-cyan-400 text-2xl font-black tracking-widest"
        >
          LOADING...
        </motion.h1>

      </div>
    </div>
  );
}