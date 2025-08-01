import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Users, 
  FileCheck, 
  Shield, 
  ArrowRight, 
  Menu, 
  X,
  Clock,
  Target,
  Zap,
  Star,
  Play,
  BookOpen,
  Database,
  Calendar
} from 'lucide-react';

const StatusBridgeLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Notion style */}
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
              <div className="flex items-center space-x-6 text-sm">
                <a href="#product" className="text-gray-600 hover:text-gray-900 transition-colors">Product</a>
                <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">Solutions</a>
                <a href="#resources" className="text-gray-600 hover:text-gray-900 transition-colors">Resources</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              </div>
              <div className="flex items-center space-x-3">
                {/* <button className="text-gray-600 hover:text-gray-900 text-sm"></button> */}
                <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-black transition-colors">
                  Demo
                </button>
              </div>
            </div>

            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Notion's big bold style */}
      <section className="relative px-6 pt-16 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Effortless
              <br />
              <span className="text-gray-400">SEVIS compliance</span>
              <br />
              in one platform
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Streamline CPT reviews, automate workflows, and manage international students with AI assistance—all in one workspace built for DSOs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-black transition-colors flex items-center">
                Get Klyro free
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:border-gray-400 transition-colors flex items-center">
                <Play className="w-4 h-4 mr-2" />
                Request demo
              </button>
            </div>

            {/* Notion-style feature highlights */}
            <div className="text-sm text-gray-500 space-y-2">
              <p>✨ AI-powered document review</p>
              <p>⚡ Zero IT setup required</p>
              <p>🎯 Purpose-built for Designated School Officials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections - Notion's card style */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Student Dashboard Feature */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                  <Database className="w-4 h-4 mr-2" />
                  Student Management
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  All your students, 
                  <span className="text-gray-400"> organized.</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Searchable database with SEVIS ID, visa status, and academic program tracking. Smart filters for work authorization and renewal management.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Real-time SEVIS status updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Bulk actions and document downloads</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Advanced filtering by program, country, status</span>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Explore student dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
                <div className="bg-gray-50 rounded-md p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">International Students</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">247 Active</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">F-1 Students</span>
                      <span className="text-gray-900">189</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Pending CPT</span>
                      <span className="text-gray-900">12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Renewal Due</span>
                      <span className="text-orange-600">8</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-blue-700">JD</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">John Doe</div>
                      <div className="text-xs text-gray-500">Computer Science • F-1</div>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-purple-700">MS</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">Maria Silva</div>
                      <div className="text-xs text-gray-500">Business Admin • F-1</div>
                    </div>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">CPT Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CPT Review Feature */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <div className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                  <FileCheck className="w-4 h-4 mr-2" />
                  AI-Powered Review
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Review CPT applications,
                  <span className="text-gray-400"> intelligently.</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  AI analyzes transcripts, job offers, and advisor letters. Auto-scoring for academic fit with flagging of high-complexity submissions.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Automated document parsing and analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">AI scoring for major program alignment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Smart flagging of incomplete applications</span>
                  </div>
                </div>
                <button className="text-green-600 hover:text-green-700 font-medium flex items-center">
                  See CPT review in action
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
              <div className="lg:order-1 bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">CPT Application Review</h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">AI Analysis</span>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-green-800">Academic Fit Score: 92%</span>
                    </div>
                    <p className="text-sm text-green-700">Strong alignment between software engineering position and Computer Science program</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Transcript Analysis</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Complete</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Job Offer Letter</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Verified</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Advisor Recommendation</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Review</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded text-sm font-medium">
                    Approve CPT
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded text-sm font-medium">
                    Request Info
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Feature */}
          <div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                  <Shield className="w-4 h-4 mr-2" />
                  SEVIS Compliance
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Stay compliant,
                  <span className="text-gray-400"> effortlessly.</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Real-time compliance tracking with automated calculations. Handle policy exceptions for medical leave and GSI assignments with full audit trails.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Automated compliance status calculations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Policy exception management system</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Real-time alerts and notifications</span>
                  </div>
                </div>
                <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center">
                  Explore compliance tools
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">SEVIS Compliance Dashboard</h3>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">94%</div>
                      <div className="text-xs text-gray-500">Compliant</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600 mb-1">4%</div>
                      <div className="text-xs text-gray-500">At Risk</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600 mb-1">2%</div>
                      <div className="text-xs text-gray-500">Non-Compliant</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm font-medium text-yellow-800">5 students need attention</span>
                      </div>
                      <p className="text-xs text-yellow-700">CPT applications nearing deadline</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm font-medium text-red-800">2 compliance violations</span>
                      </div>
                      <p className="text-xs text-red-700">SEVIS reporting overdue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Notion style */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your AI everything app
              <span className="text-gray-400"> for DSO workflows.</span>
            </h2>
            <p className="text-xl text-gray-600">
              Built right into your workspace, Klyro is ready to streamline, analyze, and automate your SEVIS compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                June 2025
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pilot Program Launch</h3>
              <p className="text-gray-600 mb-4">Get early access to core features and help shape the future of DSO tools.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                  Full CPT review system
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                  Student dashboard with AI insights
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                  Exception handling workflows
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Target className="w-4 h-4 mr-2" />
                Q4 2025
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Platform Release</h3>
              <p className="text-gray-600 mb-4">Complete SEVIS compliance suite with advanced automation and reporting.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                  Advanced SEVIS integration tools
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                  Automated document generation
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                  Comprehensive reporting suite
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Notion style */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get started with
            <span className="text-gray-400"> Klyro</span> today.
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of DSOs who've simplified their SEVIS compliance workflows. No setup required.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-md font-medium hover:bg-black transition-colors text-lg">
              Get Klyro free
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-md font-medium hover:border-gray-400 transition-colors text-lg">
              Request demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Notion minimalist style */}
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
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-gray-900">Student Dashboard</a></li>
                  <li><a href="#" className="hover:text-gray-900">CPT Review</a></li>
                  <li><a href="#" className="hover:text-gray-900">Compliance Portal</a></li>
                  <li><a href="#" className="hover:text-gray-900">AI Features</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Solutions</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-gray-900">For DSOs</a></li>
                  <li><a href="#" className="hover:text-gray-900">For Universities</a></li>
                  <li><a href="#" className="hover:text-gray-900">For Students</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                  <li><a href="#" className="hover:text-gray-900">API Docs</a></li>
                  <li><a href="#" className="hover:text-gray-900">Templates</a></li>
                  <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-gray-900">About</a></li>
                  <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                  <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                  <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                </ul>
              </div>
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

export default StatusBridgeLanding;