"use client";

import { motion } from "framer-motion";
import { Avatar, Card, Group, Rating, Text } from "@mantine/core";

type TestimonialCardProps = {
  avatar: string;
  name: string;
  quote: string;
  rating: number;
};

export function TestimonialCard({ avatar, name, quote, rating }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className="h-full"
    >
      <Card
        radius="xl"
        className="h-full border border-white/65 bg-white/70 shadow-[0_20px_65px_-45px_rgba(99,72,83,0.75)] backdrop-blur"
        padding="lg"
      >
        <Group mb="md">
          <Avatar src={avatar} alt={name} radius="xl" size="lg" />
          <div>
            <Text fw={600} c="#33282b">
              {name}
            </Text>
            <Rating value={rating} readOnly size="sm" color="yellow" />
          </div>
        </Group>
        <Text c="#66515a" fz="sm" lh={1.7}>
          “{quote}”
        </Text>
      </Card>
    </motion.div>
  );
}