import React, { useState } from 'react';
import { 
  Shield, 
  ArrowLeft, 
  Lock, 
  Mail, 
  AlertCircle,
  CheckCircle,
  Users,
  FileCheck,
  Clock,
  ExternalLink,
  Play,
  BookOpen
} from 'lucide-react';

import { Link } from 'react-router-dom';

const CPTDemoPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <Link to='/'>
                    <span className="text-sm">Back to home</span>
                </Link>
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Klyro</span>
            </div>
            
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Play className="w-4 h-4 mr-2" />
            Demo Version
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            CPT Review
            <br />
            <span className="text-gray-400">Demo Access</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience our AI-powered CPT review system with sample data. The full version requires institutional access with verified school credentials.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Demo Access Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Try the Demo</h2>
                  <p className="text-sm text-gray-600">No registration required</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Explore our CPT review interface with pre-loaded sample applications. See how AI analysis, document parsing, and compliance checking work in real-time.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">5 sample CPT applications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Full AI analysis and scoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Interactive document review</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Compliance dashboard preview</span>
                </div>
              </div>
              
              <Link to='/cpt'>
              <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-md font-medium hover:bg-black transition-colors flex items-center justify-center">
                Launch Demo
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
                </Link>
            </div>

            {/* Full Access Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Lock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Full Platform Access</h2>
                  <p className="text-sm text-gray-600">For institutional users</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Access the complete Klyro platform with your institutional data, full SEVIS integration, and advanced compliance tools.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-yellow-800 mb-1">School Email Required</h3>
                    <p className="text-sm text-yellow-700">
                      Full access requires verification with your institutional email address (.edu domain) and DSO credentials.
                    </p>
                  </div>
                </div>
              </div>
              
              {!isSubmitted ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institutional Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.name@university.edu"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    Request Access
                  </button>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <h3 className="font-medium text-green-800">Request Submitted</h3>
                      <p className="text-sm text-green-700">
                        We'll review your request and send access instructions to your email within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What you'll see in the
              <span className="text-gray-400"> demo</span>
            </h2>
            <p className="text-lg text-gray-600">
              A comprehensive preview of how Klyro streamlines CPT review workflows
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Document Analysis</h3>
              <p className="text-gray-600 text-sm">
                See how our AI parses transcripts, job offers, and recommendation letters to generate compliance scores and flag potential issues.
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Student Dashboard</h3>
              <p className="text-gray-600 text-sm">
                Experience the intuitive interface for managing international students, tracking applications, and monitoring compliance status.
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Workflow Automation</h3>
              <p className="text-gray-600 text-sm">
                Explore automated approval workflows, deadline tracking, and notification systems that keep your office running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently asked questions
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 mb-2">What's included in the demo?</h3>
              <p className="text-gray-600">
                The demo includes 5 sample CPT applications with full AI analysis, document parsing, and compliance checking. You'll see the complete workflow from application submission to approval decision.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 mb-2">How do I get full access?</h3>
              <p className="text-gray-600">
                Full access requires verification with your institutional email address (.edu domain) and DSO credentials. We'll verify your role and provide access within 24 hours.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Is my data secure?</h3>
              <p className="text-gray-600">
                Yes, we use enterprise-grade security with SOC 2 compliance, end-to-end encryption, and FERPA-compliant data handling. All student data remains within your institutional control.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Can I integrate with our existing systems?</h3>
              <p className="text-gray-600">
                Klyro integrates with popular student information systems and SEVIS reporting tools. We provide APIs and custom integrations for enterprise customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">Klyro</span>
          </div>
          <p className="text-gray-600 mb-6">
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <BookOpen className="w-4 h-4 mr-2" />
              Documentation
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              Contact Support
            </button> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CPTDemoPage;