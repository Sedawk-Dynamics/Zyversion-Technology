"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  Smartphone,
  Code2,
  Cloud,
  Shield,
  Zap,
} from "lucide-react"

const SERVICES = [
  {
    icon: Smartphone,
    badge: "Mobile Solutions",
    title: "Mobile App Development",
    desc: "We build high-performance mobile applications that deliver seamless user experiences across iOS and Android platforms.",
    features: [
      "Cross-platform compatibility",
      "Real-time synchronization",
      "Advanced security features",
      "Built-in analytics",
    ],
    stats: [
      { value: "4.8★", label: "App Rating" },
      { value: "85%", label: "Retention" },
      { value: "2x Faster", label: "Delivery" },
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    icon: Code2,
    badge: "Software",
    title: "Custom Software Development",
    desc: "We design scalable and robust software tailored to your business processes and long-term growth strategy.",
    features: [
      "Enterprise-grade architecture",
      "High scalability systems",
      "API integrations",
      "Secure backend systems",
    ],
    stats: [
      { value: "99%", label: "Reliability" },
      { value: "95%", label: "Performance" },
      { value: "10x", label: "Scalability" },
    ],
    tech: ["Node.js", "Next.js", "Java", "Python"],
  },
  {
    icon: Cloud,
    badge: "Cloud & DevOps",
    title: "Cloud Infrastructure",
    desc: "Modern cloud architecture with automation, CI/CD pipelines, and scalable deployments.",
    features: [
      "CI/CD automation",
      "Cloud scalability",
      "Monitoring & logging",
      "Zero downtime deployments",
    ],
    stats: [
      { value: "99.9%", label: "Uptime" },
      { value: "60%", label: "Cost Saving" },
      { value: "3x Faster", label: "Deployments" },
    ],
    tech: ["AWS", "Docker", "Kubernetes", "Azure"],
  },
  {
    icon: Shield,
    badge: "Security",
    title: "Cybersecurity Solutions",
    desc: "Protect your business with advanced security systems, audits, compliance, and real-time monitoring.",
    features: [
      "Threat detection",
      "Data encryption",
      "Compliance management",
      "Security audits",
    ],
    stats: [
      { value: "99%", label: "Threat Prevention" },
      { value: "100%", label: "Compliance" },
      { value: "24/7", label: "Monitoring" },
    ],
    tech: ["ISO", "SOC2", "Firewall", "SIEM"],
  },
]

const TypewriterText = ({ text, delayOffset }: { text: string; delayOffset: number }) => {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let currentIndex = 0
    let isDeleting = false
    let isMounted = true

    const type = () => {
      if (!isMounted) return

      if (!isDeleting) {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
          timeout = setTimeout(type, 50)
        } else {
          isDeleting = true
          timeout = setTimeout(type, 2000 + Math.random() * 1000) // Stay time
        }
      } else {
        if (currentIndex >= 0) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex--
          timeout = setTimeout(type, 20)
        } else {
          isDeleting = false
          timeout = setTimeout(type, 1000)
        }
      }
    }

    // Initial start delay
    timeout = setTimeout(type, delayOffset * 1000)

    return () => {
      isMounted = false
      clearTimeout(timeout)
    }
  }, [text, delayOffset])

  return (
    <span className="inline-block relative whitespace-nowrap">
      <span className="opacity-0">{text}</span>
      <span className="absolute inset-0 left-0 top-0 text-white/90 flex items-center">
        {displayedText}
        <span className="inline-block w-[2px] h-[1em] bg-purple-400 ml-[2px] animate-pulse" />
      </span>
    </span>
  )
}

class Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas
    this.ctx = ctx
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.vx = (Math.random() - 0.5) * 0.8
    this.vy = (Math.random() - 0.5) * 0.8
    this.size = Math.random() * 2 + 1
  }

  update() {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1
    if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
    this.ctx.fill()
  }
}

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth
        canvas.height = canvas.parentElement.offsetHeight
      } else {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const numParticles = Math.floor((canvas.width * canvas.height) / 12000)
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(canvas, ctx))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
        
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.25 - distance / 600})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    resize()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full mix-blend-screen opacity-70" />
  )
}

export default function ServicesZigZagPremium() {
  return (
    <section className="py-28 bg-[#192D4B] text-white relative overflow-hidden">

      {/* Enhanced Background Motion & Grid Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Orbs */}
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-purple-500/10 blur-[100px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full" 
        />

        {/* Node Connecting Animation */}
        <ParticleNetwork />
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-32 relative z-10">

        {SERVICES.map((service, index) => {
          const isReverse = index % 2 !== 0

          return (
            <div key={index} className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT / RIGHT (CARD) */}
              <motion.div
                className={isReverse ? "lg:order-2" : "lg:order-1"}
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="relative group perspective-1000">

                  {/* Dynamic Glowing Aura */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-2xl opacity-40 group-hover:opacity-80 group-hover:blur-3xl transition-all duration-700" />

                  {/* Outer Glass Container */}
                  <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl overflow-hidden group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-700 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                    
                    {/* Inner Cyber-grid Motion */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff40_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
                    
                    {/* System Nodes / Data Flow */}
                    <motion.div 
                      initial={{ top: "-10%" }}
                      animate={{ top: "110%" }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute left-[20%] w-[1px] h-32 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
                    />
                    <motion.div 
                      initial={{ top: "-10%" }}
                      animate={{ top: "110%" }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: 1.5 }}
                      className="absolute left-[75%] w-[1px] h-40 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"
                    />
                    <motion.div 
                      animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-[20%] right-[15%] w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#c084fc]" 
                    />

                    {/* Inner Device Container */}
                    <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-md">

                      {/* Floating Device */}
                      <motion.div 
                        animate={{ y: [-8, 8, -8] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="w-48 h-[340px] mx-auto bg-white/5 backdrop-blur-xl rounded-[30px] border-[6px] border-white/20 p-4 shadow-xl relative overflow-hidden group-hover:border-purple-400/50 transition-colors duration-700 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                      >
                        {/* Device Screen Grid Indicator */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff30_1px,transparent_1px)] bg-[size:1rem_1rem]" />

                        {/* Speaker line */}
                        <div className="w-16 h-1.5 bg-white/30 rounded-full mx-auto mb-5 relative z-10" />

                        {/* Device Screen Content (Skeletons) */}
                        <div className="space-y-3 relative z-10">
                          {index === 0 && (
                            <>
                              <div className="h-3 bg-white/30 rounded w-3/4 animate-pulse" />
                              <div className="h-3 bg-white/10 rounded w-full" />
                              <div className="h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-lg border border-white/5" />
                              <div className="h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-lg border border-white/5" />
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <div className="h-3 bg-white/30 rounded w-2/3 animate-pulse" />
                              <div className="h-3 bg-white/10 rounded w-full" />
                              <div className="h-10 bg-gradient-to-r from-purple-500/20 to-transparent rounded border border-white/5" />
                              <div className="h-10 bg-white/10 rounded border border-white/5" />
                              <div className="h-10 bg-white/10 rounded border border-white/5" />
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <div className="h-3 bg-white/30 rounded w-1/2 animate-pulse" />
                              <div className="h-3 bg-white/10 rounded w-full" />
                              <div className="h-16 bg-gradient-to-br from-blue-500/20 to-white/5 rounded-lg border border-white/5" />
                              <div className="h-16 bg-white/10 rounded-lg border border-white/5" />
                            </>
                          )}
                          {index === 3 && (
                            <>
                              <div className="h-3 bg-white/30 rounded w-3/4 animate-pulse" />
                              <div className="h-3 bg-white/10 rounded w-2/3" />
                              <div className="h-12 bg-gradient-to-tr from-green-500/20 to-white/5 rounded border border-white/5" />
                              <div className="h-12 bg-white/10 rounded border border-white/5" />
                            </>
                          )}
                        </div>
                      </motion.div>

                      {/* Glass Pills */}
                      <div className="mt-8 space-y-3 relative z-10">
                        {service.features.slice(0, 3).map((f, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            whileHover={{ scale: 1.03, x: 5 }}
                            className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg text-sm text-white/90 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-md cursor-default flex items-center justify-between group/pill hover:bg-white/10 transition-colors"
                          >
                            <TypewriterText text={f} delayOffset={i * 0.2 + 0.3} />
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 opacity-50 group-hover/pill:opacity-100 transition-opacity" />
                          </motion.div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CONTENT */}
              <motion.div
                className={isReverse ? "lg:order-1" : "lg:order-2"}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              >

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 text-purple-300 text-sm mb-6">
                  <service.icon className="w-4 h-4" />
                  {service.badge}
                </div>

                <h2 className="text-4xl font-bold mb-4">
                  {service.title}
                </h2>

                <p className="text-white/70 mb-6 max-w-xl">
                  {service.desc}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Zap className="w-4 h-4 text-purple-400" />
                      <span className="text-white/80">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {service.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-purple-600/20 to-blue-600/10 border border-purple-500/20 rounded-xl p-4 text-center"
                    >
                      <p className="text-lg font-bold text-purple-300">
                        {stat.value}
                      </p>
                      <p className="text-xs text-white/60">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}