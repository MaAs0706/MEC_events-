import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SplashScreen from './pages/SplashScreen'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import StudentDashboard from './pages/StudentDashboard'
import CoordinatorDashboard from './pages/CoordinatorDashboard'
import AdminDashboard from './pages/AdminDashboard'
import ApproverDashboard from './pages/ApproverDashboard'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  // Check if splash screen has been seen in this session
  useEffect(() => {
    const splashSeen = sessionStorage.getItem('splashSeen')
    if (splashSeen) {
      setShowSplash(false)
    }
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
    sessionStorage.setItem('splashSeen', 'true')
  }

  return (
    <Router>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      {!showSplash && (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/coordinator" element={<CoordinatorDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/approver" element={<ApproverDashboard />} />
        </Routes>
      )}
    </Router>
  )
}

export default App