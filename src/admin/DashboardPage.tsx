import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { OverviewCards } from './components/OverviewCards';
import { RecentRegistrationsTable } from './components/RecentRegistrationsTable';

export const DashboardPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 md:p-10 flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Admin Dashboard</h1>
            <OverviewCards />
            <div className="mt-10">
              <RecentRegistrationsTable />
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
