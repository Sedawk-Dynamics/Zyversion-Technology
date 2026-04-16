'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { FloatingElements } from '@/components/utils/TechVisuals'

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Values', href: '#values' },
  ],
  services: [
    { label: 'AI & Machine Learning', href: '#services' },
    { label: 'Custom Software', href: '#services' },
    { label: 'Cloud Infrastructure', href: '#services' },
    { label: 'Cybersecurity', href: '#services' },
  ],
  connect: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
}

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <footer ref={ref} className="relative bg-gradient-to-r from-[#182944] via-[#162a43] to-[#15253f] backdrop-blur-md border-t border-[rgba(59,159,255,0.2)] pt-20 pb-8 shadow-[inset_0_1px_0_rgba(59,159,255,0.1)]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingElements />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#3b9fff]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(59,159,255,0.03)] via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <Image
                src="/images/logo.png"
                alt="Zyverion Technologies"
                width={180}
                height={48}
                className="h-10 w-auto object-contain mb-5"
              />
              <p className="text-[#7a93b8] text-sm leading-relaxed mb-5">
                Engineering intelligent, scalable, and future-ready digital systems for modern enterprises.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Linkedin, label: 'LinkedIn' },
                ].map((social, i) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.15, backgroundColor: 'rgba(59,159,255,0.12)' }}
                    className="w-9 h-9 rounded-sm border border-[rgba(59,159,255,0.2)] bg-[rgba(59,159,255,0.04)] flex items-center justify-center hover:border-[#3b9fff] transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={16} className="text-[#7a93b8]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Column 2: Company */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-[#f0f4ff] font-semibold text-sm uppercase tracking-wide mb-5">Company</h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.company.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                  >
                    <button
                      onClick={() => handleClick(link.href)}
                      className="text-[#7a93b8] text-sm hover:text-[#3b9fff] transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Services */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-[#f0f4ff] font-semibold text-sm uppercase tracking-wide mb-5">Services</h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.services.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.08, duration: 0.4 }}
                  >
                    <button
                      onClick={() => handleClick(link.href)}
                      className="text-[#7a93b8] text-sm hover:text-[#3b9fff] transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Contact */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-[#f0f4ff] font-semibold text-sm uppercase tracking-wide mb-5">Contact</h3>
              <ul className="flex flex-col gap-4">
                {[
                  { icon: Mail, label: 'Email', href: 'mailto:shivam@zyverionex.com', value: 'shivam@zyverionex.com' },
                  { icon: Phone, label: 'Phone', href: 'tel:+917428451153', value: '+91 74284 51153' },
                  { icon: MapPin, label: 'Location', href: null, value: 'Gurugram, Haryana, India' },
                ].map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-2 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="mt-0.5 shrink-0"
                    >
                      <item.icon size={16} className="text-[#3b9fff]" />
                    </motion.div>
                    {item.href ? (
                      <a href={item.href} className="text-[#7a93b8] text-sm hover:text-[#3b9fff] transition-colors duration-200">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[#7a93b8] text-sm">
                        {item.value}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8 border-t border-[rgba(59,159,255,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          >
            <p className="text-[#7a93b8] text-xs">
              &copy; {new Date().getFullYear()} Zyverion Technologies Private Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <motion.button
                whileHover={{ color: '#3b9fff' }}
                className="text-[#7a93b8] text-xs transition-colors duration-200"
              >
                Privacy Policy
              </motion.button>
              <motion.button
                whileHover={{ color: '#3b9fff' }}
                className="text-[#7a93b8] text-xs transition-colors duration-200"
              >
                Terms of Service
              </motion.button>
            </div>
          </motion.div>
        </div>
      </footer>
      <div className="relative bg-[#0b1220] border-t border-[rgba(59,159,255,0.08)] py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#7a93b8] text-xs tracking-wide"
          >
            Designed & Developed by{' '}
            <a
              href="https://webel.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b9fff] font-medium hover:text-[#6db8ff] transition-colors duration-200"
            >
              Webel.io
            </a>
          </motion.p>

        </div>

        {/* subtle glow line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px bg-gradient-to-r from-transparent via-[#3b9fff]/30 to-transparent" />
      </div>

    </>
  )
}
