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
        <h1 className="mystery-title">O chamado foi feito.</h1>
        <p className="mystery-subtitle">Um novo movimento está prestes a começar.</p>
      </div>
      
      <div className="countdown-section">
        <div className="countdown-display">
          <div className="countdown-row">
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
          </div>
          <div className="time-unit">
            <span className="time-number">{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <span className="time-label">SEGUNDOS</span>
          </div>
        </div>
      </div>

      <div className="logo-container">
        <img src={gruvIcon} className="gruv-logo-bottom" alt="GRUV" />
      </div>
    </div>
  )
}

export default App