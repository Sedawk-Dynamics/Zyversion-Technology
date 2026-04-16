'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface FloatingImageProps {
  src: string
  alt: string
  position: { top: string; left: string }
  size?: { width: number; height: number }
  delay?: number
  duration?: number
  rotateRange?: number
}

export function FloatingImage({
  src,
  alt,
  position,
  size = { width: 120, height: 120 },
  delay = 0,
  duration = 6,
  rotateRange = 10,
}: FloatingImageProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={position}
      animate={{
        y: [-30, 30, -30],
        rotate: [-rotateRange, rotateRange, -rotateRange],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{
          duration,
          repeat: Infinity,
          delay,
          ease: 'easeInOut',
        }}
        className="rounded-lg shadow-lg overflow-hidden border border-[rgba(59,159,255,0.3)] backdrop-blur-sm"
      >
        <Image
          src={src}
          alt={alt}
          width={size.width}
          height={size.height}
          className="object-cover"
          priority={false}
        />
      </motion.div>
    </motion.div>
  )
}

interface FloatingImagesGroupProps {
  images: {
    src: string
    alt: string
    position: { top: string; left: string }
    size?: { width: number; height: number }
    delay?: number
  }[]
}

export function FloatingImagesGroup({ images }: FloatingImagesGroupProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {images.map((image, index) => (
        <FloatingImage
          key={index}
          src={image.src}
          alt={image.alt}
          position={image.position}
          size={image.size}
          delay={image.delay || index * 0.2}
        />
      ))}
    </div>
  )
}

// Preset floating images for common layouts
export function FloatingImagesHero() {
  return (
    <FloatingImagesGroup
      images={[
        {
          src: '/images/tech-1.jpg',
          alt: 'AI Technology',
          position: { top: '10%', left: '5%' },
          size: { width: 100, height: 100 },
          delay: 0,
        },
        {
          src: '/images/tech-2.jpg',
          alt: 'Data Network',
          position: { top: '15%', right: '8%', left: 'auto' },
          size: { width: 120, height: 120 },
          delay: 0.3,
        },
        {
          src: '/images/tech-3.jpg',
          alt: 'Cloud Solutions',
          position: { top: '60%', left: '10%' },
          size: { width: 90, height: 90 },
          delay: 0.6,
        },
        {
          src: '/images/tech-4.jpg',
          alt: 'Innovation',
          position: { top: '65%', right: '12%', left: 'auto' },
          size: { width: 110, height: 110 },
          delay: 0.2,
        },
      ]}
    />
  )
}

export function FloatingImagesServices() {
  return (
    <FloatingImagesGroup
      images={[
        {
          src: '/images/service-1.jpg',
          alt: 'AI Development',
          position: { top: '20%', left: '8%' },
          size: { width: 95, height: 95 },
          delay: 0.1,
        },
        {
          src: '/images/service-2.jpg',
          alt: 'Cloud Computing',
          position: { top: '25%', right: '10%', left: 'auto' },
          size: { width: 105, height: 105 },
          delay: 0.4,
        },
        {
          src: '/images/service-3.jpg',
          alt: 'Digital Solutions',
          position: { bottom: '15%', left: '12%', top: 'auto' },
          size: { width: 100, height: 100 },
          delay: 0.7,
        },
      ]}
    />
  )
}
