import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const copyPath = () => {
    navigator.clipboard.writeText('C:\\Users\\Anoop\\Desktop\\anoop-react-app')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 18) return 'Good Afternoon'
    return 'Good Evening'
  }

  return (
    <div className="container">
      {/* Background ambient glow shapes */}
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <header className="header">
        <span className="badge">🚀 React + Vite Project</span>
        <span className="live-clock">{time}</span>
      </header>

      <main className="main-content">
        <div className="hero-card">
          <div className="avatar-wrapper">
            <div className="avatar">A</div>
            <div className="status-indicator" title="Active"></div>
          </div>

          <p className="greeting-sub">{getGreeting()}, welcome to my page!</p>
          <h1 className="hero-title">
            Hello, I am <span className="highlight-name">Anoop</span>
          </h1>
          <p className="hero-description">
            This is my custom React web application running live with Vite and React.
          </p>

          <div className="action-row">
            <button
              className="primary-btn"
              onClick={() => setLikes((prev) => prev + 1)}
            >
              ❤️ Give a wave ({likes})
            </button>
            <button className="secondary-btn" onClick={copyPath}>
              {copied ? '✓ Path Copied!' : '📋 Copy Project Path'}
            </button>
          </div>
        </div>

        <div className="grid-cards">
          <div className="info-card">
            <div className="card-icon">⚡</div>
            <h3>Fast & Modern</h3>
            <p>Powered by Vite with instant Hot Module Replacement (HMR).</p>
          </div>

          <div className="info-card">
            <div className="card-icon">📁</div>
            <h3>Project Location</h3>
            <p className="code-text">Desktop/anoop-react-app</p>
          </div>

          <div className="info-card">
            <div className="card-icon">⚛️</div>
            <h3>React 19</h3>
            <p>Built with functional components, hooks, and responsive design.</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Created for <strong>Anoop</strong> &bull; Ready for customization</p>
      </footer>
    </div>
  )
}

export default App
