"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.div
      className="logo-text text-xl tracking-tight relative"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
    >
      <span className="relative flex items-center">
        <span className="text-foreground z-10">
          <span className="italic font-thin text-foreground/70" style={{ fontWeight: 100, letterSpacing: '0.02em' }}>de</span>risked
        </span>
        <motion.span 
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-accent1/60 via-accent2/80 to-accent1/60 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
        />
      </span>
    </motion.div>
  )
}

export function HeroLogo() {
  const letters = "derisked".split("")
  
  return (
    <motion.h1
      className="elegant-display text-[7rem] md:text-[10rem] xl:text-[13rem] mb-20 tracking-tight leading-none relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative inline-block">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={`inline-block relative ${index < 2 ? 'italic font-thin text-foreground/80' : 'text-foreground'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9, 
              delay: 0.08 * index, 
              ease: [0.19, 1, 0.22, 1] 
            }}
            style={{
              fontWeight: index < 2 ? 100 : 'normal',
              letterSpacing: index < 2 ? '0.02em' : 'normal',
              opacity: index < 2 ? 0.8 : 1,
              textShadow: index % 2 === 0 
                ? '0 0 25px hsla(var(--accent-1), 0.4)' 
                : '0 0 20px hsla(var(--accent-2), 0.4)'
            }}
          >
            {letter}
          </motion.span>
        ))}
        <motion.div
          className="absolute -bottom-[0.08em] left-0 right-0 h-[0.08em] bg-gradient-to-r from-accent1/60 via-accent2/80 to-accent1/60 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.0, ease: [0.19, 1, 0.22, 1] }}
        />
      </div>
    </motion.h1>
  )
} 