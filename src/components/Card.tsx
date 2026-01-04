import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-neutral-900"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.25) 1px, transparent 0)",
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
        perspective: "1200px",
      }}
    >
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{
          scale: 1.08,
          rotateX: -12,
          rotateY: 14,
          boxShadow: "0 30px 70px rgba(6,182,212,0.45)",
        }}
        whileTap={{
          scale: 0.96,
          rotateX: 0,
          rotateY: 0,
        }}
        className="
          group relative
          px-20 py-6
          rounded-xl
          bg-white/5
          backdrop-blur-xl
          text-neutral-200
          text-lg font-medium
          border border-white/10
          shadow-[0px_1px_2px_0px_rgba(255,255,255,0.15)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.15)_inset]
          overflow-hidden cursor-pointer
          transform-gpu
        "
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glass shine */}
        <span
          className="
            absolute inset-0
            bg-gradient-to-br from-white/20 via-transparent to-transparent
            opacity-40
            pointer-events-none
          "
        />

        {/* Text layer */}
        <span
          className="relative z-10"
          style={{ transform: "translateZ(40px)" }}
        >
          Subscribeddsds
        </span>

        {/* Glow underline */}
        <span
          className="
            absolute inset-x-0 bottom-0
            h-px w-3/4 mx-auto
            bg-gradient-to-r from-transparent via-cyan-400 to-transparent
          "
        />

        {/* Hover glow */}
        <span
          className="
            absolute inset-x-0 bottom-0
            h-px w-full mx-auto
            bg-gradient-to-r from-transparent via-cyan-400 to-transparent
            opacity-0 group-hover:opacity-100
            blur-2xl transition-opacity duration-300
          "
        />
      </motion.button>
    </div>
  );
};

export default AboutPage;
