import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Registrations', value: 1280, color: 'bg-blue-600' },
  { label: 'Pending', value: 42, color: 'bg-yellow-500' },
  { label: 'Approved', value: 1200, color: 'bg-green-500' },
  { label: 'Rejected', value: 38, color: 'bg-red-500' },
];

export const OverviewCards = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {stats.map((stat, idx) => (
      <motion.div
        key={stat.label}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        className={`rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center ${stat.color} text-white`}
      >
        <span className="text-lg font-semibold mb-2">{stat.label}</span>
        <span className="text-3xl font-bold">
          {/* Animated counter simulation */}
          {stat.value}
        </span>
      </motion.div>
    ))}
  </div>
);
