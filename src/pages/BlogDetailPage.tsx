

export const BlogDetailPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-3xl font-bold mb-4 text-[#0606c6]">Blog Post Not Found</h1>
        <Link to="/blog" className="inline-block mt-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary px-6 py-3 text-white rounded-lg font-semibold flex items-center gap-2 shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </motion.button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-white">
      <section className="relative py-28 px-4 bg-[#0606c6] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg relative">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-blue-100 text-base mb-6">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span className="font-semibold">{post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-100 p-10 overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-2xl mb-8 shadow-md" />
            <p className="text-gray-900 text-lg leading-relaxed whitespace-pre-line mb-8">
              {post.content}
            </p>
            <Link to="/blog" className="inline-block mt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary px-6 py-3 text-white rounded-lg font-semibold flex items-center gap-2 shadow-md"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Blog
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../mocks/blogPosts';
