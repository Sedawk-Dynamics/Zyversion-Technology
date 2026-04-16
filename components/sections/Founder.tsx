'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { HexagonGrid, FloatingElements } from '@/components/utils/TechVisuals'

export default function Founder() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="founder"
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-[#1a2d47] via-[#15253f] to-[#142238]"
    >
      {/* Tech visuals and glass layers */}
      <div className="absolute inset-0 pointer-events-none">
        <HexagonGrid />
        <FloatingElements />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(59,159,255,0.04)] via-transparent to-[rgba(59,159,255,0.02)]" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3b9fff]/[0.04] blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <div className="w-8 h-px bg-[#3b9fff]" />
          <span className="text-[#3b9fff] text-xs font-semibold tracking-[0.2em] uppercase">
            Leadership
          </span>
          <div className="w-8 h-px bg-[#3b9fff]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.320, 1] }}
            className="relative flex justify-center group"
          >
            <div className="relative w-full max-w-sm">
              {/* Animated glow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -inset-3 rounded-sm bg-gradient-to-b from-[#3b9fff]/20 via-[#3b9fff]/0 to-[#0d2d5e]/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              />
              
              {/* Corner brackets */}
              <motion.div 
                className="absolute -top-4 -left-4 w-14 h-14 border-t-2 border-l-2 border-[#3b9fff] z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-14 h-14 border-b-2 border-r-2 border-[#3b9fff] z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
              />

              {/* Blue glow behind image */}
              <div className="absolute inset-0 bg-[#3b9fff]/10 blur-2xl rounded-sm" />

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/images/founder.jpg"
                  alt="Shivam Mishra — Founder & CEO, Zyverion Technologies"
                  width={480}
                  height={560}
                  className="relative w-full h-auto object-cover rounded-sm z-[1]"
                />
              </motion.div>

              {/* Name card overlay */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 z-[2] bg-[#0d1628]/90 backdrop-blur-sm border-t border-[rgba(59,159,255,0.2)] px-6 py-4"
              >
                <p className="text-[#f0f4ff] font-semibold text-base">Shivam Mishra</p>
                <p className="text-[#3b9fff] text-xs font-medium tracking-wide mt-0.5">
                  Founder &amp; Chief Executive Officer
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Message */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.320, 1], delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <h2
              className="font-bold text-[#f0f4ff] text-balance leading-tight"
              style={{ fontFamily: 'var(--font-display, var(--font-sans))', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              A Message from{' '}
              <span className="text-[#3b9fff]">Our Founder</span>
            </h2>

            {/* Large decorative quote mark */}
            <div className="text-[#3b9fff]/20 font-serif leading-none select-none" style={{ fontSize: '6rem' }} aria-hidden="true">
              &ldquo;
            </div>

            <div className="flex flex-col gap-5 -mt-10">
              <p className="text-[#7a93b8] leading-relaxed text-pretty">
                At Zyverion, we were founded on a simple but powerful belief — that technology,
                when engineered with intelligence and purpose, becomes the ultimate engine of
                progress. We are not just building software; we are building systems that think,
                adapt, and grow with the businesses they serve.
              </p>
              <p className="text-[#7a93b8] leading-relaxed text-pretty">
                Our team&apos;s passion is to bridge the gap between complex technological
                possibilities and real-world business needs — with precision, creativity, and an
                uncompromising commitment to excellence. Every line of code, every solution we
                deliver, carries the ambition to make our clients more powerful, more resilient,
                and more future-ready.
              </p>
              <p className="text-[#7a93b8] leading-relaxed text-pretty">
                This is only the beginning of what Zyverion will build together with its partners
                and clients. Welcome to the future of engineered intelligence.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-2 pt-6 border-t border-[rgba(59,159,255,0.15)]">
              <p className="text-[#f0f4ff] font-semibold">Shivam Mishra</p>
              <p className="text-[#7a93b8] text-sm mt-0.5">Founder &amp; CEO, Zyverion Technologies</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
