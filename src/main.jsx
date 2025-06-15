import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import StudentDashboard from './Dashboard.jsx'
import WhyDifferentPage from './Different.jsx'
import StatusBridgeDemo from './demo.jsx'
import CPTDashboard from './CPT.jsx'
import SevisCompliancePortal from './SEVIScompliance.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demo" element={<StatusBridgeDemo />} />
        <Route path="/dash" element={<StudentDashboard />} />
        <Route path="/diff" element={<WhyDifferentPage />} />
        <Route path="/cpt" element={<CPTDashboard />} />
        <Route path="/sevis" element={<SevisCompliancePortal />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)