const express = require('express')
const app = express()

app.use(express.json())

// In-memory data for now
let events = [
  {
    id: 1,
    name: "Debate Competition",
    date: "2026-04-20",
    venue: "Auditorium",
    club: "MUNSOC",
    status: "pending"
  }
]

// GET all events
app.get('/events', (req, res) => {
  res.json(events)
})

// GET one event
app.get('/events/:id', (req, res) => {
  const event = events.find(e => e.id === parseInt(req.params.id))
  if (!event) {
    return res.status(404).json({ message: "Event not found" })
  }
  res.json(event)
})

// POST create event
app.post('/events', (req, res) => {
  const newEvent = {
    id: events.length + 1,
    name: req.body.name,
    date: req.body.date,
    venue: req.body.venue,
    club: req.body.club,
    status: "pending"
  }
  events.push(newEvent)
  res.status(201).json(newEvent)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})