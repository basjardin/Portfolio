"use client"

import { motion, MotionProps, useScroll } from "motion/react"

import { cn } from "@/lib/utils"

interface ScrollProgressProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof MotionProps
> {
  ref?: React.Ref<HTMLDivElement>
}

export function ScrollProgress({
  className,
  ref,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-y-0 right-1 z-50 h-px origin-top",
        className
      )}
      style={{
        scaleY: scrollYProgress,
        width: "7px",
        height: "100%",
        background: "linear-gradient(to bottom, var(--accent) 5%, var(--goodblue) 25%)",
      }}
      {...props}
    />
  )
}
