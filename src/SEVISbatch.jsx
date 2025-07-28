import React, { useState, useEffect, useRef } from 'react';
import {
  Upload,
  FileText,
  Calendar,
  Check,
  AlertCircle,
  X,
  Download,
  Loader2,
  Shield,
  ArrowLeft,
  Eye,
  Server,
  Database,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RefreshCw,
  FileCheck,
  Settings,
  Users,
  Activity,
  Zap,
  Filter,
  Search,
  MoreVertical,
  Play,
  Pause,
  Archive
} from 'lucide-react';

const SEVISBatchUpload = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [validationResults, setValidationResults] = useState(null);
  const [isValidating, setIsValidating] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const fileInputRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock batch history data
  const [batchHistory] = useState([
    {
      id: 'BTH_20250723_001',
      fileName: 'student_records_20250723.xml',
      timestamp: '2025-07-23T08:30:00Z',
      status: 'completed',
      recordCount: 247,
      successCount: 245,
      errorCount: 2,
      warningCount: 0,
      orgId: 'UMI214F00078000',
      processTime: '2.3 minutes',
      downloadUrl: '#',
      errors: [
        { record: 'Student ID: AP2025089', issue: 'Invalid passport number format', severity: 'error' },
        { record: 'Student ID: AP2025156', issue: 'Missing program end date', severity: 'error' }
      ]
    },
    {
      id: 'BTH_20250722_003',
      fileName: 'evening_batch_updates.xml',
      timestamp: '2025-07-22T23:45:00Z',
      status: 'processing',
      recordCount: 89,
      successCount: 89,
      errorCount: 0,
      warningCount: 3,
      orgId: 'UMI214F00078000',
      processTime: '1.2 minutes',
      progress: 78
    },
    {
      id: 'BTH_20250722_002',
      fileName: 'address_updates_bulk.xml',
      timestamp: '2025-07-22T14:15:00Z',
      status: 'failed',
      recordCount: 156,
      successCount: 0,
      errorCount: 156,
      warningCount: 0,
      orgId: 'UMI214F00078000',
      errors: [
        { record: 'Multiple', issue: 'XML schema validation failed - missing required elements', severity: 'critical' }
      ]
    },
    {
      id: 'BTH_20250722_001',
      fileName: 'new_admissions_july.xml',
      timestamp: '2025-07-22T09:00:00Z',
      status: 'completed',
      recordCount: 523,
      successCount: 520,
      errorCount: 0,
      warningCount: 3,
      orgId: 'UMI214F00078000',
      processTime: '4.7 minutes',
      downloadUrl: '#'
    },
    {
      id: 'BTH_20250721_001',
      fileName: 'weekend_batch_process.xml',
      timestamp: '2025-07-21T18:30:00Z',
      status: 'completed',
      recordCount: 67,
      successCount: 67,
      errorCount: 0,
      warningCount: 0,
      orgId: 'UMI214F00078000',
      processTime: '0.8 minutes',
      downloadUrl: '#'
    }
  ]);

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock validation rules and file processing
  const mockValidateFile = async (file) => {
    setIsValidating(true);
    
    // Simulate validation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const results = {
      fileName: file.name,
      fileSize: (file.size / 1024).toFixed(2) + ' KB',
      isValid: file.name.includes('valid') || Math.random() > 0.3,
      schemaVersion: '6.71',
      orgId: 'UMI214F00078000',
      recordCount: Math.floor(Math.random() * 500) + 50,
      validation: {
        schema: { passed: true, errors: [] },
        businessRules: { 
          passed: file.name.includes('valid') || Math.random() > 0.2,
          warnings: Math.floor(Math.random() * 5),
          errors: file.name.includes('invalid') ? Math.floor(Math.random() * 3) + 1 : 0
        },
        security: { passed: true, certificate: 'Valid (UMI214F00078000.pem)' }
      },
      errors: file.name.includes('invalid') ? [
        'Line 45: Invalid SEVIS ID format - must be 11 characters starting with N',
        'Line 120: Missing required field: Program End Date',
        'Line 203: Invalid country code - use ISO 3166-1 alpha-2'
      ] : [],
      warnings: [
        'Line 67: Student address formatting recommendation',
        'Line 89: Financial support documentation reference',
        'Line 156: Program level code best practice'
      ]
    };

    setValidationResults(results);
    setIsValidating(false);
    return results;
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = async (files) => {
    const file = files[0];
    if (file) {
      if (!file.name.endsWith('.xml')) {
        alert('Please upload XML files only');
        return;
      }
      
      setUploadedFiles([file]);
      await mockValidateFile(file);
    }
  };

  const handleUploadToBatch = async () => {
    setIsUploading(true);
    
    // Simulate upload process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsUploading(false);
    setActiveTab('monitor');
    
    // Clear current files
    setUploadedFiles([]);
    setValidationResults(null);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 size={16} className="text-green-600" />;
      case 'processing':
        return <Loader2 size={16} className="text-blue-600 animate-spin" />;
      case 'failed':
        return <XCircle size={16} className="text-red-600" />;
      default:
        return <Clock size={16} className="text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'processing':
        return 'text-blue-600 bg-blue-50';
      case 'failed':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const filteredBatches = batchHistory.filter(batch => 
    batch.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    batch.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
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
                {currentTime.toLocaleTimeString()}
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
                SEVIS Batch Processing
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Upload and process student records in bulk with automated XML validation and SEVIS RTI integration
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">24</div>
                <div className="text-sm text-gray-600">Batches Today</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">1,247</div>
                <div className="text-sm text-gray-600">Records Processed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('upload')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'upload'
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Upload size={16} />
                <span>Upload & Validate</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('monitor')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'monitor'
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Activity size={16} />
                <span>Batch Monitor</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {batchHistory.filter(b => b.status === 'processing').length}
                </span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'history'
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Archive size={16} />
                <span>History</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'settings'
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Settings size={16} />
                <span>Configuration</span>
              </div>
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'upload' && (
          <div className="space-y-8">
            {/* Upload Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <Upload size={20} className="text-gray-700 mr-3" />
                <h2 className="text-lg font-semibold text-gray-900">XML File Upload</h2>
              </div>

              <div
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                  dragActive 
                    ? 'border-gray-900 bg-gray-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <FileText size={24} className="text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Drop your SEVIS XML file here
                    </h3>
                    <p className="text-gray-600 mb-4">
                      or click to browse files. Only .xml files are accepted.
                    </p>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-black transition-colors"
                    >
                      <Upload size={16} className="mr-2" />
                      Choose File
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".xml"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>Supported formats: XML (SEVIS Batch API v6.71)</p>
                    <p>Maximum file size: 50MB</p>
                  </div>
                </div>
              </div>

              {/* File Preview */}
              {uploadedFiles.length > 0 && (
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-3">Uploaded File</h3>
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-white rounded-md p-3 border">
                      <div className="flex items-center space-x-3">
                        <FileCheck size={16} className="text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900">{file.name}</p>
                          <p className="text-sm text-gray-500">
                            {(file.size / 1024).toFixed(2)} KB • {file.type || 'XML Document'}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setUploadedFiles([]);
                          setValidationResults(null);
                        }}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Validation Results */}
            {(isValidating || validationResults) && (
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                  {isValidating ? (
                    <Loader2 size={20} className="text-gray-700 mr-3 animate-spin" />
                  ) : (
                    <FileCheck size={20} className="text-gray-700 mr-3" />
                  )}
                  <h2 className="text-lg font-semibold text-gray-900">
                    {isValidating ? 'Validating File...' : 'Validation Results'}
                  </h2>
                </div>

                {isValidating ? (
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Loader2 size={16} className="text-blue-600 animate-spin" />
                          <span className="text-sm text-gray-700">Checking XML schema compliance...</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Loader2 size={16} className="text-blue-600 animate-spin" />
                          <span className="text-sm text-gray-700">Validating business rules...</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Loader2 size={16} className="text-blue-600 animate-spin" />
                          <span className="text-sm text-gray-700">Verifying security certificates...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : validationResults && (
                  <div className="space-y-6">
                    {/* Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600">File Size</div>
                        <div className="text-lg font-medium text-gray-900">{validationResults.fileSize}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600">Records</div>
                        <div className="text-lg font-medium text-gray-900">{validationResults.recordCount}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600">Schema Version</div>
                        <div className="text-lg font-medium text-gray-900">{validationResults.schemaVersion}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600">Organization ID</div>
                        <div className="text-lg font-medium text-gray-900">{validationResults.orgId}</div>
                      </div>
                    </div>

                    {/* Validation Status */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className={`rounded-lg p-4 border ${
                        validationResults.validation.schema.passed 
                          ? 'border-green-200 bg-green-50' 
                          : 'border-red-200 bg-red-50'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-gray-900">XML Schema</h3>
                          {validationResults.validation.schema.passed ? (
                            <Check size={16} className="text-green-600" />
                          ) : (
                            <X size={16} className="text-red-600" />
                          )}
                        </div>
                        <p className={`text-sm ${
                          validationResults.validation.schema.passed ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {validationResults.validation.schema.passed ? 'Valid XML structure' : 'Schema validation failed'}
                        </p>
                      </div>

                      <div className={`rounded-lg p-4 border ${
                        validationResults.validation.businessRules.passed 
                          ? 'border-green-200 bg-green-50' 
                          : 'border-red-200 bg-red-50'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-gray-900">Business Rules</h3>
                          {validationResults.validation.businessRules.passed ? (
                            <Check size={16} className="text-green-600" />
                          ) : (
                            <AlertTriangle size={16} className="text-red-600" />
                          )}
                        </div>
                        <p className={`text-sm ${
                          validationResults.validation.businessRules.passed ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {validationResults.validation.businessRules.errors} errors, {validationResults.validation.businessRules.warnings} warnings
                        </p>
                      </div>

                      <div className={`rounded-lg p-4 border ${
                        validationResults.validation.security.passed 
                          ? 'border-green-200 bg-green-50' 
                          : 'border-red-200 bg-red-50'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-gray-900">Security</h3>
                          {validationResults.validation.security.passed ? (
                            <Shield size={16} className="text-green-600" />
                          ) : (
                            <X size={16} className="text-red-600" />
                          )}
                        </div>
                        <p className={`text-sm ${
                          validationResults.validation.security.passed ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {validationResults.validation.security.certificate}
                        </p>
                      </div>
                    </div>

                    {/* Errors and Warnings */}
                    {validationResults.errors.length > 0 && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h3 className="font-medium text-red-900 mb-3 flex items-center">
                          <AlertCircle size={16} className="mr-2" />
                          Validation Errors ({validationResults.errors.length})
                        </h3>
                        <div className="space-y-2">
                          {validationResults.errors.map((error, index) => (
                            <div key={index} className="text-sm text-red-700 bg-red-100 rounded px-3 py-2">
                              {error}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {validationResults.warnings.length > 0 && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h3 className="font-medium text-yellow-900 mb-3 flex items-center">
                          <AlertTriangle size={16} className="mr-2" />
                          Warnings ({validationResults.warnings.length})
                        </h3>
                        <div className="space-y-2">
                          {validationResults.warnings.map((warning, index) => (
                            <div key={index} className="text-sm text-yellow-700 bg-yellow-100 rounded px-3 py-2">
                              {warning}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Upload Button */}
                    {validationResults.isValid && (
                      <div className="flex justify-end">
                        <button
                          onClick={handleUploadToBatch}
                          disabled={isUploading}
                          className="flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-md hover:bg-black focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isUploading ? (
                            <>
                              <Loader2 size={20} className="mr-2 animate-spin" />
                              Uploading to SEVIS...
                            </>
                          ) : (
                            <>
                              <Server size={20} className="mr-2" />
                              Upload to SEVIS Batch
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === 'monitor' && (
          <div className="space-y-6">
            {/* Processing Queue Header */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Processing Queue</h2>
                  <p className="text-gray-600">Real-time status of batch uploads and processing</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setAutoRefresh(!autoRefresh)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm ${
                      autoRefresh 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <RefreshCw size={16} className={autoRefresh ? 'animate-spin' : ''} />
                    <span>Auto Refresh</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Current Processing Items */}
            <div className="space-y-4">
              {batchHistory.filter(batch => batch.status === 'processing').map((batch) => (
                <div key={batch.id} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Loader2 size={20} className="text-blue-600 animate-spin" />
                      <div>
                        <h3 className="font-medium text-gray-900">{batch.fileName}</h3>
                        <p className="text-sm text-gray-600">Batch ID: {batch.id}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      {new Date(batch.timestamp).toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{batch.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${batch.progress}%` }}
                      ></div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Records:</span>
                        <span className="ml-1 font-medium">{batch.recordCount}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Processed:</span>
                        <span className="ml-1 font-medium text-green-600">{batch.successCount}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Errors:</span>
                        <span className="ml-1 font-medium text-red-600">{batch.errorCount}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Warnings:</span>
                        <span className="ml-1 font-medium text-yellow-600">{batch.warningCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Completions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-medium text-gray-900 mb-4">Recently Completed</h3>
              <div className="space-y-3">
                {batchHistory.filter(batch => batch.status === 'completed').slice(0, 3).map((batch) => (
                  <div key={batch.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 size={16} className="text-green-600" />
                      <div>
                        <div className="font-medium text-gray-900">{batch.fileName}</div>
                        <div className="text-sm text-gray-600">
                          {batch.recordCount} records • {batch.processTime}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Download size={16} />
                      </button>
                      <button 
                        onClick={() => setSelectedBatch(batch)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Batch History</h2>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search batches..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                    <Filter size={16} className="text-gray-500" />
                    <span className="text-sm">Filter</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Batch List */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Batch Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Records
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Results
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredBatches.map((batch) => (
                      <tr key={batch.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{batch.fileName}</div>
                            <div className="text-sm text-gray-500">{batch.id}</div>
                            <div className="text-xs text-gray-400">
                              {new Date(batch.timestamp).toLocaleString()}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {getStatusIcon(batch.status)}
                            <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(batch.status)}`}>
                              {batch.status.charAt(0).toUpperCase() + batch.status.slice(1)}
                            </span>
                          </div>
                          {batch.processTime && (
                            <div className="text-xs text-gray-500 mt-1">{batch.processTime}</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div>Total: {batch.recordCount}</div>
                          <div className="text-xs text-gray-500">
                            Success: {batch.successCount} • Errors: {batch.errorCount}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {batch.status === 'completed' && (
                            <div className="flex items-center space-x-2">
                              <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                ✓ Success
                              </div>
                              {batch.downloadUrl && (
                                <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                  PDF Ready
                                </div>
                              )}
                            </div>
                          )}
                          {batch.status === 'failed' && (
                            <div className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                              ✗ Failed
                            </div>
                          )}
                          {batch.status === 'processing' && (
                            <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              ⏳ Processing
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => setSelectedBatch(batch)}
                              className="text-gray-400 hover:text-gray-600"
                              title="View Details"
                            >
                              <Eye size={16} />
                            </button>
                            {batch.downloadUrl && (
                              <button className="text-gray-400 hover:text-gray-600" title="Download Results">
                                <Download size={16} />
                              </button>
                            )}
                            <button className="text-gray-400 hover:text-gray-600" title="More Options">
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
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            {/* SEVIS Configuration */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <Settings size={20} className="text-gray-700 mr-3" />
                <h2 className="text-lg font-semibold text-gray-900">SEVIS Configuration</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization ID
                  </label>
                  <input
                    type="text"
                    value="UMI214F00078000"
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SEVIS Schema Version
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-gray-900">
                    <option value="6.71">6.71 (Current)</option>
                    <option value="6.70">6.70</option>
                    <option value="6.69">6.69</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Processing Schedule
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-gray-900">
                    <option value="realtime">Real-time Processing</option>
                    <option value="daily">Daily at 11:59 PM EST</option>
                    <option value="custom">Custom Schedule</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Validation Level
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-gray-900">
                    <option value="strict">Strict (Recommended)</option>
                    <option value="standard">Standard</option>
                    <option value="lenient">Lenient</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Certificate Management */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <Shield size={20} className="text-gray-700 mr-3" />
                <h2 className="text-lg font-semibold text-gray-900">Security Certificates</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 size={20} className="text-green-600" />
                    <div>
                      <div className="font-medium text-green-900">UMI214F00078000.pem</div>
                      <div className="text-sm text-green-700">Valid until: December 15, 2025</div>
                    </div>
                  </div>
                  <button className="px-4 py-2 text-sm border border-green-300 text-green-700 rounded-md hover:bg-green-100">
                    View Certificate
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900">Upload New Certificate</h3>
                    <p className="text-sm text-gray-600">Replace the current certificate before expiration</p>
                  </div>
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-black">
                    Upload Certificate
                  </button>
                </div>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <Activity size={20} className="text-gray-700 mr-3" />
                <h2 className="text-lg font-semibold text-gray-900">Notification Preferences</h2>
              </div>
              
              <div className="space-y-4">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  <span className="text-sm text-gray-700">Email notifications for batch completion</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  <span className="text-sm text-gray-700">Email notifications for validation errors</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-sm text-gray-700">SMS notifications for critical failures</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  <span className="text-sm text-gray-700">Dashboard alerts for processing delays</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Batch Detail Modal */}
      {selectedBatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">{selectedBatch.fileName}</h2>
                  <p className="text-sm text-gray-500">Batch ID: {selectedBatch.id}</p>
                </div>
                <button
                  onClick={() => setSelectedBatch(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Batch Summary */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Batch Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <div className="flex items-center">
                        {getStatusIcon(selectedBatch.status)}
                        <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(selectedBatch.status)}`}>
                          {selectedBatch.status.charAt(0).toUpperCase() + selectedBatch.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Submitted:</span>
                      <span className="font-medium">{new Date(selectedBatch.timestamp).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Records:</span>
                      <span className="font-medium">{selectedBatch.recordCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Successful:</span>
                      <span className="font-medium text-green-600">{selectedBatch.successCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Errors:</span>
                      <span className="font-medium text-red-600">{selectedBatch.errorCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Warnings:</span>
                      <span className="font-medium text-yellow-600">{selectedBatch.warningCount}</span>
                    </div>
                    {selectedBatch.processTime && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Process Time:</span>
                        <span className="font-medium">{selectedBatch.processTime}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Actions</h3>
                  <div className="space-y-3">
                    {selectedBatch.downloadUrl && (
                      <button className="w-full flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-black">
                        <Download size={16} className="mr-2" />
                        Download Results
                      </button>
                    )}
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                      <FileText size={16} className="mr-2" />
                      View Transaction Log
                    </button>
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                      <RefreshCw size={16} className="mr-2" />
                      Reprocess Batch
                    </button>
                  </div>
                </div>
              </div>

              {/* Error Details */}
              {selectedBatch.errors && selectedBatch.errors.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-medium text-gray-900 mb-4">Error Details</h3>
                  <div className="space-y-3">
                    {selectedBatch.errors.map((error, index) => (
                      <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <AlertCircle size={16} className="text-red-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-red-900">{error.record}</div>
                            <div className="text-sm text-red-700">{error.issue}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEVISBatchUpload;