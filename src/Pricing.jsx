import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ArrowLeft, 
  Check, 
  Mail, 
  Users, 
  FileCheck, 
  Database, 
  Zap,
  Star,
  Calendar,
  ArrowRight,
  CheckCircle,
  Play,
  Target
} from 'lucide-react';

import { Link } from 'react-router-dom';

const PricingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to home</span>
              </button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Klyro</span>
            </div>
            
            <div className="w-20"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Pricing
          </h1>
          
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Simple, transparent pricing that scales with your international student program.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-black transition-colors">
              Start free pilot
            </button>
            <button className="text-gray-700 px-6 py-2.5 font-medium hover:text-gray-900 transition-colors">
              Contact sales
            </button> */}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Starter Tier */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
              <div className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                Growing Programs
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Lite</h3>
              <p className="text-gray-600 mb-6">Perfect for smaller institutions getting started with international programs</p>
              
              <div className="mb-8">
                <div className="text-3xl font-bold text-gray-900 mb-2">Custom pricing</div>
                <div className="text-sm text-gray-500">For schools with 0-1,500 international students</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Core CPT review system</div>
                    <div className="text-sm text-gray-600">AI-powered application analysis</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Student dashboard</div>
                    <div className="text-sm text-gray-600">Basic tracking and management</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Email support</div>
                    <div className="text-sm text-gray-600">Business hours assistance</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Basic reporting</div>
                    <div className="text-sm text-gray-600">Standard compliance reports</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-md font-medium hover:border-gray-400 transition-colors">
                Contact for pricing
              </button>
            </div>

            {/* Professional Tier - Featured */}
            <div className="bg-white rounded-lg border-2 border-gray-900 p-8 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>
              
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Database className="w-4 h-4 mr-2" />
                Established Programs
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Gold</h3>
              <p className="text-gray-600 mb-6">Comprehensive solution for mid-size institutions with active international offices</p>
              
              <div className="mb-8">
                <div className="text-3xl font-bold text-gray-900 mb-2">Custom pricing</div>
                <div className="text-sm text-gray-500">For schools with 1,500-3,000 international students</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Everything in Starter</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Advanced AI analysis</div>
                    <div className="text-sm text-gray-600">Enhanced document parsing & insights</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Workflow automation</div>
                    <div className="text-sm text-gray-600">Custom approval workflows</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Priority support</div>
                    <div className="text-sm text-gray-600">Dedicated success manager</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Advanced reporting</div>
                    <div className="text-sm text-gray-600">Custom dashboards & analytics</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">API access</div>
                    <div className="text-sm text-gray-600">Basic integrations</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-md font-medium hover:bg-black transition-colors">
                Contact for pricing
              </button>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
              <div className="inline-flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Large Universities
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Platinum</h3>
              <p className="text-gray-600 mb-6">Complete platform for major research universities and large international programs</p>
              
              <div className="mb-8">
                <div className="text-3xl font-bold text-gray-900 mb-2">Custom pricing</div>
                <div className="text-sm text-gray-500">For schools with 3,000+ international students</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Everything in Professional</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Full SEVIS integration</div>
                    <div className="text-sm text-gray-600">Direct API connections</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">White-label options</div>
                    <div className="text-sm text-gray-600">Custom branding & domains</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">24/7 premium support</div>
                    <div className="text-sm text-gray-600">Phone, chat, and on-site support</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Custom integrations</div>
                    <div className="text-sm text-gray-600">SIS, HR, and enterprise systems</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Training & onboarding</div>
                    <div className="text-sm text-gray-600">Dedicated implementation team</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-md font-medium hover:border-gray-400 transition-colors">
                Contact for pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-16 text-center">
            Common questions
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">How is pricing determined?</h3>
              <p className="text-gray-600">
                Pricing is based on your international student enrollment and feature requirements. We offer custom quotes to ensure you only pay for what you need.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Is the pilot program really free?</h3>
              <p className="text-gray-600">
                Yes, completely free for 3 months. We're looking for partner schools to help us refine the platform before our official launch.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Can we upgrade or downgrade plans?</h3>
              <p className="text-gray-600">
                Absolutely. As your international program grows or changes, we can adjust your plan and pricing accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Contact our team to discuss your specific needs and get a custom quote for your institution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-md font-medium hover:bg-black transition-colors flex items-center text-lg">
              Schedule a call
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-md font-medium hover:border-gray-400 transition-colors flex items-center text-lg">
              <Mail className="w-4 h-4 mr-2" />
              Email us
            </button>
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

export default PricingPage;