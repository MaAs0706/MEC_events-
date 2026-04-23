import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-content">
          <div className="logo">NEXUS</div>
          <div className="nav-actions">
            <Link to="/login" className="nav-link">Sign in</Link>
            <Link to="/login" className="nav-button">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover every event on your campus</h1>
          <p>Find hackathons, concerts, sports, competitions, and more. All in one place.</p>
          
          <div className="hero-actions">
            <Link to="/login" className="btn-primary">Browse Events</Link>
            <Link to="/login" className="btn-secondary">Learn More</Link>
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
        <h2>Why choose NEXUS?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Smart Discovery</h3>
            <p>Find events that match your interests with intelligent filters and search</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Never Miss Out</h3>
            <p>Stay updated on upcoming events and manage your schedule seamlessly</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📢</div>
            <h3>Easy Creation</h3>
            <p>Organizers can create and manage events with powerful tools</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to explore campus life?</h2>
        <Link to="/login" className="btn-primary large">Start Exploring</Link>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>&copy; 2026 NEXUS. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LandingPage