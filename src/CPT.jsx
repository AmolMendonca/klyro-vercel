import React, { useState } from 'react';
import {
  Search,
  ChevronRight,
  Calendar,
  User,
  Building,
  FileText,
  AlertCircle,
  CheckCircle2,
  Clock,
  XCircle,
  ExternalLink,
  Download,
  Filter,
  Eye,
  GraduationCap,
  Briefcase,
  UserCheck
} from 'lucide-react';

import { Link } from 'react-router-dom';


const CPTDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [complexityFilter, setComplexityFilter] = useState('all');
  const [selectedApp, setSelectedApp] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const applications = [
    {
      id: 'CPT-2025-001',
      studentName: 'Sarah Chen',
      studentId: 'S12345678',
      major: 'Computer Science',
      company: 'Google LLC',
      position: 'Software Engineering Intern',
      submittedDate: '2025-06-08',
      status: 'pending',
      aiScore: 95,
      complexity: 'low',
      documents: [
        {
          name: 'Academic Transcript',
          type: 'transcript',
          content: {
            student: 'Sarah Chen',
            studentId: 'S12345678',
            major: 'Computer Science',
            gpa: '3.87',
            totalCredits: 89,
            enrollmentStatus: 'Full-time',
            semester: 'Spring 2025',
            courses: [
              { code: 'CS 4820', name: 'Algorithms', credits: 4, grade: 'A' },
              { code: 'CS 4410', name: 'Operating Systems', credits: 4, grade: 'A-' },
              { code: 'CS 4780', name: 'Machine Learning', credits: 4, grade: 'A' },
              { code: 'CS 4700', name: 'Foundations of AI', credits: 4, grade: 'B+' },
              { code: 'MATH 4260', name: 'Applied Statistics', credits: 4, grade: 'A-' }
            ]
          }
        },
        {
          name: 'Job Offer Letter',
          type: 'offer',
          content: {
            company: 'Google LLC',
            position: 'Software Engineering Intern',
            startDate: '2025-06-16',
            endDate: '2025-08-22',
            duration: '10 weeks',
            location: 'Mountain View, CA',
            compensation: '$8,500/month',
            description: 'Work on backend systems for Google Search, developing scalable distributed systems and improving search algorithms. Responsibilities include code development in C++/Java, system design, and performance optimization.',
            supervisor: 'Dr. Jennifer Martinez, Senior Staff Engineer',
            requirements: 'Current enrollment in Computer Science or related field, strong programming skills in systems languages, understanding of algorithms and data structures.'
          }
        },
        {
          name: 'Academic Advisor Letter',
          type: 'advisor',
          content: {
            advisor: 'Prof. Michael Thompson',
            title: 'Associate Professor, Computer Science Department',
            date: '2025-06-07',
            letterContent: 'I am writing to support Sarah Chen\'s application for Curricular Practical Training. Sarah is an outstanding Computer Science student who has consistently demonstrated excellence in her coursework, particularly in algorithms, systems programming, and machine learning. Her proposed internship at Google as a Software Engineering Intern directly aligns with her academic program and will provide valuable practical experience in large-scale systems development. This opportunity will enhance her understanding of distributed systems and search algorithms, which are central to her academic focus. I strongly recommend approval of this CPT application.'
          }
        }
      ],
      notes: 'Strong alignment between CS major and software engineering role. All required documentation submitted.',
      daysRemaining: 12,
      reviewPriority: 'standard'
    },
    {
      id: 'CPT-2025-002',
      studentName: 'Michael Rodriguez',
      studentId: 'S12345679',
      major: 'Computer Science',
      company: 'Meta Platforms Inc',
      position: 'Technical Sales Intern',
      submittedDate: '2025-06-07',
      status: 'pending',
      aiScore: 72,
      complexity: 'medium',
      documents: ['Academic Transcript', 'Job Description', 'Academic Advisor Letter'],
      notes: 'CS major applying for technical sales role. Requires justification review for role alignment.',
      daysRemaining: 13,
      reviewPriority: 'standard'
    },
    {
      id: 'CPT-2025-003',
      studentName: 'Emily Watson',
      studentId: 'S12345680',
      major: 'Data Science',
      company: 'Netflix Inc',
      position: 'Data Analyst Intern',
      submittedDate: '2025-06-06',
      status: 'approved',
      aiScore: 98,
      complexity: 'low',
      documents: ['Academic Transcript', 'Job Description', 'Academic Advisor Letter'],
      notes: 'Excellent alignment between Data Science major and data analyst position.',
      daysRemaining: 0,
      reviewPriority: 'completed'
    },
    {
      id: 'CPT-2025-004',
      studentName: 'David Kim',
      studentId: 'S12345681',
      major: 'Computer Science',
      company: 'Goldman Sachs Group Inc',
      position: 'Investment Banking Analyst',
      submittedDate: '2025-06-05',
      status: 'pending',
      aiScore: 45,
      complexity: 'high',
      documents: ['Academic Transcript', 'Job Description'],
      notes: 'Missing academic advisor letter. CS major in finance role requires detailed justification.',
      daysRemaining: 15,
      reviewPriority: 'urgent'
    },
    {
      id: 'CPT-2025-005',
      studentName: 'Lisa Park',
      studentId: 'S12345682',
      major: 'Electrical Engineering',
      company: 'Tesla Inc',
      position: 'Hardware Engineering Intern',
      submittedDate: '2025-06-04',
      status: 'approved',
      aiScore: 92,
      complexity: 'low',
      documents: ['Academic Transcript', 'Job Description', 'Academic Advisor Letter'],
      notes: 'Strong match between Electrical Engineering major and hardware engineering role.',
      daysRemaining: 0,
      reviewPriority: 'completed'
    },
    {
      id: 'CPT-2025-006',
      studentName: 'James Wilson',
      studentId: 'S12345683',
      major: 'Mathematics',
      company: 'Uber Technologies Inc',
      position: 'Product Manager Intern',
      submittedDate: '2025-06-03',
      status: 'rejected',
      aiScore: 38,
      complexity: 'high',
      documents: ['Academic Transcript', 'Job Description', 'Academic Advisor Letter'],
      notes: 'Insufficient connection demonstrated between Mathematics major and product management role.',
      daysRemaining: 0,
      reviewPriority: 'completed'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <CheckCircle2 size={16} className="text-green-600" />;
      case 'rejected': return <XCircle size={16} className="text-red-600" />;
      case 'pending': return <Clock size={16} className="text-amber-600" />;
      default: return <AlertCircle size={16} className="text-gray-400" />;
    }
  };

  const getComplexityLevel = (complexity) => {
    const levels = {
      low: { label: 'Low', class: 'text-green-700 bg-green-50 border-green-200' },
      medium: { label: 'Medium', class: 'text-amber-700 bg-amber-50 border-amber-200' },
      high: { label: 'High', class: 'text-red-700 bg-red-50 border-red-200' }
    };
    return levels[complexity] || levels.low;
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    const matchesComplexity = complexityFilter === 'all' || app.complexity === complexityFilter;
    return matchesSearch && matchesStatus && matchesComplexity;
  });

  const stats = {
    total: applications.length,
    pending: applications.filter(app => app.status === 'pending').length,
    approved: applications.filter(app => app.status === 'approved').length,
    rejected: applications.filter(app => app.status === 'rejected').length
  };

  const renderDocument = (doc) => {
    if (typeof doc === 'string') return null;
    
    switch (doc.type) {
      case 'transcript':
        return (
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Official Academic Transcript</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Student:</span> {doc.content.student}
                </div>
                <div>
                  <span className="text-gray-600">Student ID:</span> {doc.content.studentId}
                </div>
                <div>
                  <span className="text-gray-600">Major:</span> {doc.content.major}
                </div>
                <div>
                  <span className="text-gray-600">GPA:</span> {doc.content.gpa}
                </div>
                <div>
                  <span className="text-gray-600">Total Credits:</span> {doc.content.totalCredits}
                </div>
                <div>
                  <span className="text-gray-600">Enrollment:</span> {doc.content.enrollmentStatus}
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 mb-3">Current Semester - {doc.content.semester}</h5>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Course Code</th>
                      <th className="text-left py-2">Course Name</th>
                      <th className="text-left py-2">Credits</th>
                      <th className="text-left py-2">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doc.content.courses.map((course, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="py-2 font-mono">{course.code}</td>
                        <td className="py-2">{course.name}</td>
                        <td className="py-2">{course.credits}</td>
                        <td className="py-2 font-semibold">{course.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      
      case 'offer':
        return (
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Employment Offer Letter</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Company:</span> {doc.content.company}
                </div>
                <div>
                  <span className="text-gray-600">Position:</span> {doc.content.position}
                </div>
                <div>
                  <span className="text-gray-600">Start Date:</span> {doc.content.startDate}
                </div>
                <div>
                  <span className="text-gray-600">End Date:</span> {doc.content.endDate}
                </div>
                <div>
                  <span className="text-gray-600">Duration:</span> {doc.content.duration}
                </div>
                <div>
                  <span className="text-gray-600">Location:</span> {doc.content.location}
                </div>
                <div>
                  <span className="text-gray-600">Compensation:</span> {doc.content.compensation}
                </div>
                <div>
                  <span className="text-gray-600">Supervisor:</span> {doc.content.supervisor}
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 mb-2">Position Description</h5>
              <p className="text-sm text-gray-700 mb-3">{doc.content.description}</p>
              <h5 className="font-medium text-gray-900 mb-2">Requirements</h5>
              <p className="text-sm text-gray-700">{doc.content.requirements}</p>
            </div>
          </div>
        );
      
      case 'advisor':
        return (
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Academic Advisor Recommendation</h4>
              <div className="text-sm space-y-1">
                <div><span className="text-gray-600">From:</span> {doc.content.advisor}</div>
                <div><span className="text-gray-600">Title:</span> {doc.content.title}</div>
                <div><span className="text-gray-600">Date:</span> {doc.content.date}</div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">{doc.content.letterContent}</p>
            </div>
          </div>
        );
      
      default:
        return <div className="text-sm text-gray-500">Document preview not available</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-medium text-gray-900">CPT Application Management System</h1>
              <span className="text-gray-400">/</span>
              <span className="text-sm text-gray-600">Dashboard</span>
            </div>
            <div className="text-sm text-gray-500">
              DSO Administrative Interface
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Overview Section */}
        <section className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Application Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
                  <div className="text-sm text-gray-600 mt-1">Total Applications</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <FileText size={24} className="text-blue-600" />
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-amber-600">{stats.pending}</div>
                  <div className="text-sm text-gray-600 mt-1">Pending Review</div>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg">
                  <Clock size={24} className="text-amber-600" />
                </div>
              </div>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
                <div 
                  className="h-1 rounded-full bg-amber-500" 
                  style={{ width: `${(stats.pending / stats.total) * 100}%` }}
                />
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-green-600">{stats.approved}</div>
                  <div className="text-sm text-gray-600 mt-1">Approved</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 size={24} className="text-green-600" />
                </div>
              </div>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
                <div 
                  className="h-1 rounded-full bg-green-500" 
                  style={{ width: `${(stats.approved / stats.total) * 100}%` }}
                />
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-red-600">{stats.rejected}</div>
                  <div className="text-sm text-gray-600 mt-1">Rejected</div>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <XCircle size={24} className="text-red-600" />
                </div>
              </div>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
                <div 
                  className="h-1 rounded-full bg-red-500" 
                  style={{ width: `${(stats.rejected / stats.total) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by student name, company, or application ID..."
                    className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <select
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
                <select
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  value={complexityFilter}
                  onChange={(e) => setComplexityFilter(e.target.value)}
                >
                  <option value="all">All Complexity</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Table */}
        <section>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
              <h3 className="text-sm font-medium text-gray-900">Application Records</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Application ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student Information
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Position Details
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      AI Score
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Complexity
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Review Timeline
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredApplications.map((app) => {
                    const complexity = getComplexityLevel(app.complexity);
                    return (
                      <tr key={app.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-mono text-gray-900">{app.id}</div>
                          <div className="text-xs text-gray-500">{app.submittedDate}</div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm font-medium text-gray-900">{app.studentName}</div>
                          <div className="text-xs text-gray-500">{app.studentId}</div>
                          <div className="text-xs text-gray-500">{app.major}</div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm text-gray-900">{app.position}</div>
                          <div className="text-xs text-gray-500">{app.company}</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-mono text-gray-900">{app.aiScore}%</div>
                          <div className="w-16 bg-gray-200 rounded-full h-1 mt-1">
                            <div 
                              className={`h-1 rounded-full ${
                                app.aiScore >= 80 ? 'bg-green-500' : 
                                app.aiScore >= 60 ? 'bg-amber-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${app.aiScore}%` }}
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md border ${complexity.class}`}>
                            {complexity.label}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(app.status)}
                            <span className="text-sm capitalize text-gray-900">{app.status}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {app.status === 'pending' ? (
                            <span className={app.daysRemaining <= 5 ? 'text-red-600 font-medium' : ''}>
                              {app.daysRemaining} days
                            </span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Link to="/cpt-v2">
                          <button
                            onClick={() => setSelectedApp(app)}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center space-x-1"
                          >
                            <span>View Details</span>
                            <ChevronRight size={12} />
                          </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* Application Detail Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">Application Details</h2>
                  <p className="text-sm text-gray-500 font-mono">{selectedApp.id}</p>
                </div>
                <button
                  onClick={() => setSelectedApp(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle size={20} />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Student Information</h3>
                    <dl className="space-y-2 text-sm">
                      <div className="flex">
                        <dt className="w-20 text-gray-500">Name:</dt>
                        <dd className="text-gray-900">{selectedApp.studentName}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-20 text-gray-500">ID:</dt>
                        <dd className="text-gray-900 font-mono">{selectedApp.studentId}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-20 text-gray-500">Major:</dt>
                        <dd className="text-gray-900">{selectedApp.major}</dd>
                      </div>
                    </dl>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Employment Details</h3>
                    <dl className="space-y-2 text-sm">
                      <div className="flex">
                        <dt className="w-20 text-gray-500">Company:</dt>
                        <dd className="text-gray-900">{selectedApp.company}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-20 text-gray-500">Position:</dt>
                        <dd className="text-gray-900">{selectedApp.position}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-20 text-gray-500">Submitted:</dt>
                        <dd className="text-gray-900">{selectedApp.submittedDate}</dd>
                      </div>
                    </dl>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Required Documents</h3>
                    <div className="space-y-2">
                      {selectedApp.documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded border">
                          <div className="flex items-center space-x-3">
                            {typeof doc === 'object' ? (
                              doc.type === 'transcript' ? <GraduationCap size={16} className="text-blue-500" /> :
                              doc.type === 'offer' ? <Briefcase size={16} className="text-green-500" /> :
                              doc.type === 'advisor' ? <UserCheck size={16} className="text-purple-500" /> :
                              <FileText size={16} className="text-gray-400" />
                            ) : (
                              <FileText size={16} className="text-gray-400" />
                            )}
                            <span className="text-sm text-gray-700">
                              {typeof doc === 'object' ? doc.name : doc}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {typeof doc === 'object' && (
                              <button 
                                onClick={() => setSelectedDocument(doc)}
                                className="text-blue-600 hover:text-blue-800 text-xs flex items-center space-x-1"
                              >
                                <Eye size={14} />
                                <span>View</span>
                              </button>
                            )}
                            <button className="text-blue-600 hover:text-blue-800 text-xs">
                              <Download size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">AI Analysis Report</h3>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-600">Approval Probability</span>
                        <span className="text-lg font-mono text-gray-900">{selectedApp.aiScore}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div 
                          className={`h-2 rounded-full ${
                            selectedApp.aiScore >= 80 ? 'bg-green-500' : 
                            selectedApp.aiScore >= 60 ? 'bg-amber-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${selectedApp.aiScore}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-700">{selectedApp.notes}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Application Status</h3>
                    <dl className="space-y-3">
                      <div className="flex items-center justify-between">
                        <dt className="text-sm text-gray-500">Current Status:</dt>
                        <dd className="flex items-center space-x-1">
                          {getStatusIcon(selectedApp.status)}
                          <span className="text-sm capitalize">{selectedApp.status}</span>
                        </dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-sm text-gray-500">Complexity Level:</dt>
                        <dd>
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md border ${getComplexityLevel(selectedApp.complexity).class}`}>
                            {getComplexityLevel(selectedApp.complexity).label}
                          </span>
                        </dd>
                      </div>
                      {selectedApp.status === 'pending' && (
                        <div className="flex items-center justify-between">
                          <dt className="text-sm text-gray-500">Review Deadline:</dt>
                          <dd className={`text-sm font-mono ${selectedApp.daysRemaining <= 5 ? 'text-red-600' : 'text-gray-900'}`}>
                            {selectedApp.daysRemaining} days remaining
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>

                  {selectedApp.status === 'pending' && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-3">Administrative Actions</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="px-3 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
                          Approve Application
                        </button>
                        <button className="px-3 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors">
                          Reject Application
                        </button>
                        <button className="px-3 py-2 bg-amber-600 text-white text-sm rounded hover:bg-amber-700 transition-colors">
                          Request Additional Info
                        </button>
                        <button className="px-3 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors">
                          Add Review Note
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Document Viewer Modal */}
      {selectedDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">{selectedDocument.name}</h2>
                  <p className="text-sm text-gray-500">Document Preview</p>
                </div>
                <button
                  onClick={() => setSelectedDocument(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle size={20} />
                </button>
              </div>
            </div>
            <div className="p-6">
              {renderDocument(selectedDocument)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CPTDashboard;