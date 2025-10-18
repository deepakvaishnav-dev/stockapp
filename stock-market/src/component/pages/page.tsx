import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to StockHub</h1>
        <p className="text-lg text-gray-600 mb-8">
          Your professional stock market platform for real-time data, analytics, and portfolio management.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "Real-Time Data",
              description: "Get live market data and stock prices updated in real-time.",
            },
            {
              title: "Portfolio Management",
              description: "Track and manage your investment portfolio with ease.",
            },
            {
              title: "Advanced Analytics",
              description: "Access powerful analytics tools for informed decision-making.",
            },
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional content to demonstrate scrolling */}
        {/* <div className="space-y-6">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="p-6 rounded-lg border border-gray-200 bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Section {i + 1}</h3>
              <p className="text-gray-600">
                This is additional content to demonstrate that only the main content area scrolls
                while the navbar and sidebar remain fixed in place. This creates a smooth user
                experience where navigation elements are always accessible.
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Page;
