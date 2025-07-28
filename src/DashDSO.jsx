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
  LogOut
} from 'lucide-react';



const DSODashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleNavigation = (path) => {
    window.location.href = path;
  };

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
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search students, cases..."
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

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <div className="space-y-1">
              <button 
                onClick={() => setActiveSection('overview')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'overview' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Overview</span>
              </button>
              
              <button 
                onClick={() => handleNavigation('/requests')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'requests' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <FileCheck className="w-4 h-4" />
                <span>Pending Requests</span>
                <span className="ml-auto bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">8</span>
              </button>
              
              <button 
                onClick={() => handleNavigation('/students')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'students' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Student Database</span>
              </button>
              
              <button 
                onClick={() => handleNavigation('/batch')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'batch' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <FileCheck className="w-4 h-4" />
                <span>SEVIS Batch</span>
              </button>
              
              <button 
                onClick={() => handleNavigation('/cpt')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'cpt' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>CPT Portal</span>
              </button>
              
              <button 
                onClick={() => setActiveSection('alerts')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'alerts' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Bell className="w-4 h-4" />
                <span>Alerts</span>
                <span className="ml-auto bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">3</span>
              </button>
              
              <button 
                onClick={() => handleNavigation('/i20')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'i20' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>I-20 Generator</span>
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-200 p-6">
            <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Good morning, Tyler</h1>
                <p className="text-gray-600 mt-1">Here's what needs your attention today</p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  <Plus className="w-4 h-4" />
                  <span>New Case</span>
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Priority Actions */}
            <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Priority Actions</h2>
                <span className="text-sm text-gray-500">8 items</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-red-50 border border-red-100 rounded-lg">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">SEVIS Reporting Overdue</h3>
                    <p className="text-sm text-gray-600">2 students require immediate SEVIS updates</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-red-600 font-medium">Overdue</span>
                    <p className="text-xs text-gray-500">Due 2 days ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-orange-50 border border-orange-100 rounded-lg">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Clock className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">CPT Applications Pending</h3>
                    <p className="text-sm text-gray-600">5 applications awaiting review</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-orange-600 font-medium">Due Today</span>
                    <p className="text-xs text-gray-500">Review by 5 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">I-20 Renewals Due</h3>
                    <p className="text-sm text-gray-600">3 students need renewal documents</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-blue-600 font-medium">This Week</span>
                    <p className="text-xs text-gray-500">Due Friday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-4">Active Students</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">247</div>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-green-600">↗ 12 new this month</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-4">Compliance Rate</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">94%</div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-green-600">Above target</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-4">Processing Time</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">2.3</div>
                <div className="text-sm text-gray-600">days average</div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
              <button className="text-sm text-gray-500 hover:text-gray-700">View all</button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 py-3 border-b border-gray-100 last:border-b-0">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">CPT approved for <span className="font-medium">Maria Rodriguez</span></p>
                  <p className="text-xs text-gray-500">Computer Science • 15 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 py-3 border-b border-gray-100 last:border-b-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">I-20 generated for <span className="font-medium">James Chen</span></p>
                  <p className="text-xs text-gray-500">MBA Program • 1 hour ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 py-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">New CPT application from <span className="font-medium">Sarah Kim</span></p>
                  <p className="text-xs text-gray-500">Engineering • 3 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DSODashboard;