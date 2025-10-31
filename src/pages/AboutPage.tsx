import { motion } from "framer-motion";
import { Shield, Heart, Briefcase } from "lucide-react";

export const AboutPage = () => (
  <div className="min-h-screen pt-20 bg-white">
    {/* Hero Section - matches Services/Track style */}
    <section className="relative py-28 px-4 bg-[#0606c6] overflow-hidden">
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />
      {/* Halo behind headline for subtle emphasis */}
      <div
        className="absolute left-1/2 top-24 -translate-x-1/2 w-96 h-24 bg-blue-200/10 blur-3xl rounded-full z-0"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg relative">
            About Lotopital Consult
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Empowering Brands in Africa with confidence and clarity to operate
            under a well protected identity.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Company Story & Mission */}
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-white/80 via-blue-50/60 to-cyan-100/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200/60 px-0 py-0 overflow-visible flex flex-col items-stretch"
        >
          {/* Decorative glassmorphism layers */}
          <div
            className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl z-0"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-200/20 rounded-full blur-2xl z-0"
            aria-hidden="true"
          />
          {/* Main card content */}
          <div className="relative z-10 flex flex-col items-center px-8 py-16 md:px-20 md:py-20">
            <Shield className="w-20 h-20 text-[#0606c6] drop-shadow-xl mb-6" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold text-[#0606c6] mb-4 tracking-tight text-center"
            >
              Our Story
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="w-24 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-orange-400 rounded-full mb-8 mx-auto"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-gray-900 text-xl md:text-2xl mb-10 leading-relaxed font-medium max-w-3xl mx-auto text-center"
            >
              At
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-400 bg-clip-text text-transparent font-bold pl-2">
                Lotopital Consult
              </span>{" "}
              we help emerging brands and start-ups in Africa gain confidence
              and clarity through simple, affordable brand registration and
              protection, so they can operate under a well-protected identity.
              Our stress-free, easy-to-understand approach has empowered
              business owners, from street vendors to start-up founders, to
              secure and grow their brands with confidence.
              <br className="hidden md:block" />
              What sets us apart is our unique approach to accessibility and
              simplicity. We provide straightforward, reliable, and affordable
              solutions that help businesses build trust, attract opportunities,
              and operate legally under a protected brand.
            </motion.p>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow flex flex-col items-center border border-blue-100"
              >
                <Shield className="w-10 h-10 text-[#0606c6] mb-3" />
                <span className="font-semibold text-gray-900 text-lg text-center">
                  Integrity & Transparency
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow flex flex-col items-center border border-blue-100"
              >
                <Heart className="w-10 h-10 text-orange-500 mb-3" />
                <span className="font-semibold text-gray-900 text-lg text-center">
                  Customer-Centric Service
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow flex flex-col items-center border border-blue-100"
              >
                <Briefcase className="w-10 h-10 text-[#0606c6] mb-3" />
                <span className="font-semibold text-gray-900 text-lg text-center">
                  Empowering Entrepreneurs
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0606c6] mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Mbadiwe Ikenna",
              role: "Distribution Officer, Brand Formalization Expert",
              bio: "Expert in brand formalization and market access, helping small businesses secure registrations and expand distribution with practical, scalable processes.",
              img: "/ikenna.png",
            },
            {
              name: "Chibuike C. Daniel",
              role: "Brand Creative Designer",
              bio: "Creative lead specializing in brand identity, visual systems, and marketing assets that connect with diverse African audiences.",
              img: "/daniel.png",
            },
            {
              name: "Barr. Chidera Godson",
              role: "Legal Practitioner",
              bio: "Corporate & IP lawyer ensuring registrations meet regulatory standards and protecting clients' intellectual property across jurisdictions.",
              img: "/chidera.png",
            },
            {
              name: "Jerry Okereke",
              role: "Senior Partner, Consultant, Lotopital Consult.",
              bio: "Senior consultant advising founders on brand strategy, legal structure, and growth, with a focus on practical commercialization and compliance.",
              img: "/jerry.png",
            },
          ].map((member) => (
            <div
              key={member.name}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-10 flex flex-col items-center border border-blue-100"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-40 h-40 rounded-full mb-4 object-cover border-2 border-blue-200"
              />
              <h3 className="text-lg font-bold text-[#0606c6]">
                {member.name}
              </h3>
              <span className="text-sm text-gray-600 mb-2">{member.role}</span>
              <p className="text-gray-700 text-center text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0606c6] mb-8 text-center">
          Why Choose Lotopital Consult?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100">
            <Shield className="w-10 h-10 text-blue-600 mb-2" />
            <h3 className="font-semibold text-[#0606c6] mb-2">
              Trusted & Secure
            </h3>
            <p className="text-gray-700 text-center text-sm">
              Your data and business are protected with industry-leading
              security.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100">
            <Heart className="w-10 h-10 text-orange-500 mb-2" />
            <h3 className="font-semibold text-[#0606c6] mb-2">
              Personalized Support
            </h3>
            <p className="text-gray-700 text-center text-sm">
              Our team guides you through every step, making registration
              effortless.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100">
            <Briefcase className="w-10 h-10 text-blue-600 mb-2" />
            <h3 className="font-semibold text-[#0606c6] mb-2">
              Proven Results
            </h3>
            <p className="text-gray-700 text-center text-sm">
              Hundreds of successful registrations and satisfied clients
              nationwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
