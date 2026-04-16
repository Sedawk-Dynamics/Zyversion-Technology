'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Values', href: '#values' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    setActiveLink(href)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0d1628]/85 backdrop-blur-xl border-b border-[rgba(59,159,255,0.2)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
            : 'bg-[#0d1628]/40 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-0 focus:outline-none group"
            aria-label="Zyverion — go to top"
          >
            <Image
              src="/images/logo.png"
              alt="Zyverion Technologies"
              width={200}
              height={52}
              className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
              priority
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium tracking-wide transition-all duration-200 relative group focus:outline-none ${
                  activeLink === link.href
                    ? 'text-[#3b9fff]'
                    : 'text-[#7a93b8] hover:text-[#f0f4ff]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#3b9fff] transition-all duration-300 ${
                    activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="ml-2 px-5 py-2 bg-[#3b9fff] text-[#080e1a] text-sm font-semibold rounded-sm tracking-wide hover:bg-[#6db8ff] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3b9fff] focus:ring-offset-2 focus:ring-offset-[#080e1a]"
            >
              Get In Touch
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#7a93b8] hover:text-[#f0f4ff] transition-colors focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#080e1a]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 text-[#7a93b8] hover:text-[#f0f4ff]"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <Image
              src="/images/logo.png"
              alt="Zyverion Technologies"
              width={160}
              height={42}
              className="h-9 w-auto object-contain mb-4"
            />
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl font-display font-semibold text-[#f0f4ff] hover:text-[#3b9fff] transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.07 + 0.1 }}
              onClick={() => handleNavClick('#contact')}
              className="mt-4 px-8 py-3 bg-[#3b9fff] text-[#080e1a] font-bold rounded-sm text-lg hover:bg-[#6db8ff] transition-colors"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
