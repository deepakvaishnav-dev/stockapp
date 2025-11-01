import Card from "../../card-table/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Sample portfolio data
const portfolioHoldings = [
  {
    symbol: "RELIANCE",
    name: "Reliance Industries",
    quantity: 50,
    avgBuyPrice: 2700,
    currentPrice: 2845.5,
    profit: 7277.5,
  },
  {
    symbol: "TCS",
    name: "Tata Consultancy Services",
    quantity: 30,
    avgBuyPrice: 3200,
    currentPrice: 3456.75,
    profit: 7702.5,
  },
  { symbol: "INFY", name: "Infosys Limited", quantity: 100, avgBuyPrice: 1150, currentPrice: 1234.2, profit: 8420.0 },
  { symbol: "WIPRO", name: "Wipro Limited", quantity: 75, avgBuyPrice: 430, currentPrice: 456.8, profit: 2010.0 },
  {
    symbol: "SBIN",
    name: "State Bank of India",
    quantity: 200,
    avgBuyPrice: 650,
    currentPrice: 678.45,
    profit: 5690.0,
  },
]

const portfolioPerformance = [
  { month: "Jan", value: 500000 },
  { month: "Feb", value: 520000 },
  { month: "Mar", value: 545000 },
  { month: "Apr", value: 535000 },
  { month: "May", value: 560000 },
  { month: "Jun", value: 585000 },
]

export default function PortfolioPage() {
  const totalInvestment = portfolioHoldings.reduce((sum, stock) => sum + stock.quantity * stock.avgBuyPrice, 0)
  const currentValue = portfolioHoldings.reduce((sum, stock) => sum + stock.quantity * stock.currentPrice, 0)
  const totalProfit = portfolioHoldings.reduce((sum, stock) => sum + stock.profit, 0)
  const profitPercentage = ((totalProfit / totalInvestment) * 100).toFixed(2)

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <p className="text-gray-700 dark:text-gray-300">Track and manage your investment portfolio</p>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Investment">
          <p className="text-2xl font-bold">₹{(totalInvestment / 100000).toFixed(2)}L</p>
        </Card>
        <Card title="Current Value">
          <p className="text-2xl font-bold">₹{(currentValue / 100000).toFixed(2)}L</p>
        </Card>
        <Card title="Net Gain/Loss">
          <p className="text-2xl font-bold text-green-600">₹{(totalProfit / 1000).toFixed(1)}K</p>
        </Card>
        <Card title="Return %">
          <p className="text-2xl font-bold text-green-600">+{profitPercentage}%</p>
        </Card>
      </div>

      {/* Portfolio Performance Chart */}
      <Card title="Portfolio Performance">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">6-month portfolio value trend</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={portfolioPerformance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value: any) => `₹${(value / 100000).toFixed(2)}L`} />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              strokeWidth={2}
              name="Portfolio Value"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Holdings Table */}
      <Card title="Your Holdings">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Detailed breakdown of your stock positions</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300 dark:border-gray-600">
                <th className="text-left py-3 px-4 font-semibold">Stock</th>
                <th className="text-right py-3 px-4 font-semibold">Qty</th>
                <th className="text-right py-3 px-4 font-semibold">Avg Buy</th>
                <th className="text-right py-3 px-4 font-semibold">Current</th>
                <th className="text-right py-3 px-4 font-semibold">Profit/Loss</th>
              </tr>
            </thead>
            <tbody>
              {portfolioHoldings.map((stock) => (
                <tr key={stock.symbol} className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4">
                    <p className="font-semibold">{stock.symbol}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{stock.name}</p>
                  </td>
                  <td className="text-right py-3 px-4">{stock.quantity}</td>
                  <td className="text-right py-3 px-4">₹{stock.avgBuyPrice.toFixed(2)}</td>
                  <td className="text-right py-3 px-4">₹{stock.currentPrice.toFixed(2)}</td>
                  <td className="text-right py-3 px-4">
                    <span className="text-green-600 font-semibold">+₹{stock.profit.toFixed(2)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
