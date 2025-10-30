// src/components/Sidebar.tsx
import React from "react";
import { X, User, Home, TrendingUp, PieChart, Bell, Bot } from "lucide-react";

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  href: string;
}

const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: <Home />, href: "/dashboard" },
  { name: "My Portfolio", icon: <PieChart />, href: "/portfolio" },
  { name: "Market Trends", icon: <TrendingUp />, href: "/market-trends" },
  { name: "News & Alerts", icon: <Bell />, href: "/news-alerts" },
  { name: "App Agent", icon: <Bot />, href: "/app-agent" },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const [activeItem, setActiveItem] = React.useState("Dashboard");

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onToggle}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-16 left-0 z-40 bg-white border-r border-gray-200 h-[calc(100vh-4rem)] w-64 transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button for mobile */}
          <div className="md:hidden flex justify-end p-4">
            <button
              onClick={onToggle}
              aria-label="Close sidebar"
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-3 p-4 border-b border-gray-200">
            <User className="w-8 h-8 text-gray-700" />
            <div>
              <p className="text-sm font-semibold text-gray-800">John Doe</p>
              <p className="text-xs text-gray-500">Premium User</p>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeItem === item.name
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
