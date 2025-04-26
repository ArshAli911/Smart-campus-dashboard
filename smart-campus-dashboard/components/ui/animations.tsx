"use client"

import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

// Fade In animation
export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  ...props
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  [key: string]: any
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Slide Up animation
export function SlideUp({
  children,
  className,
  delay = 0,
  duration = 0.5,
  ...props
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  [key: string]: any
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Staggered Children animation
export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  ...props
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
  [key: string]: any
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Staggered Child item
export function StaggerItem({
  children,
  className,
  duration = 0.5,
  ...props
}: {
  children: ReactNode
  className?: string
  duration?: number
  [key: string]: any
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Scale animation
export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  ...props
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  [key: string]: any
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Page transition wrapper
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className="flex-1"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

// Pulse animation
export function Pulse({
  children,
  className,
  ...props
}: {
  children: ReactNode
  className?: string
  [key: string]: any
}) {
  return (
    <div className={cn("animate-pulse", className)} {...props}>
      {children}
    </div>
  )
}

// Bounce animation
export function Bounce({
  children,
  className,
  ...props
}: {
  children: ReactNode
  className?: string
  [key: string]: any
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Animated counter
export function AnimatedCounter({
  value,
  className,
  duration = 1,
  ...props
}: {
  value: number
  className?: string
  duration?: number
  [key: string]: any
}) {
  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={className} {...props}>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {value}
      </motion.span>
    </motion.span>
  )
}

// Loading spinner
export function LoadingSpinner({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <motion.div
        className={cn("border-t-2 border-blue-500 rounded-full", sizeClasses[size])}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}

// Animated notification badge
export function AnimatedBadge({ className }: { className?: string }) {
  return (
    <motion.span
      className={cn("absolute top-1 right-1 h-2 w-2 rounded-full bg-rose-500", className)}
      initial={{ scale: 0.8, opacity: 0.8 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
    />
  )
}
