import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ApproverDashboard.css'

function ApproverDashboard() {
  const [activeTab, setActiveTab] = useState('pending')
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [feedbackText, setFeedbackText] = useState('')

  const [pendingEvents, setPendingEvents] = useState([
    {
      id: 1,
      title: 'AI Workshop',
      coordinator: 'John Doe',
      date: '2026-04-28',
      venue: 'Tech Lab',
      capacity: 200,
      description: 'Learn machine learning basics with hands-on coding',
      image: '🤖'
    },
    {
      id: 2,
      title: 'Spring Sports Meet',
      coordinator: 'Jane Smith',
      date: '2026-05-01',
      venue: 'Sports Complex',
      capacity: 500,
      description: 'Inter-college sports championship',
      image: '⚽'
    }
  ])

  const [approvedEvents, setApprovedEvents] = useState([
    {
      id: 3,
      title: 'TechHack 2026',
      coordinator: 'Mike Johnson',
      date: '2026-04-25',
      venue: 'Main Auditorium',
      capacity: 500,
      status: 'approved',
      image: '🖥️'
    }
  ])

  const [rejectedEvents, setRejectedEvents] = useState([
    {
      id: 4,
      title: 'Late Night Party',
      coordinator: 'Alex Brown',
      date: '2026-04-20',
      venue: 'Campus Grounds',
      capacity: 300,
      status: 'rejected',
      feedback: 'Does not align with campus policies',
      image: '🎉'
    }
  ])

  const handleApprove = (eventId) => {
    const event = pendingEvents.find(e => e.id === eventId)
    if (event) {
      setApprovedEvents([...approvedEvents, { ...event, status: 'approved' }])
      setPendingEvents(pendingEvents.filter(e => e.id !== eventId))
      setSelectedEvent(null)
    }
  }

  const handleReject = (eventId) => {
    const event = pendingEvents.find(e => e.id === eventId)
    if (event && feedbackText.trim()) {
      setRejectedEvents([...rejectedEvents, { 
        ...event, 
        status: 'rejected',
        feedback: feedbackText 
      }])
      setPendingEvents(pendingEvents.filter(e => e.id !== eventId))
      setFeedbackText('')
      setSelectedEvent(null)
    }
  }

  return (
    <div className="approver-container">
      {/* Navigation */}
      <nav className="approver-nav">
        <div className="nav-content">
          <Link to="/" className="logo">NEXUS.</Link>
          <h2>Event Approver</h2>
          <div className="nav-actions">
            <button className="user-menu">👤 Approver</button>
            <Link to="/" className="logout">Sign out</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="approver-content">
        {/* Sidebar */}
        <aside className="approver-sidebar">
          <div className="sidebar-section">
            <h3>Status</h3>
            <div className="status-tabs">
              <button 
                className={`status-tab ${activeTab === 'pending' ? 'active' : ''}`}
                onClick={() => setActiveTab('pending')}
              >
                <span className="badge">{pendingEvents.length}</span>
                Pending
              </button>
              <button 
                className={`status-tab ${activeTab === 'approved' ? 'active' : ''}`}
                onClick={() => setActiveTab('approved')}
              >
                <span className="badge">{approvedEvents.length}</span>
                Approved
              </button>
              <button 
                className={`status-tab ${activeTab === 'rejected' ? 'active' : ''}`}
                onClick={() => setActiveTab('rejected')}
              >
                <span className="badge">{rejectedEvents.length}</span>
                Rejected
              </button>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Summary</h3>
            <div className="summary-items">
              <div className="summary-item">
                <span>Total Reviews</span>
                <strong>{approvedEvents.length + rejectedEvents.length}</strong>
              </div>
              <div className="summary-item">
                <span>Approval Rate</span>
                <strong>{approvedEvents.length + rejectedEvents.length === 0 ? '0%' : Math.round((approvedEvents.length / (approvedEvents.length + rejectedEvents.length)) * 100) + '%'}</strong>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Area */}
        <main className="approver-main">
          {activeTab === 'pending' && (
            <section className="events-section">
              <h2>Pending Approval ({pendingEvents.length})</h2>
              <div className="events-queue">
                {pendingEvents.length === 0 ? (
                  <div className="empty-state">
                    <p>No pending events for review</p>
                  </div>
                ) : (
                  pendingEvents.map((event, index) => (
                    <motion.div 
                      key={event.id}
                      className="event-review-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="event-header">
                        <div className="event-image">{event.image}</div>
                        <div className="event-header-info">
                          <h3>{event.title}</h3>
                          <p className="coordinator">by {event.coordinator}</p>
                        </div>
                      </div>
                      <div className="event-details">
                        <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                        <span>📍 {event.venue}</span>
                        <span>👥 {event.capacity} capacity</span>
                      </div>
                      <p className="description">{event.description}</p>
                      {selectedEvent?.id === event.id && (
                        <motion.div 
                          className="approval-actions"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <div className="feedback-section">
                            <label>Feedback (for rejection)</label>
                            <textarea
                              placeholder="Provide feedback if rejecting..."
                              value={feedbackText}
                              onChange={(e) => setFeedbackText(e.target.value)}
                              rows="3"
                            />
                          </div>
                          <div className="action-buttons">
                            <button 
                              className="btn-approve"
                              onClick={() => handleApprove(event.id)}
                            >
                              ✓ Approve
                            </button>
                            <button 
                              className="btn-reject"
                              onClick={() => handleReject(event.id)}
                              disabled={!feedbackText.trim()}
                            >
                              ✕ Reject
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))
                )}
              </div>
            </section>
          )}

          {activeTab === 'approved' && (
            <section className="events-section">
              <h2>Approved Events ({approvedEvents.length})</h2>
              <div className="events-queue">
                {approvedEvents.length === 0 ? (
                  <div className="empty-state">
                    <p>No approved events yet</p>
                  </div>
                ) : (
                  approvedEvents.map((event, index) => (
                    <motion.div 
                      key={event.id}
                      className="event-review-card approved"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="event-header">
                        <div className="event-image">{event.image}</div>
                        <div className="event-header-info">
                          <h3>{event.title}</h3>
                          <span className="status-badge approved">APPROVED</span>
                        </div>
                      </div>
                      <div className="event-details">
                        <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                        <span>📍 {event.venue}</span>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </section>
          )}

          {activeTab === 'rejected' && (
            <section className="events-section">
              <h2>Rejected Events ({rejectedEvents.length})</h2>
              <div className="events-queue">
                {rejectedEvents.length === 0 ? (
                  <div className="empty-state">
                    <p>No rejected events</p>
                  </div>
                ) : (
                  rejectedEvents.map((event, index) => (
                    <motion.div 
                      key={event.id}
                      className="event-review-card rejected"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="event-header">
                        <div className="event-image">{event.image}</div>
                        <div className="event-header-info">
                          <h3>{event.title}</h3>
                          <span className="status-badge rejected">REJECTED</span>
                        </div>
                      </div>
                      <div className="event-details">
                        <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                        <span>📍 {event.venue}</span>
                      </div>
                      {event.feedback && (
                        <div className="feedback-box">
                          <p><strong>Feedback:</strong> {event.feedback}</p>
                        </div>
                      )}
                    </motion.div>
                  ))
                )}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

export default ApproverDashboard