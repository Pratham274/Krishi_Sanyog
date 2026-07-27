import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import './i18n';

// Common Components
import Navbar from './components/common/Navbar';
import GlobalSearchModal from './components/common/GlobalSearchModal';
import FloatingActionButton from './components/common/FloatingActionButton';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import VerifyEmailPage from './pages/auth/VerifyEmailPage';

// Farmer Portal
import FarmerDashboard from './pages/farmer/FarmerDashboard';
import FarmerAdvisorPage from './pages/farmer/FarmerAdvisorPage';
import FarmerSchemesPage from './pages/farmer/FarmerSchemesPage';
import FarmerNoticesPage from './pages/farmer/FarmerNoticesPage';
import FarmerSettingsPage from './pages/farmer/FarmerSettingsPage';

// Admin Portal
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminFarmersPage from './pages/admin/AdminFarmersPage';
import AdminDatabasePage from './pages/admin/AdminDatabasePage';
import AdminNoticesPage from './pages/admin/AdminNoticesPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';

// Errors
import NotFoundPage from './pages/errors/NotFoundPage';
import ServerErrorPage from './pages/errors/ServerErrorPage';

const AppLayout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isPortal = location.pathname.startsWith('/farmer') || location.pathname.startsWith('/admin') || location.pathname.startsWith('/login') || location.pathname.startsWith('/register') || location.pathname.startsWith('/verify-email') || location.pathname.startsWith('/forgot-password') || location.pathname.startsWith('/reset-password');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white transition-colors duration-300">
      
      {/* Top Navbar on Public Pages */}
      {!isPortal && <Navbar onOpenSearch={() => setIsSearchOpen(true)} />}

      <div className="flex-1">
        <Routes>
          {/* Public Landing */}
          <Route path="/" element={<LandingPage onOpenSearch={() => setIsSearchOpen(true)} />} />

          {/* Auth Suite */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />

          {/* Farmer Portal */}
          <Route path="/farmer" element={<FarmerDashboard onOpenSearch={() => setIsSearchOpen(true)} />} />
          <Route path="/farmer/advisor" element={<FarmerAdvisorPage onOpenSearch={() => setIsSearchOpen(true)} />} />
          <Route path="/farmer/schemes" element={<FarmerSchemesPage onOpenSearch={() => setIsSearchOpen(true)} />} />
          <Route path="/farmer/notices" element={<FarmerNoticesPage onOpenSearch={() => setIsSearchOpen(true)} />} />
          <Route path="/farmer/settings" element={<FarmerSettingsPage onOpenSearch={() => setIsSearchOpen(true)} />} />

          {/* Admin Portal */}
          <Route path="/admin" element={<AdminDashboard onOpenSearch={() => setIsSearchOpen(true)} />} />
          <Route path="/admin/farmers" element={<AdminFarmersPage onOpenSearch={() => setIsSearchOpen(true)} />} />
          <Route path="/admin/database" element={<AdminDatabasePage onOpenSearch={() => setIsSearchOpen(true)} />} />
          <Route path="/admin/notices" element={<AdminNoticesPage onOpenSearch={() => setIsSearchOpen(true)} />} />
          <Route path="/admin/settings" element={<AdminSettingsPage onOpenSearch={() => setIsSearchOpen(true)} />} />

          {/* Errors */}
          <Route path="/500" element={<ServerErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      {/* Global Utilities */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <FloatingActionButton />
      <ScrollToTop />
      <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />

    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppLayout />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
