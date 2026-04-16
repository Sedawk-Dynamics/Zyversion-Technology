
'use client'

import { motion } from 'framer-motion'

const Neural3D = () => {
  // Generate 3D-like neural network with layered nodes
  const layers = 3
  const nodesPerLayer = 8
  const nodes = []

  for (let layer = 0; layer < layers; layer++) {
    for (let i = 0; i < nodesPerLayer; i++) {
      const angle = (i / nodesPerLayer) * Math.PI * 2
      const depth = layer * 30
      const radius = 60 + depth
      
      nodes.push({
        id: `${layer}-${i}`,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        z: depth,
        layer,
        index: i,
      })
    }
  }

  // Connect nearby nodes
  const connections = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const n1 = nodes[i]
      const n2 = nodes[j]
      const dist = Math.sqrt((n1.x - n2.x) ** 2 + (n1.y - n2.y) ** 2 + (n1.z - n2.z) ** 2)
      
      if (dist < 100 && Math.abs(n1.layer - n2.layer) <= 1) {
        connections.push({ from: i, to: j, dist })
      }
    }
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="-200 -200 400 400"
        preserveAspectRatio="xMidYMid meet"
        className="absolute opacity-60"
      >
        {/* Background glow */}
        <defs>
          <radialGradient id="neuralGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b9fff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0d2d5e" stopOpacity="0.05" />
          </radialGradient>
          <filter id="neuralGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Gradient background */}
        <circle cx="0" cy="0" r="150" fill="url(#neuralGradient)" />

        {/* Connection lines with animation */}
        {connections.map((conn, idx) => {
          const n1 = nodes[conn.from]
          const n2 = nodes[conn.to]
          return (
            <motion.line
              key={`conn-${idx}`}
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke="#3b9fff"
              strokeWidth="0.5"
              opacity="0.2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 2,
                delay: idx * 0.02,
                repeatType: 'reverse',
                repeat: Infinity,
              }}
              filter="url(#neuralGlow)"
            />
          )
        })}

        {/* Animated nodes */}
        {nodes.map((node, idx) => (
          <motion.g key={node.id}>
            {/* Outer glow ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill="none"
              stroke="#3b9fff"
              strokeWidth="0.5"
              opacity="0.4"
              animate={{
                r: [3, 5, 3],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 3 + (idx % 3),
                repeat: Infinity,
                delay: idx * 0.1,
              }}
            />

            {/* Core node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="1.5"
              fill="#3b9fff"
              opacity="0.8"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2 + (node.layer * 0.5),
                repeat: Infinity,
                delay: idx * 0.08,
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

export default Neural3D
