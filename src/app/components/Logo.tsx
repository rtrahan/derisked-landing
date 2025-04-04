"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Logo() {
  return (
    <motion.div
      className="logo-text text-lg sm:text-xl tracking-tight relative whitespace-nowrap"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
    >
      <span className="relative flex items-center">
        <span className="text-foreground z-10">
          <span className="italic font-thin text-foreground/70" style={{ fontWeight: 100, letterSpacing: '-0.03em', marginRight: '0.05em' }}>
            <span style={{ marginRight: '0.01em' }}>d</span>e
          </span><span style={{ letterSpacing: '-0.03em' }}>
            <span style={{ marginRight: '0.025em' }}>r</span>
            <span>i</span>
            <span style={{ marginRight: '0.005em' }}>s</span>
            <span style={{ marginRight: '0.015em' }}>k</span>
            <span style={{ marginRight: '0.02em' }}>e</span>
            <span>d</span>
          </span>
        </span>
        <motion.span 
          className="absolute bottom-0 left-0 right-0 h-[1px] origin-left flowing-gradient"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
        />
      </span>
    </motion.div>
  )
}

export function HeroLogo() {
  const letters = "derisked".split("")
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [elementPosition, setElementPosition] = useState({ x: 0, y: 0, width: 0, height: 0 })
  
  // Create motion values for rotation in all directions
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const rotateZ = useMotionValue(0)
  
  // Add springs for smoother motion
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 15 })
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 15 })
  const springRotateZ = useSpring(rotateZ, { stiffness: 150, damping: 25 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setElementPosition({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      })
    }
  }, [])

  useEffect(() => {
    // Calculate rotation based on mouse position relative to the center of the logo
    if (elementPosition.width && elementPosition.height) {
      const centerX = elementPosition.x + elementPosition.width / 2
      const centerY = elementPosition.y + elementPosition.height / 2
      
      // Calculate how far the mouse is from the center (in percentage, -1 to 1)
      const deltaX = (mousePosition.x - centerX) / (elementPosition.width / 2)
      const deltaY = (mousePosition.y - centerY) / (elementPosition.height / 2)
      
      // Calculate distance from center and angle for 360-degree effect
      const distance = Math.min(1, Math.sqrt(deltaX * deltaX + deltaY * deltaY)) // Distance from center (0-1)
      const angle = Math.atan2(deltaY, deltaX) // Angle from center in radians
      
      // Calculate 3D rotations based on angle and distance
      const maxTilt = 5 // Maximum tilt in degrees
      
      // X rotation (tilting up/down) - based on Y position relative to center
      rotateX.set(-deltaY * maxTilt)
      
      // Y rotation (tilting left/right) - based on X position relative to center
      rotateY.set(deltaX * maxTilt)
      
      // Z rotation (slight twist) - subtle rotation based on position
      const zRotation = Math.sin(angle) * Math.cos(angle) * distance * 1.5
      rotateZ.set(zRotation)
    }
  }, [mousePosition, elementPosition, rotateX, rotateY, rotateZ])
  
  return (
    <motion.div
      ref={containerRef}
      className="perspective-1000 mb-8 md:mb-16 w-full"
    >
      <motion.h1
        className="elegant-display text-[5.2rem] xs:text-[6.5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] leading-none relative whitespace-nowrap overflow-visible w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ 
          letterSpacing: "-0.03em", 
          whiteSpace: "nowrap",
          maxWidth: "100%",
          width: "100%",
          wordSpacing: "0",
          perspective: "1000px",
          rotateX: springRotateX,
          rotateY: springRotateY,
          rotateZ: springRotateZ,
          transformStyle: "preserve-3d",
          transformOrigin: "center center"
        }}
      >
        <div className="relative inline-flex flex-nowrap overflow-visible whitespace-nowrap"
          style={{ display: "inline-block", transform: "translateZ(12px)" }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className={`inline-block relative flex-shrink-0 ${index < 2 ? 'italic font-thin text-foreground/80' : 'text-foreground'}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.9, 
                delay: 0.08 * index, 
                ease: [0.19, 1, 0.22, 1] 
              }}
              style={{
                fontWeight: index < 2 ? 100 : 400,
                letterSpacing: '-0.03em',
                margin: index === 0 ? '0 0.01em 0 0' : (
                  index === 1 ? '0 0.06em 0 0' : (
                  index === 2 ? '0 0.025em 0 0' : (
                  index === 3 ? '0 0.005em 0 0' : (
                  index === 4 ? '0 0.015em 0 0' : (
                  index === 5 ? '0 0.02em 0 0' : (
                  index === 6 ? '0 0' : '0'
                )))))),
                padding: 0,
                opacity: index < 2 ? 0.8 : 1,
                display: 'inline-block',
                transform: `translateZ(${index * 1.5}px)`,
                textShadow: index % 2 === 0 
                  ? '0 0 30px hsla(var(--accent-1), 0.5)' 
                  : '0 0 25px hsla(var(--accent-2), 0.5)'
              }}
            >
              {letter}
            </motion.span>
          ))}
          <motion.div
            className="absolute -bottom-[0.08em] left-0 right-0 h-[0.08em] origin-left flowing-gradient"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          />
        </div>
      </motion.h1>
    </motion.div>
  )
} 