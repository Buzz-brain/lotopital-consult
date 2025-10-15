import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  FileText,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Building2,
  Heart,
  Shield,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search & Reserve",
    description:
      "Search for your desired business name and reserve it instantly",
  },
  {
    icon: FileText,
    title: "Submit Documents",
    description: "Upload required documents and complete the registration form",
  },
  {
    icon: CheckCircle,
    title: "Receive Certificate",
    description: "Get your CAC certificate delivered directly to your email",
  },
];

const features = [
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Get your business registered within 3-10 business days",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description:
      "Fully compliant with CAC regulations and secure document handling",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "24/7 customer support to guide you through every step",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Real-time tracking of your application status",
  },
];

const services = [
  {
    icon: Briefcase,
    name: "Business Name",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Building2,
    name: "Limited Liability Company",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Heart,
    name: "NGO/Trustees",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: Shield,
    name: "Trademark",
    color: "from-green-500 to-teal-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        {/* Subtle diagonal gradient overlay background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(120deg, #2563eb 0%, #fff 80%)",
              opacity: 0.16,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Text & Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-start text-left pl-0 md:pl-16"
          >
            <span className="px-4 py-2 rounded-full btn-secondary text-white text-sm font-medium mb-6">
              Trusted by 10,000+ Nigerian Businesses
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-700 via-blue-700 to-orange-700 bg-clip-text text-transparent">
                Structure is the New Strategy -
              </span>
              <br />
              <span className="text-gray-900"> We Help You Build It Right</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl">
              Simplified, Stress Free & Secure. <br />
              Register Your Business With Corporate Affairs Commission, Nigeria
              in Minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 btn-primary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow group flex items-center justify-center gap-2"
                >
                  Start Registration
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-200 hover:border-blue-600 transition-colors"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Extra Prominent Human Image (no card, no shadow, no border) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 pr-0 md:pr-16">
            <img
              src="https://res.cloudinary.com/df2q6gyuq/image/upload/v1760027009/lotopitalhero_gnkdz3.png"
              alt="Business professional"
              className="w-[580px] h-[400px] object-cover"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: 0,
                boxShadow: "none",
                background: "none",
              }}
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section label */}
          <div className="text-center mb-4">
            <span className="uppercase tracking-widest text-blue-600 text-xs font-semibold bg-blue-50 px-3 py-1 rounded-full inline-block">
              How it works
            </span>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">
              Get Registered in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              We make business registration effortless and transparent.
            </p>
          </div>
          <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-0">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center md:items-stretch relative group"
              >
                {/* Connector line (desktop only, not after last step) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-1 z-0">
                    <div
                      className="h-1 w-full bg-gradient-to-r from-blue-100 to-orange-100 opacity-60"
                      style={{ marginLeft: "72px", marginRight: "-72px" }}
                    />
                  </div>
                )}
                <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center md:items-start transition-transform group-hover:-translate-y-2 duration-200 border border-gray-100 hover:border-blue-200">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-600 shadow-lg border border-blue-100">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="ml-4 text-5xl font-extrabold text-blue-100 group-hover:text-blue-400 transition-colors">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services - Redesigned */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Subtle glassmorphism background shapes */}
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-gradient-to-br from-blue-200/40 to-cyan-100/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-gradient-to-br from-orange-200/40 to-pink-100/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section label */}
          <div className="text-center mb-4">
            <span className="uppercase tracking-widest text-blue-600 text-xs font-semibold bg-blue-50 px-3 py-1 rounded-full inline-block">
              Our services
            </span>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">
              Explore Our Service Offerings
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive business registration services tailored for you.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.04 }}
                className="group relative"
              >
                {/* Glassmorphism card */}
                <Link to="/services" className="block h-full">
                  <div className="relative h-full rounded-3xl p-8 bg-white/70 backdrop-blur-md border border-blue-100 shadow-xl group-hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden">
                    {/* Icon with glassy background */}
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-white/60 to-blue-100/40 border border-blue-200 shadow-md group-hover:scale-105 transition-transform">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} shadow-lg`}
                      >
                        <service.icon className="w-7 h-7 text-white drop-shadow-md" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                      {service.name}
                    </h3>
                    {/* Optional: Add a short description for each service here if available */}
                  </div>
                </Link>
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-400/10 to-cyan-200/10 blur-lg" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 btn-secondary text-white rounded-lg font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Subtle glassmorphism background shapes */}
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-gradient-to-br from-blue-200/40 to-cyan-100/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-gradient-to-br from-orange-200/40 to-pink-100/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section label */}
          <div className="text-center mb-4">
            <span className="uppercase tracking-widest text-blue-600 text-xs font-semibold bg-blue-50 px-3 py-1 rounded-full inline-block">
              Why choose us
            </span>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">
              Why We're the Preferred Choice
            </h2>
            <p className="text-xl text-gray-600">
              Experience seamless, secure, and expert-led business registration.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.04 }}
                className="group relative"
              >
                {/* Glassmorphism card */}
                <div className="relative h-full rounded-3xl p-8 bg-white/70 backdrop-blur-md border border-blue-100 shadow-xl group-hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden">
                  {/* Icon with glassy background */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-white/60 to-blue-100/40 border border-blue-200 shadow-md group-hover:scale-105 transition-transform">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-600 shadow-lg">
                      <feature.icon className="w-7 h-7 text-white drop-shadow-md" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-400/10 to-cyan-200/10 blur-lg" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 btn-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Register Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of Nigerian entrepreneurs who trust us with their
              business registration
            </p>
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow inline-flex items-center gap-2"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
