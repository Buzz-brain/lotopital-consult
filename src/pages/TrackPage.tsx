import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  CheckCircle,
  Clock,
  FileText,
  Download,
  Loader2,
} from 'lucide-react';
import { mockAPI } from '../mocks/api';
import { TrackingResponse } from '../types';
import { useToast } from '../contexts/ToastContext';

const statusIcons: Record<string, any> = {
  submitted: FileText,
  processing: Clock,
  approved: CheckCircle,
};

const statusColors: Record<string, string> = {
  submitted: 'from-blue-500 to-cyan-500',
  processing: 'from-orange-500 to-yellow-500',
  approved: 'from-green-500 to-emerald-500',
};

export const TrackPage = () => {
  const [trackingId, setTrackingId] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TrackingResponse | null>(null);
  const { showToast } = useToast();

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!trackingId.trim()) {
      showToast('error', 'Please enter a tracking ID');
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const data = await mockAPI.trackApplication(trackingId);
      setResult(data);
      showToast('success', 'Application found!');
    } catch (error) {
      showToast('error', 'Application not found. Please check your tracking ID.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-28 px-4 bg-[#0606c6] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />
        {/* Halo behind headline for subtle emphasis */}
        <div className="absolute left-1/2 top-24 -translate-x-1/2 w-96 h-24 bg-blue-200/10 blur-3xl rounded-full z-0" aria-hidden="true" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg relative">
              Track Your Application
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Enter your tracking ID below to view your application status.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="track-form" className="py-12 px-4 -mt-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-gradient-to-br from-white/80 via-blue-50/60 to-cyan-100/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200/60 p-10 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Decorative glassmorphism layers */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl z-0" aria-hidden="true" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-200/20 rounded-full blur-2xl z-0" aria-hidden="true" />
            <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full flex items-center justify-center mb-6 shadow-lg border border-blue-300/40">
              <Search className="w-10 h-10 text-[#0606c6]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Check Application Status</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Your tracking ID was sent to your email after submission.</p>
            <form onSubmit={handleTrack} className="w-full mt-2" aria-label="Track application form">
              <div className="flex gap-3 items-end">
                <div className="relative flex-1 group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400 pointer-events-none transition-colors group-focus-within:text-blue-600" />
                  <label
                    htmlFor="track-input"
                    className={`absolute left-12 top-2 text-sm font-medium transition-all duration-200 pointer-events-none
                      ${trackingId ? 'text-blue-600 scale-90 -translate-y-5' : 'text-gray-400 scale-100 translate-y-0'}`}
                    aria-label="Tracking ID label"
                  >
                    Tracking ID
                  </label>
                  <motion.input
                    id="track-input"
                    type="text"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder="e.g., APP-2025-001"
                    className="w-full pl-12 pr-4 py-3 border-2 border-blue-100 rounded-lg focus:border-blue-600 focus:outline-none transition-colors bg-white/90 text-gray-900 placeholder:text-gray-300 shadow-sm"
                    aria-label="Tracking ID"
                    autoComplete="off"
                    whileFocus={{ boxShadow: '0 0 0 4px rgba(6,6,198,0.12)' }}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#0606c6', color: '#fff' }}
                  whileTap={{ scale: 0.97 }}
                  disabled={loading}
                  className="px-8 py-3 font-semibold rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Track application"
                  type="submit"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      Track
                    </>
                  )}
                </motion.button>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-left">
                Try: APP-2025-001 or APP-2025-002
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {result && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-12 px-4"
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-8 mb-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {result.businessName}
                    </h2>
                    <p className="text-gray-600">{result.serviceType}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Application ID</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {result.applicationId}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-6">
                    <p className="text-sm text-gray-600 mb-1">Current Status</p>
                    <p className="text-2xl font-bold text-gray-900 capitalize">
                      {result.currentStatus}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-6">
                    <p className="text-sm text-gray-600 mb-1">Submitted Date</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {new Date(result.submittedDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {result.currentStatus === 'approved' && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                    Download Certificate
                  </motion.button>
                )}
              </div>

              <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Status Timeline
                </h3>

                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-orange-500 to-green-500" />

                  <div className="space-y-8">
                    {result.statusTimeline.map((status, idx) => {
                      const Icon = statusIcons[status.status] || FileText;
                      const isActive = idx === result.statusTimeline.length - 1;

                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="relative flex gap-6"
                        >
                          <div className="relative z-10">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: idx * 0.1 + 0.2 }}
                              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                isActive
                                  ? `bg-gradient-to-br ${statusColors[status.status]}`
                                  : 'bg-gray-200'
                              }`}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </motion.div>
                          </div>

                          <div className="flex-1 pt-2">
                            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-lg font-bold text-gray-900 capitalize">
                                  {status.status}
                                </h4>
                                <span className="text-sm text-gray-500">
                                  {new Date(status.date).toLocaleDateString()}
                                </span>
                              </div>
                              <p className="text-gray-600">{status.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

    </div>
  );
};
