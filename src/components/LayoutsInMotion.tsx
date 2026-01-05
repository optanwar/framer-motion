"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";

export default function LayoutsInMotion() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  /* ---------------- FEATURE GRID SCROLL ---------------- */
  const gridRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start 85%", "end 40%"],
  });

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [80, 0]),
    { stiffness: 100, damping: 20 }
  );

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main className="bg-neutral-950 text-white">
      {/* ---------------- HERO ---------------- */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-5xl font-bold mb-6">
            Layouts in Motion
          </h1>
          <p className="text-neutral-400 text-lg">
            Scroll-based layouts with shared layout animations.
          </p>
        </motion.div>
      </section>

      {/* ---------------- FEATURE GRID ---------------- */}
      <section
        ref={gridRef}
        className="min-h-screen px-6 flex items-center"
      >
        <motion.div
          style={{ y, opacity }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {[1, 2, 3].map((id) => (
            <motion.div
              key={id}
              layoutId={`card-${id}`}
              whileHover={{ y: -8 }}
              onClick={() => setActiveCard(id)}
              className="cursor-pointer rounded-2xl bg-neutral-900 border border-white/10 p-6"
            >
              <h3 className="font-semibold mb-2">
                Feature {id}
              </h3>
              <p className="text-sm text-neutral-400">
                Click to expand with shared layout animation.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------------- STICKY HIGHLIGHT ---------------- */}
      <StickySection />

      {/* ---------------- CTA ---------------- */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-neutral-900 border border-white/10 p-10 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Ready to build motion layouts?
          </h3>
          <button className="mt-4 px-6 py-3 rounded-xl bg-cyan-500 text-black font-medium">
            Get Started
          </button>
        </motion.div>
      </section>

      {/* ---------------- MODAL ---------------- */}
      <AnimatePresence>
        {activeCard !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              layoutId={`card-${activeCard}`}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-3xl bg-neutral-900 border border-white/10 p-8"
            >
              <h2 className="text-2xl font-semibold mb-4">
                Feature {activeCard}
              </h2>

              <p className="text-neutral-400 leading-relaxed">
                This modal uses Framer Motion shared layout
                animations. The card morphs into this modal
                smoothly without manual keyframes.
              </p>

              <button
                onClick={() => setActiveCard(null)}
                className="mt-6 px-4 py-2 rounded-lg bg-cyan-500 text-black font-medium"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

/* ---------------- STICKY SECTION ---------------- */

const StickySection = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="h-[200vh] px-6">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{
            scale,
            rotateX,
            opacity,
            transformPerspective: 1200,
          }}
          className="max-w-xl p-10 rounded-3xl bg-neutral-900 border border-white/10"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Sticky Motion Section
          </h2>
          <p className="text-neutral-400">
            Scroll controls motion while this layout
            stays sticky on screen.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
