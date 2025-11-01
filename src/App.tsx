import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './component/navbar/navbar';
import Layout from './component/pages/Layout';
import Page from './component/pages/page';
import Login from './component/login/login';
import Signup from './component/signup/signup';
import MarketsPage from './component/navbar/navlinks/market';
import PortfolioPage from './component/navbar/navlinks/portfolio';
import NewsPage from './component/navbar/navlinks/news';
import AnalyticsPage from './component/navbar/navlinks/analytics';
import AboutPage from './component/navbar/navlinks/about';
import ContactPage from './component/navbar/navlinks/contact';
import Chatbot from './component/chatbot/Chatbot';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<ProtectedRoute><Layout><Page /></Layout></ProtectedRoute>} />
            <Route path="/markets" element={<ProtectedRoute><Layout><MarketsPage /></Layout></ProtectedRoute>} />
            <Route path="/portfolio" element={<ProtectedRoute><Layout><PortfolioPage /></Layout></ProtectedRoute>} />
            <Route path="/news" element={<ProtectedRoute><Layout><NewsPage /></Layout></ProtectedRoute>} />
            <Route path="/analytics" element={<ProtectedRoute><Layout><AnalyticsPage /></Layout></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><Layout><AboutPage /></Layout></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><Layout><ContactPage /></Layout></ProtectedRoute>} />
            <Route path="/app-agent" element={<ProtectedRoute><Layout><Chatbot /></Layout></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
