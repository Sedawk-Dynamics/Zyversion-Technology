'use client'

import { motion } from 'framer-motion'

/**
 * Floating Node Network - Abstract tech visualization
 * Creates connected dots with subtle animations
 */
export function FloatingNodeNetwork() {
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 0.5,
  }))

  return (
    <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 1200 600">
      {/* Background grid pattern */}
      <defs>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(59,159,255,0.1)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="1200" height="600" fill="url(#grid)" />

      {/* Animated nodes */}
      {nodes.map((node, i) => (
        <motion.g key={node.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: node.delay }}>
          <circle
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="4"
            fill="#3b9fff"
            opacity="0.6"
          />
          <motion.circle
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="4"
            fill="#3b9fff"
            animate={{ r: [4, 8, 4], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 3, delay: node.delay, repeat: Infinity }}
          />
          {/* Connecting lines to nearby nodes */}
          {i < nodes.length - 1 && (
            <line
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nodes[(i + 1) % nodes.length].x}%`}
              y2={`${nodes[(i + 1) % nodes.length].y}%`}
              stroke="rgba(59,159,255,0.15)"
              strokeWidth="1"
            />
          )}
        </motion.g>
      ))}
    </svg>
  )
}

/**
 * Data Flow Pattern - Abstract flowing lines
 */
export function DataFlowPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(59,159,255,0.3)" />
          <stop offset="50%" stopColor="rgba(59,159,255,0.1)" />
          <stop offset="100%" stopColor="rgba(59,159,255,0.05)" />
        </linearGradient>
      </defs>

      {/* Flowing curves */}
      <motion.path
        d="M 0 400 Q 300 200, 600 400 T 1200 400"
        fill="none"
        stroke="url(#flowGradient)"
        strokeWidth="2"
        strokeDasharray="1200"
        animate={{ strokeDashoffset: [1200, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.path
        d="M 0 300 Q 300 100, 600 300 T 1200 300"
        fill="none"
        stroke="rgba(59,159,255,0.15)"
        strokeWidth="1.5"
        strokeDasharray="1200"
        animate={{ strokeDashoffset: [1200, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 1 }}
      />
      <motion.path
        d="M 0 500 Q 300 600, 600 500 T 1200 500"
        fill="none"
        stroke="rgba(59,159,255,0.1)"
        strokeWidth="1"
        strokeDasharray="1200"
        animate={{ strokeDashoffset: [1200, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: 2 }}
      />
    </svg>
  )
}

/**
 * Hexagon Grid - Futuristic tech pattern
 */
export function HexagonGrid() {
  const hexagons = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (i % 5) * 240 + 100,
    y: Math.floor(i / 5) * 200 + 100,
  }))

  return (
    <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 1200 800">
      {hexagons.map((hex) => (
        <motion.g key={hex.id} initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: Math.random() * 0.5 }}>
          <motion.polygon
            points={`${hex.x},${hex.y - 20} ${hex.x + 20},${hex.y - 10} ${hex.x + 20},${hex.y + 10} ${hex.x},${hex.y + 20} ${hex.x - 20},${hex.y + 10} ${hex.x - 20},${hex.y - 10}`}
            fill="none"
            stroke="rgba(59,159,255,0.3)"
            strokeWidth="1.5"
            animate={{
              stroke: ['rgba(59,159,255,0.2)', 'rgba(59,159,255,0.5)', 'rgba(59,159,255,0.2)'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        </motion.g>
      ))}
    </svg>
  )
}

/**
 * Floating Elements - Abstract tech shapes
 */
export function FloatingElements() {
  const elements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    size: Math.random() * 60 + 40,
    delay: Math.random() * 0.8,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full border border-[rgba(59,159,255,0.2)] bg-[rgba(59,159,255,0.05)]"
          style={{
            width: el.size,
            height: el.size,
            left: `${el.x}%`,
            top: `${el.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

/**
 * Glass Card Container with blur effect
 */
export function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-lg bg-white/[0.08] backdrop-blur-md border border-white/[0.15] shadow-[0_8px_32px_rgba(31,38,135,0.37)] ${className}`}
    >
      {children}
    </div>
  )
}

/**
 * Layered Background with glass effect
 */
export function LayeredGlassBackground() {
  return (
    <>
      {/* Base layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f2e] via-[#0a1420] to-[#051015] opacity-50" />
      {/* Glass layer 1 */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[rgba(59,159,255,0.08)] to-transparent opacity-40" />
      {/* Glass layer 2 */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[rgba(59,159,255,0.05)] to-transparent opacity-30" />
    </>
  )
}
