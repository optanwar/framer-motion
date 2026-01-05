import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.4 },
  },
};

const HomePage: React.FC = () => {
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="visible"
      className="min-h-screen p-6 w-full bg-neutral-900"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.25) 1px, transparent 0)",
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
        perspective: "1200px",
      }}
    >
      {/* Title */}
      <motion.h1
        variants={item}
        className="text-3xl font-bold mb-6 text-white"
      >
        Hello, Framer Motion 👋
      </motion.h1>

      {/* Navigation */}
      <motion.ul
        variants={container}
        className="space-y-3 text-white max-w-md"
      >
        {[
          { to: "/basic", label: "Basic Button Example" },
          { to: "/card", label: "Card Example" },
          { to: "/card-advanced", label: "Advanced Card Example" },
          { to: "/sidebar", label: "Sidebar Example" },
          { to: "/scroll", label: "Scroll Example" },
          { to: "/layouts-in-motion", label: "Layout Motion Example" },
          { to: "/text-animation", label: "Text Animation Example" },
        ].map((link) => (
          <motion.li
            key={link.to}
            variants={item}
            whileHover={{
              x: 6,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to={link.to}
              className="block rounded-lg px-4 py-2 bg-neutral-800/60
                         hover:bg-neutral-700/60 border border-neutral-700
                         backdrop-blur-md"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.main>
  );
};

export default HomePage;
