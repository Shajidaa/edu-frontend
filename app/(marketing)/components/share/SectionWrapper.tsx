"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const fadeInVariants = (direction: string, delay: number): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
      delay: delay,
      ease: "easeOut",
    },
  },
});

export default function SectionWrapper({ 
  children, 
  delay = 0, 
  direction = "up",
  className = "" 
}: SectionWrapperProps) {
  return (
    <motion.section
      variants={fadeInVariants(direction, delay)}
      initial="hidden"
      whileInView="visible"
      // once: false mane protibar scroll korle animation hobe
      viewport={{ once: false, amount: 0.2 }} 
      className={className}
    >
      {children}
    </motion.section>
  );
}