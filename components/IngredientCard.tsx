"use client";

import { motion } from "framer-motion";

type IngredientCardProps = {
  name: string;
  description: string;
  tone: string;
};

export function IngredientCard({ name, description, tone }: IngredientCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-white/55 p-6 shadow-[0_20px_55px_-40px_rgba(95,70,82,0.75)]"
      style={{ background: tone }}
    >
      <h3 className="text-lg font-semibold text-[#2f2629]">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#6f5962]">{description}</p>
    </motion.article>
  );
}