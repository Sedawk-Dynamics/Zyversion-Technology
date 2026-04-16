'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { DataFlowPattern, FloatingElements } from '@/components/utils/TechVisuals'

export default function CTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-[#1a2d47] via-[#15253f] to-[#142238]"
    >
      {/* Tech visuals and layered backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <DataFlowPattern />
        <FloatingElements />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(59,159,255,0.06)] via-[rgba(59,159,255,0.02)] to-transparent" />
      </div>

      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#080e1a]/70" aria-hidden="true" />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,159,255,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Border lines top/bottom */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(59,159,255,0.2)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[rgba(59,159,255,0.2)]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.320, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-sm border border-[rgba(59,159,255,0.3)] bg-[rgba(59,159,255,0.08)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b9fff] animate-pulse" />
            <span className="text-[#6db8ff] text-xs font-semibold tracking-widest uppercase">
              Ready to Start?
            </span>
          </div>

          <h2
            className="font-bold text-[#f0f4ff] text-balance leading-tight"
            style={{ fontFamily: 'var(--font-display, var(--font-sans))', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Let&apos;s Engineer Your{' '}
            <span className="text-[#3b9fff]">Digital Future</span> Together
          </h2>

          <p className="text-[#7a93b8] max-w-xl leading-relaxed text-pretty text-lg">
            Partner with Zyverion Technologies to build intelligent, scalable, and
            future-ready systems that give your business a lasting competitive edge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={(e) => {}}
              onClick={() => {
                const el = document.querySelector('#contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative flex items-center justify-center gap-2 px-8 py-3.5 bg-[#3b9fff] text-[#080e1a] font-bold rounded-sm hover:bg-[#6db8ff] transition-all duration-200 shadow-[0_0_40px_rgba(59,159,255,0.35)] text-sm tracking-wide overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative flex items-center gap-2">
                Start a Conversation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#3b9fff', backgroundColor: 'rgba(59,159,255,0.08)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const el = document.querySelector('#services')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3.5 border border-[rgba(59,159,255,0.4)] text-[#f0f4ff] font-semibold rounded-sm transition-all duration-200 text-sm"
            >
              View All Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
