import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { MessageCircleDashed, X } from "lucide-react";
import React, { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9, rotateX: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    rotateX: 15,
    transition: { duration: 0.4, ease: easeInOut },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeInOut },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3 },
  },
};

const CardPage: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-neutral-900"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.25) 1px, transparent 0)",
        backgroundSize: "8px 8px",
        perspective: "1200px",
      }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              w-72 h-[28rem]
              p-4 flex flex-col
              rounded-xl bg-white
              border border-white/10
              shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(0,0,0,0.08),0_24px_68px_rgba(0,0,0,0.25)]
            "
          >
            {/* Title */}
            <motion.h2 variants={itemVariants} className="text-black text-xs font-semibold">
              UI Card Components
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-neutral-800 mt-2 text-xs leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore, temporibus!
            </motion.p>

            {/* Close Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(false)}
              className="cursor-pointer py-2 px-3 rounded-sm flex justify-center items-center my-2 gap-1 text-[10px]
              shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(0,0,0,0.08),0_24px_68px_rgba(0,0,0,0.25)]"
            >
              close card <X className="h-2.5 w-4" />
            </motion.button>

            {/* Message Box */}
            <motion.div
              variants={itemVariants}
              className="p-2 border border-gray-200 mt-2 rounded-xl h-full"
            >
              <motion.div
                initial="hidden"
                whileHover="visible"
                animate="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08 },
                  },
                }}
                className="flex flex-col divide-y divide-amber-50"
              >
                {[1, 2, 3].map((_, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="bg-gray-200 p-2 flex items-center text-[10px] gap-2
                    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(0,0,0,0.08)]"
                  >
                    <MessageCircleDashed className="h-4 w-4" />
                    Message
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardPage;
