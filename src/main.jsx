import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import CPTDashboard from './CPT.jsx'
import ImprovedCPTModal from './Modal.jsx'
import StatusBridgeLanding from './LandingEx.jsx'

import TeamPage from './Team.jsx'

import CPTDemoPage from './DemoNotification.jsx'

import PricingPage from './Pricing.jsx'

import KlyroLogin from './LogIn.jsx'

// 23 July Updates

import DSODashboard from './DashDSO.jsx'

import I20Generator from './i20generator.jsx'

import SEVISBatchUpload from './SEVISbatch.jsx'

import PendingRequests from './PendingRequests.jsx'

import StudentDashboard from './Students.jsx'

import KlyroWaitlistPage from './Waitlist.jsx'

import KlyroBlog from './Blog.jsx'

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
        <Route path="/about" element={<TeamPage />} />
        <Route path="/cpt-demo" element={<CPTDemoPage />} />

        {/* <Route path="/onboarding" element={<StatusBridgeOnboarding />} /> */}

        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/authentication" element={<KlyroLogin />} />
        <Route path="/admin" element={<DSODashboard />} />
        <Route path="/i20" element={<I20Generator />} />
        <Route path="/batch" element={<SEVISBatchUpload />} />
        <Route path="/requests" element={<PendingRequests />} />
        <Route path="/students" element={<StudentDashboard />} />
        <Route path="/waitlist" element={<KlyroWaitlistPage />} />
        <Route path="/blog" element={<KlyroBlog/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)