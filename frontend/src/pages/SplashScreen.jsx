import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './SplashScreen.css'

function SplashScreen({ onComplete }) {
  const text = 'Welcome to NEXUS '
  const [displayedText, setDisplayedText] = useState('')
  const [phase, setPhase] = useState('typing') // typing, retracting, done

  useEffect(() => {
    let currentIndex = 0
    let interval

    if (phase === 'typing') {
      interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(interval)
          // Wait 0.8 seconds before starting to retract
          setTimeout(() => {
            setPhase('retracting')
          }, 800)
        }
      }, 200) // 200ms per character
    } else if (phase === 'retracting') {
      currentIndex = text.length
      interval = setInterval(() => {
        if (currentIndex > 0) {
          currentIndex--
          setDisplayedText(text.substring(0, currentIndex))
        } else {
          clearInterval(interval)
          // Go to landing page after text is fully retracted
          setTimeout(() => {
            onComplete()
          }, 300)
        }
      }, 80) // 80ms per character (slightly faster retraction)
    }

    return () => clearInterval(interval)
  }, [phase, onComplete, text])

  return (
    <motion.div 
      className="splash-container"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="splash-content">
        <h1 className="splash-text">
          {displayedText}
          {displayedText.length > 0 && displayedText.length < text.length && phase === 'typing' && (
            <span className="cursor">|</span>
          )}
        </h1>
      </div>
    </motion.div>
  )
}

export default SplashScreen