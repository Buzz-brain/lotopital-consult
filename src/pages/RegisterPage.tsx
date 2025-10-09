import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Search,
  FileText,
  User,
  Upload,
  CreditCard,
  Sparkles,
} from 'lucide-react';
import { services } from '../mocks/services';
import { mockAPI } from '../mocks/api';
import { useToast } from '../contexts/ToastContext';
import { RegistrationData } from '../types';

const STEPS = [
  { id: 1, title: 'Select Service', icon: FileText },
  { id: 2, title: 'Business Name', icon: Search },
  { id: 3, title: 'Business Details', icon: FileText },
  { id: 4, title: 'Director Details', icon: User },
  { id: 5, title: 'Upload Documents', icon: Upload },
  { id: 6, title: 'Payment', icon: CreditCard },
];

const STORAGE_KEY = 'registration_progress';

export const RegisterPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [nameSearchLoading, setNameSearchLoading] = useState(false);
  const [nameAvailable, setNameAvailable] = useState<boolean | null>(null);

  const [formData, setFormData] = useState<Partial<RegistrationData>>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      serviceType: location.state?.serviceId || '',
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = async () => {
    if (currentStep === 2 && !nameAvailable) {
      showToast('error', 'Please search for an available business name');
      return;
    }

    if (currentStep === 6) {
      await handleSubmit();
      return;
    }

    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleNameSearch = async () => {
    if (!formData.businessName?.trim()) {
      showToast('error', 'Please enter a business name');
      return;
    }

    setNameSearchLoading(true);
    setNameAvailable(null);

    try {
      const result = await mockAPI.searchName(formData.businessName);
      setNameAvailable(result.available);

      if (result.available) {
        showToast('success', 'Business name is available!');
      } else {
        showToast('error', 'Business name is already taken');
      }
    } catch (error) {
      showToast('error', 'Error searching name');
    } finally {
      setNameSearchLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const result = await mockAPI.submitRegistration(formData as RegistrationData);
      localStorage.removeItem(STORAGE_KEY);
      showToast('success', 'Application submitted successfully!');

      setTimeout(() => {
        navigate('/success', {
          state: { applicationId: result.applicationId },
        });
      }, 1000);
    } catch (error) {
      showToast('error', 'Error submitting application');
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ServiceStep formData={formData} updateFormData={updateFormData} />;
      case 2:
        return (
          <NameSearchStep
            formData={formData}
            updateFormData={updateFormData}
            onSearch={handleNameSearch}
            loading={nameSearchLoading}
            available={nameAvailable}
          />
        );
      case 3:
        return <BusinessDetailsStep formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <DirectorDetailsStep formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <DocumentsStep formData={formData} updateFormData={updateFormData} />;
      case 6:
        return <PaymentStep formData={formData} />;
      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!formData.serviceType;
      case 2:
        return !!formData.businessName && nameAvailable;
      case 3:
        return !!(formData.address && formData.email && formData.phone && formData.businessType);
      case 4:
        return !!(formData.directorName && formData.directorNIN && formData.directorPhone);
      case 5:
        return true;
      case 6:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-[#0606c6] overflow-hidden rounded-3xl mb-12">
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-96 h-24 bg-blue-200/10 blur-3xl rounded-full z-0" aria-hidden="true" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg relative">
              Business Registration
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Complete the steps below to register your business with ease and confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto">
        {/* Stepper Container with glassmorphism */}
        <div className="mb-12 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-8">
          <div className="flex items-center justify-between">
            {STEPS.map((step, idx) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      currentStep > step.id
                        ? 'bg-green-500'
                        : currentStep === step.id
                        ? 'bg-gradient-to-br from-blue-600 to-orange-500'
                        : 'bg-gray-300'
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : (
                      <step.icon className="w-6 h-6 text-white" />
                    )}
                  </motion.div>
                  <span className="text-xs text-center text-gray-600 hidden md:block">
                    {step.title}
                  </span>
                </div>
                {idx < STEPS.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 ${
                      currentStep > step.id ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-10 flex flex-col"
        >
          {/* Step Content */}
          {renderStep()}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-blue-100">
            {currentStep > 1 && (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBack}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold flex items-center gap-2 shadow-sm"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </motion.button>
            )}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              disabled={!canProceed() || loading}
              className="flex-1 px-8 py-3 btn btn-primary font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : currentStep === 6 ? (
                <>
                  Submit Application
                  <CheckCircle className="w-5 h-5" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ServiceStep = ({ formData, updateFormData }: any) => (
  <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100 p-8">
    <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Select Service Type</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {services.map((service) => (
        <motion.button
          key={service.id}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => updateFormData('serviceType', service.id)}
          className={`p-6 rounded-xl border-2 transition-all text-left shadow-sm flex flex-col gap-2 ${
            formData.serviceType === service.id
              ? 'border-blue-600 bg-blue-50'
              : 'border-blue-100 hover:border-blue-300 bg-white/90'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-gray-900">{service.name}</span>
            {formData.serviceType === service.id && (
              <CheckCircle className="w-5 h-5 text-blue-600" />
            )}
          </div>
          <p className="text-sm text-gray-600 mb-2">{service.description}</p>
          <p className="text-lg font-bold text-[#0606c6]">
            ₦{service.price.toLocaleString()}
          </p>
        </motion.button>
      ))}
    </div>
  </div>
);

const NameSearchStep = ({ formData, updateFormData, onSearch, loading, available }: any) => (
  <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100 p-8">
    <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Business Name Search</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
        <div className="flex gap-3">
          <input
            type="text"
            value={formData.businessName || ''}
            onChange={(e) => {
              updateFormData('businessName', e.target.value);
              if (available !== null) {
                onSearch();
              }
            }}
            placeholder="Enter your desired business name"
            className="flex-1 px-4 py-3 border-2 border-blue-100 rounded-lg focus:border-blue-600 focus:outline-none bg-white/90"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSearch}
            disabled={loading}
            className="px-8 py-3 btn btn-primary font-semibold shadow-md disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Search className="w-5 h-5" />
            )}
            Search
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {available !== null && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`p-4 rounded-lg ${
              available
                ? 'bg-green-50 border-2 border-green-500'
                : 'bg-red-50 border-2 border-red-500'
            }`}
          >
            <div className="flex items-center gap-2">
              {available ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-900">Business name is available!</span>
                </>
              ) : (
                <>
                  <span className="text-red-900">Business name is already taken. Please try another name.</span>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
);

const BusinessDetailsStep = ({ formData, updateFormData }: any) => (
  <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100 p-8">
    <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Business Details</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
        <input
          type="text"
          value={formData.address || ''}
          onChange={(e) => updateFormData('address', e.target.value)}
          placeholder="Enter your business address"
          className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg focus:border-blue-600 focus:outline-none bg-white/90"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            value={formData.email || ''}
            onChange={(e) => updateFormData('email', e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg focus:border-blue-600 focus:outline-none bg-white/90"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            value={formData.phone || ''}
            onChange={(e) => updateFormData('phone', e.target.value)}
            placeholder="+234 800 000 0000"
            className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg focus:border-blue-600 focus:outline-none bg-white/90"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
        <select
          value={formData.businessType || ''}
          onChange={(e) => updateFormData('businessType', e.target.value)}
          className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg focus:border-blue-600 focus:outline-none bg-white/90"
        >
          <option value="">Select business type</option>
          <option value="retail">Retail</option>
          <option value="service">Service</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="technology">Technology</option>
          <option value="consulting">Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  </div>
);

const DirectorDetailsStep = ({ formData, updateFormData }: any) => (
  <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100 p-8">
    <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Director/Proprietor Details</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
        <input
          type="text"
          value={formData.directorName || ''}
          onChange={(e) => updateFormData('directorName', e.target.value)}
          placeholder="Enter full name"
          className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg focus:border-blue-600 focus:outline-none bg-white/90"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">NIN (National Identity Number)</label>
          <input
            type="text"
            value={formData.directorNIN || ''}
            onChange={(e) => updateFormData('directorNIN', e.target.value)}
            placeholder="00000000000"
            className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg focus:border-blue-600 focus:outline-none bg-white/90"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            value={formData.directorPhone || ''}
            onChange={(e) => updateFormData('directorPhone', e.target.value)}
            placeholder="+234 800 000 0000"
            className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg focus:border-blue-600 focus:outline-none bg-white/90"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">ID Type</label>
        <select
          value={formData.idType || ''}
          onChange={(e) => updateFormData('idType', e.target.value)}
          className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg focus:border-blue-600 focus:outline-none bg-white/90"
        >
          <option value="">Select ID type</option>
          <option value="nin">National Identity Card (NIN)</option>
          <option value="passport">International Passport</option>
          <option value="drivers">Driver's License</option>
          <option value="voters">Voter's Card</option>
        </select>
      </div>
    </div>
  </div>
);

const DocumentsStep = ({ formData, updateFormData }: any) => (
  <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100 p-8">
    <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Upload Documents</h2>
    <div className="space-y-4">
      <div className="border-2 border-dashed border-blue-100 rounded-xl p-12 text-center hover:border-blue-600 transition-colors bg-white/90">
        <Upload className="w-12 h-12 text-blue-300 mx-auto mb-4" />
        <p className="text-gray-600 mb-2">Drag and drop your documents here, or click to browse</p>
        <p className="text-sm text-gray-500">Accepted formats: PDF, JPG, PNG (Max 5MB)</p>
        <input
          type="file"
          multiple
          onChange={(e) => updateFormData('documents', Array.from(e.target.files || []))}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="inline-block mt-4 px-6 py-2 btn btn-primary font-semibold shadow-md cursor-pointer"
        >
          Browse Files
        </label>
      </div>

      <div className="relative bg-white/80 backdrop-blur-md rounded-xl shadow border border-blue-100 p-4">
        <h4 className="font-semibold text-[#0606c6] mb-2">Required Documents:</h4>
        <ul className="space-y-1 text-sm text-blue-900">
          <li>• Valid means of identification (NIN, Passport, etc.)</li>
          <li>• Passport photograph</li>
          <li>• Utility bill (for address verification)</li>
          <li>• Additional documents as required for your service type</li>
        </ul>
      </div>
    </div>
  </div>
);

const PaymentStep = ({ formData }: any) => {
  const selectedService = services.find((s) => s.id === formData.serviceType);

  return (
    <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100 p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Payment</h2>

      <div className="relative bg-white/80 backdrop-blur-md rounded-xl shadow border border-blue-100 p-6 mb-6">
        <h3 className="font-semibold text-[#0606c6] mb-4">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Service:</span>
            <span className="font-semibold text-gray-900">{selectedService?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Business Name:</span>
            <span className="font-semibold text-gray-900">{formData.businessName}</span>
          </div>
          <div className="border-t border-blue-100 pt-2 mt-2 flex justify-between">
            <span className="text-lg font-bold text-gray-900">Total:</span>
            <span className="text-lg font-bold text-[#0606c6]">
              ₦{selectedService?.price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="relative bg-white/80 backdrop-blur-md rounded-xl shadow border border-blue-100 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-[#0606c6]" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Mock Payment</h4>
            <p className="text-sm text-gray-600">This is a simulated payment for demonstration</p>
          </div>
        </div>
        <p className="text-sm text-gray-500">Click "Submit Application" to complete this mock registration process.</p>
      </div>
    </div>
  );
};
