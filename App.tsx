import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import RecruiterPortal from './pages/RecruiterPortal';
import VacancyDetail from './pages/VacancyDetail';
import CandidateDetail from './pages/CandidateDetail';
import BulkUpload from './pages/BulkUpload';
import Earnings from './pages/Earnings';
import AdminDashboard from './pages/AdminDashboard';
import Settings from './pages/Settings';
import PaymentInfo from './pages/PaymentInfo';
import Sidebar from './components/Sidebar';

// Layout component to handle sidebar visibility
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  // Hide sidebar on Login (/) , Register (/register) and Forgot Password pages
  const isAuthPage = location.pathname === '/' || location.pathname === '/register' || location.pathname === '/forgot-password';
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {!isAuthPage && <Sidebar isAdmin={isAdmin} />}
      <main className={`flex-1 flex flex-col min-w-0 overflow-hidden ${!isAuthPage ? 'ml-0 lg:ml-0' : ''}`}>
        {children}
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recruiter-portal" element={<RecruiterPortal />} />
          <Route path="/vacancy/:id" element={<VacancyDetail />} />
          <Route path="/candidate/:id" element={<CandidateDetail />} />
          <Route path="/upload" element={<BulkUpload />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/payment-info" element={<PaymentInfo />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;