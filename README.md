# MDP Terminal — Frontend

A modern AI-powered market intelligence dashboard that provides probability-based market direction insights using technical indicators, macro signals, and historical backtesting.

Built with a modern SaaS-inspired UI using React, TypeScript, TailwindCSS, Clerk Authentication, and Recharts.

---

## Live Demo

Frontend:
[MDP Terminal Live App](https://market-insight-dashboard.vercel.app?utm_source=chatgpt.com)

Backend API:
[MDP Backend API](https://mdp-backend-fc8d.onrender.com?utm_source=chatgpt.com)

Backend Repository:
[MDP Backend Repository](https://github.com/Ayushrai83/mdp-backend?utm_source=chatgpt.com)

---

# Features

## Authentication

* Clerk authentication integration
* Secure sign-in/sign-up flow
* Protected dashboard routes
* User session management

## Market Dashboard

* Live market direction prediction
* Confidence scoring system
* Trade signal generation
* Risk indication system
* Signal-level breakdown visualization

## Technical Indicators

* RSI analysis
* SMA200 trend analysis
* FII flow monitoring
* India VIX integration
* Global market impact analysis

## Backtesting Engine

* Historical trade evaluation
* Accuracy tracking
* Confidence bucket analytics
* Rolling performance charts
* Trade history table

## UI/UX

* Fully responsive modern interface
* Dark/light mode support
* SaaS-inspired dashboard layout
* Smooth transitions and hover effects
* Mobile responsive design

---

# Tech Stack

## Frontend

* React
* TypeScript
* Vite
* TailwindCSS
* React Router DOM
* TanStack Query
* Clerk Authentication
* Recharts
* Lucide React Icons

## Deployment

* Vercel (Frontend)
* Render (Backend)

---

# Folder Structure

```bash
src
│
├── components
│   ├── backtest
│   ├── dash
│   └── ui
│
├── hooks
│
├── lib
│
├── pages
│
├── test
│
├── types
│
├── App.tsx
├── main.tsx
└── index.css
```

---

# Core Modules

## Dashboard

Displays:

* Market direction
* Confidence score
* Risk level
* Signal aggregation
* Indicator overview

## Signal Breakdown

Displays:

* Individual signal strength
* Confidence visualization
* Bullish/Bearish classification

## Backtesting

Provides:

* Accuracy analysis
* Historical prediction evaluation
* Confidence-based analytics
* Performance visualization

---

# Environment Variables

Create a `.env` file in the frontend root:

```env
VITE_API_BASE_URL=https://mdp-backend-fc8d.onrender.com/api/v1
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Ayushrai83/market-insight-dashboard.git
```

## Navigate

```bash
cd market-insight-dashboard
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

---

# Build For Production

```bash
npm run build
```

---

# Responsive Design

The application is optimized for:

* Desktop
* Tablet
* Mobile devices

Responsive improvements include:

* Adaptive navigation
* Scrollable tables
* Mobile-friendly charts
* Responsive dashboard grids

---

# Authentication

Authentication is implemented using Clerk.

Features:

* Secure login/signup
* Session persistence
* Route protection
* User profile integration

---

# API Integration

The frontend communicates with the backend REST API using Axios and TanStack Query.

Endpoints include:

* Market status
* Backtest analytics
* Signal aggregation

---

# Future Improvements

* AI-generated market summaries
* Saved analysis projects
* Portfolio tracking
* Advanced charting
* WebSocket live updates
* Notification system
* Admin dashboard
* Export reports

---

# Author

Ayush Rai

GitHub:
[Ayush Rai GitHub](https://github.com/Ayushrai83?utm_source=chatgpt.com)

Portfolio:
[Portfolio Website](https://gurukuldeveloperportfolio.netlify.app/?utm_source=chatgpt.com)

---

# Disclaimer

This project provides probability-based analytical insights and is intended for educational and research purposes only.

It should not be considered financial advice or trading recommendations.
