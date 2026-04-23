import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './LandingPage.css'

function LandingPage() {
  const showcaseItems = [
    {
      id: 1,
      title: 'TechHack 2026',
      category: 'HACKATHON',
      image: '🖥️',
      description: 'Build something amazing in 24 hours'
    },
    {
      id: 2,
      title: 'Spring Concert',
      category: 'MUSIC',
      image: '🎵',
      description: 'Live performances from student bands'
    },
    {
      id: 3,
      title: 'Football Finals',
      category: 'SPORTS',
      image: '⚽',
      description: 'Championship match of the season'
    }
  ]

  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-content">
          <div className="logo">NEXUS</div>
          <div className="nav-actions">
            <Link to="/login" className="nav-link">Log in</Link>
            <Link to="/login" className="nav-button">Sign up</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      
      <section className="hero">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🎓 NEXUS FOR CAMPUS
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Discover every event<br />on your <span className="highlight">campus</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Find hackathons, concerts, sports, competitions, and more. All in one place.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/login" className="btn-primary">Browse Events</Link>
          <Link to="/login" className="btn-secondary">See what others are finding</Link>
        </motion.div>
      </section>

      {/* Category Tabs */}
      <section className="category-tabs">
        <div className="tabs-content">
          <span className="tab-label">BROWSE BY</span>
          <div className="tabs">
            <button className="tab active">ALL EVENTS</button>
            <button className="tab">HACKATHONS</button>
            <button className="tab">WORKSHOPS</button>
            <button className="tab">COMPETITIONS</button>
            <button className="tab">CONCERTS</button>
            <button className="tab">SPORTS</button>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="showcase">
        <div className="showcase-container">
          <div className="showcase-header">
            <h2>Featured Events</h2>
            <Link to="/login" className="view-more">View all events →</Link>
          </div>

          <div className="showcase-grid">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="showcase-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <div className="showcase-image">{item.image}</div>
                <div className="showcase-info">
                  <span className="showcase-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-content">
          <div className="stat-item">
            <h4>500+</h4>
            <p>Events on campus</p>
          </div>
          <div className="stat-item">
            <h4>10K+</h4>
            <p>Active students</p>
          </div>
          <div className="stat-item">
            <h4>50+</h4>
            <p>Event venues</p>
          </div>
          <div className="stat-item">
            <h4>7 days</h4>
            <p>Event updates</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <h2>Why NEXUS?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <h3>Smart Discovery</h3>
              <p>Find events that match your interests with intelligent filters and search</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">02</div>
              <h3>Real-time Updates</h3>
              <p>Stay notified of new events and updates from organizers</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">03</div>
              <h3>Easy Booking</h3>
              <p>Book events in seconds with a single click</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">04</div>
              <h3>Manage Events</h3>
              <p>Organizers can create and manage events with powerful tools</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">05</div>
              <h3>Community Driven</h3>
              <p>Connect with peers and discover what the campus is up to</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">06</div>
              <h3>Always Available</h3>
              <p>Access events on any device, anywhere, anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Ready to explore campus life?</h2>
          <p>Join thousands of students discovering amazing events</p>
          <Link to="/login" className="btn-primary large">Start Exploring</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>NEXUS</h4>
            <p>Discover every event on your campus</p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 NEXUS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage