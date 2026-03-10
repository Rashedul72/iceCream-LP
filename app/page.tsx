"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  Droplets,
  Sparkles,
  Leaf,
  ShieldCheck,
  HandPlatter,
  ScanFace,
} from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { RoutineStep } from "@/components/RoutineStep";
import { IngredientCard } from "@/components/IngredientCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    name: "Hydrating Glow Serum",
    description: "Silky serum that deeply hydrates and leaves skin luminous.",
    price: "$38",
  },
  {
    image:
      "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=1200&q=80",
    name: "Vitamin C Bright Cream",
    description: "Daily moisturizer with antioxidant-rich brightening care.",
    price: "$42",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&w=1200&q=80",
    name: "Rose Water Toner",
    description: "Balancing toner that refreshes and softens after cleansing.",
    price: "$28",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?auto=format&fit=crop&w=1200&q=80",
    name: "Night Repair Oil",
    description: "Nourishing overnight treatment for smoother morning skin.",
    price: "$46",
  },
];

const ingredients = [
  {
    name: "Hyaluronic Acid",
    description: "Plumps with long-lasting hydration for soft, supple skin.",
    tone: "linear-gradient(145deg, #fdeef4 0%, #fff8fb 100%)",
  },
  {
    name: "Vitamin C",
    description: "Supports radiance and helps improve uneven tone.",
    tone: "linear-gradient(145deg, #fff6e8 0%, #fffdf6 100%)",
  },
  {
    name: "Niacinamide",
    description: "Refines the look of texture and visibly smooths skin.",
    tone: "linear-gradient(145deg, #f3eefc 0%, #fbf8ff 100%)",
  },
  {
    name: "Green Tea Extract",
    description: "Soothes skin with antioxidant-rich botanical support.",
    tone: "linear-gradient(145deg, #eef6ee 0%, #fbfffb 100%)",
  },
];

const testimonials = [
  {
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    name: "Ava R.",
    quote: "My skin has never felt this hydrated.",
    rating: 5,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80",
    name: "Nora L.",
    quote: "The glow is real. Lightweight, calming, and incredibly effective.",
    rating: 5,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80",
    name: "Sofia M.",
    quote: "The routine feels luxurious and my tone looks brighter every week.",
    rating: 4,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=500&q=80",
    name: "Jade P.",
    quote: "Beautiful textures and visible results without irritation.",
    rating: 5,
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=80",
    alt: "Skincare texture close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    alt: "Serum dropper bottle on pastel surface",
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury cosmetic packaging and cream",
  },
  {
    src: "https://images.unsplash.com/photo-1571781418606-70265b9cce90?auto=format&fit=crop&w=1200&q=80",
    alt: "Skincare product arrangement",
  },
  {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80",
    alt: "Beauty ritual with serum",
  },
  {
    src: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=1200&q=80",
    alt: "Cream and botanical skincare composition",
  },
];

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ align: "start", loop: true });

  return (
    <main className="min-h-screen px-4 py-6 sm:px-7 lg:px-10 lg:py-8">
      <div className="mx-auto max-w-7xl space-y-24">
        <HeroSection />

        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8b6f78]">Best Sellers</p>
            <h2 className="luxury-heading text-3xl font-semibold text-[#34282c] sm:text-4xl">
              Essential Formulas Loved Daily
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8b6f78]">Skincare Routine</p>
            <h2 className="luxury-heading text-3xl font-semibold text-[#34282c] sm:text-4xl">
              A Ritual In Four Gentle Steps
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <RoutineStep
              icon={HandPlatter}
              title="Cleanse"
              description="Remove impurities while keeping skin balanced and calm."
            />
            <RoutineStep
              icon={Droplets}
              title="Tone"
              description="Prep and hydrate skin with a soothing rose water veil."
            />
            <RoutineStep
              icon={Sparkles}
              title="Treat"
              description="Apply serum concentrates to target radiance and texture."
            />
            <RoutineStep
              icon={ScanFace}
              title="Moisturize"
              description="Seal in nourishment for lasting softness and glow."
            />
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8b6f78]">Ingredients</p>
            <h2 className="luxury-heading text-3xl font-semibold text-[#34282c] sm:text-4xl">
              Clinically Loved, Naturally Inspired
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ingredients.map((ingredient) => (
              <IngredientCard key={ingredient.name} {...ingredient} />
            ))}
          </div>
          <div className="rounded-3xl border border-white/55 bg-gradient-to-r from-[#fff5f9] to-[#f7f2ff] p-6 text-sm text-[#68545d] shadow-[0_18px_60px_-45px_rgba(109,82,92,0.8)] sm:text-base">
            <div className="flex flex-wrap items-center gap-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5">
                <Leaf size={16} /> Vegan Friendly
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5">
                <ShieldCheck size={16} /> Dermatologist Tested
              </span>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8b6f78]">Testimonials</p>
            <h2 className="luxury-heading text-3xl font-semibold text-[#34282c] sm:text-4xl">
              Real Results, Real Rituals
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="embla"
            ref={emblaRef}
          >
            <div className="embla__container">
              {testimonials.map((testimonial) => (
                <div className="embla__slide" key={testimonial.name}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8b6f78]">Product Gallery</p>
            <h2 className="luxury-heading text-3xl font-semibold text-[#34282c] sm:text-4xl">
              Textures, Drops, and Packaging
            </h2>
          </div>
          <GalleryGrid images={galleryImages} />
        </section>

        <CTASection />
      </div>

      <Footer />
    </main>
  );
}
