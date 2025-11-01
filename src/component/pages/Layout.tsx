import React, { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex pt-16 min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main content */}
      <main className="flex-1 overflow-auto bg-gray-50">
        {/* Hamburger button for mobile */}
        <div className="md:hidden flex items-center p-4 bg-white border-b border-gray-200 sticky top-16 z-30">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <Menu size={24} />
          </button>
          <span className="ml-2 font-bold text-blue-600 text-lg">StockTrack</span>
        </div>
        {children}
      </main>
    </div>
  );
};

export default Layout;
