import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

const ScrollSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  /* ---------------- SCROLL TRACKING ---------------- */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 30%"],
  });

  /* ---------------- TRANSFORMS ---------------- */
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.6, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], ["10px", "0px"]);

  /* ---------------- SPRING SMOOTHING ---------------- */
  const smoothY = useSpring(y, { stiffness: 90, damping: 22 });
  const smoothScale = useSpring(scale, { stiffness: 90, damping: 22 });

  return (
    <>
      {/* TOP SPACER */}
      <div className="h-[40vh] bg-amber-200 flex items-center justify-center text-3xl font-bold">
        Scroll Down ↓
      </div>

      {/* MAIN SECTION */}
      <section className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
        <motion.div
          ref={ref}
          style={{
            opacity,
            y: smoothY,
            scale: smoothScale,
            rotateX,
            filter: blur,
            transformPerspective: 1200,
          }}
          className="
            relative max-w-xl w-full rounded-3xl
            bg-neutral-900 border border-white/10
            p-10 shadow-2xl
          "
        >
          {/* GLOW EFFECT */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-xl -z-10" />

          <h2 className="text-3xl font-semibold mb-4">
            Premium Scroll Animation
          </h2>

          <p className="text-neutral-400 leading-relaxed">
            This card animates with depth, blur, scale, and spring
            physics as you scroll. Designed for modern dashboards,
            SaaS products, and high-end portfolios.
          </p>
        </motion.div>
      </section>

      {/* BOTTOM SPACER */}
      <div className="h-screen bg-amber-200" />
    </>
  );
};

export default ScrollSection;
