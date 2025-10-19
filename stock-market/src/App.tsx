// import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout><Page /></Layout>} />
          <Route path="/markets" element={<Layout><MarketsPage /></Layout>} />
          <Route path="/portfolio" element={<Layout><PortfolioPage /></Layout>} />
          <Route path="/news" element={<Layout><NewsPage /></Layout>} />
          <Route path="/analytics" element={<Layout><AnalyticsPage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
