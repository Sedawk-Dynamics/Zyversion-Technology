"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export default function GlobalInteractions() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Scroll Progress
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    setIsClient(true)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      // Find the closest ancestor that is an anchor or button
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  if (!isClient) return null

  return (
    <>
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 origin-left z-[9999]"
        style={{ scaleX }}
      />

      {/* Futuristic Custom Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 2.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
          mass: 0.5,
        }}
      />

      {/* Outer Cursor Ring trailing the primary dot */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.8,
        }}
      />
    </>
  )
}
