'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Eye, Flame, Star, Handshake } from 'lucide-react'
import { HexagonGrid, FloatingElements, FloatingNodeNetwork } from '@/components/utils/TechVisuals'

const VALUES = [
  {
    icon: Target,
    title: 'Mission',
    label: 'Our Purpose',
    body: 'To empower businesses through next-generation digital solutions — delivering intelligent, scalable, and future-ready systems that create lasting impact and competitive advantage.',
    accent: true,
  },
  {
    icon: Eye,
    title: 'Vision',
    label: 'Where We Are Going',
    body: 'To become a globally recognised technology company known for engineering self-evolving digital infrastructure that defines the future of enterprise technology.',
    accent: false,
  },
  {
    icon: Flame,
    title: 'Innovation',
    label: 'Core Value',
    body: 'We continuously push the boundaries of what is possible — adopting emerging technologies and developing creative solutions to solve complex business challenges.',
    accent: false,
  },
  {
    icon: Star,
    title: 'Excellence',
    label: 'Core Value',
    body: 'We hold ourselves to the highest standards of engineering and delivery quality, ensuring every product we ship exceeds expectations in performance, reliability, and design.',
    accent: false,
  },
  {
    icon: Handshake,
    title: 'Integrity',
    label: 'Core Value',
    body: 'We operate with transparency and honesty in every engagement — building trust through consistent delivery, ethical practices, and long-term accountability to our clients.',
    accent: false,
  },
]

export default function Values() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="values"
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-[#1a2d47] via-[#15253f] to-[#182944]"
    >
      {/* Tech visuals and layered backgrounds with neural network */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <HexagonGrid />
        <FloatingNodeNetwork />
        <FloatingElements />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(59,159,255,0.05)] via-transparent to-[rgba(59,159,255,0.03)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[rgba(59,159,255,0.05)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-[rgba(59,159,255,0.05)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#0d2d5e]/20 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#3b9fff]" />
            <span className="text-[#3b9fff] text-xs font-semibold tracking-[0.2em] uppercase">
              Mission &amp; Values
            </span>
            <div className="w-8 h-px bg-[#3b9fff]" />
          </div>
          <h2
            className="font-bold text-[#f0f4ff] text-balance leading-tight"
            style={{ fontFamily: 'var(--font-display, var(--font-sans))', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            What Drives Us Forward
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.23, 1, 0.320, 1] }}
              whileHover={{ 
                y: -6, 
                boxShadow: value.accent 
                  ? '0 20px 50px rgba(59,159,255,0.2)' 
                  : '0 16px 40px rgba(59,159,255,0.12)' 
              }}
              className={`group relative p-8 border transition-all duration-300 overflow-hidden cursor-default ${
                value.accent
                  ? 'border-[rgba(59,159,255,0.5)] bg-[rgba(59,159,255,0.06)] lg:col-span-1 shadow-[0_0_40px_rgba(59,159,255,0.1)]'
                  : 'border-[rgba(59,159,255,0.12)] bg-[rgba(13,22,40,0.6)] hover:border-[rgba(59,159,255,0.3)] hover:bg-[rgba(59,159,255,0.04)]'
              }`}
            >
              {/* Top bar for accent card */}
              {value.accent && (
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3b9fff] to-transparent"
                  initial={{ scaleX: 0.3 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ originX: 0.5 }}
                />
              )}
              {!value.accent && (
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b9fff] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ originX: 0 }}
                />
              )}

              <span className="text-[#7a93b8] text-[10px] font-bold tracking-widest uppercase mb-3 block">
                {value.label}
              </span>

              <div className="flex items-center gap-3 mb-5">
                <motion.div 
                  whileHover={{ scale: 1.12, rotate: -3 }}
                  transition={{ duration: 0.3 }}
                  className={`w-11 h-11 rounded-sm border flex items-center justify-center shrink-0 ${
                  value.accent
                    ? 'bg-[#3b9fff] border-[#3b9fff]'
                    : 'bg-[rgba(59,159,255,0.1)] border-[rgba(59,159,255,0.2)] group-hover:bg-[rgba(59,159,255,0.18)] transition-colors'
                }`}>
                  <value.icon size={20} className={value.accent ? 'text-[#080e1a]' : 'text-[#3b9fff]'} />
                </motion.div>
                <h3 className="text-[#f0f4ff] font-semibold text-xl">{value.title}</h3>
              </div>

              <p className="text-[#7a93b8] text-sm leading-relaxed">{value.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
