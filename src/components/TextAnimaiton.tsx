"use client";

import { motion } from "framer-motion";
import React from "react";

/* ---------------- TEXT CONTENT ---------------- */

const paragraph1 =
  "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const paragraph2 =
  "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const paragraph3 =
  "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.";

/* ---------------- VARIANTS ---------------- */

// WORD BY WORD
const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// LINE BY LINE
const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// CHARACTER REVEAL
const charContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

const charItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

/* ---------------- COMPONENT ---------------- */

const TextAnimationsShowcase = () => {
  return (
    <section className="min-h-screen bg-neutral-950 text-white px-6 py-24 space-y-28">
      {/* ---------------- WORD BY WORD ---------------- */}
      <motion.p
        variants={wordContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-2xl md:text-4xl font-semibold leading-relaxed"
      >
        {paragraph1.split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={wordItem}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.p>

      {/* ---------------- LINE BY LINE ---------------- */}
      <div className="max-w-4xl text-xl md:text-2xl text-neutral-300 space-y-4">
        {paragraph2.split(", ").map((line, i) => (
          <motion.p
            key={i}
            custom={i}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* ---------------- CHARACTER BY CHARACTER ---------------- */}
      <motion.p
        variants={charContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl text-xl md:text-3xl font-medium leading-relaxed"
      >
        {paragraph3.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={charItem}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>
    </section>
  );
};

export default TextAnimationsShowcase;
