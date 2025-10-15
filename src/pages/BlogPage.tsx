import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { blogPosts } from '../mocks/blogPosts';

export const BlogPage = () => (
  <div className="min-h-screen pt-20 bg-white">
    <section className="relative py-28 px-4 bg-[#0606c6] overflow-hidden">
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg relative">
            Lotopital Blog
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Insights, guides, and expert tips for Nigerian business owners and entrepreneurs.
          </p>
        </motion.div>
      </div>
    </section>
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5, type: 'spring', stiffness: 300, damping: 24 }}
              className="group relative bg-white/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all p-8 h-full border border-blue-100 hover:border-blue-400 transform-gpu overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-40 rounded-t-3xl overflow-hidden mb-6">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-t-3xl" />
              </div>
              <div className="relative pt-44 pb-4 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-[#0606c6] mb-2 group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="font-semibold text-blue-600">{post.author}</span>
                </div>
                <Link to={`/blog/${post.id}`} className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-primary w-full px-6 py-3 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md"
                    aria-label={`Read more: ${post.title}`}
                  >
                    Read More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </div>
);
