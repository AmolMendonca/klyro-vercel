import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Menu,
  X,
  Check,
  Shield,
  FileText,
  Users,
  Star,
  Play,
  ChevronRight,
  Clock,
} from 'lucide-react';

const StatusBridgeLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 text-gray-900 overflow-x-hidden">
      {/* Floating Navigation */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 border border-gray-200/50'
            : 'bg-white/80 backdrop-blur-sm border border-gray-100'
        } rounded-2xl px-6 py-3`}
      >
        <div className="flex items-center justify-center max-w-5xl mx-auto space-x-10">
          <a
            href="#features"
            className="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105 font-medium"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105 font-medium"
          >
            Pricing
          </a>
          <button className="bg-gradient-to-r from-indigo-800 to-indigo-700 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200 hover:scale-105 font-medium">
            Get Access
          </button>
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 py-2 font-medium"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 py-2 font-medium"
              >
                Pricing
              </a>
              <button className="bg-gradient-to-r from-indigo-800 to-indigo-700 text-white px-4 py-2.5 rounded-xl text-left font-medium">
                Get Access
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200/50 rounded-full px-4 py-2 mb-8 hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <Star className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Launching August 2025</span>
            <ChevronRight className="w-4 h-4 text-gray-400 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-indigo-700 bg-clip-text text-transparent">
              Effortless SEVIS 
            </span>
            <br />
            <span className="text-gray-400 relative">
compliance              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full"></div>
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-800 to-purple-600 bg-clip-text text-transparent">
              in one platform
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Automate SEVIS compliance, generate I-20s instantly, and manage student cases{' '}
            <span className="font-medium text-gray-800">without the headache</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-indigo-800 to-indigo-700 text-white px-10 py-4 rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 flex items-center group text-lg font-semibold">
              Start pilot program
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group text-lg">
              <div className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center mr-3 group-hover:shadow-xl transition-all duration-300">
                <Play size={16} className="text-indigo-600 ml-0.5" />
              </div>
              See how it works
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></div>
              No setup required
            </div>
            <div className="flex items-center">
              <Shield size={14} className="mr-2 text-indigo-500" />
              SEVIS compliant
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-2 text-indigo-500" />
              5min to get started
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-purple-100 to-purple-50 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
                BUILT FOR DSOS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Everything you need, nothing you do not
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed specifically for Designated School Officials
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* SEVIS Tracking */}
            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">SEVIS Tracking</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Real-time student status monitoring with intelligent deadline alerts and automated compliance checks.
              </p>
              <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn more <ArrowRight size={16} className="ml-2" />
              </div>
            </div>

            {/* Smart Documents */}
            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <FileText className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Smart Documents</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Auto-generate I-20s, CPT/OPT forms with your institutional templates. AI-powered accuracy checks included.
              </p>
              <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn more <ArrowRight size={16} className="ml-2" />
              </div>
            </div>

            {/* Case Management */}
            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Case Management</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Organize student cases with smart notes, priority flags, and seamless team collaboration tools.
              </p>
              <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn more <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Trusted by DSOs nationwide
            </h2>
            <p className="text-xl text-gray-600">Join the community of forward-thinking institutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-purple-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "StatusBridge cut our I-20 processing time from hours to minutes. Complete game changer for our office."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SC
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sarah Chen</div>
                  <div className="text-sm text-gray-500">DSO, Tech University</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-purple-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "Finally, a system that truly understands SEVIS compliance. No more manual tracking headaches."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MR
                </div>
                <div>
                  <div className="font-bold text-gray-900">Michael Rodriguez</div>
                  <div className="text-sm text-gray-500">DSO, State College</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-purple-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "Our entire team loves how intuitive it is. Everything just works exactly as expected."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  EW
                </div>
                <div>
                  <div className="font-bold text-gray-900">Emily Watson</div>
                  <div className="text-sm text-gray-500">DSO, Private Institute</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-gradient-to-r from-purple-100 to-purple-50 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-700 to-purple-600 bg-clip-text text-transparent">
              LIMITED TIME
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 mb-16">Start with our exclusive pilot program</p>

          <div className="bg-white rounded-3xl p-10 max-w-lg mx-auto shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full"></div>

            <div className="text-2xl font-bold mb-2 text-gray-900">Pilot Program</div>
            <div className="text-5xl font-black mb-2 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Free
            </div>
            <div className="text-gray-500 mb-8">August - December 2025</div>

            <div className="space-y-4 mb-10 text-left">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mr-4">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700 font-medium">Full platform access</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mr-4">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700 font-medium">Up to 100 students</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mr-4">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700 font-medium">Direct founder support</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mr-4">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700 font-medium">Shape the product roadmap</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-indigo-800 to-indigo-700 text-white py-4 rounded-2xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 font-semibold text-lg">
              Join pilot program
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            No credit card required • Cancel anytime • Priority support included
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-700/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-700/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to transform your<br />DSO workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join forward-thinking DSOs who are already saving hours every week with intelligent automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-gray-900 px-10 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold text-lg flex items-center group">
              Get early access
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </button>
            <button className="text-white hover:text-gray-200 transition-colors flex items-center group text-lg">
              <Play size={16} className="mr-2" />
              Watch demo
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            Questions? Email us at{' '}
            <span className="text-purple-300 hover:text-purple-200 cursor-pointer">
              hello@statusbridge.com
            </span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6 md:mb-0">
              StatusBridge
            </div>

            <div className="flex space-x-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 StatusBridge. Built with ❤️ by Amol, Inesh & Pritesh.
            </div>

            <div className="text-sm text-gray-400">Made for DSOs, by DSOs</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StatusBridgeLanding;
