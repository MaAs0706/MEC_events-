import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './CoordinatorDashboard.css'

function CoordinatorDashboard() {
  const [activeTab, setActiveTab] = useState('events')
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    category: 'tech',
    capacity: ''
  })

  const [myEvents, setMyEvents] = useState([
    {
      id: 1,
      title: 'TechHack 2026',
      date: '2026-04-25',
      status: 'approved',
      attendees: 234,
      capacity: 500,
      image: '🖥️'
    },
    {
      id: 2,
      title: 'AI Workshop',
      date: '2026-04-28',
      status: 'pending',
      attendees: 120,
      capacity: 200,
      image: '🤖'
    },
  ])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCreateEvent = (e) => {
    e.preventDefault()
    const newEvent = {
      id: myEvents.length + 1,
      title: formData.title,
      date: formData.date,
      status: 'pending',
      attendees: 0,
      capacity: parseInt(formData.capacity),
      image: '📅'
    }
    setMyEvents([...myEvents, newEvent])
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      venue: '',
      category: 'tech',
      capacity: ''
    })
    setShowCreateForm(false)
  }

  return (
    <div className="coordinator-container">
      {/* Navigation */}
      <nav className="coordinator-nav">
        <div className="nav-content">
          <Link to="/" className="logo">NEXUS.</Link>
          <h2>Event Coordinator</h2>
          <div className="nav-actions">
            <button className="user-menu">👤 {localStorage.getItem('userName') || 'Profile'}</button>
            <Link to="/" className="logout">Sign out</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="coordinator-content">
        {/* Sidebar */}
        <aside className="coordinator-sidebar">
          <div className="sidebar-section">
            <h3>Navigation</h3>
            <div className="nav-tabs">
              <button 
                className={`nav-tab ${activeTab === 'events' ? 'active' : ''}`}
                onClick={() => setActiveTab('events')}
              >
                My Events
              </button>
              <button 
                className={`nav-tab ${activeTab === 'analytics' ? 'active' : ''}`}
                onClick={() => setActiveTab('analytics')}
              >
                Analytics
              </button>
            </div>
          </div>
        </aside>

        {/* Main Area */}
        <main className="coordinator-main">
          {activeTab === 'events' && (
            <section className="events-section">
              <div className="section-header">
                <h2>My Events</h2>
                <button 
                  className="btn-create"
                  onClick={() => setShowCreateForm(!showCreateForm)}
                >
                  {showCreateForm ? '✕ Cancel' : '+ Create Event'}
                </button>
              </div>

              {showCreateForm && (
                <motion.div 
                  className="create-form"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3>Create New Event</h3>
                  <form onSubmit={handleCreateEvent}>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Event Title *</label>
                        <input
                          type="text"
                          name="title"
                          placeholder="Enter event title"
                          value={formData.title}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Category *</label>
                        <select name="category" value={formData.category} onChange={handleInputChange}>
                          <option value="tech">Tech</option>
                          <option value="sports">Sports</option>
                          <option value="cultural">Cultural</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Description *</label>
                      <textarea
                        name="description"
                        placeholder="Event description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows="3"
                        required
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Date *</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Time *</label>
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Venue *</label>
                        <input
                          type="text"
                          name="venue"
                          placeholder="Event venue"
                          value={formData.venue}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Capacity *</label>
                        <input
                          type="number"
                          name="capacity"
                          placeholder="Max attendees"
                          value={formData.capacity}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn-submit">Create Event</button>
                  </form>
                </motion.div>
              )}

              <div className="events-list">
                {myEvents.length === 0 ? (
                  <div className="empty-state">
                    <p>No events created yet</p>
                  </div>
                ) : (
                  myEvents.map((event, index) => (
                    <motion.div 
                      key={event.id}
                      className="event-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="event-image">{event.image}</div>
                      <div className="event-info">
                        <h3>{event.title}</h3>
                        <p className="event-date">📅 {new Date(event.date).toLocaleDateString()}</p>
                        <div className="event-meta">
                          <span className={`status ${event.status}`}>
                            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                          </span>
                          <span className="attendees">{event.attendees}/{event.capacity} attending</span>
                        </div>
                      </div>
                      <div className="event-actions">
                        <button className="btn-view">View</button>
                        <button className="btn-edit">Edit</button>
                        <button className="btn-delete">Delete</button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </section>
          )}

          {activeTab === 'analytics' && (
            <section className="analytics-section">
              <h2>Event Analytics</h2>
              <div className="analytics-grid">
                <div className="analytics-card">
                  <h3>Total Events</h3>
                  <p className="analytics-number">{myEvents.length}</p>
                </div>
                <div className="analytics-card">
                  <h3>Total Attendees</h3>
                  <p className="analytics-number">{myEvents.reduce((acc, e) => acc + e.attendees, 0)}</p>
                </div>
                <div className="analytics-card">
                  <h3>Approved Events</h3>
                  <p className="analytics-number">{myEvents.filter(e => e.status === 'approved').length}</p>
                </div>
                <div className="analytics-card">
                  <h3>Pending Approval</h3>
                  <p className="analytics-number">{myEvents.filter(e => e.status === 'pending').length}</p>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

export default CoordinatorDashboard