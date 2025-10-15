import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { RegisterPage } from './pages/RegisterPage';
import { TrackPage } from './pages/TrackPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { SuccessPage } from './pages/SuccessPage';
import { ToastProvider } from './contexts/ToastContext';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <AboutPage />
            </motion.div>
          }
        />
        <Route
          path="/blog"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <BlogPage />
            </motion.div>
          }
        />
        <Route
          path="/"
          element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><HomePage /></motion.div>}
        />
        <Route
          path="/about"
          element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><AboutPage /></motion.div>}
        />
        <Route
          path="/blog"
          element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><BlogPage /></motion.div>}
        />
        <Route
          path="/blog/:id"
          element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><BlogDetailPage /></motion.div>}
        />
        <Route
          path="/services"
          element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ServicesPage /></motion.div>}
        />
        <Route
          path="/register"
          element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><RegisterPage /></motion.div>}
        />
        <Route
          path="/track"
          element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><TrackPage /></motion.div>}
        />
        <Route
          path="/contact"
          element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ContactPage /></motion.div>}
        />
        <Route
          path="/login"
          element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><LoginPage /></motion.div>}
        />
        <Route
          path="/success"
          element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><SuccessPage /></motion.div>}
        />
        <Route
          path="/terms"
          element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="min-h-screen pt-32 pb-12 px-4"><div className="max-w-4xl mx-auto"><h1 className="text-4xl font-bold mb-6">Terms of Service</h1><p className="text-gray-600">Terms of service content will be added in Phase 2.</p></div></motion.div>}
        />
        <Route
          path="/privacy"
          element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="min-h-screen pt-32 pb-12 px-4"><div className="max-w-4xl mx-auto"><h1 className="text-4xl font-bold mb-6">Privacy Policy</h1><p className="text-gray-600">Privacy policy content will be added in Phase 2.</p></div></motion.div>}
        />
        <Route
          path="/refund"
          element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="min-h-screen pt-32 pb-12 px-4"><div className="max-w-4xl mx-auto"><h1 className="text-4xl font-bold mb-6">Refund Policy</h1><p className="text-gray-600">Refund policy content will be added in Phase 2.</p></div></motion.div>}
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
