import React, { useState, useEffect } from 'react';
import {
  Search,
  Filter,
  Plus,
  MoreVertical,
  AlertTriangle,
  CheckCircle,
  Clock,
  User,
  FileText,
  Calendar,
  Bell,
  Download,
  Eye,
  Edit,
  Flag,
  Shield,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  X,
  AlertCircle,
  Briefcase,
  BookOpen
} from 'lucide-react';

const StudentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showAddStudent, setShowAddStudent] = useState(false);

  // Mock student data
  const [students] = useState([
    {
      id: 1,
      sevisId: 'N0012345678',
      name: 'Chen Wei',
      email: 'chen.wei@email.com',
      phone: '+1 (555) 123-4567',
      country: 'China',
      status: 'Active',
      program: 'Computer Science MS',
      level: 'Graduate',
      admissionDate: '2024-08-15',
      programEnd: '2026-05-15',
      i20Status: 'Valid',
      priority: 'normal',
      lastActivity: '2 hours ago',
      alerts: 0,
      workAuth: 'F-1 CPT',
      address: '123 University Ave, College Town, ST 12345'
    },
    {
      id: 2,
      sevisId: 'N0012345679',
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+1 (555) 234-5678',
      country: 'India',
      status: 'Active',
      program: 'Business Administration MBA',
      level: 'Graduate',
      admissionDate: '2024-01-10',
      programEnd: '2025-12-20',
      i20Status: 'Renewal Required',
      priority: 'high',
      lastActivity: '1 day ago',
      alerts: 2,
      workAuth: 'F-1 OPT Pending',
      address: '456 Campus Dr, College Town, ST 12345'
    },
    {
      id: 3,
      sevisId: 'N0012345680',
      name: 'Ahmed Hassan',
      email: 'ahmed.hassan@email.com',
      phone: '+1 (555) 345-6789',
      country: 'Egypt',
      status: 'On Leave',
      program: 'Engineering PhD',
      level: 'Doctoral',
      admissionDate: '2023-09-01',
      programEnd: '2028-08-31',
      i20Status: 'Valid',
      priority: 'normal',
      lastActivity: '5 days ago',
      alerts: 1,
      workAuth: 'F-1 Research',
      address: '789 Graduate Way, College Town, ST 12345'
    },
    {
      id: 4,
      sevisId: 'N0012345681',
      name: 'Maria Rodriguez',
      email: 'maria.rodriguez@email.com',
      phone: '+1 (555) 456-7890',
      country: 'Mexico',
      status: 'Active',
      program: 'Psychology BA',
      level: 'Undergraduate',
      admissionDate: '2023-08-20',
      programEnd: '2027-05-15',
      i20Status: 'Valid',
      priority: 'normal',
      lastActivity: '3 hours ago',
      alerts: 0,
      workAuth: 'F-1 On-Campus',
      address: '321 Student St, College Town, ST 12345'
    },
    {
      id: 5,
      sevisId: 'N0012345682',
      name: 'Yuki Tanaka',
      email: 'yuki.tanaka@email.com',
      phone: '+1 (555) 567-8901',
      country: 'Japan',
      status: 'Terminated',
      program: 'Art History MA',
      level: 'Graduate',
      admissionDate: '2023-01-15',
      programEnd: '2024-12-20',
      i20Status: 'Terminated',
      priority: 'urgent',
      lastActivity: '2 weeks ago',
      alerts: 3,
      workAuth: 'None',
      address: '654 Arts Ave, College Town, ST 12345'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'On Leave': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Terminated': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'normal': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getI20StatusColor = (status) => {
    switch (status) {
      case 'Valid': return 'text-green-600';
      case 'Renewal Required': return 'text-orange-600';
      case 'Terminated': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.sevisId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'active' && student.status === 'Active') ||
                         (selectedFilter === 'alerts' && student.alerts > 0) ||
                         (selectedFilter === 'renewal' && student.i20Status === 'Renewal Required');
    
    return matchesSearch && matchesFilter;
  });

  const totalAlerts = students.reduce((sum, student) => sum + student.alerts, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Student Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Manage {students.length} students • {totalAlerts} alerts</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={20} />
                {totalAlerts > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalAlerts}
                  </span>
                )}
              </button>
              
              <button 
                onClick={() => setShowAddStudent(true)}
                className="bg-gradient-to-r from-indigo-800 to-indigo-700 text-white px-4 py-2 rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200 hover:scale-105 flex items-center font-medium"
              >
                <Plus size={16} className="mr-2" />
                Add Student
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name, SEVIS ID, or email..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <Filter size={16} className="mr-2" />
                Filters
                <ChevronDown size={16} className="ml-2" />
              </button>
              
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Students</option>
                <option value="active">Active Only</option>
                <option value="alerts">With Alerts</option>
                <option value="renewal">Renewal Required</option>
              </select>
            </div>
          </div>
          
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500">
                    <option>All Statuses</option>
                    <option>Active</option>
                    <option>On Leave</option>
                    <option>Terminated</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Program Level</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500">
                    <option>All Levels</option>
                    <option>Undergraduate</option>
                    <option>Graduate</option>
                    <option>Doctoral</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work Authorization</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500">
                    <option>All Types</option>
                    <option>F-1 CPT</option>
                    <option>F-1 OPT</option>
                    <option>On-Campus</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500">
                    <option>All Countries</option>
                    <option>China</option>
                    <option>India</option>
                    <option>Japan</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{students.length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <User className="text-white" size={24} />
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Students</p>
                <p className="text-2xl font-bold text-green-600">{students.filter(s => s.status === 'Active').length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="text-white" size={24} />
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Alerts</p>
                <p className="text-2xl font-bold text-orange-600">{totalAlerts}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <AlertTriangle className="text-white" size={24} />
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Renewals Due</p>
                <p className="text-2xl font-bold text-purple-600">{students.filter(s => s.i20Status === 'Renewal Required').length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Clock className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Student</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">SEVIS ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Program</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">I-20 Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Alerts</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Last Activity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className={`w-2 h-8 rounded-full mr-3 ${getPriorityColor(student.priority)}`}></div>
                        <div>
                          <div className="font-medium text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.email}</div>
                          <div className="text-sm text-gray-500 flex items-center mt-1">
                            <MapPin size={12} className="mr-1" />
                            {student.country}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-mono text-sm text-gray-900">{student.sevisId}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(student.status)}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{student.program}</div>
                      <div className="text-sm text-gray-500">{student.level}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`text-sm font-medium ${getI20StatusColor(student.i20Status)}`}>
                        {student.i20Status}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {student.alerts > 0 ? (
                        <div className="flex items-center">
                          <AlertCircle size={16} className="text-red-500 mr-1" />
                          <span className="text-sm font-medium text-red-600">{student.alerts}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">None</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-500">{student.lastActivity}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => setSelectedStudent(student)}
                          className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors" title="Edit">
                          <Edit size={16} />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors" title="Download I-20">
                          <Download size={16} />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors" title="More Actions">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredStudents.length === 0 && (
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 p-12 text-center">
            <User size={48} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>

      {/* Student Detail Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-3 h-12 rounded-full mr-4 ${getPriorityColor(selectedStudent.priority)}`}></div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedStudent.name}</h2>
                    <p className="text-gray-600">{selectedStudent.sevisId}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedStudent(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <User size={20} className="mr-2" />
                      Personal Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail size={16} className="text-gray-400 mr-3" />
                        <span className="text-gray-600">{selectedStudent.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="text-gray-400 mr-3" />
                        <span className="text-gray-600">{selectedStudent.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="text-gray-400 mr-3" />
                        <span className="text-gray-600">{selectedStudent.country}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin size={16} className="text-gray-400 mr-3 mt-0.5" />
                        <span className="text-gray-600">{selectedStudent.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <GraduationCap size={20} className="mr-2" />
                      Academic Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Program:</span>
                        <span className="font-medium text-gray-900">{selectedStudent.program}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Level:</span>
                        <span className="font-medium text-gray-900">{selectedStudent.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Admission Date:</span>
                        <span className="font-medium text-gray-900">{selectedStudent.admissionDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Program End:</span>
                        <span className="font-medium text-gray-900">{selectedStudent.programEnd}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SEVIS & Work Authorization */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Shield size={20} className="mr-2" />
                      SEVIS Status
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className={`font-medium px-3 py-1 rounded-full text-xs border ${getStatusColor(selectedStudent.status)}`}>
                          {selectedStudent.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">I-20 Status:</span>
                        <span className={`font-medium ${getI20StatusColor(selectedStudent.i20Status)}`}>
                          {selectedStudent.i20Status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Last Activity:</span>
                        <span className="font-medium text-gray-900">{selectedStudent.lastActivity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Work Authorization */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Briefcase size={20} className="mr-2" />
                      Work Authorization
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Current Status:</span>
                        <span className="font-medium text-gray-900">{selectedStudent.workAuth}</span>
                      </div>
                    </div>
                  </div>

                  {/* Alerts */}
                  {selectedStudent.alerts > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <AlertTriangle size={20} className="mr-2 text-red-500" />
                        Active Alerts ({selectedStudent.alerts})
                      </h3>
                      <div className="space-y-2">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                          <div className="flex items-center">
                            <AlertCircle size={16} className="text-red-500 mr-2" />
                            <span className="text-sm text-red-800">I-20 renewal required within 30 days</span>
                          </div>
                        </div>
                        {selectedStudent.alerts > 1 && (
                          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                            <div className="flex items-center">
                              <AlertCircle size={16} className="text-orange-500 mr-2" />
                              <span className="text-sm text-orange-800">Address update pending verification</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end space-x-4">
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                  Edit Student
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:shadow-lg transition-all">
                  Generate I-20
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-indigo-800 to-indigo-700 text-white rounded-xl hover:shadow-lg transition-all">
                  Update SEVIS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Student Modal */}
      {showAddStudent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Add New Student</h2>
                <button 
                  onClick={() => setShowAddStudent(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <form className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <User size={20} className="mr-2" />
                    Personal Information
                  </h3>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="student@university.edu"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country of Citizenship *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required>
                    <option value="">Select country</option>
                    <option value="China">China</option>
                    <option value="India">India</option>
                    <option value="Japan">Japan</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Brazil">Brazil</option>
                  </select>
                </div>

                {/* Academic Information */}
                <div className="md:col-span-2 mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <BookOpen size={20} className="mr-2" />
                    Academic Information
                  </h3>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Program *</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Computer Science MS"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Program Level *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required>
                    <option value="">Select level</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Doctoral">Doctoral</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Admission Date *</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expected Graduation *</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* SEVIS Information */}
                <div className="md:col-span-2 mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield size={20} className="mr-2" />
                    SEVIS Information
                  </h3>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">SEVIS ID</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="N0012345678"
                  />
                  <p className="text-sm text-gray-500 mt-1">Leave blank to auto-generate</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Initial Status *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required>
                    <option value="">Select status</option>
                    <option value="Initial">Initial</option>
                    <option value="Active">Active</option>
                    <option value="Transfer In">Transfer In</option>
                  </select>
                </div>

                {/* Address */}
                <div className="md:col-span-2 mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">US Address *</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    rows="3"
                    placeholder="123 University Ave, College Town, ST 12345"
                    required
                  ></textarea>
                </div>

                {/* Priority */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work Authorization</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option value="F-1 On-Campus">F-1 On-Campus Only</option>
                    <option value="F-1 CPT">F-1 CPT</option>
                    <option value="F-1 OPT">F-1 OPT</option>
                    <option value="None">None</option>
                  </select>
                </div>
              </div>

              {/* Form Actions */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddStudent(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-indigo-800 to-indigo-700 text-white rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200 hover:scale-105 font-medium"
                >
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;