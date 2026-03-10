"use client";

import { motion } from "framer-motion";

export function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="animated-gradient rounded-[2rem] border border-white/55 bg-gradient-to-r from-[#f7dbe6] via-[#fff4e8] to-[#e8dff8] px-8 py-16 text-center shadow-[0_25px_70px_-45px_rgba(111,76,90,0.85)]"
    >
      <h2 className="luxury-heading text-3xl font-semibold text-[#34282c] sm:text-4xl">
        Start Your Skincare Ritual Today
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#644f59] sm:text-base">
        Elevate your routine with formulas that hydrate, brighten, and restore your natural glow.
      </p>
      <button className="mt-8 rounded-full bg-[#3d2f34] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2d2326] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b2919d] focus-visible:ring-offset-2">
        Shop Lumière Skin
      </button>
    </motion.section>
  );
}