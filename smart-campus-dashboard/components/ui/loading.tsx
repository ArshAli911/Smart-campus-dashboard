"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { School } from "lucide-react"

interface LoadingProps {
  className?: string
  size?: "sm" | "md" | "lg"
  text?: string
}

export function Loading({ className, size = "md", text = "Loading..." }: LoadingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  const containerSizeClasses = {
    sm: "gap-2",
    md: "gap-3",
    lg: "gap-4",
  }

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }

  return (
    <div className={cn("flex flex-col items-center justify-center", containerSizeClasses[size], className)}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <School className={cn("text-blue-600", sizeClasses[size])} />
      </motion.div>
      {text && <p className={cn("text-muted-foreground font-medium", textSizeClasses[size])}>{text}</p>}
    </div>
  )
}
