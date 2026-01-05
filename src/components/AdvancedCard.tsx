import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { MessageCircleDashed, X } from "lucide-react";
import React, { useRef, useState } from "react";

const CardPage: React.FC = () => {
  const [open, setOpen] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  /* ---------------- 3D TILT VALUES ---------------- */
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [12, -12]), {
    stiffness: 120,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(x, [-100, 100], [-12, 12]), {
    stiffness: 120,
    damping: 20,
  });

  /* ---------------- MOUSE MOVE HANDLER ---------------- */
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || shouldReduceMotion) return;

    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-neutral-900">
      <AnimatePresence>
        {open && (
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            style={{
              rotateX: shouldReduceMotion ? 0 : rotateX,
              rotateY: shouldReduceMotion ? 0 : rotateY,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { type: "spring", stiffness: 120, damping: 15 },
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              transition: { duration: 0.3 },
            }}
            className="w-72 h-[28rem] p-4 rounded-xl bg-white shadow-2xl flex flex-col"
          >
            {/* Title */}
            <motion.h2
              style={{ transform: "translateZ(30px)" }}
              className="text-xs font-semibold"
            >
              UI Card Components
            </motion.h2>

            {/* Description */}
            <motion.p
              style={{ transform: "translateZ(20px)" }}
              className="text-xs text-neutral-700 mt-2"
            >
              Smooth 3D tilt, magnetic hover & spring animations.
            </motion.p>

            {/* MAGNETIC BUTTON */}
            <MagneticButton onClick={() => setOpen(false)} />

            {/* Messages */}
            <motion.div
              style={{ transform: "translateZ(15px)" }}
              className="mt-3 flex flex-col gap-2"
            >
              {[1, 2, 3].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gray-200 p-2 rounded-md text-[10px] flex gap-2 items-center"
                >
                  <MessageCircleDashed className="h-4 w-4" />
                  Message
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------------- MAGNETIC BUTTON ---------------- */

const MagneticButton = ({ onClick }: { onClick: () => void }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.4);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="mt-3 py-2 px-3 rounded-sm text-[10px] flex items-center gap-1 bg-gray-100"
    >
      close card <X className="h-3 w-3" />
    </motion.button>
  );
};

export default CardPage;
