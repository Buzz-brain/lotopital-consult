import { motion } from 'framer-motion';

export const Topbar = () => {
  return (
    <header className="sticky top-0 z-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 py-4 shadow-sm">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <span className="font-bold text-blue-700 dark:text-blue-300 text-lg">Lotopital Consult Admin</span>
      </motion.div>
      <div className="flex items-center gap-4">
        {/* Profile dropdown, notifications, etc. */}
        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center font-bold text-blue-700 dark:text-blue-300">A</div>
      </div>
    </header>
  );
};
