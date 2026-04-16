'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import { FloatingNodeNetwork, HexagonGrid } from '@/components/utils/TechVisuals'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for reaching out. We will contact you shortly!')
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-[#15253f] via-[#1a2d47] to-[#182944]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <FloatingNodeNetwork />
        <HexagonGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(59,159,255,0.06)] via-transparent to-[rgba(59,159,255,0.03)]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#0d2d5e]/20 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#3b9fff]" />
            <span className="text-[#3b9fff] text-xs font-semibold tracking-[0.2em] uppercase">
              Get In Touch
            </span>
            <div className="w-8 h-px bg-[#3b9fff]" />
          </div>
          <h2
            className="font-bold text-[#f0f4ff] text-balance leading-tight"
            style={{ fontFamily: 'var(--font-display, var(--font-sans))', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            Start Your Project Today
          </h2>
          <p className="text-[#7a93b8] max-w-xl mx-auto mt-4 leading-relaxed">
            Ready to transform your business with intelligent technology? Reach out to our team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.320, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-[#f0f4ff] font-semibold text-xl mb-6">Contact Information</h3>
              <div className="flex flex-col gap-5">
                {[
                  { icon: Mail, label: 'Email Us', value: 'shivam@zyverionex.com', href: 'mailto:shivam@zyverionex.com' },
                  { icon: Phone, label: 'Call Us', value: '+91 74284 51153', href: 'tel:+917428451153' },
                  { icon: MapPin, label: 'Visit Us', value: 'Gurugram, Haryana, India', href: null }
                ].map((item, i) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.15 }}
                      className="w-10 h-10 rounded-sm bg-[rgba(59,159,255,0.1)] border border-[rgba(59,159,255,0.2)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(59,159,255,0.18)] transition-all duration-300"
                    >
                      <item.icon size={18} className="text-[#3b9fff]" />
                    </motion.div>
                    <div>
                      <p className="text-[#7a93b8] text-sm mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[#f0f4ff] font-medium hover:text-[#3b9fff] transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#f0f4ff] font-medium leading-relaxed">
                          {item.value === 'Gurugram, Haryana, India' 
                            ? <><span>{item.value}</span></> 
                            : item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true }}
              className="p-6 border border-[rgba(59,159,255,0.15)] bg-[rgba(59,159,255,0.04)] rounded-sm hover:border-[rgba(59,159,255,0.25)] transition-colors duration-300"
            >
              <p className="text-[#7a93b8] text-sm leading-relaxed">
                We typically respond to all inquiries within 24 hours during business days.
                For urgent matters, please call us directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.320, 1] }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-8 border border-[rgba(59,159,255,0.2)] bg-[rgba(13,22,40,0.7)] backdrop-blur-sm rounded-sm hover:border-[rgba(59,159,255,0.35)] hover:bg-[rgba(13,22,40,0.8)] transition-all duration-300 shadow-[0_8px_32px_rgba(31,38,135,0.2)]"
          >
            {[
              { id: 'name', label: 'Your Name *', type: 'text', placeholder: 'John Doe' },
              { id: 'email', label: 'Email Address *', type: 'email', placeholder: 'john@company.com' },
            ].map((field, i) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor={field.id} className="block text-[#f0f4ff] text-sm font-medium mb-2">
                  {field.label}
                </label>
                <motion.input
                  whileFocus={{ borderColor: '#3b9fff', boxShadow: '0 0 0 2px rgba(59,159,255,0.1)' }}
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={field.id === 'name' ? formState.name : formState.email}
                  onChange={(e) => setFormState({ 
                    ...formState, 
                    [field.id]: e.target.value 
                  })}
                  required
                  className="w-full px-4 py-3 bg-[#0d1628]/80 border border-[rgba(59,159,255,0.2)] text-[#f0f4ff] placeholder:text-[#7a93b8] focus:border-[#3b9fff] focus:outline-none focus:shadow-[0_0_12px_rgba(59,159,255,0.2)] rounded-sm text-sm transition-all duration-200"
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="block text-[#f0f4ff] text-sm font-medium mb-2">
                Your Message *
              </label>
              <motion.textarea
                whileFocus={{ borderColor: '#3b9fff', boxShadow: '0 0 0 2px rgba(59,159,255,0.1)' }}
                id="message"
                placeholder="Tell us about your project or inquiry..."
                rows={6}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                className="w-full px-4 py-3 bg-[#0d1628] border border-[rgba(59,159,255,0.2)] text-[#f0f4ff] placeholder:text-[#7a93b8] focus:border-[#3b9fff] focus:outline-none rounded-sm text-sm resize-none transition-all duration-200"
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(59,159,255,0.3)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="group relative flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#3b9fff] text-[#080e1a] font-semibold rounded-sm hover:bg-[#6db8ff] transition-all duration-200 text-sm overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative flex items-center gap-2">
                Send Message
                <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
