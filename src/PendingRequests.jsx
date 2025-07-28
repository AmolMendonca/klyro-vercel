import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  FileText, 
  Plane, 
  MapPin, 
  Calendar, 
  User, 
  Mail, 
  Phone,
  Search,
  Filter,
  Download,
  Eye,
  MoreHorizontal,
  ArrowUpRight,
  Shield,
  GraduationCap,
  Briefcase,
  Home,
  RefreshCw,
  AlertCircle,
  FileCheck,
  Users,
  ArrowLeft
} from 'lucide-react';

const PendingRequests = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Mock data for pending requests
  const requests = [
    {
      id: 'REQ-2025-001',
      type: 'travel_signature',
      student: {
        name: 'Maria Chen',
        sevisId: 'N0012345678',
        email: 'maria.chen@university.edu',
        program: 'Computer Science MS'
      },
      priority: 'medium',
      submitted: '2025-07-20T10:30:00Z',
      deadline: '2025-07-27T23:59:59Z',
      status: 'pending_review',
      details: {
        travelDate: '2025-08-15',
        returnDate: '2025-08-30',
        destination: 'South Korea',
        lastSignature: '2024-06-15',
        currentStatus: 'Active F-1'
      },
      documents: ['Current I-20', 'Travel Request Form']
    },
    {
      id: 'REQ-2025-002',
      type: 'address_update',
      student: {
        name: 'David Rodriguez',
        sevisId: 'N0012345679',
        email: 'david.rodriguez@university.edu',
        program: 'Business Administration MBA'
      },
      priority: 'high',
      submitted: '2025-07-22T14:15:00Z',
      deadline: '2025-07-25T23:59:59Z',
      status: 'requires_documents',
      details: {
        oldAddress: '123 Main St, Apt 4B, Ann Arbor, MI 48104',
        newAddress: '456 Oak Ave, Unit 12, Ann Arbor, MI 48105',
        moveDate: '2025-07-15',
        reportingDeadline: '2025-07-25'
      },
      documents: ['Address Change Form', 'Lease Agreement (Missing)']
    },
    {
      id: 'REQ-2025-003',
      type: 'cpt_application',
      student: {
        name: 'Priya Patel',
        sevisId: 'N0012345680',
        email: 'priya.patel@university.edu',
        program: 'Data Science MS'
      },
      priority: 'medium',
      submitted: '2025-07-21T09:45:00Z',
      deadline: '2025-08-01T23:59:59Z',
      status: 'ai_review_complete',
      details: {
        employer: 'TechCorp Inc.',
        position: 'Data Science Intern',
        startDate: '2025-08-15',
        endDate: '2025-12-15',
        hoursPerWeek: 20,
        aiScore: 94,
        majorAlignment: 'Excellent',
        completedTerms: 2
      },
      documents: ['Job Offer Letter', 'Academic Advisor Letter', 'Transcript', 'CPT Application Form']
    },
    {
      id: 'REQ-2025-004',
      type: 'rcl_request',
      student: {
        name: 'Ahmed Hassan',
        sevisId: 'N0012345681',
        email: 'ahmed.hassan@university.edu',
        program: 'Engineering PhD'
      },
      priority: 'high',
      submitted: '2025-07-23T11:20:00Z',
      deadline: '2025-07-30T23:59:59Z',
      status: 'pending_review',
      details: {
        reason: 'medical_condition',
        semester: 'Fall 2025',
        proposedCredits: 6,
        normalCredits: 12,
        medicalDocumentation: true,
        doctorDate: '2025-07-18'
      },
      documents: ['Medical Documentation', 'RCL Request Form', 'Academic Plan']
    },
    {
      id: 'REQ-2025-005',
      type: 'program_extension',
      student: {
        name: 'Jennifer Kim',
        sevisId: 'N0012345682',
        email: 'jennifer.kim@university.edu',
        program: 'Psychology PhD'
      },
      priority: 'medium',
      submitted: '2025-07-19T16:30:00Z',
      deadline: '2025-08-05T23:59:59Z',
      status: 'pending_advisor_approval',
      details: {
        currentEndDate: '2025-12-15',
        requestedEndDate: '2026-05-15',
        reason: 'Dissertation research completion',
        additionalSemesters: 2,
        advisorNotified: true
      },
      documents: ['Extension Request Form', 'Academic Plan', 'Advisor Letter (Pending)']
    },
    {
      id: 'REQ-2025-006',
      type: 'i20_replacement',
      student: {
        name: 'Carlos Silva',
        sevisId: 'N0012345683',
        email: 'carlos.silva@university.edu',
        program: 'Medicine MD'
      },
      priority: 'urgent',
      submitted: '2025-07-23T08:15:00Z',
      deadline: '2025-07-24T23:59:59Z',
      status: 'processing',
      details: {
        reason: 'lost_damaged',
        travelDate: '2025-07-26',
        urgentJustification: 'Emergency family situation - travel required',
        lastI20Date: '2025-01-15'
      },
      documents: ['Replacement Request Form', 'Police Report', 'Emergency Travel Documentation']
    }
  ];

  const getTypeInfo = (type) => {
    const types = {
      travel_signature: { 
        label: 'Travel Signature', 
        icon: Plane, 
        color: 'blue',
        description: 'I-20 travel endorsement for re-entry'
      },
      address_update: { 
        label: 'Address Update', 
        icon: MapPin, 
        color: 'green',
        description: 'SEVIS address change reporting'
      },
      cpt_application: { 
        label: 'CPT Application', 
        icon: Briefcase, 
        color: 'purple',
        description: 'Curricular Practical Training authorization'
      },
      rcl_request: { 
        label: 'RCL Request', 
        icon: GraduationCap, 
        color: 'orange',
        description: 'Reduced Course Load approval'
      },
      program_extension: { 
        label: 'Program Extension', 
        icon: Calendar, 
        color: 'indigo',
        description: 'I-20 program end date extension'
      },
      i20_replacement: { 
        label: 'I-20 Replacement', 
        icon: FileText, 
        color: 'red',
        description: 'Lost or damaged I-20 replacement'
      }
    };
    return types[type] || { label: type, icon: FileText, color: 'gray' };
  };

  const getPriorityInfo = (priority) => {
    const priorities = {
      urgent: { label: 'Urgent', color: 'red', bgColor: 'bg-red-50', textColor: 'text-red-800', borderColor: 'border-red-200' },
      high: { label: 'High', color: 'orange', bgColor: 'bg-orange-50', textColor: 'text-orange-800', borderColor: 'border-orange-200' },
      medium: { label: 'Medium', color: 'yellow', bgColor: 'bg-yellow-50', textColor: 'text-yellow-800', borderColor: 'border-yellow-200' },
      low: { label: 'Low', color: 'green', bgColor: 'bg-green-50', textColor: 'text-green-800', borderColor: 'border-green-200' }
    };
    return priorities[priority] || priorities.medium;
  };

  const getStatusInfo = (status) => {
    const statuses = {
      pending_review: { label: 'Pending Review', color: 'blue', icon: Clock },
      ai_review_complete: { label: 'AI Review Complete', color: 'purple', icon: CheckCircle },
      requires_documents: { label: 'Requires Documents', color: 'orange', icon: AlertTriangle },
      pending_advisor_approval: { label: 'Pending Advisor', color: 'yellow', icon: User },
      processing: { label: 'Processing', color: 'green', icon: RefreshCw }
    };
    return statuses[status] || { label: status, color: 'gray', icon: Clock };
  };

  const filteredRequests = requests.filter(request => {
    const matchesFilter = activeFilter === 'all' || request.type === activeFilter;
    const matchesSearch = request.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.student.sevisId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimeRemaining = (deadline) => {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    const diffInHours = Math.ceil((deadlineDate - now) / (1000 * 60 * 60));
    
    if (diffInHours < 0) return { text: 'Overdue', color: 'text-red-600' };
    if (diffInHours < 24) return { text: `${diffInHours}h remaining`, color: 'text-orange-600' };
    if (diffInHours < 72) return { text: `${Math.ceil(diffInHours / 24)}d remaining`, color: 'text-yellow-600' };
    return { text: `${Math.ceil(diffInHours / 24)}d remaining`, color: 'text-gray-600' };
  };

  const stats = {
    total: requests.length,
    urgent: requests.filter(r => r.priority === 'urgent').length,
    overdue: requests.filter(r => new Date(r.deadline) < new Date()).length,
    needsAttention: requests.filter(r => r.status === 'requires_documents').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to dashboard</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Klyro</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                {new Date().toLocaleTimeString()}
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-600">SEVIS Connected</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="px-6 pt-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Pending Requests
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Review and process student immigration requests with intelligent prioritization and automated workflows
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
                <div className="text-sm text-gray-600">Total Pending</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-600">{stats.urgent}</div>
                <div className="text-sm text-gray-600">Urgent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-black">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-blue-800">Total Pending</p>
                  <p className="text-2xl font-semibold text-blue-900">{stats.total}</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">Urgent</p>
                  <p className="text-2xl font-semibold text-red-900">{stats.urgent}</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-orange-800">Overdue</p>
                  <p className="text-2xl font-semibold text-orange-900">{stats.overdue}</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-yellow-800">Needs Attention</p>
                  <p className="text-2xl font-semibold text-yellow-900">{stats.needsAttention}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters and Search */}
          <div className="lg:w-64 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search requests..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Type</label>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                    activeFilter === 'all' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All Requests ({requests.length})
                </button>
                
                {Object.entries(
                  requests.reduce((acc, req) => {
                    acc[req.type] = (acc[req.type] || 0) + 1;
                    return acc;
                  }, {})
                ).map(([type, count]) => {
                  const typeInfo = getTypeInfo(type);
                  const Icon = typeInfo.icon;
                  return (
                    <button
                      key={type}
                      onClick={() => setActiveFilter(type)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${
                        activeFilter === type ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {typeInfo.label} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Requests List */}
          <div className="flex-1">
            <div className="space-y-4">
              {filteredRequests.map((request) => {
                const typeInfo = getTypeInfo(request.type);
                const priorityInfo = getPriorityInfo(request.priority);
                const statusInfo = getStatusInfo(request.status);
                const timeRemaining = getTimeRemaining(request.deadline);
                const TypeIcon = typeInfo.icon;
                const StatusIcon = statusInfo.icon;

                return (
                  <div
                    key={request.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow cursor-pointer"
                    onClick={() => setSelectedRequest(request)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`p-2 rounded-lg bg-${typeInfo.color}-50`}>
                            <TypeIcon className={`w-5 h-5 text-${typeInfo.color}-600`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{typeInfo.label}</h3>
                            <p className="text-sm text-gray-500">{request.id}</p>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${priorityInfo.bgColor} ${priorityInfo.textColor} border ${priorityInfo.borderColor}`}>
                            {priorityInfo.label}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Student</p>
                            <p className="font-medium text-gray-900">{request.student.name}</p>
                            <p className="text-sm text-gray-500">{request.student.sevisId}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Program</p>
                            <p className="text-sm text-gray-900">{request.student.program}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Submitted</p>
                            <p className="text-sm text-gray-900">{formatDate(request.submitted)}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Deadline</p>
                            <p className={`text-sm font-medium ${timeRemaining.color}`}>
                              {formatDate(request.deadline)}
                            </p>
                            <p className={`text-xs ${timeRemaining.color}`}>{timeRemaining.text}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <StatusIcon className={`w-4 h-4 text-${statusInfo.color}-600`} />
                            <span className="text-sm text-gray-700">{statusInfo.label}</span>
                          </div>
                          
                          {request.type === 'cpt_application' && request.details.aiScore && (
                            <div className="flex items-center space-x-2">
                              <Shield className="w-4 h-4 text-purple-600" />
                              <span className="text-sm text-gray-700">AI Score: {request.details.aiScore}%</span>
                            </div>
                          )}
                          
                          <div className="flex items-center space-x-2">
                            <FileCheck className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-500">{request.documents.length} documents</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 ml-4">
                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-50">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-50">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                        <ArrowUpRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredRequests.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No requests found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Request Detail Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {getTypeInfo(selectedRequest.type).label} - {selectedRequest.student.name}
                  </h2>
                  <p className="text-gray-500">{selectedRequest.id}</p>
                </div>
                <button
                  onClick={() => setSelectedRequest(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Student Information</h3>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-sm text-gray-500">Name</dt>
                      <dd className="text-sm font-medium text-gray-900">{selectedRequest.student.name}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">SEVIS ID</dt>
                      <dd className="text-sm font-medium text-gray-900">{selectedRequest.student.sevisId}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">Email</dt>
                      <dd className="text-sm font-medium text-gray-900">{selectedRequest.student.email}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">Program</dt>
                      <dd className="text-sm font-medium text-gray-900">{selectedRequest.student.program}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Request Details</h3>
                  <dl className="space-y-2">
                    {Object.entries(selectedRequest.details).map(([key, value]) => (
                      <div key={key}>
                        <dt className="text-sm text-gray-500 capitalize">{key.replace(/_/g, ' ')}</dt>
                        <dd className="text-sm font-medium text-gray-900">
                          {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                  Approve
                </button>
                <button className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
                  Request More Info
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                  Deny
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                  Save Draft
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingRequests;