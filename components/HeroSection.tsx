"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-gradient-to-br from-[#fff1f5] via-[#fffaf5] to-[#f5f0ff] px-6 py-16 shadow-[0_20px_80px_-45px_rgba(161,122,135,0.55)] sm:px-10 lg:px-14 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-8 top-10 h-4 w-4 rounded-full bg-[#e8d5dc]/70"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-16 top-16 h-6 w-6 rounded-full bg-[#efe6cf]/80"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-12 left-1/3 h-5 w-5 rounded-full bg-[#ddd3f0]/60"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b6f78]">
            Lumière Skin
          </p>
          <h1 className="luxury-heading text-4xl font-semibold leading-tight text-[#34282c] sm:text-5xl lg:text-6xl">
            Glow Naturally With Lumière Skin
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-[#6f5962] sm:text-lg">
            Science-backed skincare designed for radiant, healthy skin.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-[#3d2f34] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2f2428] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b6f78] focus-visible:ring-offset-2">
              Shop Products
            </button>
            <button className="rounded-full border border-[#d9c3cb] bg-white/70 px-7 py-3 text-sm font-medium text-[#4f3d43] backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ccb2bc] focus-visible:ring-offset-2">
              Discover Routine
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto h-[400px] w-full overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-4 shadow-[0_18px_60px_-30px_rgba(99,73,85,0.65)] backdrop-blur-sm sm:h-[480px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury skincare bottle"
              fill
              priority
              className="rounded-[1.5rem] object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}