import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ArrowRight, 
  Menu, 
  X,
  Users,
  Code,
  Building,
  MapPin,
  Linkedin,
  Github,
  Mail,
  Clock,
  Target,
  Zap,
  Globe,
  CheckCircle,
  TrendingUp,
  Heart,
  Lightbulb,
  Brain,
  Database
} from 'lucide-react';

import yugamImage from './images/yugam-surana.jpeg';
import ineshImage from './images/inesh-tickoo.jpeg';
import priteshImage from './images/pritesh.jpeg';
import amolImage from './images/amol.JPG';

const AboutUsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Amol Mendonca",
      role: "Co-founder & CEO",
      education: "University of Michigan",
      degree: "BS Computer Science",
      bio: "Led product across early-stage startups, shipping web3 tools, and AI-driven search products. Helped 5 startups GTM, and contributed to pre-seed rounds. Co-founded a health-tech startup which scaled to 20,000+ users and partnered with hospitals and tech companies.",
      avatar: "AM",
      image: amolImage, // Add this line
      color: "bg-blue-100 text-blue-700"
    },
    {
      name: "Pritesh Murugesan Karthika",
      role: "Co-founder & CTO",
      education: "University of Michigan",
      degree: "BS & MS Computer Science",
      bio: "Led reinforcement learning and statistical arbitrage projects, built AI agents for top hedge funds and banks, and developed real-time trading platforms. Teaches AI and databases at the university as a graduate student instructor.",
      avatar: "PK",
      image: priteshImage, // Add this line
      color: "bg-green-100 text-green-700"
    },
    {
      name: "Inesh Tickoo",
      role: "Co-founder & COO",
      education: "Ohio Wesleyan University",
      degree: "BS Computer Science & Business",
      bio: "Built products used by thousands and designed tools for Fortune 500 banks. Led product at both early-stage ventures and corporate internships, raised pre-seed funding, and conducted cognitive research on gamification and attention.",
      avatar: "IT",
      image: ineshImage, // Add this line
      color: "bg-purple-100 text-purple-700"
    },
    {
      name: "Yugam Surana",
      role: "CTO AI",
      education: "UC Berkeley & Columbia University",
      degree: "BS EECS & MS Financial Engineering",
      bio: "AI Research Fellow at Morgan Stanley. Built AI-powered marketplaces and ML pipelines at Oracle. Founded AI ventures and specializes in machine learning systems for financial and educational technology applications.",
      avatar: "YS",
      image: yugamImage, // Add this line
      color: "bg-orange-100 text-orange-700"
    }
  ];

  const impactMetrics = [
    {
      number: "5,000+",
      label: "Hours saved for DSOs",
      icon: Clock,
      color: "text-blue-600"
    },
    {
      number: "80%",
      label: "Faster CPT processing",
      icon: Zap,
      color: "text-green-600"
    },
    {
      number: "50+",
      label: "Universities served",
      icon: Building,
      color: "text-purple-600"
    },
    {
      number: "10,000+",
      label: "Students helped",
      icon: Users,
      color: "text-orange-600"
    }
  ];

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
              <div className="flex items-center space-x-6 text-sm">
                <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              </div>
              <div className="flex items-center space-x-3">
                <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-black transition-colors">
                  Try our CPT MVP
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

      {/* Hero Section */}
      <section className="px-6 py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Heart className="w-4 h-4 mr-2" />
            About Klyro
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Transforming international
            <span className="text-gray-400"> education, one DSO at a time.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize how Designated School Officials manage international student services through AI-powered automation, saving thousands of hours while ensuring perfect compliance.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empowering DSOs to focus on
              <span className="text-gray-400"> what matters most.</span>
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Lightbulb className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                "To eliminate the administrative burden that prevents DSOs from providing exceptional support to international students."
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every hour spent on manual CPT reviews, compliance tracking, and document verification is an hour not spent mentoring students, solving complex cases, or building stronger international programs. We're changing that reality.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                For DSOs
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Reclaim your time for what matters</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Automated CPT processing</p>
                    <p className="text-gray-600">AI reviews applications in minutes, not hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Intelligent compliance tracking</p>
                    <p className="text-gray-600">Never miss a deadline or violation again</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Seamless SEVIS integration</p>
                    <p className="text-gray-600">Direct updates without manual data entry</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4 mr-2" />
                For Students
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Faster, clearer, more supportive</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Instant application feedback</p>
                    <p className="text-gray-600">Know exactly what's needed, when it's needed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Real-time status updates</p>
                    <p className="text-gray-600">Track your application every step of the way</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Personalized guidance</p>
                    <p className="text-gray-600">AI-powered recommendations for your situation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our story
              <span className="text-gray-400"> starts with experience.</span>
            </h2>
            <p className="text-xl text-gray-600">
              Having navigated the complexities of international student services firsthand, we understand the challenges DSOs face every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="inline-flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Building className="w-4 h-4 mr-2" />
                The Problem
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Manual processes, endless paperwork</h3>
              <p className="text-gray-600 mb-4">
                During our college years, we witnessed DSOs drowning in manual CPT reviews, struggling with compliance tracking, and managing hundreds of international students with outdated tools.
              </p>
              <p className="text-gray-600 mb-4">
                Hours spent on document verification, endless spreadsheets, and the constant fear of compliance violations - we knew there had to be a better way.
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="text-sm text-gray-600 italic">
                  "We watched brilliant DSOs spend 70% of their time on administrative tasks instead of helping students succeed."
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Code className="w-4 h-4 mr-2" />
                The Solution
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-powered automation for DSOs</h3>
              <p className="text-gray-600 mb-4">
                We combined our computer science expertise with deep understanding of SEVIS requirements to build an intelligent platform that automates the tedious while empowering the human touch.
              </p>
              <p className="text-gray-600 mb-4">
                From AI-powered document analysis to automated compliance tracking, Klyro transforms how DSOs manage international student services.
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <p className="text-sm text-gray-600 italic">
                  "Now DSOs can focus on what they do best - supporting students through their academic journey."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="px-6 py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Meet the Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The minds behind
              <span className="text-gray-400"> Klyro.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four international students turned founders, united by a shared vision to transform how universities support global talent.
            </p>
          </div>

          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center max-w-3xl mx-auto">
                {member.image ? (
                  <div className="w-44 h-44 mx-auto mb-6 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className={`w-24 h-24 ${member.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <span className="text-2xl font-bold">{member.avatar}</span>
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-lg text-gray-600 font-medium mb-3">{member.role}</p>
                <div className="flex items-center justify-center space-x-2 text-gray-500 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{member.education}</span>
                </div>
                <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm mb-6">
                  {member.name === "Yugam Surana" ? (
                    <>
                      <Code className="w-4 h-4 mr-2" />
                      {member.degree}
                    </>
                  ) : (
                    <>
                      <Code className="w-4 h-4 mr-2" />
                      {member.degree}
                    </>
                  )}
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-6">
                  {/* <button className="p-3 text-gray-400 hover:text-gray-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </button>
                  <button className="p-3 text-gray-400 hover:text-gray-600 transition-colors">
                    <Github className="w-6 h-6" />
                  </button>
                  <button className="p-3 text-gray-400 hover:text-gray-600 transition-colors">
                    <Mail className="w-6 h-6" />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What drives us
              <span className="text-gray-400"> forward.</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our values shape every product decision and interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Student-first mindset</h3>
              <p className="text-gray-600">
                Every feature we build ultimately serves to improve the international student experience through better DSO tools.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance-first approach</h3>
              <p className="text-gray-600">
                We understand that compliance isn't optional - it's the foundation that enables everything else to work.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Engineering excellence</h3>
              <p className="text-gray-600">
                We build with the rigor and reliability that educational institutions depend on every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to transform your
            <span className="text-gray-400"> DSO workflow?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join the growing community of DSOs who've already saved thousands of hours with Klyro.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-black transition-colors flex items-center">
              Try our CPT MVP
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:border-gray-400 transition-colors flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Schedule a demo
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

export default AboutUsPage;