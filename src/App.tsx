import { useState } from 'react'
import Hero from './components/Hero'
import InvitationMessage from './components/InvitationMessage'
import Countdown from './components/Countdown'
import EventDetails from './components/EventDetails'
import Location from './components/Location'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import Envelope from './components/Envelope'
import './index.css'

function App() {
  const [showEnvelope, setShowEnvelope] = useState(true)

  return (
    <div className="min-h-screen overflow-x-hidden">
      {showEnvelope && (
        <Envelope onOpen={() => setShowEnvelope(false)} />
      )}

      <div className={`transition-opacity duration-1000 ${showEnvelope ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <Hero />
        <InvitationMessage />
        <Countdown />
        <EventDetails />
        <Location />
        <RSVP />
        <Footer />
      </div>
    </div>
  )
}

export default App
