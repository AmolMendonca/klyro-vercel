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
  Mail
} from 'lucide-react';

import { Link } from 'react-router-dom';

const TeamPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Amol Mendonca",
      role: "Co-founder & CEO",
      education: "University of Michigan",
      degree: "BS Computer Science",
      bio: "Leading product vision and strategy for DSO workflows. Passionate about building tools that simplify complex compliance processes.",
      avatar: "AM",
      color: "bg-blue-100 text-blue-700"
    },
    {
      name: "Pritesh Murugesan Karthika",
      role: "Co-founder & CTO",
      education: "University of Michigan",
      degree: "BS & MS Computer Science",
      bio: "Architecting AI-powered systems for document analysis and workflow automation. Expert in machine learning and scalable infrastructure.",
      avatar: "PK",
      color: "bg-green-100 text-green-700"
    },
    {
      name: "Inesh Tickoo",
      role: "Co-founder & COO",
      education: "Ohio Wesleyan University",
      degree: "BS Computer Science & Business",
      bio: "Driving go-to-market strategy and partnerships with educational institutions. Bridging the gap between technology and user needs.",
      avatar: "IT",
      color: "bg-purple-100 text-purple-700"
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
                <Link to='/'>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                </Link>
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

      {/* Team Section */}
      <section id="team" className="px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Our Founders
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The minds behind
              <span className="text-gray-400"> Klyro.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From personal experience navigating international student processes to building AI-powered solutions that help thousands of DSOs worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-xl font-bold">{member.avatar}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 font-medium mb-3">{member.role}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{member.education}</span>
                  </div>
                  <div className="inline-flex items-center bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm">
                    <Code className="w-4 h-4 mr-2" />
                    {member.degree}
                  </div>
                </div>
                
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
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
              <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Building className="w-4 h-4 mr-2" />
                The Problem
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Manual processes, endless paperwork</h3>
              <p className="text-gray-600 mb-4">
                During our college years, we witnessed DSOs drowning in manual CPT reviews, struggling with compliance tracking, and managing hundreds of international students with outdated tools.
              </p>
              <p className="text-gray-600">
                Hours spent on document verification, endless spreadsheets, and the constant fear of compliance violations - we knew there had to be a better way.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Code className="w-4 h-4 mr-2" />
                The Solution
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-powered automation for DSOs</h3>
              <p className="text-gray-600 mb-4">
                We combined our computer science expertise with deep understanding of SEVIS requirements to build an intelligent platform that automates the tedious while empowering the human touch.
              </p>
              <p className="text-gray-600">
                From AI-powered document analysis to automated compliance tracking, Klyro transforms how DSOs manage international student services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-24 bg-gray-50">
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
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to join our
            <span className="text-gray-400"> mission?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We're always looking for talented individuals who share our passion for improving international education.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-black transition-colors flex items-center">
              Get early access
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:border-gray-400 transition-colors flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Contact us
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

export default TeamPage;