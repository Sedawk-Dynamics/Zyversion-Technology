'use client'

import { motion } from 'framer-motion'
import { Shield, Sparkles, Rocket, Zap } from 'lucide-react'
import { FloatingElements } from '@/components/utils/TechVisuals'

const trustItems = [
  { icon: Shield, label: 'Enterprise-Grade Security' },
  { icon: Sparkles, label: 'AI-Powered Solutions' },
  { icon: Rocket, label: 'Scalable Architecture' },
  { icon: Zap, label: 'Real-Time Performance' },
]

export default function TrustBar() {
  return (
    <section className="relative py-8 border-t border-b border-[rgba(59,159,255,0.2)] bg-gradient-to-r from-[rgba(59,159,255,0.12)] via-[rgba(20,30,50,0.5)] to-[rgba(59,159,255,0.12)] backdrop-blur-sm overflow-hidden">
      {/* Tech visuals */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElements />
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(ellipse 100% 40% at 50% 0%, rgba(59,159,255,0.08) 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-12">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.23, 1, 0.320, 1] }}
              viewport={{ once: true }}
              className="flex items-center gap-3 group cursor-default"
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ duration: 0.3 }}
                className="w-11 h-11 rounded-sm bg-[rgba(59,159,255,0.12)] border border-[rgba(59,159,255,0.2)] flex items-center justify-center group-hover:bg-[rgba(59,159,255,0.18)] transition-all duration-300"
              >
                <item.icon size={20} className="text-[#3b9fff]" />
              </motion.div>
              <motion.span 
                className="text-[#f0f4ff] font-medium text-sm tracking-wide whitespace-nowrap group-hover:text-[#6db8ff] transition-colors duration-300"
              >
                {item.label}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
