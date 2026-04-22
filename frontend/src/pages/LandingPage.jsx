import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-content">
          <div className="logo">NEXUS.</div>
          <div className="nav-actions">
            <Link to="/login" className="nav-link">Sign in</Link>
            <Link to="/login" className="nav-button">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Every event your campus <span className="highlight">runs on</span></h1>
          <p>Discover what's happening around campus. From hackathons to concerts, find events that match your vibe.</p>
          
          <div className="hero-actions">
            <Link to="/login" className="btn-primary">Browse Events</Link>
            <Link to="/login" className="btn-secondary">Join NEXUS</Link>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Events</p>
            </div>
            <div className="stat">
              <h3>10K+</h3>
              <p>Students</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Venues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why NEXUS?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Discover</h3>
            <p>Find events tailored to your interests</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Plan</h3>
            <p>Never miss an event with smart scheduling</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📢</div>
            <h3>Create</h3>
            <p>Organize and manage your own events</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to discover what's happening?</h2>
        <Link to="/login" className="btn-primary large">Get Started Free</Link>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>&copy; 2026 NEXUS. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LandingPage