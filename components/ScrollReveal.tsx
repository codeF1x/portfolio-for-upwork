"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  priority?: boolean; // If true, animate immediately on mount
}

export default function ScrollReveal({ 
  children, 
  className, 
  delay = 0, 
  priority = false 
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      // If priority is true, animate immediately. Otherwise, wait for viewport entry.
      animate={priority ? "visible" : undefined}
      whileInView={priority ? undefined : "visible"}
      viewport={priority ? undefined : { once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
