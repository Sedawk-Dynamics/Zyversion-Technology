'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import { DataFlowPattern, FloatingElements } from '@/components/utils/TechVisuals'

const TESTIMONIALS = [
  {
    name: 'Rajiv Sharma',
    role: 'CTO, NovaTech Solutions',
    quote:
      'Zyverion transformed our legacy infrastructure into a cloud-native platform in record time. Their technical depth and delivery precision are genuinely best-in-class.',
    initials: 'RS',
  },
  {
    name: 'Priya Nair',
    role: 'VP Engineering, FinEdge India',
    quote:
      'The AI-powered analytics dashboard Zyverion built for us has become mission-critical. The team truly understood our domain and delivered something exceptional.',
    initials: 'PN',
  },
  {
    name: 'Arjun Kapoor',
    role: 'Founder, LogiScale',
    quote:
      'What stood out was their commitment. Even post-delivery, the Zyverion team was available, responsive, and proactive. A true technology partner.',
    initials: 'AK',
  },
  {
    name: 'Meera Joshi',
    role: 'Director of IT, SecureVault Corp',
    quote:
      'Their cybersecurity audit uncovered vulnerabilities we had no idea existed. Their recommendations were pragmatic, thorough, and implemented seamlessly.',
    initials: 'MJ',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-[#1a2d47] via-[#15253f] to-[#142238]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <DataFlowPattern />
        <FloatingElements />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(59,159,255,0.05)] via-transparent to-[rgba(59,159,255,0.02)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0d2d5e]/15 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#3b9fff]" />
            <span className="text-[#3b9fff] text-xs font-semibold tracking-[0.2em] uppercase">
              Client Voices
            </span>
            <div className="w-8 h-px bg-[#3b9fff]" />
          </div>
          <h2
            className="font-bold text-[#f0f4ff] text-balance leading-tight"
            style={{ fontFamily: 'var(--font-display, var(--font-sans))', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.23, 1, 0.320, 1] }}
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(59,159,255,0.15)' }}
              className="group relative p-8 border border-[rgba(59,159,255,0.12)] bg-[rgba(13,22,40,0.6)] hover:border-[rgba(59,159,255,0.3)] hover:bg-[rgba(59,159,255,0.03)] transition-all duration-300 overflow-hidden cursor-default"
            >
              <motion.div 
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b9fff] to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{ originX: 0 }}
              />

              {/* Quote icon animation */}
              <motion.div
                initial={{ opacity: 0.2 }}
                animate={isInView ? { opacity: 0.3 } : {}}
                whileHover={{ opacity: 0.5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="mb-5"
              >
                <Quote size={28} className="text-[#3b9fff]" />
              </motion.div>

              <motion.p 
                className="text-[#c8d8f0] text-base leading-relaxed mb-8 italic relative z-10"
                initial={{ opacity: 0.85 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                &ldquo;{t.quote}&rdquo;
              </motion.p>

              <motion.div 
                className="flex items-center gap-4 relative z-10"
                initial={{ y: 0 }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                {/* Avatar */}
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-11 h-11 rounded-sm bg-[#0d2d5e] border border-[rgba(59,159,255,0.3)] flex items-center justify-center shrink-0"
                >
                  <span className="text-[#3b9fff] font-bold text-sm">{t.initials}</span>
                </motion.div>
                <div>
                  <p className="text-[#f0f4ff] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#7a93b8] text-xs mt-0.5">{t.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
