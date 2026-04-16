'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { FloatingNodeNetwork, DataFlowPattern } from '@/components/utils/TechVisuals'

export default function FounderReveal() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <section
      id="founder-reveal"
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-[#182944] via-[#15253f] to-[#1a2d47]"
    >
      {/* Tech visuals and glass layers */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingNodeNetwork />
        <DataFlowPattern />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(59,159,255,0.05)] via-transparent to-[rgba(59,159,255,0.02)]" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="font-bold text-[#f0f4ff] text-balance leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Meet the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b9fff] to-[#6db8ff]">
              Visionary Leader
            </span>
          </h2>
          <p className="text-[#7a93b8] text-lg max-w-2xl mx-auto">
            Discover the story behind Zyverion Technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Reveal section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.320, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Card background */}
              <motion.div
                className="absolute -inset-4 rounded-sm bg-gradient-to-br from-[#3b9fff]/20 to-[#0d2d5e]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ opacity: isRevealed ? 0.1 : 0 }}
              />

              {/* Blurred placeholder (before reveal) */}
              {!isRevealed && (
                <motion.div
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 z-20 bg-[rgba(8,14,26,0.95)] backdrop-blur-2xl rounded-sm flex items-center justify-center border border-[rgba(59,159,255,0.15)]"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="mb-4"
                    >
                      <div className="w-16 h-16 rounded-sm bg-[rgba(59,159,255,0.1)] border border-[rgba(59,159,255,0.3)] flex items-center justify-center mx-auto">
                        <span className="text-[#3b9fff] text-2xl">?</span>
                      </div>
                    </motion.div>
                    <p className="text-[#7a93b8] text-sm font-medium">Tap to reveal</p>
                  </div>
                </motion.div>
              )}

              {/* Image container */}
              <motion.div
                className="relative overflow-hidden rounded-sm h-[560px] group"
                layout
              >
                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={isRevealed ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full h-full"
                >
                  <Image
                    src="/images/founder.jpg"
                    alt="Shivam Mishra — Founder & CEO, Zyverion Technologies"
                    width={480}
                    height={560}
                    className="w-full h-full object-cover"
                    style={{ width: 'auto', height: 'auto' }}
                    priority
                  />
                  {/* Overlay effect */}
                  <motion.div
                    initial={{ opacity: 0.3 }}
                    animate={isRevealed ? { opacity: 0 } : { opacity: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-[#0d2d5e]/20 pointer-events-none"
                  />
                </motion.div>

                {/* Reveal button (overlay on image when revealed) */}
                {!isRevealed && (
                  <motion.button
                    onClick={() => setIsRevealed(true)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute inset-0 z-30 flex items-center justify-center group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(59,159,255,0.4)' }}
                      className="px-8 py-3.5 bg-[#3b9fff] text-[#080e1a] font-semibold rounded-sm transition-all duration-300 hover:bg-[#6db8ff]"
                    >
                      Click to Reveal
                    </motion.div>
                  </motion.button>
                )}
              </motion.div>

              {/* Reveal name card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isRevealed ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 z-40 bg-[#0d1628]/95 backdrop-blur-md border-t border-[rgba(59,159,255,0.2)] px-6 py-5"
              >
                <p className="text-[#f0f4ff] font-bold text-lg">Shivam Mishra</p>
                <p className="text-[#3b9fff] text-xs font-semibold tracking-widest uppercase mt-1">
                  Founder &amp; Chief Executive Officer
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Information */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.320, 1], delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-bold text-[#f0f4ff] leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
            >
              Vision & Leadership
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <p className="text-[#7a93b8] leading-relaxed">
                Shivam Mishra founded Zyverion Technologies with a clear mission: to bridge the
                gap between cutting-edge technology and real-world business challenges. His vision
                is to create systems that are not just intelligent, but evolve alongside their users.
              </p>
              <p className="text-[#7a93b8] leading-relaxed">
                With deep expertise in AI, cloud infrastructure, and enterprise software development,
                Shivam leads Zyverion's charge toward a future where technology truly empowers businesses
                to innovate fearlessly and scale infinitely.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 gap-4 mt-4"
            >
              {[
                { label: 'Years in Tech', value: '10+' },
                { label: 'Solutions Delivered', value: '50+' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, borderColor: 'rgba(59,159,255,0.4)' }}
                  className="p-4 border border-[rgba(59,159,255,0.12)] bg-[rgba(59,159,255,0.04)] rounded-sm transition-all duration-300"
                >
                  <p className="text-[#3b9fff] font-bold text-xl">{stat.value}</p>
                  <p className="text-[#7a93b8] text-xs tracking-wide mt-2 uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                const el = document.querySelector('#contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="mt-4 px-6 py-3 bg-[#3b9fff] text-[#080e1a] font-semibold rounded-sm hover:bg-[#6db8ff] transition-all duration-200 w-fit"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
