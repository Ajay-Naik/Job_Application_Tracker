Job Application Tracker
A full-stack web app to track job applications — built with React, Node.js, Express, and MongoDB.
Live Demo
🔗 job-application-tracker-three-tau.vercel.app
Features

Add, update, and delete job applications
Track status: Applied, Interview, Rejected, Offer
Filter applications by status
Dashboard with live counts per status
Data persists via MongoDB Atlas

Tech Stack
Frontend: React, Vite, Tailwind CSS, Axios

Backend: Node.js, Express.js

Database: MongoDB Atlas, Mongoose

Deployment: Vercel (frontend), Render (backend)
Getting Started
Prerequisites

Node.js
MongoDB Atlas account

Installation
bash# Clone the repo
git clone https://github.com/Ajay-Naik/Job_Application_Tracker.git

# Backend
cd server
npm install
# Add .env file with MONGO_URL and PORT
node server.js

# Frontend
cd ../client
npm install
npm run dev
Project Structure
Job_Application_Tracker/
├── client/          # React frontend
│   └── src/
│       ├── components/
│       │   ├── ApplicationForm.jsx
│       │   ├── ApplicationList.jsx
│       │   └── Dashboard.jsx
│       ├── api.js
│       └── App.jsx
└── server/          # Express backend
    ├── models/
    │   └── JobApplication.js
    ├── routes/
    │   └── applications.js
    └── server.js
