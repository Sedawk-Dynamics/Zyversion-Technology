'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Lightbulb,
  Users,
  Shield,
  Zap,
  Globe,
  HeartHandshake,
} from 'lucide-react'
import { HexagonGrid } from '@/components/utils/TechVisuals'
import Neural3D from '@/components/utils/Neural3D'

const differentiators = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description:
      'We push the boundaries of what technology can do — integrating AI, automation, and cutting-edge frameworks to solve real business challenges with precision.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description:
      'Every solution we engineer is tailored around your unique objectives. We listen, understand, and deliver systems built specifically for your goals.',
  },
  {
    icon: Shield,
    title: 'Security by Design',
    description:
      'Security is not an afterthought. Every product we deliver is built with enterprise-grade security principles embedded from the ground up.',
  },
  {
    icon: Zap,
    title: 'Speed & Precision',
    description:
      'We combine agile delivery with rigorous engineering discipline — shipping fast without compromising quality, reliability, or scalability.',
  },
  {
    icon: Globe,
    title: 'End-to-End Expertise',
    description:
      'From ideation through deployment and ongoing support, Zyverion is your single partner across the full technology stack.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    description:
      'We measure success by your success. Our relationships go beyond project delivery — we grow alongside our clients as a trusted technology partner.',
  },
]

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="why-us"
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-[#1a2d47] via-[#15253f] to-[#182944]"
    >
      {/* Tech visual layers with Floating 3D Neural Element */}
      <div className="absolute inset-0 pointer-events-none">
        <Neural3D />
        <HexagonGrid />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[#0d2d5e]/15 blur-[160px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(59,159,255,0.06)] via-transparent to-[rgba(59,159,255,0.03)]" />
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
              Why Choose Us
            </span>
            <div className="w-8 h-px bg-[#3b9fff]" />
          </div>
          <h2
            className="font-bold text-[#f0f4ff] text-balance leading-tight"
            style={{ fontFamily: 'var(--font-display, var(--font-sans))', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            The Zyverion Advantage
          </h2>
          <p className="text-[#7a93b8] max-w-xl mx-auto mt-4 leading-relaxed text-pretty">
            We combine deep technical expertise with a relentless focus on delivering real,
            measurable outcomes for every client.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.23, 1, 0.320, 1] }}
              whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(59,159,255,0.15)' }}
              className="group relative p-8 border border-[rgba(59,159,255,0.12)] bg-[rgba(13,22,40,0.6)] hover:border-[rgba(59,159,255,0.35)] hover:bg-[rgba(59,159,255,0.04)] transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* Top line accent on hover */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b9fff] to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{ originX: 0 }}
              />

              {/* Floating background glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 40% 40% at 50% 50%, rgba(59,159,255,0.1) 0%, transparent 70%)',
                }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: -5 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-12 h-12 rounded-sm bg-[rgba(59,159,255,0.1)] border border-[rgba(59,159,255,0.2)] flex items-center justify-center mb-6 group-hover:bg-[rgba(59,159,255,0.18)] transition-all duration-300 relative z-10"
              >
                <item.icon size={22} className="text-[#3b9fff]" />
              </motion.div>

              <h3 className="text-[#f0f4ff] font-semibold text-lg mb-3 leading-snug relative z-10">
                {item.title}
              </h3>
              <p className="text-[#7a93b8] text-sm leading-relaxed relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
