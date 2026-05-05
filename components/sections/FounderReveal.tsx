'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { FloatingNodeNetwork, DataFlowPattern } from '@/components/utils/TechVisuals'

export default function FounderReveal() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="founder-reveal"
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-[#182944] via-[#15253f] to-[#1a2d47]"
    >
      {/* Background visuals */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingNodeNetwork />
        <DataFlowPattern />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(59,159,255,0.05)] via-transparent to-[rgba(59,159,255,0.02)]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="font-bold text-[#f0f4ff] leading-tight mb-4"
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

          {/* LEFT: Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">

              <div className="relative overflow-hidden rounded-sm h-[560px]">
                <Image
                  src="/images/ok.jpeg"
                  alt="Shivam RAI — Founder & Director"
                  width={480}
                  height={560}
                  className="w-full h-full object-cover"
                  priority
                />

                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#0d1628]/95 backdrop-blur-md border-t border-[rgba(59,159,255,0.2)] px-6 py-5">
                  <p className="text-[#f0f4ff] font-bold text-lg">
                    Shivam RAI
                  </p>
                  <p className="text-[#3b9fff] text-xs font-semibold tracking-widest uppercase mt-1">
                    Founder & Director
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-bold text-[#f0f4ff]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
            >
              Vision & Leadership
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <p className="text-[#7a93b8] leading-relaxed">
                Shivam RAI founded Zyverion Technologies with a clear mission: to bridge the
                gap between cutting-edge technology and real-world business challenges.
                His vision is to create systems that are not just intelligent, but evolve
                alongside their users.
              </p>

              <p className="text-[#7a93b8] leading-relaxed">
                With deep expertise in AI, cloud infrastructure, and enterprise software development,
                Shivam leads Zyverion's charge toward a future where technology empowers businesses
                to innovate fearlessly and scale efficiently.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mt-4"
            >
              {[
                { label: 'Years in Tech', value: '10+' },
                { label: 'Solutions Delivered', value: '50+' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 border border-[rgba(59,159,255,0.12)] bg-[rgba(59,159,255,0.04)] rounded-sm"
                >
                  <p className="text-[#3b9fff] font-bold text-xl">{stat.value}</p>
                  <p className="text-[#7a93b8] text-xs uppercase mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
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