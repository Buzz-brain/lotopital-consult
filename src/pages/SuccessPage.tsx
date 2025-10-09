import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Download, Sparkles } from 'lucide-react';

export const SuccessPage = () => {
  const location = useLocation();
  const applicationId = location.state?.applicationId || 'APP-2025-XXX';

  return (
    <div className="min-h-screen pt-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-10 md:p-14 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="relative inline-block mb-8"
        >
          <div className="absolute inset-0 bg-green-400/20 rounded-full blur-2xl opacity-40" />
          <div className="relative w-28 h-28 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="w-14 h-14 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 drop-shadow-lg"
        >
          Application Submitted!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-blue-900 mb-8"
        >
          Your business registration application has been successfully submitted.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100 p-6 mb-8 flex flex-col items-center"
        >
          <p className="text-sm text-blue-700 mb-2">Your Tracking ID</p>
          <p className="text-3xl font-bold text-[#0606c6] mb-4 tracking-wide">{applicationId}</p>
          <p className="text-sm text-gray-600">Save this ID to track your application progress.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-6 w-full"
        >
          <div className="flex flex-col gap-4 w-full mt-2 md:mt-0">
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <Link to="/track" className="flex-1">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-3 btn btn-primary font-semibold shadow-md flex items-center justify-center gap-2"
                >
                  Track Application
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <button
                type="button"
                className="flex-1 w-full px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold shadow-md flex items-center justify-center gap-2 hover:from-green-600 hover:to-emerald-600 transition-colors"
                onClick={() => {/* TODO: Implement download logic */}}
                aria-label="Download receipt"
              >
                Download Receipt
                <Download className="w-5 h-5" />
              </button>
            </div>
            <Link to="/" className="block w-full">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-white text-gray-700 rounded-lg font-semibold border-2 border-blue-100 hover:border-blue-600 shadow-sm transition-colors"
              >
                Back to Home
              </motion.button>
            </Link>
          </div>

          <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100 p-6 text-left">
            <h4 className="font-semibold text-[#0606c6] mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-orange-500" /> What's Next?
            </h4>
            <ul className="space-y-2 text-sm text-blue-900 pl-2">
              <li>• You will receive a confirmation email shortly</li>
              <li>• Your application will be processed within 3-10 business days</li>
              <li>• Track your progress using the tracking ID above</li>
              <li>• We'll notify you once your certificate is ready</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
