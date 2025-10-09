import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, Building2, Heart, Shield, FileText, CreditCard as Edit, ArrowRight, Check } from 'lucide-react';
import { services } from '../mocks/services';

const iconMap: Record<string, any> = {
  Briefcase,
  Building2,
  Heart,
  Shield,
  FileText,
  Edit,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-28 px-4 bg-[#0606c6] overflow-hidden">
        {/* Subtle dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />
        {/* Wave removed per request */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg relative">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comprehensive CAC registration services to help you formalize your business in Nigeria
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Reduced-motion and accessibility tweaks */}
          <style>{`
            @media (prefers-reduced-motion: reduce) {
              .group { transition: none !important; }
              .group:hover { transform: none !important; }
              .animate-wave-slow { animation: none !important; }
            }
            /* Improve focus visibility for interactive elements */
            .btn:focus-visible { box-shadow: 0 0 0 4px rgba(6,6,198,0.12); }
          `}</style>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ translateY: -10, scale: 1.025 }}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5, type: 'spring', stiffness: 300, damping: 24 }}
                >
                  <div className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all p-8 h-full border border-blue-100 hover:border-blue-400 transform-gpu overflow-hidden">
                    {/* Subtle premium price badge */}
                    <div className="absolute top-8 right-8 flex items-center gap-1 bg-blue-100 text-[#0606c6] text-base font-semibold px-4 py-1.5 rounded-full shadow-sm border border-blue-200 z-10 group-hover:bg-blue-200 transition-colors">
                      <span className="text-lg font-bold">₦</span>
                      <span>{service.price.toLocaleString()}</span>
                    </div>

                    {/* Subtle gradient border accent */}
                    <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-blue-200 group-hover:shadow-lg transition-all" aria-hidden="true" />

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-28 h-28 bg-blue-50 rounded-bl-full opacity-60 -translate-y-8 translate-x-8 pointer-events-none" aria-hidden="true" />

                    <div className="relative mb-6">
                      <div className="relative w-16 h-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                        <Icon className="w-8 h-8 text-[#0606c6]" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                      {service.name}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Processing: {service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Expert support included</span>
                      </div>
                    </div>

                    <Link to="/register" state={{ serviceId: service.id }} className="block mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn btn-primary w-full px-6 py-3 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md"
                        aria-label={`Register for ${service.name}`}
                      >
                        Register Now
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-8 md:p-12 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Decorative icon */}
            <div className="mb-6">
              <Shield className="w-12 h-12 text-[#0606c6] mx-auto drop-shadow" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Not sure which service you need?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our expert consultants are here to help you choose the right registration type for your business. Get in touch with us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full mt-2">
              <Link to="/contact" className="flex-1">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary w-full px-8 py-4 text-white rounded-lg font-semibold shadow-md"
                >
                  Contact Us
                </motion.button>
              </Link>
              <Link to="/track" className="flex-1">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold border-2 border-blue-100 hover:border-blue-600 transition-colors shadow"
                >
                  Track Application
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
