import React, { useState } from 'react';
import { 
  Bell, 
  Users, 
  FileCheck, 
  FileText,
  Search,
  Settings,
  Shield,
  ChevronDown,
  Plus,
  Filter,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle2,
  User,
  LogOut,
  Eye,
  Edit,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  BookOpen
} from 'lucide-react';

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState('students');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterProgram, setFilterProgram] = useState('all');

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  // Mock student data
  const students = [
    {
      id: 'S001',
      name: 'Maria Rodriguez',
      email: 'maria.rodriguez@student.edu',
      phone: '+1 (555) 123-4567',
      program: 'Computer Science',
      level: 'Graduate',
      status: 'Active',
      country: 'Mexico',
      visaType: 'F-1',
      sevisId: 'N0123456789',
      enrollmentDate: '2023-08-28',
      graduationDate: '2025-05-15',
      creditsCompleted: '24/36',
      advisor: 'Dr. Smith',
      lastActivity: '2 hours ago',
      statusColor: 'green'
    },
    {
      id: 'S002',
      name: 'James Chen',
      email: 'james.chen@student.edu',
      phone: '+1 (555) 234-5678',
      program: 'MBA',
      level: 'Graduate',
      status: 'Active',
      country: 'China',
      visaType: 'F-1',
      sevisId: 'N0234567890',
      enrollmentDate: '2023-01-15',
      graduationDate: '2024-12-20',
      creditsCompleted: '48/60',
      advisor: 'Dr. Johnson',
      lastActivity: '1 day ago',
      statusColor: 'green'
    },
    {
      id: 'S003',
      name: 'Sarah Kim',
      email: 'sarah.kim@student.edu',
      phone: '+1 (555) 345-6789',
      program: 'Mechanical Engineering',
      level: 'Undergraduate',
      status: 'CPT Pending',
      country: 'South Korea',
      visaType: 'F-1',
      sevisId: 'N0345678901',
      enrollmentDate: '2022-08-25',
      graduationDate: '2026-05-18',
      creditsCompleted: '78/120',
      advisor: 'Dr. Williams',
      lastActivity: '3 hours ago',
      statusColor: 'orange'
    },
    {
      id: 'S004',
      name: 'Ahmed Hassan',
      email: 'ahmed.hassan@student.edu',
      phone: '+1 (555) 456-7890',
      program: 'Data Science',
      level: 'Graduate',
      status: 'Active',
      country: 'Egypt',
      visaType: 'F-1',
      sevisId: 'N0456789012',
      enrollmentDate: '2023-08-30',
      graduationDate: '2025-08-15',
      creditsCompleted: '18/36',
      advisor: 'Dr. Brown',
      lastActivity: '5 hours ago',
      statusColor: 'green'
    },
    {
      id: 'S005',
      name: 'Elena Popov',
      email: 'elena.popov@student.edu',
      phone: '+1 (555) 567-8901',
      program: 'International Business',
      level: 'Graduate',
      status: 'SEVIS Update Required',
      country: 'Russia',
      visaType: 'F-1',
      sevisId: 'N0567890123',
      enrollmentDate: '2023-01-20',
      graduationDate: '2024-12-15',
      creditsCompleted: '52/60',
      advisor: 'Dr. Davis',
      lastActivity: '2 days ago',
      statusColor: 'red'
    },
    {
      id: 'S006',
      name: 'Raj Patel',
      email: 'raj.patel@student.edu',
      phone: '+1 (555) 678-9012',
      program: 'Computer Science',
      level: 'Graduate',
      status: 'Active',
      country: 'India',
      visaType: 'F-1',
      sevisId: 'N0678901234',
      enrollmentDate: '2022-08-28',
      graduationDate: '2024-08-20',
      creditsCompleted: '34/36',
      advisor: 'Dr. Miller',
      lastActivity: '1 hour ago',
      statusColor: 'green'
    },
    {
      id: 'S007',
      name: 'Lucia Santos',
      email: 'lucia.santos@student.edu',
      phone: '+1 (555) 789-0123',
      program: 'Public Health',
      level: 'Graduate',
      status: 'Active',
      country: 'Brazil',
      visaType: 'F-1',
      sevisId: 'N0789012345',
      enrollmentDate: '2023-08-25',
      graduationDate: '2025-05-20',
      creditsCompleted: '21/36',
      advisor: 'Dr. Wilson',
      lastActivity: '4 hours ago',
      statusColor: 'green'
    },
    {
      id: 'S008',
      name: 'Yuki Tanaka',
      email: 'yuki.tanaka@student.edu',
      phone: '+1 (555) 890-1234',
      program: 'Fine Arts',
      level: 'Undergraduate',
      status: 'I-20 Renewal Due',
      country: 'Japan',
      visaType: 'F-1',
      sevisId: 'N0890123456',
      enrollmentDate: '2021-08-30',
      graduationDate: '2025-05-25',
      creditsCompleted: '95/120',
      advisor: 'Dr. Anderson',
      lastActivity: '6 hours ago',
      statusColor: 'orange'
    },
    {
      id: 'S009',
      name: 'Thomas Mueller',
      email: 'thomas.mueller@student.edu',
      phone: '+1 (555) 901-2345',
      program: 'Physics',
      level: 'PhD',
      status: 'Active',
      country: 'Germany',
      visaType: 'F-1',
      sevisId: 'N0901234567',
      enrollmentDate: '2021-08-20',
      graduationDate: '2026-08-15',
      creditsCompleted: '72/90',
      advisor: 'Dr. Taylor',
      lastActivity: '8 hours ago',
      statusColor: 'green'
    },
    {
      id: 'S010',
      name: 'Sophie Laurent',
      email: 'sophie.laurent@student.edu',
      phone: '+1 (555) 012-3456',
      program: 'International Relations',
      level: 'Graduate',
      status: 'Active',
      country: 'France',
      visaType: 'F-1',
      sevisId: 'N1012345678',
      enrollmentDate: '2023-01-18',
      graduationDate: '2024-12-18',
      creditsCompleted: '56/60',
      advisor: 'Dr. Moore',
      lastActivity: '12 hours ago',
      statusColor: 'green'
    }
  ];

  // Filter students based on search and filters
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.sevisId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.program.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || student.status === filterStatus;
    const matchesProgram = filterProgram === 'all' || student.program === filterProgram;
    
    return matchesSearch && matchesStatus && matchesProgram;
  });

  const getStatusBadge = (status, color) => {
    const colorClasses = {
      green: 'bg-green-100 text-green-800',
      orange: 'bg-orange-100 text-orange-800',
      red: 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${colorClasses[color]}`}>
        {status}
      </span>
    );
  };

  const uniquePrograms = [...new Set(students.map(s => s.program))];
  const uniqueStatuses = [...new Set(students.map(s => s.status))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Klyro</span>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Navigation Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-gray-500">
                <button 
                  onClick={() => handleNavigation('/overview')}
                  className="hover:text-gray-700 transition-colors"
                >
                  Overview
                </button>
                <span>/</span>
                <button 
                  onClick={() => handleNavigation('/requests')}
                  className="hover:text-gray-700 transition-colors flex items-center space-x-1"
                >
                  <span>Requests</span>
                  <span className="bg-orange-100 text-orange-800 text-xs px-1.5 py-0.5 rounded-full">8</span>
                </button>
                <span>/</span>
                <span className="text-gray-900 font-medium">Students</span>
                <span>/</span>
                <button 
                  onClick={() => handleNavigation('/batch')}
                  className="hover:text-gray-700 transition-colors"
                >
                  SEVIS Batch
                </button>
                <span>/</span>
                <button 
                  onClick={() => handleNavigation('/alerts')}
                  className="hover:text-gray-700 transition-colors flex items-center space-x-1"
                >
                  <span>Alerts</span>
                  <span className="bg-red-100 text-red-800 text-xs px-1.5 py-0.5 rounded-full">3</span>
                </button>
                <span>/</span>
                <button 
                  onClick={() => handleNavigation('/i20')}
                  className="hover:text-gray-700 transition-colors"
                >
                  I-20 Generator
                </button>
              </nav>
              
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search students, SEVIS ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-80 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="relative">
                <button 
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="flex items-center space-x-2 hover:bg-gray-50 rounded-lg p-2 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">TM</span>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">Tyler Morkin</p>
                    <p className="text-xs text-gray-500">DSO</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">Tyler Morkin</p>
                      <p className="text-sm text-gray-500">tyler.morkin@university.edu</p>
                    </div>
                    <div className="py-1">
                      <button 
                        onClick={() => handleNavigation('/profile')}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <User className="w-4 h-4 mr-3" />
                        Profile Settings
                      </button>
                      <button 
                        onClick={() => handleNavigation('/settings')}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <Settings className="w-4 h-4 mr-3" />
                        Preferences
                      </button>
                    </div>
                    <div className="border-t border-gray-100 py-1">
                      <button 
                        onClick={() => handleNavigation('/logout')}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Student Database</h1>
                <p className="text-gray-600 mt-1">Manage and monitor all international students</p>
              </div>
              <div className="flex items-center space-x-3">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  {uniqueStatuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
                <select
                  value={filterProgram}
                  onChange={(e) => setFilterProgram(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="all">All Programs</option>
                  {uniquePrograms.map(program => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  <Plus className="w-4 h-4" />
                  <span>Add Student</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Students</p>
                  <p className="text-2xl font-bold text-gray-900">{students.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Active</p>
                  <p className="text-2xl font-bold text-gray-900">{students.filter(s => s.status === 'Active').length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Pending Actions</p>
                  <p className="text-2xl font-bold text-gray-900">{students.filter(s => s.status !== 'Active').length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Programs</p>
                  <p className="text-2xl font-bold text-gray-900">{uniquePrograms.length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Student List */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Students ({filteredStudents.length})
                </h2>
                <div className="text-sm text-gray-500">
                  Showing {filteredStudents.length} of {students.length} students
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SEVIS ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Activity</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                            <div className="text-sm text-gray-500">{student.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{student.program}</div>
                        <div className="text-sm text-gray-500">{student.level}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(student.status, student.statusColor)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {student.sevisId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-900">{student.country}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{student.creditsCompleted}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ 
                              width: `${(parseInt(student.creditsCompleted.split('/')[0]) / parseInt(student.creditsCompleted.split('/')[1])) * 100}%` 
                            }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.lastActivity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Mail className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredStudents.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </main>
    </div>
  );
};

export default StudentDashboard;