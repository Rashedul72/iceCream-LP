"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type GalleryGridProps = {
  images: { src: string; alt: string }[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <motion.figure
          key={image.src}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
          className="group relative h-64 overflow-hidden rounded-3xl border border-white/50"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition duration-500 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
        </motion.figure>
      ))}
    </div>
  );
}