import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import StudentDashboard from './pages/StudentDashboard'
import CoordinatorDashboard from './pages/CoordinatorDashboard'
import AdminDashboard from './pages/AdminDashboard'
import ApproverDashboard from './pages/ApproverDashboard'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/coordinator" element={<CoordinatorDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/approver" element={<ApproverDashboard />} />
      </Routes>
    </Router>
  )
}

export default App