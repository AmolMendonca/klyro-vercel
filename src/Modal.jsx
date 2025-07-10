import React, { useState } from 'react';
import {
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
  UserCheck,
  BookOpen,
  AlertTriangle,
  Info,
  ArrowLeft,
  Check,
  X
} from 'lucide-react';

import { Link } from 'react-router-dom';

const CPTApplicationReview = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showRejectionModal, setShowRejectionModal] = useState(false);

  // Application data
  const selectedApp = {
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
  };

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

  const handleApprove = () => {
    setShowApprovalModal(false);
    console.log('Application approved');
  };

  const handleReject = () => {
    setShowRejectionModal(false);
    console.log('Application rejected');
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
                <div><span className="text-gray-600">Student:</span> {doc.content.student}</div>
                <div><span className="text-gray-600">Student ID:</span> {doc.content.studentId}</div>
                <div><span className="text-gray-600">Major:</span> {doc.content.major}</div>
                <div><span className="text-gray-600">GPA:</span> {doc.content.gpa}</div>
                <div><span className="text-gray-600">Total Credits:</span> {doc.content.totalCredits}</div>
                <div><span className="text-gray-600">Enrollment:</span> {doc.content.enrollmentStatus}</div>
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
                <div><span className="text-gray-600">Company:</span> {doc.content.company}</div>
                <div><span className="text-gray-600">Position:</span> {doc.content.position}</div>
                <div><span className="text-gray-600">Start Date:</span> {doc.content.startDate}</div>
                <div><span className="text-gray-600">End Date:</span> {doc.content.endDate}</div>
                <div><span className="text-gray-600">Duration:</span> {doc.content.duration}</div>
                <div><span className="text-gray-600">Location:</span> {doc.content.location}</div>
                <div><span className="text-gray-600">Compensation:</span> {doc.content.compensation}</div>
                <div><span className="text-gray-600">Supervisor:</span> {doc.content.supervisor}</div>
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
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              
              <Link to="/cpt">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft size={20} className="mr-2" />
                Back to Applications
              </button>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{selectedApp.studentName} - {selectedApp.company}</h1>
                <p className="text-sm text-gray-500">
                  <span className="font-mono">{selectedApp.id}</span> • {selectedApp.position}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {getStatusIcon(selectedApp.status)}
              <span className="text-sm font-medium capitalize">{selectedApp.status}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Application Details & Documents */}
          <div className="lg:col-span-2 space-y-6">
            {/* Application Overview */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Application Overview</h2>
              
              {/* Student Information */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                  <User size={16} className="mr-2 text-gray-500" />
                  Student Information
                </h3>
                <div className="pl-6 space-y-2 text-sm">
                  <p><span className="text-gray-600">Name:</span> <span className="font-medium">{selectedApp.studentName}</span></p>
                  <p><span className="text-gray-600">Student ID:</span> <span className="font-mono">{selectedApp.studentId}</span></p>
                  <p><span className="text-gray-600">Major:</span> <span className="font-medium">{selectedApp.major}</span></p>
                  <p><span className="text-gray-600">GPA:</span> <span className="font-medium">3.87</span> • <span className="text-gray-600">Credits:</span> <span className="font-medium">89</span></p>
                </div>
              </div>

              {/* Employment Details */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                  <Building size={16} className="mr-2 text-gray-500" />
                  Employment Details
                </h3>
                <div className="pl-6 space-y-2 text-sm">
                  <p><span className="text-gray-600">Company:</span> <span className="font-medium">{selectedApp.company}</span></p>
                  <p><span className="text-gray-600">Position:</span> <span className="font-medium">{selectedApp.position}</span></p>
                  <p><span className="text-gray-600">Duration:</span> <span className="font-medium">10 weeks</span> • <span className="text-gray-600">Location:</span> <span className="font-medium">Mountain View, CA</span></p>
                  <p><span className="text-gray-600">Start Date:</span> <span className="font-medium">June 16, 2025</span> • <span className="text-gray-600">End Date:</span> <span className="font-medium">August 22, 2025</span></p>
                  <p><span className="text-gray-600">Compensation:</span> <span className="font-medium">$8,500/month</span></p>
                  <p><span className="text-gray-600">Supervisor:</span> <span className="font-medium">Dr. Jennifer Martinez, Senior Staff Engineer</span></p>
                </div>
              </div>

              {/* Position Description */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                  <FileText size={16} className="mr-2 text-gray-500" />
                  Position Description
                </h3>
                <div className="pl-6">
                  <p className="text-sm text-gray-700">Work on backend systems for Google Search, developing scalable distributed systems and improving search algorithms. Responsibilities include code development in C++/Java, system design, and performance optimization.</p>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h2>
              <div className="space-y-3">
                {selectedApp.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      {doc.type === 'transcript' ? <GraduationCap size={20} className="text-blue-500" /> :
                       doc.type === 'offer' ? <Briefcase size={20} className="text-green-500" /> :
                       doc.type === 'advisor' ? <UserCheck size={20} className="text-purple-500" /> :
                       <FileText size={20} className="text-gray-400" />}
                      <div>
                        <div className="font-medium text-gray-900">{doc.name}</div>
                        <div className="text-xs text-gray-500">
                          {doc.type === 'transcript' && 'Official academic record'}
                          {doc.type === 'offer' && 'Employment offer details'}
                          {doc.type === 'advisor' && 'Faculty recommendation'}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedDocument(doc)}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        <Eye size={16} />
                        <span>View</span>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Analysis & Actions */}
          <div className="space-y-6">
            {/* AI Analysis & Status */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Analysis & Status</h2>
              <div className="space-y-4">
                {/* AI Score */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">AI Approval Score</span>
                    <span className="text-2xl font-bold text-gray-900">{selectedApp.aiScore}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        selectedApp.aiScore >= 80 ? 'bg-green-500' :
                        selectedApp.aiScore >= 60 ? 'bg-amber-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${selectedApp.aiScore}%` }}
                    />
                  </div>
                </div>

                {/* Status Details */}
                <div className="border-t pt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Current Status</span>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(selectedApp.status)}
                      <span className="text-sm font-medium capitalize">{selectedApp.status}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Complexity</span>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getComplexityLevel(selectedApp.complexity).class}`}>
                      {getComplexityLevel(selectedApp.complexity).label}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Submitted</span>
                    <span className="text-sm text-gray-900">{selectedApp.submittedDate}</span>
                  </div>

                  {selectedApp.status === 'pending' && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Review Deadline</span>
                      <span className={`text-sm font-medium ${selectedApp.daysRemaining <= 5 ? 'text-red-600' : 'text-gray-900'}`}>
                        {selectedApp.daysRemaining} days left
                      </span>
                    </div>
                  )}
                </div>

                {/* AI Notes */}
                <div className="p-3 bg-gray-50 rounded-lg border-t">
                  <p className="text-sm text-gray-700">{selectedApp.notes}</p>
                </div>
              </div>
            </div>

            {/* Review Actions */}
            {selectedApp.status === 'pending' && (
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Review Actions</h2>
                
                <div className="space-y-3">
                  <button
                    onClick={() => setShowApprovalModal(true)}
                    className="w-full flex items-center justify-center px-4 py-3 bg-green-50 border border-green-200 text-green-700 font-medium rounded-lg hover:bg-green-100 hover:border-green-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    <CheckCircle2 size={18} className="mr-2" />
                    Approve Application
                  </button>
                  
                  <button
                    onClick={() => setShowRejectionModal(true)}
                    className="w-full flex items-center justify-center px-4 py-3 bg-red-50 border border-red-200 text-red-700 font-medium rounded-lg hover:bg-red-100 hover:border-red-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    <XCircle size={18} className="mr-2" />
                    Reject Application
                  </button>

                  <div className="pt-2 border-t border-gray-200 space-y-2">
                    <button className="w-full px-3 py-2 bg-white border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center justify-center space-x-2">
                      <Info size={14} />
                      <span>Request More Info</span>
                    </button>
                    <button className="w-full px-3 py-2 bg-white border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center justify-center space-x-2">
                      <FileText size={14} />
                      <span>Add Note</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

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

      {/* Approval Confirmation Modal */}
      {showApprovalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Approve CPT Application</h3>
              <p className="text-sm text-gray-500 mb-6">
                Are you sure you want to approve this CPT application for {selectedApp.studentName}? This action cannot be undone.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowApprovalModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleApprove}
                  className="flex-1 px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rejection Confirmation Modal */}
      {showRejectionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <X className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Reject CPT Application</h3>
              <p className="text-sm text-gray-500 mb-6">
                Are you sure you want to reject this CPT application for {selectedApp.studentName}? Please provide a reason for rejection.
              </p>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md text-sm mb-4 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                rows="3"
                placeholder="Enter reason for rejection..."
              />
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowRejectionModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReject}
                  className="flex-1 px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CPTApplicationReview;