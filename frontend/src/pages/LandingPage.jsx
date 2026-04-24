import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landing-wrapper">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-inner">
          <div className="logo">NEXUS.</div>
          <div className="nav-search">
            <input type="text" placeholder="Search events, venues, hosts..." />
          </div>
          <div className="nav-right">
            <Link to="/login" className="nav-signin">Sign in</Link>
            <Link to="/login" className="nav-join">Join NEXUS</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-inner">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="badge-dot">●</span> CAMPUS CALENDAR • LIVE
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Every event<br />
            your campus <span className="accent-text">runs on.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hackathons, gigs, game-nights, meetups — discover what's happening this week, RSVP in one tap, and never miss your crowd again.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/login" className="btn-browse">Browse events →</Link>
            <Link to="/login" className="btn-join">🔥 Join NEXUS free</Link>
          </motion.div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">0</div>
              <div className="stat-label">Events live</div>
            </div>
            <div className="stat">
              <div className="stat-number">12+</div>
              <div className="stat-label">Campus venues</div>
            </div>
            <div className="stat">
              <div className="stat-number">7</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat">
              <div className="stat-number">∞</div>
              <div className="stat-label">Stories made</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Events Section */}
      <section className="events-section">
        <div className="section-inner">
          <div className="section-header">
            <h2>All events</h2>
            <span className="result-count">0 RESULTS</span>
          </div>

          <div className="events-layout">
            <aside className="filter-sidebar">
              <h3>FILTER EVENTS</h3>
              
              <div className="filter-group">
                <label>START DATE</label>
                <input type="text" placeholder="DD/MM/YYYY" />
              </div>

              <div className="filter-group">
                <label>END DATE</label>
                <input type="text" placeholder="DD/MM/YYYY" />
              </div>
            </aside>

            <main className="events-grid-area">
              <div className="empty-state">
                <div className="empty-heading">NOTHING HERE</div>
                <p>No events match your filters.</p>
                <p className="empty-hint">Try resetting filters or searching something else.</p>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Footer Warning */}
      <footer className="footer-warning">
        <p>Frontend Preview Only. Please wake servers to enable backend functionality. <a href="#wake">Wake up servers</a></p>
        <a href="#made" className="made-by">Made with Emergent</a>
      </footer>
    </div>
  )
}

export default LandingPage