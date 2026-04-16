'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { FloatingNodeNetwork } from '@/components/utils/TechVisuals'

const pillars = [
  { number: '01', label: 'Custom-Engineered Systems' },
  { number: '02', label: 'AI-Driven Intelligence' },
  { number: '03', label: 'Cloud-Native Architecture' },
  { number: '04', label: 'Cyber-Secure by Design' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-[#1a2d47] via-[#15253f] to-[#1a2d47]"
    >
      {/* Neural network connecting background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingNodeNetwork />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(59,159,255,0.05)] via-transparent to-[rgba(59,159,255,0.03)]" />
      </div>
      
      {/* Subtle background glow with blue-aligned tones */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#0d2d5e]/20 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3b9fff]/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Image + decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.320, 1] }}
            className="relative order-2 lg:order-1 group"
          >
            <div className="relative">
              {/* Animated glow border */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -inset-2 rounded-sm bg-gradient-to-r from-[#3b9fff]/0 via-[#3b9fff]/10 to-[#3b9fff]/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              />
              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#3b9fff] z-10" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#3b9fff] z-10" />

              {/* Main image */}
              <div className="overflow-hidden rounded-sm relative">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="w-full h-full"
                >
                  <Image
                    src="/images/about-visual.jpg"
                    alt="Zyverion Technologies team working on advanced technology solutions"
                    width={680}
                    height={520}
                    className="w-full h-auto object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-[#0d2d5e]/20 rounded-sm"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-[#0d1628] border border-[rgba(59,159,255,0.25)] px-6 py-4 shadow-xl z-20"
              >
                <p className="font-display font-bold text-3xl text-[#3b9fff]">15+</p>
                <p className="text-[#7a93b8] text-sm mt-0.5">Technology Services</p>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-5 -right-4 bg-[#3b9fff] px-4 py-2 shadow-xl z-20"
              >
                <p className="text-[#080e1a] font-semibold text-xs tracking-wide uppercase">
                  Next-Gen Tech
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.320, 1], delay: 0.1 }}
            className="order-1 lg:order-2 flex flex-col gap-8"
          >
            {/* Section label */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#3b9fff]" />
              <span className="text-[#3b9fff] text-xs font-semibold tracking-[0.2em] uppercase">
                About Zyverion
              </span>
            </div>

            <h2 className="font-display font-bold text-[#f0f4ff] text-balance leading-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              Engineering Intelligent Systems That{' '}
              <span className="text-[#3b9fff]">Evolve & Scale</span>
            </h2>

            <p className="text-[#7a93b8] leading-relaxed text-pretty">
              Zyverion Technologies is a next-generation IT company focused on engineering
              intelligent and scalable digital infrastructure. We build future-ready systems that
              combine innovation, precision, and advanced technology to empower modern businesses
              to operate efficiently and grow sustainably.
            </p>

            <p className="text-[#7a93b8] leading-relaxed text-pretty">
              From AI-driven automation and cloud platforms to enterprise software and
              cybersecurity, Zyverion delivers end-to-end solutions that transform how
              organizations leverage technology — creating lasting competitive advantage.
            </p>

            {/* Pillars grid */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: 'easeOut' }}
                  whileHover={{ y: -4, borderColor: 'rgba(59,159,255,0.4)', backgroundColor: 'rgba(59,159,255,0.08)' }}
                  className="flex items-start gap-3 p-4 border border-[rgba(59,159,255,0.12)] bg-[rgba(59,159,255,0.04)] rounded-sm transition-all duration-200 group cursor-default"
                >
                  <span className="text-[#3b9fff] font-mono text-xs font-bold shrink-0 mt-0.5">
                    {pillar.number}
                  </span>
                  <span className="text-[#f0f4ff] text-sm font-medium leading-snug">
                    {pillar.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.querySelector('#contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group self-start flex items-center gap-2 text-[#3b9fff] font-semibold text-sm hover:gap-3 transition-all duration-200 focus:outline-none"
            >
              Partner With Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
