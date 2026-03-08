"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  children: React.ReactNode;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement | null>;
  className?: string;
}

export function TimelineContent({
  children,
  animationNum,
  timelineRef,
  className,
}: TimelineContentProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : {}
      }
      transition={{
        duration: 0.6,
        delay: animationNum * 0.15,
        ease: "easeOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
