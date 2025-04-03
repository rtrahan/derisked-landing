"use client"

import React, { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  alpha: number
}

const ParticleNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas size to window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    
    // Mouse position
    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)
    
    // Create particles - reduced count for refined elegance
    const particles: Particle[] = []
    const particleCount = window.innerWidth < 768 ? 30 : 45
    const connectDistance = 150
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-1').trim()
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-2').trim()
    
    for (let i = 0; i < particleCount; i++) {
      // More variation in particle sizes for visual interest
      const radius = Math.random() * 1.2 + 0.4
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const vx = (Math.random() - 0.5) * 0.2 // Even slower, more graceful movement
      const vy = (Math.random() - 0.5) * 0.2
      
      // Alternate between primary and secondary color
      const color = i % 2 === 0 
        ? `hsla(${primaryColor}, 0.5)`
        : `hsla(${secondaryColor}, 0.5)`
      
      particles.push({
        x,
        y,
        vx,
        vy,
        radius,
        color,
        alpha: Math.random() * 0.3 + 0.15 // Subtle but visible opacity
      })
    }
    
    // Animation loop with refined aesthetics
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        // Move particles with a more elegant, slower pace
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Bounce off edges with a smoother transition
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.9 // Slight damping for more natural movement
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.9
        }
        
        // Draw particle with softer edges
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        // Gradient fill for more dimensional particles
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 2
        )
        
        // Fixed gradient color stops
        const baseColor = particle.color.includes(primaryColor) ? 
          '130, 150, 255' : '30, 255, 220';
          
        gradient.addColorStop(0, `rgba(${baseColor}, ${particle.alpha * 1.2})`);
        gradient.addColorStop(1, `rgba(${baseColor}, 0)`);
        
        ctx.fillStyle = gradient
        ctx.fill()
        
        // Connect particles if they're close enough - elegant connections
        // More selective connections for refined aesthetic
        if (i % 3 === 0) {
          for (let j = i + 3; j < particles.length; j += 3) {
            const other = particles[j]
            const dx = particle.x - other.x
            const dy = particle.y - other.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < connectDistance) {
              // Calculate opacity based on distance - subtle gradient connections
              const opacity = (1 - (distance / connectDistance)) * 0.12
              
              // Draw line between particles with refined styling
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(other.x, other.y)
              
              // Create gradient lines for more elegant connections
              const gradient = ctx.createLinearGradient(
                particle.x, particle.y, other.x, other.y
              )
              
              // More sophisticated colors for elegant connections
              const startColor = particle.color.includes(primaryColor) ? 
                '130, 150, 255' : '30, 255, 220';
              const endColor = other.color.includes(primaryColor) ? 
                '130, 150, 255' : '30, 255, 220';
              
              gradient.addColorStop(0, `rgba(${startColor}, ${opacity * 1.2})`);
              gradient.addColorStop(1, `rgba(${endColor}, ${opacity * 1.2})`);
              
              ctx.strokeStyle = gradient
              ctx.lineWidth = 0.4
              ctx.stroke()
            }
          }
        }
        
        // Interact with mouse - more graceful interaction
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 120) {
          // Add subtle attraction/repulsion for more elegant movement
          const angle = Math.atan2(dy, dx)
          const force = (120 - distance) * 0.0002
          
          // Particles gently move away from cursor
          particle.vx -= Math.cos(angle) * force
          particle.vy -= Math.sin(angle) * force
          
          // Only draw mouse connections for some particles
          if (i % 4 === 0) {
            // Draw connection to mouse with elegant fade
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(mouseX, mouseY)
            
            // Gradient connection to mouse for refined look
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, mouseX, mouseY
            )
            
            const particleColor = particle.color.includes(primaryColor) ? 
              '140, 160, 255' : '40, 255, 230';
              
            gradient.addColorStop(0, `rgba(${particleColor}, ${(1 - distance / 120) * 0.1})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.3
            ctx.stroke()
          }
        }
        
        // Limit velocity for smoother, more controlled movement
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        if (speed > 1.0) {
          particle.vx = (particle.vx / speed) * 1.0
          particle.vy = (particle.vy / speed) * 1.0
        }
      })
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-[-5] pointer-events-none" 
      style={{ opacity: 0.5 }}
    />
  )
}

export default ParticleNetwork 