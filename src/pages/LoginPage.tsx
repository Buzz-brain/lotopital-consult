import { motion } from 'framer-motion';
import { Lock, Mail } from 'lucide-react';

export const LoginPage = () => {
  return (
    <div className="min-h-screen pt-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-10 flex flex-col items-center"
      >
        <div className="relative flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-[#0606c6]" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
          <p className="text-gray-600">Access your admin dashboard</p>
        </div>

        <form className="space-y-6 w-full">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              <input
                type="email"
                placeholder="admin@lotopital.com"
                className="w-full pl-12 pr-4 py-3 border-2 border-blue-100 rounded-lg focus:border-blue-600 focus:outline-none bg-white/90 text-gray-900 placeholder:text-gray-400"
                autoComplete="username"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-12 pr-4 py-3 border-2 border-blue-100 rounded-lg focus:border-blue-600 focus:outline-none bg-white/90 text-gray-900 placeholder:text-gray-400"
                autoComplete="current-password"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-3 btn btn-primary font-semibold shadow-md"
          >
            Sign In
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Phase 1: Frontend only (no authentication yet)</p>
        </div>
      </motion.div>
    </div>
  );
};
