# NEXUS
### College Event Management Platform
 
> One platform. Every club. Every event. Zero paperwork.
 
---
 
## The Problem
 
College event management is broken:
 
- Clubs fight over dates on WhatsApp with no visibility into conflicts
- Students miss events because announcements drown in group messages
- Approval means printing letters, chasing signatures, and waiting days
- There's no single source of truth for venues, dates, or registrations
 
---
 
## The Solution
 
NEXUS is an internal platform where clubs book dates and venues, get digital approvals, and students discover and register for events — all in one place.
 
---
 
## User Roles
 
NEXUS has four distinct user types, each with a dedicated dashboard.
 
### 1. Club Coordinator
- Views a shared calendar and picks conflict-free dates
- Selects an available venue for the chosen date
- Fills in event details and submits for approval
- Gets notified on approval or rejection (with remarks)
- Downloads an auto-generated permission letter on approval
- Tracks registered students and live registration count
 
### 2. Student
- Browses upcoming event cards sorted by date
- Views full event details — name, description, date, time, venue, club, contact
- Registers for any event with one click and gets a confirmation
 
### 3. Approver (HOD / Dean / Principal)
- Gets notified when a new event request is submitted
- Sees all pending requests on their dashboard, grouped by club
- Reviews full event details and approves or rejects with a remark
- Approval auto-generates a permission letter PDF and notifies the coordinator
 
### 4. Admin
- Manages venues and their capacities
- Manages club accounts and coordinator access
- Manages approver accounts
 
---
 
## Core Features
 
| Feature | Description |
|---|---|
| **Shared Calendar** | Visual calendar with conflict detection — same venue, same date |
| **Venue Booking** | Check availability and reserve venues per event |
| **Approval Workflow** | Digital approval chain with email or in-app notifications |
| **Permission Letter** | Auto-generated PDF on approval, downloadable by coordinator |
| **Event Discovery** | Student-facing event feed with full details |
| **One-Click Registration** | Students register instantly, coordinator sees live count |
| **Live Attendance Tracking** | Real-time registration counter for coordinators |
 
---
 
## User Flows
 
### Club Coordinator — Submitting an Event
 
```
Login → View calendar → Pick available date
     → Select venue → Fill event details
     → Submit → [Wait for approval]
     → Approved: Download permission letter + track registrations
     → Rejected: View remarks + resubmit
```
 
### Student — Registering for an Event
 
```
Login → Browse event feed → Click event card
     → View full details → Register (one click)
     → Receive confirmation
```
 
### Approver — Reviewing a Request
 
```
Receive notification → Open pending requests dashboard
     → Review event details → Approve or Reject with remark
     → System auto-generates permission letter + notifies coordinator
```
 
### Admin — Platform Management
 
```
Login → Manage venues (add/edit/remove, set capacity)
     → Manage club accounts + coordinator access
     → Manage approver accounts
```
 
---
 
## Tech Stack
 
| Layer | Technology |
|---|---|
| Frontend | React |
| Backend | FastAPI |
| Database | PostgreSQL or MySQL |
| Authentication | JWT tokens |
| PDF Generation | ReportLab (or equivalent) |
 
---
 
## Out of Scope (v1)
 
The following are explicitly **not** part of this version:
 
- Mobile app
- Payment or ticketing system
- Physical / cryptographic digital signatures *(approver name and date on the letter is sufficient for now)*
 
---
