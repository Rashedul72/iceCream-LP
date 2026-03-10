"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type RoutineStepProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function RoutineStep({ icon: Icon, title, description }: RoutineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-3xl border border-white/60 bg-white/55 p-6 shadow-[0_18px_50px_-42px_rgba(118,83,95,0.85)] backdrop-blur-sm"
    >
      <div className="mb-4 inline-flex rounded-full bg-[#f8edf1] p-3 text-[#7f616d]">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-[#34282c]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#7b656e]">{description}</p>
    </motion.div>
  );
}