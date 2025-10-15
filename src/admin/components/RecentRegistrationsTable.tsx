import { motion } from 'framer-motion';

const registrations = [
  { id: 'APP001', name: 'Bright Tech Ltd', type: 'LLC', status: 'pending', date: '2025-10-05' },
  { id: 'APP002', name: 'Green Farms', type: 'NGO', status: 'approved', date: '2025-10-04' },
  { id: 'APP003', name: 'Blue Ocean', type: 'LLC', status: 'rejected', date: '2025-10-03' },
];

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  approved: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
};

export const RecentRegistrationsTable = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recent Registrations</h2>
    <div className="overflow-x-auto rounded-2xl shadow-lg bg-white dark:bg-gray-950">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-900">
            <th className="px-6 py-3 text-left font-semibold">ID</th>
            <th className="px-6 py-3 text-left font-semibold">Name</th>
            <th className="px-6 py-3 text-left font-semibold">Type</th>
            <th className="px-6 py-3 text-left font-semibold">Status</th>
            <th className="px-6 py-3 text-left font-semibold">Date</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((reg) => (
            <tr key={reg.id} className="border-b border-gray-100 dark:border-gray-900">
              <td className="px-6 py-4 font-mono">{reg.id}</td>
              <td className="px-6 py-4">{reg.name}</td>
              <td className="px-6 py-4">{reg.type}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[reg.status]}`}>{reg.status}</span>
              </td>
              <td className="px-6 py-4">{reg.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);
