import React, { useState } from 'react';
import { 
  Shield, 
  Menu, 
  X,
  ArrowLeft,
  Calendar,
  Clock,
  User
} from 'lucide-react';

import USICS from './images/USICS.jpg';
import Klyro from './images/Klyro.png';
import Klyro2 from './images/KlyroTM.png';

const KlyroBlog = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('list'); // list, read
  const [selectedPost, setSelectedPost] = useState(null);
  
  const [posts] = useState([
    {
      id: 1,
      title: "The Future of International Student Compliance",
      excerpt: "How AI is transforming the way DSOs manage SEVIS workflows and why automation is becoming essential for modern international student services.",
      thumbnail: USICS,
      heroImage: Klyro,
      content: `The landscape of international student compliance is evolving rapidly. As enrollment numbers continue to grow and regulatory requirements become more complex, Designated School Officials (DSOs) are finding themselves overwhelmed with manual processes that consume valuable time and resources.

At Klyro, we've been working closely with DSOs across the country to understand these pain points. What we've discovered is that the traditional approach to SEVIS compliance, built on spreadsheets, email chains, and manual document review, simply can't scale with today's demands.

## The Challenge

Consider the typical CPT application process. A DSO receives hundreds of applications each semester, each requiring careful review of transcripts, job offer letters, and advisor recommendations. The manual scoring process alone can take 15-20 minutes per application, not including the time spent on back-and-forth communication with students and advisors.

This creates a bottleneck that affects everyone: students wait weeks for approval, advisors are frustrated by unclear requirements, and DSOs struggle to maintain consistency across reviews.

## The Solution

Our AI-powered platform addresses these challenges head-on. By automating document parsing and analysis, we can reduce review time from 20 minutes to 2 minutes while maintaining and often improving accuracy.

The key is not replacing human judgment, but augmenting it. Our system flags potential issues, scores academic fit, and surfaces the information DSOs need to make informed decisions quickly.

## What's Next

We're excited to launch our pilot program this summer with select universities. If you're interested in learning more about how Klyro can transform your SEVIS compliance workflows, we'd love to hear from you.

The future of international student services is here, and it's powered by AI that understands the unique challenges DSOs face every day.`,
      author: "Klyro Team",
      publishedAt: "July 20, 2025",
      readTime: "2 min read"
    },
  ]);

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  const BlogList = () => (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Klyro Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Insights on international student compliance, AI automation, and the future of higher education administration.
        </p>
      </div>

      {/* Posts list */}
      <div className="space-y-12">
        {posts.map((post) => (
          <article 
            key={post.id}
            className="cursor-pointer group"
            onClick={() => {
              setSelectedPost(post);
              setCurrentView('read');
            }}
          >
            <div className="border-b border-gray-100 pb-12 group-hover:border-gray-200 transition-colors">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Thumbnail */}
                <div className="md:col-span-1">
                  <div className="aspect-[2/1] bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.publishedAt}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  const BlogRead = () => (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <button
          onClick={() => setCurrentView('list')}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to posts
        </button>
      </div>

      {selectedPost && (
        <article>
          {/* Hero Image */}
          <div className="aspect-[2/1] bg-gray-100 rounded-lg overflow-hidden mb-12">
            <img 
              src={selectedPost.heroImage} 
              alt={selectedPost.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {selectedPost.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center text-sm text-gray-500 space-x-4 mb-12 pb-8 border-b border-gray-100">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {selectedPost.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {selectedPost.publishedAt}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {selectedPost.readTime}
              </div>
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none"
              style={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                lineHeight: '1.7',
                fontSize: '18px',
                color: '#374151'
              }}
            >
              {selectedPost.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </article>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same as main site */}
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
                <button 
                  onClick={() => handleNavigation('/')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNavigation('/about')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About Us
                </button>
                <button 
                  className="text-gray-900 font-medium"
                >
                  Blog
                </button>
              </div>
  
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => window.location.href = 'https://cal.com/klyro/chat'}
                  className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-black transition-colors"
                >
                  Book a Demo
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
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white">
              <div className="px-6 py-4 space-y-4">
                <button 
                  onClick={() => {
                    handleNavigation('/');
                    setIsMenuOpen(false);
                  }}
                  className="block text-gray-600 hover:text-gray-900 transition-colors py-1.1 w-full text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    handleNavigation('/about');
                    setIsMenuOpen(false);
                  }}
                  className="block text-gray-600 hover:text-gray-900 transition-colors py-1.1 w-full text-left"
                >
                  About Us
                </button>
                <button 
                  className="block text-gray-900 font-medium py-1.1 w-full text-left"
                >
                  Blog
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      {currentView === 'list' && <BlogList />}
      {currentView === 'read' && <BlogRead />}

      {/* Footer - Minimal */}
      <footer className="px-6 py-16 border-t border-gray-100 bg-gray-50 mt-24">
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
          
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            © 2025 Klyro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KlyroBlog;