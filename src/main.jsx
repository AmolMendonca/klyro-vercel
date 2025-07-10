import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import CPTDashboard from './CPT.jsx'
import ImprovedCPTModal from './Modal.jsx'
import StatusBridgeLanding from './LandingEx.jsx'

import TeamPage from './Team.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/demo" element={<StatusBridgeDemo />} /> */}
        {/* <Route path="/dash" element={<StudentDashboard />} /> */}
        {/* <Route path="/diff" element={<WhyDifferentPage />} /> */}
        <Route path="/cpt" element={<CPTDashboard />} /> 
        {/* <Route path="/sevis" element={<SevisCompliancePortal />} /> */}
        <Route path="/cpt-v2" element={<ImprovedCPTModal />} />
        <Route path="/new" element={<StatusBridgeLanding />} />
        <Route path="/team" element={<TeamPage />} />
        {/* <Route path="/onboarding" element={<StatusBridgeOnboarding />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)