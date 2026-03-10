"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ProductCardProps = {
  image: string;
  name: string;
  description: string;
  price: string;
};

export function ProductCard({ image, name, description, price }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 170, damping: 16 }}
      className="overflow-hidden rounded-3xl border border-white/50 bg-white/60 shadow-[0_18px_55px_-40px_rgba(105,76,88,0.75)] backdrop-blur-sm"
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold text-[#34282c]">{name}</h3>
        <p className="text-sm leading-relaxed text-[#7b656e]">{description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-base font-semibold text-[#4b3a40]">{price}</span>
          <button className="rounded-full bg-[#3f3036] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#2f2428] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a88491] focus-visible:ring-offset-2">
            Add to cart
          </button>
        </div>
      </div>
    </motion.article>
  );
}