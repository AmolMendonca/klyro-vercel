import React, { useState, useEffect } from 'react';
import {
  User,
  Globe,
  GraduationCap,
  Calendar,
  FileText,
  DollarSign,
  MapPin,
  Phone,
  Mail,
  Building,
  Check,
  Loader2,
  CheckCircle2,
  ArrowLeft,
  Download,
  Send,
  Shield,
  Eye,
  X,
  AlertCircle
} from 'lucide-react';

const I20Generator = () => {
  const [currentStep, setCurrentStep] = useState('form');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedFinancialDoc, setSelectedFinancialDoc] = useState(null);
  const [generatedSevisId, setGeneratedSevisId] = useState('');
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: 'Arjun',
    lastName: 'Patel',
    middleName: 'Kumar',
    dateOfBirth: '2001-08-22',
    countryOfBirth: 'India',
    countryOfCitizenship: 'India',
    gender: 'male',
    passportNumber: 'Z3456789',
    
    // Contact Information
    email: 'arjun.patel@umich.edu',
    phone: '+1-734-555-0198',
    currentAddress: {
      street: '789 South University Ave, Apt 12C',
      city: 'Ann Arbor',
      state: 'MI',
      zipCode: '48104',
      country: 'United States'
    },
    permanentAddress: {
      street: 'B-204, Satellite Gardens, Ahmedabad',
      city: 'Ahmedabad',
      state: 'Gujarat',
      zipCode: '380015',
      country: 'India'
    },
    
    // Academic Information
    sevisId: 'N0087654321',
    studentId: 'AP2025002',
    programLevel: 'master',
    majorField: 'Computer Science and Engineering',
    programStartDate: '2025-09-02',
    programEndDate: '2027-04-30',
    englishProficient: true,
    
    // Financial Information
    tuitionFees: '52000',
    livingExpenses: '16000',
    otherExpenses: '4000',
    totalCost: '72000',
    financialSupport: 'personal',
    sponsorName: 'Vikram Patel',
    sponsorRelationship: 'Father',
    
    // School Information
    schoolName: 'University of Michigan',
    schoolAddress: 'Ann Arbor, MI 48109',
    dsoName: 'Dr. Susan Chen',
    dsoTitle: 'Principal Designated School Official',
    dsoPhone: '+1-734-764-7460',
    dsoEmail: 'dso@umich.edu'
  });

  // Financial documents data
  const financialDocuments = [
    {
      id: 'bank-statement',
      name: 'Bank Statement - State Bank of India',
      type: 'Bank Statement',
      date: '2025-06-18',
      extractedData: {
        accountHolder: 'Vikram Patel',
        accountNumber: '****8901',
        balance: '₹62,00,000 ($75,000 USD)',
        currency: 'INR/USD',
        bankName: 'State Bank of India'
      },
      relevantSections: [
        {
          field: 'Available Funds',
          value: '₹62,00,000 ($75,000)',
          confidence: 98,
          location: 'Page 1, Account Summary Section'
        }
      ]
    },
    {
      id: 'sponsorship-letter',
      name: 'Sponsorship Affidavit - Vikram Patel',
      type: 'Affidavit of Support',
      date: '2025-06-12',
      extractedData: {
        sponsorName: 'Vikram Patel',
        relationship: 'Father',
        commitment: '$72,000 for 2 years',
        income: '₹1,45,00,000 ($175,000) annually'
      },
      relevantSections: [
        {
          field: 'Sponsor Name',
          value: 'Vikram Patel',
          confidence: 99,
          location: 'Page 1, Header Section'
        },
        {
          field: 'Relationship',
          value: 'Father',
          confidence: 99,
          location: 'Page 1, Paragraph 2'
        },
        {
          field: 'Financial Commitment',
          value: '$72,000',
          confidence: 97,
          location: 'Page 2, Commitment Section'
        }
      ]
    },
    {
      id: 'tuition-estimate',
      name: 'University of Michigan Tuition Estimate',
      type: 'Official Cost Estimate',
      date: '2025-05-25',
      extractedData: {
        academicYear: '2025-2026',
        tuition: '$52,000',
        fees: '$2,800',
        livingExpenses: '$16,000',
        otherCosts: '$4,000'
      },
      relevantSections: [
        {
          field: 'Tuition & Fees',
          value: '$52,000',
          confidence: 100,
          location: 'Page 1, Cost Breakdown Table'
        },
        {
          field: 'Living Expenses',
          value: '$16,000',
          confidence: 95,
          location: 'Page 1, Living Costs Section'
        },
        {
          field: 'Other Expenses',
          value: '$4,000',
          confidence: 90,
          location: 'Page 1, Additional Costs'
        }
      ]
    }
  ];

  // Generate SEVIS ID once when component mounts
  useEffect(() => {
    setGeneratedSevisId(`N00${Math.floor(Math.random() * 10000000).toString().padStart(7, '0')}`);
  }, []);

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const calculateTotalCost = () => {
    const tuition = parseFloat(formData.tuitionFees) || 0;
    const living = parseFloat(formData.livingExpenses) || 0;
    const other = parseFloat(formData.otherExpenses) || 0;
    const total = tuition + living + other;
    handleInputChange('totalCost', total.toString());
  };

  const handleGenerate = () => {
    setCurrentStep('sevis');
  };

  const handleSevisConfirm = () => {
    setIsGenerating(true);
    const timer = setTimeout(() => {
      setIsGenerating(false);
      setCurrentStep('success');
    }, 3000);

    return () => clearTimeout(timer);
  };

  const handleBack = () => {
    if (currentStep === 'sevis') {
      setCurrentStep('form');
    } else if (currentStep === 'success') {
      setCurrentStep('form');
    }
  };

  const FormField = ({ label, icon: Icon, children, required = false }) => (
    <div className="space-y-2">
      <label className="flex items-center text-sm font-medium text-gray-900">
        {Icon && <Icon size={16} className="mr-2 text-gray-500" />}
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  );

  const Input = ({ value, onChange, placeholder, type = "text", required = false }) => (
    <input
      type={type}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200 text-sm"
    />
  );

  const Select = ({ value, onChange, options, placeholder, required = false }) => (
    <select
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200 text-sm"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  if (currentStep === 'sevis') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center border border-gray-200">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <Send size={24} className="text-gray-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Submit to SEVIS RTI</h2>
          <p className="text-gray-600 mb-8 text-sm leading-relaxed">
            This will generate the I-20 form and submit the student record to the SEVIS Real Time Interface system for processing.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={handleSevisConfirm}
              disabled={isGenerating}
              className="w-full flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-black focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Loader2 size={18} className="mr-2 animate-spin" />
                  Submitting to SEVIS...
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Confirm & Submit
                </>
              )}
            </button>
            
            <button
              onClick={handleBack}
              disabled={isGenerating}
              className="w-full px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 transition-all duration-200 disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'success') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-8 text-center border border-gray-200">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 size={24} className="text-green-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">I-20 Generated Successfully!</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            The I-20 form has been generated and submitted to SEVIS. The student record has been created successfully.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left border border-gray-200">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Student Name:</span>
                <span className="font-medium">{formData.firstName} {formData.lastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">SEVIS ID:</span>
                <span className="font-mono font-medium">{generatedSevisId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Program:</span>
                <span className="font-medium">{formData.majorField}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">School:</span>
                <span className="font-medium">University of Michigan</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-black focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200">
              <Download size={18} className="mr-2" />
              Download I-20 PDF
            </button>
            
            <button
              onClick={handleBack}
              className="w-full px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 transition-all duration-200"
            >
              Generate Another I-20
            </button>
          </div>
        </div>
      </div>
    );
  }

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
            
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="px-6 pt-12 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            I-20 Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Generate Form I-20 for international students with automated SEVIS integration
          </p>
        </div>
      </section>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="space-y-8">
          {/* Personal Information */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-6">
              <User size={20} className="text-gray-700 mr-3" />
              <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FormField label="First Name" required>
                <Input
                  value={formData.firstName}
                  onChange={(value) => handleInputChange('firstName', value)}
                  placeholder="Enter first name"
                  required
                />
              </FormField>
              
              <FormField label="Last Name" required>
                <Input
                  value={formData.lastName}
                  onChange={(value) => handleInputChange('lastName', value)}
                  placeholder="Enter last name"
                  required
                />
              </FormField>
              
              <FormField label="Middle Name">
                <Input
                  value={formData.middleName}
                  onChange={(value) => handleInputChange('middleName', value)}
                  placeholder="Enter middle name"
                />
              </FormField>
              
              <FormField label="Date of Birth" required>
                <Input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(value) => handleInputChange('dateOfBirth', value)}
                  required
                />
              </FormField>
              
              <FormField label="Gender" required>
                <Select
                  value={formData.gender}
                  onChange={(value) => handleInputChange('gender', value)}
                  placeholder="Select gender"
                  options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                    { value: 'other', label: 'Other' }
                  ]}
                  required
                />
              </FormField>
              
              <FormField label="Passport Number" required>
                <Input
                  value={formData.passportNumber}
                  onChange={(value) => handleInputChange('passportNumber', value)}
                  placeholder="Enter passport number"
                  required
                />
              </FormField>
              
              <FormField label="Country of Birth" required>
                <Input
                  value={formData.countryOfBirth}
                  onChange={(value) => handleInputChange('countryOfBirth', value)}
                  placeholder="Enter country of birth"
                  required
                />
              </FormField>
              
              <FormField label="Country of Citizenship" required>
                <Input
                  value={formData.countryOfCitizenship}
                  onChange={(value) => handleInputChange('countryOfCitizenship', value)}
                  placeholder="Enter country of citizenship"
                  required
                />
              </FormField>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-6">
              <Mail size={20} className="text-gray-700 mr-3" />
              <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <FormField label="Email Address" required>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(value) => handleInputChange('email', value)}
                  placeholder="Enter email address"
                  required
                />
              </FormField>
              
              <FormField label="Phone Number" required>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(value) => handleInputChange('phone', value)}
                  placeholder="Enter phone number"
                  required
                />
              </FormField>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Current Address */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
                  <MapPin size={16} className="mr-2 text-gray-500" />
                  Current Address
                </h3>
                <div className="space-y-4">
                  <Input
                    value={formData.currentAddress.street}
                    onChange={(value) => handleInputChange('currentAddress.street', value)}
                    placeholder="Street address"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      value={formData.currentAddress.city}
                      onChange={(value) => handleInputChange('currentAddress.city', value)}
                      placeholder="City"
                    />
                    <Input
                      value={formData.currentAddress.state}
                      onChange={(value) => handleInputChange('currentAddress.state', value)}
                      placeholder="State/Province"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      value={formData.currentAddress.zipCode}
                      onChange={(value) => handleInputChange('currentAddress.zipCode', value)}
                      placeholder="ZIP/Postal code"
                    />
                    <Input
                      value={formData.currentAddress.country}
                      onChange={(value) => handleInputChange('currentAddress.country', value)}
                      placeholder="Country"
                    />
                  </div>
                </div>
              </div>
              
              {/* Permanent Address */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
                  <MapPin size={16} className="mr-2 text-gray-500" />
                  Permanent Address
                </h3>
                <div className="space-y-4">
                  <Input
                    value={formData.permanentAddress.street}
                    onChange={(value) => handleInputChange('permanentAddress.street', value)}
                    placeholder="Street address"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      value={formData.permanentAddress.city}
                      onChange={(value) => handleInputChange('permanentAddress.city', value)}
                      placeholder="City"
                    />
                    <Input
                      value={formData.permanentAddress.state}
                      onChange={(value) => handleInputChange('permanentAddress.state', value)}
                      placeholder="State/Province"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      value={formData.permanentAddress.zipCode}
                      onChange={(value) => handleInputChange('permanentAddress.zipCode', value)}
                      placeholder="ZIP/Postal code"
                    />
                    <Input
                      value={formData.permanentAddress.country}
                      onChange={(value) => handleInputChange('permanentAddress.country', value)}
                      placeholder="Country"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-6">
              <GraduationCap size={20} className="text-gray-700 mr-3" />
              <h2 className="text-lg font-semibold text-gray-900">Academic Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FormField label="Student ID" required>
                <Input
                  value={formData.studentId}
                  onChange={(value) => handleInputChange('studentId', value)}
                  placeholder="Enter student ID"
                  required
                />
              </FormField>
              
              <FormField label="SEVIS ID">
                <Input
                  value={formData.sevisId}
                  onChange={(value) => handleInputChange('sevisId', value)}
                  placeholder="Enter SEVIS ID (if applicable)"
                />
              </FormField>
              
              <FormField label="Program Level" required>
                <Select
                  value={formData.programLevel}
                  onChange={(value) => handleInputChange('programLevel', value)}
                  placeholder="Select program level"
                  options={[
                    { value: 'bachelor', label: 'Bachelor\'s Degree' },
                    { value: 'master', label: 'Master\'s Degree' },
                    { value: 'doctoral', label: 'Doctoral Degree' },
                    { value: 'associate', label: 'Associate Degree' },
                    { value: 'certificate', label: 'Certificate Program' }
                  ]}
                  required
                />
              </FormField>
              
              <FormField label="Major Field of Study" required>
                <Input
                  value={formData.majorField}
                  onChange={(value) => handleInputChange('majorField', value)}
                  placeholder="Enter major field"
                  required
                />
              </FormField>
              
              <FormField label="Program Start Date" required>
                <Input
                  type="date"
                  value={formData.programStartDate}
                  onChange={(value) => handleInputChange('programStartDate', value)}
                  required
                />
              </FormField>
              
              <FormField label="Program End Date" required>
                <Input
                  type="date"
                  value={formData.programEndDate}
                  onChange={(value) => handleInputChange('programEndDate', value)}
                  required
                />
              </FormField>
            </div>
            
            <div className="mt-6">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.englishProficient}
                  onChange={(e) => handleInputChange('englishProficient', e.target.checked)}
                  className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                />
                <span className="text-sm text-gray-700">Student is proficient in English</span>
              </label>
            </div>
          </div>

          {/* Financial Information */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <DollarSign size={20} className="text-gray-700 mr-3" />
                <h2 className="text-lg font-semibold text-gray-900">Financial Information</h2>
              </div>
              <span className="text-sm text-green-600 font-medium">✓ AI Extracted</span>
            </div>

            {/* Document Sources Preview */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
                <FileText size={16} className="mr-2 text-gray-500" />
                Source Documents ({financialDocuments.length})
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {financialDocuments.map((doc) => (
                  <div key={doc.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm leading-tight">{doc.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">{doc.type} • {doc.date}</p>
                      </div>
                      <button
                        onClick={() => setSelectedFinancialDoc(doc)}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label={`View ${doc.name}`}
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                    <div className="space-y-1">
                      {doc.relevantSections.slice(0, 2).map((section, idx) => (
                        <div key={idx} className="text-xs">
                          <span className="text-gray-600">{section.field}:</span>
                          <span className="font-medium text-gray-900 ml-1">{section.value}</span>
                          <span className="text-green-600 ml-1">({section.confidence}%)</span>
                        </div>
                      ))}
                      {doc.relevantSections.length > 2 && (
                        <p className="text-xs text-gray-500">+{doc.relevantSections.length - 2} more fields</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-10 mb-6">
              <FormField label="Tuition & Fees (USD)" required>
                <div className="relative">
                  <Input
                    type="number"
                    value={formData.tuitionFees}
                    onChange={(value) => {
                      handleInputChange('tuitionFees', value);
                      calculateTotalCost();
                    }}
                    placeholder="Enter tuition and fees"
                    required
                  />
                  <div className="absolute -bottom-6 left-0 text-xs text-gray-500">
                    <span className="bg-green-50 text-green-700 px-2 py-1 rounded">
                      ✓ From: UMich Tuition Estimate
                    </span>
                  </div>
                </div>
              </FormField>
              
              <FormField label="Other Expenses (USD)">
                <div className="relative">
                  <Input
                    type="number"
                    value={formData.otherExpenses}
                    onChange={(value) => {
                      handleInputChange('otherExpenses', value);
                      calculateTotalCost();
                    }}
                    placeholder="Enter other expenses"
                  />
                  <div className="absolute -bottom-6 left-0 text-xs text-gray-500">
                    <span className="bg-green-50 text-green-700 px-2 py-1 rounded">
                      ✓ From: UMich Tuition Estimate
                    </span>
                  </div>
                </div>
              </FormField>
              
              <FormField label="Total Cost (USD)">
                <div className="px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-sm font-medium text-gray-900">
                  ${formData.totalCost ? parseFloat(formData.totalCost).toLocaleString() : '0'}
                </div>
              </FormField>
              
              <FormField label="Source of Financial Support" required>
                <div className="relative">
                  <Select
                    value={formData.financialSupport}
                    onChange={(value) => handleInputChange('financialSupport', value)}
                    placeholder="Select funding source"
                    options={[
                      { value: 'personal', label: 'Personal/Family Funds' },
                      { value: 'scholarship', label: 'Scholarship' },
                      { value: 'assistantship', label: 'Assistantship' },
                      { value: 'government', label: 'Government Sponsorship' },
                      { value: 'employer', label: 'Employer Sponsorship' },
                      { value: 'other', label: 'Other' }
                    ]}
                    required
                  />
                  <div className="absolute -bottom-6 left-0 text-xs text-gray-500">
                    <span className="bg-green-50 text-green-700 px-2 py-1 rounded">
                      ✓ From: Sponsorship Affidavit
                    </span>
                  </div>
                </div>
              </FormField>
              
              <FormField label="Sponsor Name">
                <div className="relative">
                  <Input
                    value={formData.sponsorName}
                    onChange={(value) => handleInputChange('sponsorName', value)}
                    placeholder="Enter sponsor name"
                  />
                  <div className="absolute -bottom-6 left-0 text-xs text-gray-500">
                    <span className="bg-green-50 text-green-700 px-2 py-1 rounded">
                      ✓ From: Sponsorship Affidavit
                    </span>
                  </div>
                </div>
              </FormField>
            </div>
          </div>

          {/* School Information */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-6">
              <Building size={20} className="text-gray-700 mr-3" />
              <h2 className="text-lg font-semibold text-gray-900">Designated School Official (DSO)</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="DSO Name" required>
                <Input
                  value={formData.dsoName}
                  onChange={(value) => handleInputChange('dsoName', value)}
                  placeholder="Enter DSO name"
                  required
                />
              </FormField>
              
              <FormField label="DSO Title" required>
                <Input
                  value={formData.dsoTitle}
                  onChange={(value) => handleInputChange('dsoTitle', value)}
                  placeholder="Enter DSO title"
                  required
                />
              </FormField>
              
              <FormField label="DSO Phone" required>
                <Input
                  type="tel"
                  value={formData.dsoPhone}
                  onChange={(value) => handleInputChange('dsoPhone', value)}
                  placeholder="Enter DSO phone"
                  required
                />
              </FormField>
              
              <FormField label="DSO Email" required>
                <Input
                  type="email"
                  value={formData.dsoEmail}
                  onChange={(value) => handleInputChange('dsoEmail', value)}
                  placeholder="Enter DSO email"
                  required
                />
              </FormField>
            </div>
          </div>

          {/* Financial Document Viewer Modal */}
          {selectedFinancialDoc && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">{selectedFinancialDoc.name}</h2>
                      <p className="text-sm text-gray-500">{selectedFinancialDoc.type} • {selectedFinancialDoc.date}</p>
                    </div>
                    <button
                      onClick={() => setSelectedFinancialDoc(null)}
                      className="text-gray-400 hover:text-gray-600"
                      aria-label="Close modal"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Document Preview */}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-4">Document Preview</h3>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 min-h-[400px]">
                        <div className="space-y-4">
                          {selectedFinancialDoc.id === 'bank-statement' && (
                            <div className="space-y-4">
                              <div className="border-b pb-4">
                                <h4 className="font-semibold text-gray-900 mb-2">State Bank of India</h4>
                                <p className="text-sm text-gray-600">International Banking Statement</p>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div><span className="text-gray-600">Account Holder:</span> <span className="font-medium">{selectedFinancialDoc.extractedData.accountHolder}</span></div>
                                <div><span className="text-gray-600">Account Number:</span> <span className="font-mono">{selectedFinancialDoc.extractedData.accountNumber}</span></div>
                                <div><span className="text-gray-600">Currency:</span> <span className="font-medium">{selectedFinancialDoc.extractedData.currency}</span></div>
                                <div><span className="text-gray-600">Current Balance:</span> <span className="font-bold text-green-600 text-lg">{selectedFinancialDoc.extractedData.balance}</span></div>
                              </div>
                              <div className="mt-6 p-4 bg-blue-50 rounded border">
                                <p className="text-sm text-blue-800">This account shows sufficient funds to cover the student's educational expenses for the program duration.</p>
                              </div>
                            </div>
                          )}
                          
                          {selectedFinancialDoc.id === 'sponsorship-letter' && (
                            <div className="space-y-4">
                              <div className="border-b pb-4">
                                <h4 className="font-semibold text-gray-900 mb-2">Affidavit of Support</h4>
                                <p className="text-sm text-gray-600">Financial Sponsorship Declaration</p>
                              </div>
                              <div className="text-sm space-y-3">
                                <p>I, <span className="font-medium">{selectedFinancialDoc.extractedData.sponsorName}</span>, hereby declare that I am the <span className="font-medium">{selectedFinancialDoc.extractedData.relationship}</span> of Arjun Kumar Patel.</p>
                                <p>I commit to providing financial support in the amount of <span className="font-bold text-green-600">{selectedFinancialDoc.extractedData.commitment}</span> to cover his educational and living expenses during his studies at the University of Michigan.</p>
                                <p>My annual income is <span className="font-medium">{selectedFinancialDoc.extractedData.income}</span>, which provides sufficient capacity to support this commitment.</p>
                              </div>
                            </div>
                          )}
                          
                          {selectedFinancialDoc.id === 'tuition-estimate' && (
                            <div className="space-y-4">
                              <div className="border-b pb-4">
                                <h4 className="font-semibold text-gray-900 mb-2">University of Michigan</h4>
                                <p className="text-sm text-gray-600">Official Cost of Attendance Estimate</p>
                              </div>
                              <div className="space-y-3">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Academic Year:</span>
                                  <span className="font-medium">{selectedFinancialDoc.extractedData.academicYear}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Tuition & Fees:</span>
                                  <span className="font-bold">{selectedFinancialDoc.extractedData.tuition}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Living Expenses:</span>
                                  <span className="font-bold">{selectedFinancialDoc.extractedData.livingExpenses}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Other Costs:</span>
                                  <span className="font-bold">{selectedFinancialDoc.extractedData.otherCosts}</span>
                                </div>
                                <div className="border-t pt-3 flex justify-between">
                                  <span className="font-medium text-gray-900">Total Estimated Cost:</span>
                                  <span className="font-bold text-lg">$74,800</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* AI Extraction Results */}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-4">AI Extraction Results</h3>
                      <div className="space-y-4">
                        {selectedFinancialDoc.relevantSections.map((section, idx) => (
                          <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-medium text-gray-900 text-sm">{section.field}</h4>
                              <div className="flex items-center space-x-2">
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  section.confidence >= 95 ? 'bg-green-100 text-green-700' :
                                  section.confidence >= 85 ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-red-100 text-red-700'
                                }`}>
                                  {section.confidence}% confident
                                </span>
                              </div>
                            </div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">{section.value}</div>
                            <div className="text-xs text-gray-500 flex items-center">
                              <MapPin size={12} className="mr-1" />
                              Found in: {section.location}
                            </div>
                          </div>
                        ))}
                        
                        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 size={16} className="text-green-600 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-green-800 text-sm">Validation Complete</h4>
                              <p className="text-sm text-green-700">All required financial information has been successfully extracted and validated from the submitted documents.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Generate Button */}
          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={handleGenerate}
              className="flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-md hover:bg-black focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200 shadow-sm"
            >
              <FileText size={20} className="mr-2" />
              Generate I-20
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default I20Generator;
