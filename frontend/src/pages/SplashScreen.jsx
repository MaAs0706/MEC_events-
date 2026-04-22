import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import './SplashScreen.css'

function SplashScreen({ onComplete }) {
  useEffect(() => {
    // Auto-complete animation after 5 seconds (longer for testing)
    const timer = setTimeout(() => {
      onComplete()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="splash-container">
      {/* Logo/Text - centered */}
      <motion.div 
        className="splash-logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1>NEXUS.</h1>
      </motion.div>

      {/* Top half - slides UP */}
      <motion.div 
        className="splash-half top-half"
        initial={{ transform: 'translateY(0)' }}
        animate={{ transform: 'translateY(-100vh)' }}
        transition={{ 
          duration: 2, 
          delay: 1.5,
          ease: [0.34, 1.56, 0.64, 1]
        }}
      />

      {/* Bottom half - slides DOWN */}
      <motion.div 
        className="splash-half bottom-half"
        initial={{ transform: 'translateY(0)' }}
        animate={{ transform: 'translateY(100vh)' }}
        transition={{ 
          duration: 2, 
          delay: 1.5,
          ease: [0.34, 1.56, 0.64, 1]
        }}
      />
    </div>
  )
}

export default SplashScreen