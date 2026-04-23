'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'
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
}

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/zyveriontechnologies/' },
  { icon: Twitter, href: 'https://x.com/zyveriontech' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/zyverion-technologies/' },
  { icon: Instagram, href: 'https://www.instagram.com/zyveriontechnologies/' },
]

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const handleScroll = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const renderLink = (link: { label: string; href: string }, i: number) => {
    const isInternal = link.href.startsWith('#')

    return (
      <motion.li
        key={link.label}
        initial={{ opacity: 0, x: -12 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
      >
        <a
          href={link.href}
          onClick={(e) => {
            if (isInternal) {
              e.preventDefault()
              handleScroll(link.href)
            }
          }}
          {...(!isInternal && {
            target: '_blank',
            rel: 'noopener noreferrer',
          })}
          className="text-[#7a93b8] text-sm hover:text-[#3b9fff] transition-colors duration-200"
        >
          {link.label}
        </a>
      </motion.li>
    )
  }

  return (
    <>
      <footer
        ref={ref}
        className="relative bg-gradient-to-r from-[#182944] via-[#162a43] to-[#15253f] border-t border-[rgba(59,159,255,0.2)] pt-20 pb-8"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingElements />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/logo.png"
                alt="Zyverion"
                width={180}
                height={50}
                className="mb-5"
              />
              <p className="text-[#7a93b8] text-sm mb-5">
                Engineering intelligent, scalable, and future-ready digital systems.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    className="w-9 h-9 flex items-center justify-center border border-[rgba(59,159,255,0.2)] rounded-md bg-[rgba(59,159,255,0.05)] hover:border-[#3b9fff]"
                  >
                    <social.icon size={16} className="text-[#7a93b8]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-white text-sm font-semibold mb-5">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map(renderLink)}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-white text-sm font-semibold mb-5">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map(renderLink)}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-white text-sm font-semibold mb-5">Contact</h3>

              <ul className="space-y-4 text-sm text-[#7a93b8]">
                <li className="flex gap-2">
                  <Mail size={16} className="text-[#3b9fff]" />
                  <a href="mailto:shivam@zyverionex.com">
                    shivam@zyverionex.com
                  </a>
                </li>

                <li className="flex gap-2">
                  <Phone size={16} className="text-[#3b9fff]" />
                  <a href="tel:+917428451153">+91 74284 51153</a>
                </li>

                <li className="flex gap-2">
                  <MapPin size={16} className="text-[#3b9fff]" />
                  Gurugram, Haryana, India
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom */}
          <div className="border-t border-[rgba(59,159,255,0.1)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#7a93b8]">
            <p>
              © {new Date().getFullYear()} Zyverion Technologies Pvt Ltd.
            </p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-[#3b9fff]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#3b9fff]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Credit Bar */}
      <div className="bg-[#0b1220] text-center py-4 text-xs text-[#7a93b8]">
        Designed & Developed by{' '}
        <a
          href="https://webel.io"
          target="_blank"
          className="text-[#3b9fff]"
        >
          Webel.io
        </a>
      </div>
    </>
  )
}