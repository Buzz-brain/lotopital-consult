import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Dashboard', path: '/admin' },
  { label: 'Applications', path: '/admin/applications' },
  { label: 'Users', path: '/admin/users' },
  { label: 'Payments', path: '/admin/payments' },
  { label: 'Notifications', path: '/admin/notifications' },
  { label: 'Settings', path: '/admin/settings' },
];

export const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 sticky top-0 z-30">
      <div className="px-6 py-8">
        <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-8">Lotopital Admin</h2>
        <nav className="space-y-2">
          {navItems.map(item => (
            <Link key={item.path} to={item.path} className={`block px-4 py-2 rounded-lg font-medium transition-colors ${location.pathname === item.path ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800'}`}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};
