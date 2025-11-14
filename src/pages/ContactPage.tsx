import { useState } from 'react';
import { useToast } from '../contexts/ToastContext';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { sendContactForm } from '../mocks/contactApi';

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendContactForm({ name, email, message });
      showToast("success", "Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-28 px-4 bg-[#0606c6] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />
        {/* Halo behind headline for subtle emphasis */}
        <div
          className="absolute left-1/2 top-24 -translate-x-1/2 w-96 h-24 bg-blue-200/10 blur-3xl rounded-full z-0"
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg relative">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get in touch with our team for any inquiries or support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-10 flex flex-col justify-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-[#0606c6]" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">
                Send us a message
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                We'd love to hear from you. Fill out the form and our team will
                get back to you promptly.
              </p>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg focus:border-blue-600 focus:outline-none bg-white/90"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg focus:border-blue-600 focus:outline-none bg-white/90"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg focus:border-blue-600 focus:outline-none bg-white/90"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-3 btn btn-primary font-semibold shadow-md flex items-center justify-center gap-2 disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </motion.button>
                {/* Success message now handled by toast */}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#0606c6]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Address
                      </h3>
                      <p className="text-gray-600">
                        7/9 Wetheral Road, 2nd Floor, Beside Sterling Bank,
                        Owerri
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#0606c6]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600">+234 701 242 8863</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#0606c6]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">thelotopital@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-8">
                <h3 className="font-semibold text-gray-900 mb-2 text-center">
                  Business Hours
                </h3>
                <div className="space-y-1 text-center">
                  <p className="text-gray-600">
                    Monday - Saturday: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
