import React, { useState } from 'react';
import { 
  Shield, 
  ArrowRight,
  CheckCircle,
  Calendar,
  Target,
  Database,
  FileCheck,
  Users,
  Zap
} from 'lucide-react';

const KlyroWaitlistPage = () => {
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState('idle'); // idle, submitting, success, error
  const [message, setMessage] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setEmailStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xgvygwvw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmailStatus('success');
        setMessage('Thanks for joining our waitlist! We\'ll be in touch soon.');
        setEmail('');
      } else {
        setEmailStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setEmailStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Klyro</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Back to Home</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Join the
            <br />
            <span className="text-gray-400">Klyro</span>
            <br />
            waitlist
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience AI-powered SEVIS compliance. Get early access to our pilot program launching June 2025.
          </p>

          {/* Main Signup Form */}
          {emailStatus === 'success' ? (
            <div className="flex flex-col items-center justify-center gap-4 w-full max-w-2xl mx-auto mb-16">
              <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center w-full">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-green-800 text-2xl font-bold mb-4">Welcome to the waitlist!</h2>
                <p className="text-green-700 text-lg mb-6">You're all set! We'll send you updates as we get closer to launch.</p>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <p className="text-green-800 font-medium text-sm">What happens next?</p>
                  <ul className="text-green-700 text-sm mt-2 space-y-1">
                    <li>• Early access to beta features</li>
                    <li>• Priority onboarding when we launch</li>
                    <li>• Direct line to our product team</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-2xl mx-auto mb-16">
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get early access</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                  <div className="w-full sm:flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-lg"
                      required
                    />
                  </div>
                  <button
                    onClick={handleEmailSubmit}
                    disabled={emailStatus === 'submitting' || !email}
                    className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-black transition-colors text-lg w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {emailStatus === 'submitting' ? 'Joining...' : 'Join Waitlist'}
                    {emailStatus !== 'submitting' && <ArrowRight className="w-4 h-4 ml-2" />}
                  </button>
                </div>
                
                {emailStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">{message}</p>
                  </div>
                )}

                <p className="text-sm text-gray-500 mt-4 text-center">
                  Free for the pilot program • No credit card required
                </p>
              </div>
            </div>
          )}

          {/* Benefits grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Early Access</h3>
              <p className="text-gray-600">Be the first to try our AI-powered CPT review system</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Shape the Product</h3>
              <p className="text-gray-600">Your feedback will directly influence our development</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Pilot</h3>
              <p className="text-gray-600">No cost during our pilot program phase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What's coming
              <span className="text-gray-400"> next</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our roadmap to revolutionizing SEVIS compliance workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                June 2025
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pilot Program Launch</h3>
              <p className="text-gray-600 mb-6">Get early access to core features and help shape the future of DSO tools.</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Full CPT review system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Student dashboard with AI insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Exception handling workflows</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                Q4 2025
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Platform Release</h3>
              <p className="text-gray-600 mb-6">Complete SEVIS compliance suite with advanced automation and reporting.</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Advanced SEVIS integration tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Automated document generation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Comprehensive reporting suite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for
              <span className="text-gray-400"> DSOs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature designed specifically for Designated School Officials and their unique SEVIS compliance challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Student Management</h3>
              <p className="text-gray-600 mb-4">Centralized dashboard with SEVIS ID tracking, visa status monitoring, and program management.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Real-time SEVIS status updates</li>
                <li>• Advanced filtering and search</li>
                <li>• Bulk actions and exports</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered CPT Review</h3>
              <p className="text-gray-600 mb-4">Intelligent document analysis with automated scoring for academic program alignment.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Automated transcript parsing</li>
                <li>• Job offer letter verification</li>
                <li>• Smart compliance flagging</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Tracking</h3>
              <p className="text-gray-600 mb-4">Automated compliance monitoring with exception handling and audit trails.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Real-time compliance calculations</li>
                <li>• Policy exception management</li>
                <li>• Automated alerts and notifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">When will the pilot program start?</h3>
              <p className="text-gray-600">Our pilot program is scheduled to launch in June 2025. Waitlist members will get priority access and advance notice.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is the pilot program really free?</h3>
              <p className="text-gray-600">Yes! The pilot program is completely free for all participants. This allows us to gather feedback and refine the platform before our official launch.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What makes Klyro different from existing tools?</h3>
              <p className="text-gray-600">Klyro is built specifically for DSOs with AI-powered document analysis, automated compliance tracking, and intelligent workflow management. We focus on reducing manual work while maintaining compliance accuracy.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How secure is student data on Klyro?</h3>
              <p className="text-gray-600">We follow industry-standard security practices including encryption at rest and in transit, SOC 2 compliance, and FERPA-compliant data handling procedures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-semibold text-gray-900">Klyro</span>
              </div>
              <p className="text-gray-600 max-w-xs">
                The connected workspace for DSOs. Streamline SEVIS compliance with AI-powered workflows.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-500">
            © 2025 Klyro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KlyroWaitlistPage;