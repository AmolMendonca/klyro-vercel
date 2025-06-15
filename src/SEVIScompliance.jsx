import React, { useState, useMemo } from 'react';
import { 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Plus, 
  Edit3, 
  Calendar, 
  GraduationCap,
  FileText,
  Filter,
  Search,
  Settings,
  Download,
  Mail,
  Check
} from 'lucide-react';

const SevisCompliancePortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [showAddException, setShowAddException] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Sample data
const [students, setStudents] = useState([
  {
    id: 1,
    name: "Chen Wei",
    sevisId: "N0123456789",
    email: "chen.wei@university.edu",
    program: "Computer Science",
    level: "Undergrad",
    currentCredits: 6,
    requiredCredits: 9,
    status: "At Risk",
    lastUpdated: "2025-06-10",
    exceptions: [],
    country: "China",
    advisor: "Dr. Smith"
  },
  {
    id: 2,
    name: "Maria Garcia",
    sevisId: "N0987654321",
    email: "maria.garcia@university.edu",
    program: "Law JD",
    level: "Professional",
    currentCredits: 3,
    requiredCredits: 12,
    status: "Compliant",
    lastUpdated: "2025-06-10",
    exceptions: [
      {
        type: "Dissertation Phase",
        description: "JD student in dissertation writing phase",
        startSemester: "Spring",
        endSemester: "Summer",
        year: "2025",
        approvedBy: "Dr. Johnson"
      }
    ],
    country: "Mexico",
    advisor: "Prof. Davis"
  },
  {
    id: 3,
    name: "Raj Patel",
    sevisId: "N0456789123",
    email: "raj.patel@university.edu",
    program: "Physics PhD",
    level: "Graduate",
    currentCredits: 4,
    requiredCredits: 9,
    status: "Compliant",
    lastUpdated: "2025-06-09",
    exceptions: [
      {
        type: "GSI Assignment",
        description: "Graduate Student Instructor - reduced course load approved",
        startSemester: "Winter",
        endSemester: "Spring",
        year: "2025",
        approvedBy: "Dr. Wilson"
      }
    ],
    country: "India",
    advisor: "Dr. Brown"
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    sevisId: "N0789123456",
    email: "ahmed.hassan@university.edu",
    program: "Business MBA",
    level: "Graduate",
    currentCredits: 5,
    requiredCredits: 12,
    status: "Non-Compliant",
    lastUpdated: "2025-06-08",
    exceptions: [],
    country: "Egypt",
    advisor: "Prof. Taylor"
  },
  {
    id: 5,
    name: "Chinmay Purushottom",
    sevisId: "N6432984710",
    email: "chinmay.purushottom@university.edu",
    program: "Computer Science",
    level: "Undergraduate",
    currentCredits: 12,
    requiredCredits: 12,
    status: "Compliant",
    lastUpdated: "2025-06-11",
    exceptions: [],
    country: "India",
    advisor: "Dr. Kumar"
  },
  {
    id: 6,
    name: "Shreyaan Seth",
    sevisId: "N3791048257",
    email: "shreyaan.seth@university.edu",
    program: "Economics",
    level: "Undergraduate",
    currentCredits: 12,
    requiredCredits: 12,
    status: "Compliant",
    lastUpdated: "2025-06-11",
    exceptions: [],
    country: "India",
    advisor: "Prof. Mehta"
  },
  {
    id: 7,
    name: "Naman Kabra",
    sevisId: "N5928374106",
    email: "naman.kabra@university.edu",
    program: "Electrical Engineering",
    level: "Undergraduate",
    currentCredits: 12,
    requiredCredits: 12,
    status: "Compliant",
    lastUpdated: "2025-06-11",
    exceptions: [],
    country: "Myanmar",
    advisor: "Dr. Lin"
  }
]);

  const [exceptions, setExceptions] = useState([
    {
      id: 1,
      name: "Dissertation Phase",
      description: "Student is in dissertation writing phase",
      minCredits: 1,
      applicablePrograms: ["JD", "PhD"],
      requiresApproval: true
    },
    {
      id: 4,
      name: "Academic Difficulty",
      description: "Student is facing critical academic difficulty issues",
      minCredits: 6,
      applicablePrograms: ["All"],
      requiresApproval: true
    },
    {
      id: 2,
      name: "GSI Assignment",
      description: "Graduate Student Instructor with reduced course load",
      minCredits: 3,
      applicablePrograms: ["MS", "PhD"],
      requiresApproval: true
    },
    {
      id: 5,
      name: "Concurrent Enrollment",
      description: "Concurrently enrolled in another university to fulfill credit requirements",
      minCredits: 3,
      applicablePrograms: ["MS", "PhD"],
      requiresApproval: true
    },
    {
      id: 3,
      name: "Medical Emergency",
      description: "Approved medical leave with reduced course load",
      minCredits: 0,
      applicablePrograms: ["All"],
      requiresApproval: true
    }
  ]);

  // Define semester order for comparison
  const semesterOrder = {
    'Fall': 1,
    'Winter': 2,
    'Spring': 3,
    'Summer': 4
  };

  const isExceptionActive = (exception) => {
    const currentSemester = 'Spring'; // Current semester - you can make this dynamic
    const currentYear = 2025;
    
    const currentSemesterValue = semesterOrder[currentSemester];
    const startSemesterValue = semesterOrder[exception.startSemester];
    const endSemesterValue = semesterOrder[exception.endSemester];
    const exceptionYear = parseInt(exception.year);
    
    // Check if we're in the exception year
    if (exceptionYear === currentYear) {
      // Same semester scenario (e.g., Spring to Spring)
      if (startSemesterValue === endSemesterValue) {
        return currentSemesterValue === startSemesterValue;
      }
      // Normal progression (e.g., Winter to Spring, Fall to Winter)
      else if (startSemesterValue < endSemesterValue) {
        return currentSemesterValue >= startSemesterValue && currentSemesterValue <= endSemesterValue;
      }
      // Cross-year scenario within same calendar year (e.g., Spring to Fall)
      else {
        return currentSemesterValue >= startSemesterValue || currentSemesterValue <= endSemesterValue;
      }
    }
    
    return false;
  };

  // Fixed function to calculate compliance status considering exceptions
  const getComplianceStatus = (student) => {
    // First check for active exceptions
    const activeExceptions = student.exceptions.filter(exc => isExceptionActive(exc));
    
    if (activeExceptions.length > 0) {
      // If there's an active exception, student is compliant
      return "Compliant";
    }
    
    // No active exceptions, check normal compliance
    if (student.currentCredits >= student.requiredCredits) {
      return "Compliant";
    } else if (student.currentCredits >= student.requiredCredits * 0.75) {
      return "At Risk";
    } else {
      return "Non-Compliant";
    }
  };

  // Filter students
  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           student.sevisId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           student.email.toLowerCase().includes(searchTerm.toLowerCase());
      
      const status = getComplianceStatus(student);
      const matchesStatus = statusFilter === 'all' || status.toLowerCase().includes(statusFilter.toLowerCase());
      
      return matchesSearch && matchesStatus;
    });
  }, [students, searchTerm, statusFilter]);

  // Dashboard stats
  const stats = useMemo(() => {
    const total = students.length;
    const compliant = students.filter(s => getComplianceStatus(s) === 'Compliant').length;
    const atRisk = students.filter(s => getComplianceStatus(s) === 'At Risk').length;
    const nonCompliant = students.filter(s => getComplianceStatus(s) === 'Non-Compliant').length;
    
    return { total, compliant, atRisk, nonCompliant };
  }, [students]);

const addException = (studentId, exception) => {
  setStudents(prev => {
    const updated = prev.map(student =>
      student.id === studentId
        ? { ...student, exceptions: [...student.exceptions, exception] }
        : student
    );

    // Update selectedStudent reference
    const newSelected = updated.find(s => s.id === studentId);
    setSelectedStudent(newSelected);

    return updated;
  });

  setShowSuccessMessage(true);
  setTimeout(() => setShowSuccessMessage(false), 3000);
};

  const StatusBadge = ({ status, student }) => {
    const colors = {
      'Compliant': 'bg-green-100 text-green-800',
      'Compliant (Exception)': 'bg-blue-100 text-blue-800',
      'At Risk': 'bg-yellow-100 text-yellow-800',
      'Non-Compliant': 'bg-red-100 text-red-800'
    };
    
    const activeExceptions = student?.exceptions?.filter(exc => isExceptionActive(exc)) || [];
    const hasActiveException = activeExceptions.length > 0;
    const displayStatus = status === 'Compliant' && hasActiveException ? 'Compliant (Exception)' : status;
    
    const tooltipContent = hasActiveException 
      ? `Active Exception: ${activeExceptions[0].type} - ${activeExceptions[0].description}`
      : null;
    
    return (
      <div className="relative group">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[displayStatus]}`}>
          {displayStatus}
        </span>
        {tooltipContent && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            {tooltipContent}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </div>
    );
  };

  const Dashboard = () => (
    <div className="space-y-6">
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <div className="flex items-center">
            <Check className="h-5 w-5 mr-2" />
            <span>Exception added successfully! Student status updated.</span>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Students</p>
              <p className="text-2xl font-bold">{stats.total}</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Compliant</p>
              <p className="text-2xl font-bold text-green-600">{stats.compliant}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">At Risk</p>
              <p className="text-2xl font-bold text-yellow-600">{stats.atRisk}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Non-Compliant</p>
              <p className="text-2xl font-bold text-red-600">{stats.nonCompliant}</p>
            </div>
            <XCircle className="h-8 w-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Recent Alerts</h3>
        <div className="space-y-3">
          {students.filter(s => getComplianceStatus(s) !== 'Compliant').map(student => (
            <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="font-medium">{student.name}</p>
                  <p className="text-sm text-gray-600">
                    {student.currentCredits}/{student.requiredCredits} credits - {student.program}
                  </p>
                </div>
              </div>
              <StatusBadge status={getComplianceStatus(student)} student={student} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const StudentList = () => (
    <div className="space-y-6">
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <div className="flex items-center">
            <Check className="h-5 w-5 mr-2" />
            <span>Exception added successfully! Student status updated.</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Student Management</h2>
        <button 
          onClick={() => setShowAddStudent(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          <span>Add Student</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search students..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="compliant">Compliant</option>
              <option value="at risk">At Risk</option>
              <option value="non-compliant">Non-Compliant</option>
            </select>
          </div>
        </div>
      </div>

      {/* Student Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SEVIS ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exceptions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="font-medium text-gray-900">{student.name}</p>
                      <p className="text-sm text-gray-500">{student.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.sevisId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="text-sm text-gray-900">{student.program}</p>
                      <p className="text-sm text-gray-500">{student.level}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.currentCredits}/{student.requiredCredits}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={getComplianceStatus(student)} student={student} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.exceptions.length > 0 ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {student.exceptions.length} active
                      </span>
                    ) : (
                      <span className="text-gray-400 text-sm">None</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedStudent(student)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => {
                          setSelectedStudent(student);
                          setShowAddException(true);
                        }}
                        className="text-green-600 hover:text-green-900"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const ExceptionModal = () => {
    const [exceptionData, setExceptionData] = useState({
      type: '',
      description: '',
      startSemester: '',
      endSemester: '',
      year: '2025',
      approvedBy: ''
    });

    const handleSubmit = () => {
      if (selectedStudent && exceptionData.type && exceptionData.description && 
          exceptionData.startSemester && exceptionData.endSemester && exceptionData.approvedBy) {
        addException(selectedStudent.id, exceptionData);
        setShowAddException(false);
        setExceptionData({
          type: '',
          description: '',
          startSemester: '',
          endSemester: '',
          year: '2025',
          approvedBy: ''
        });
      }
    };

    if (!showAddException) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h3 className="text-lg font-semibold mb-4">Add Exception for {selectedStudent?.name}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Exception Type
              </label>
              <select
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={exceptionData.type}
                onChange={(e) => setExceptionData({...exceptionData, type: e.target.value})}
              >
                <option value="">Select exception type</option>
                {exceptions.map(exc => (
                  <option key={exc.id} value={exc.name}>{exc.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows="3"
                value={exceptionData.description}
                onChange={(e) => setExceptionData({...exceptionData, description: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Academic Year
              </label>
              <select
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={exceptionData.year}
                onChange={(e) => setExceptionData({...exceptionData, year: e.target.value})}
              >
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Semester
                </label>
                <select
                  required
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={exceptionData.startSemester}
                  onChange={(e) => setExceptionData({...exceptionData, startSemester: e.target.value})}
                >
                  <option value="">Select semester</option>
                  <option value="Fall">Fall</option>
                  <option value="Winter">Winter</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Semester
                </label>
                <select
                  required
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={exceptionData.endSemester}
                  onChange={(e) => setExceptionData({...exceptionData, endSemester: e.target.value})}
                >
                  <option value="">Select semester</option>
                  <option value="Fall">Fall</option>
                  <option value="Winter">Winter</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Approved By
              </label>
              <input
                type="text"
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={exceptionData.approvedBy}
                onChange={(e) => setExceptionData({...exceptionData, approvedBy: e.target.value})}
              />
            </div>
            
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setShowAddException(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Exception
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">SEVIS Compliance Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Download className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Mail className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'dashboard'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'students'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Students
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'reports'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Reports
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'students' && <StudentList />}
        {activeTab === 'reports' && (
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Reports Coming Soon</h3>
            <p className="text-gray-500">Comprehensive SEVIS compliance reports will be available here.</p>
          </div>
        )}
      </main>

      {/* Modals */}
      <ExceptionModal />
    </div>
  );
};

export default SevisCompliancePortal;