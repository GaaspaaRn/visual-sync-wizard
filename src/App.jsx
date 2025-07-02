import { useState, useEffect } from 'react'
import gruvIcon from './assets/gruv-icon.png'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-07-10T12:00:00-03:00') // Horário de Brasília (UTC-3)
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="countdown-container">
      <div className="mystery-header">
        <img src={gruvIcon} className="gruv-logo" alt="GRUV" />
        <h1 className="mystery-title">ALGO GRANDE VEM AÍ</h1>
        <p className="mystery-subtitle">O futuro da música está chegando...</p>
      </div>
      
      <div className="countdown-display">
        <div className="time-unit">
          <span className="time-number">{timeLeft.days.toString().padStart(2, '0')}</span>
          <span className="time-label">DIAS</span>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <span className="time-number">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="time-label">HORAS</span>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <span className="time-number">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="time-label">MINUTOS</span>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <span className="time-number">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="time-label">SEGUNDOS</span>
        </div>
      </div>

      <div className="mystery-footer">
        <p className="launch-date">10 DE JULHO • 2025 • 12:00 BRT</p>
        <div className="glow-effect"></div>
      </div>
    </div>
  )
}

export default App