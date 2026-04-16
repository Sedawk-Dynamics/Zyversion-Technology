'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { FloatingNodeNetwork, DataFlowPattern, FloatingElements } from '@/components/utils/TechVisuals'
import Neural3D from '@/components/utils/Neural3D'

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 10 + 12,
  delay: Math.random() * 6,
  opacity: Math.random() * 0.5 + 0.1,
}))

const GRID_LINES_H = Array.from({ length: 8 }, (_, i) => i)
const GRID_LINES_V = Array.from({ length: 12 }, (_, i) => i)

const TYPEWRITER_PHRASES = [
  'We Build Experiences',
  'We Create Impact',
  'We Design the Future'
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacityOut = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  const [displayText, setDisplayText] = useState('')
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[currentPhraseIndex]
    const typingSpeed = isDeleting ? 40 : 80
    const pauseTime = 2000

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length)
        }
      }
    }, isDeleting && displayText.length === 0 ? pauseTime : typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentPhraseIndex])

  // Blinking cursor
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorTimer)
  }, [])

  const handleScrollDown = () => {
    const el = document.querySelector('#about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          poster="/images/hero-bg.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-[#080e1a]/65" />

        {/* Tech visuals layers */}
        <Neural3D />
        <FloatingNodeNetwork />
        <DataFlowPattern />

        {/* Floating tech label badges */}
        {/* <motion.div
          className="absolute top-16 left-8 lg:left-16 z-10 pointer-events-none"
          animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-2xl border border-[rgba(59,159,255,0.3)] bg-[rgba(26,45,71,0.6)] backdrop-blur-md shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(59,159,255,0.1)] to-transparent" />
            <div className="relative h-full flex flex-col items-center justify-center p-3 text-center">
              <div className="text-2xl mb-1">🤖</div>
              <span className="text-[10px] lg:text-xs font-semibold text-white/90 leading-tight">AI<br />Technology</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-20 right-8 lg:right-16 z-10 pointer-events-none"
          animate={{ y: [0, -15, 0], rotate: [2, -2, 2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <div className="relative w-32 h-32 lg:w-36 lg:h-36 rounded-2xl border border-[rgba(59,159,255,0.3)] bg-[rgba(26,45,71,0.6)] backdrop-blur-md shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(59,159,255,0.1)] to-transparent" />
            <div className="relative h-full flex flex-col items-center justify-center p-3 text-center">
              <div className="text-2xl mb-1">🌐</div>
              <span className="text-[10px] lg:text-xs font-semibold text-white/90 leading-tight">Data<br />Network</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-24 left-12 lg:left-20 z-10 pointer-events-none"
          animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-2xl border border-[rgba(59,159,255,0.3)] bg-[rgba(26,45,71,0.6)] backdrop-blur-md shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(59,159,255,0.1)] to-transparent" />
            <div className="relative h-full flex flex-col items-center justify-center p-3 text-center">
              <div className="text-xl mb-1">☁️</div>
              <span className="text-[10px] font-semibold text-white/90 leading-tight">Cloud<br />Solutions</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-12 lg:right-20 z-10 pointer-events-none"
          animate={{ y: [0, -14, 0], rotate: [1, -1, 1] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        >
          <div className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-2xl border border-[rgba(59,159,255,0.3)] bg-[rgba(26,45,71,0.6)] backdrop-blur-md shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(59,159,255,0.1)] to-transparent" />
            <div className="relative h-full flex flex-col items-center justify-center p-3 text-center">
              <div className="text-2xl mb-1">💡</div>
              <span className="text-[10px] lg:text-xs font-semibold text-white/90 leading-tight">Innovation</span>
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <svg className="w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          {GRID_LINES_H.map((i) => (
            <line
              key={`h-${i}`}
              x1="0" y1={`${(i / GRID_LINES_H.length) * 100}%`}
              x2="100%" y2={`${(i / GRID_LINES_H.length) * 100}%`}
              stroke="#3b9fff" strokeWidth="0.5"
            />
          ))}
          {GRID_LINES_V.map((i) => (
            <line
              key={`v-${i}`}
              x1={`${(i / GRID_LINES_V.length) * 100}%`} y1="0"
              x2={`${(i / GRID_LINES_V.length) * 100}%`} y2="100%"
              stroke="#3b9fff" strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#3b9fff]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [p.opacity, p.opacity * 2, p.opacity],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Glowing accent blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#3b9fff]/[0.06] blur-[120px] pointer-events-none z-[2]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#0d2d5e]/50 blur-[80px] pointer-events-none z-[2]" />

      {/* Hero content */}
      <motion.div
        style={{ y: textY, opacity: opacityOut }}
        className="relative z-10 text-center max-w-5xl mx-auto px-6 lg:px-8 pt-24"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-sm border border-[#3b9fff] bg-[rgba(59,159,255,0.12)] backdrop-blur-sm mb-8 shadow-[0_0_30px_rgba(59,159,255,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#3b9fff] animate-pulse" />
          <span className="text-[#3b9fff] text-sm font-bold tracking-widest uppercase">
            Engineered Intelligence
          </span>
          <span className="w-2 h-2 rounded-full bg-[#3b9fff] animate-pulse" />
        </motion.div>

        {/* Headline with typewriter effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="font-display font-bold text-[#f0f4ff] text-balance leading-tight mb-6"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          <div className="min-h-[1.2em]">
            {displayText}
            <motion.span
              animate={{ opacity: showCursor ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-block ml-1 w-[3px] h-[1.1em] bg-[#3b9fff] align-middle"
            />
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-[#7a93b8] text-lg leading-relaxed max-w-2xl mx-auto mb-12 text-pretty"
        >
          Zyverion delivers next-generation AI-driven solutions, custom software, and scalable
          cloud infrastructure that empowers enterprises to thrive in the digital era.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => {
              const el = document.querySelector('#services')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group flex items-center gap-2 px-8 py-3.5 bg-[#3b9fff] text-[#080e1a] font-semibold rounded-sm hover:bg-[#6db8ff] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#3b9fff] focus:ring-offset-2 focus:ring-offset-[#080e1a]"
          >
            Explore Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3.5 border border-[rgba(59,159,255,0.4)] text-[#f0f4ff] font-semibold rounded-sm hover:border-[#3b9fff] hover:bg-[rgba(59,159,255,0.08)] transition-all duration-200 focus:outline-none"
          >
            Start a Project
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: '15+', label: 'Services Offered' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Technical Support' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="font-display font-bold text-[#3b9fff]"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
              >
                {stat.value}
              </p>
              <p className="text-[#7a93b8] text-sm tracking-wide mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#7a93b8] hover:text-[#3b9fff] transition-colors focus:outline-none"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-[0.15em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}
