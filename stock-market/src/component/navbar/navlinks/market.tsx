// import { useState } from "react"
import Card from "../../card-table/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Sample market data
const marketIndices = [
  { name: "NIFTY 50", value: 23456.78, change: 2.45, changeType: "up" },
  { name: "SENSEX", value: 78234.56, change: 1.89, changeType: "up" },
  { name: "DOW JONES", value: 42567.89, change: -0.34, changeType: "down" },
  { name: "NASDAQ", value: 18234.56, change: 3.12, changeType: "up" },
]

const topGainers = [
  { symbol: "RELIANCE", name: "Reliance Industries", price: 2845.5, change: 5.23, volume: "2.3M" },
  { symbol: "TCS", name: "Tata Consultancy Services", price: 3456.75, change: 4.67, volume: "1.8M" },
  { symbol: "INFY", name: "Infosys Limited", price: 1234.2, change: 3.89, volume: "3.2M" },
  { symbol: "WIPRO", name: "Wipro Limited", price: 456.8, change: 3.45, volume: "2.1M" },
]

const topLosers = [
  { symbol: "BAJAJFINSV", name: "Bajaj Finserv", price: 1567.3, change: -2.34, volume: "1.2M" },
  { symbol: "MARUTI", name: "Maruti Suzuki", price: 9234.5, change: -1.89, volume: "0.9M" },
  { symbol: "SBIN", name: "State Bank of India", price: 678.45, change: -1.56, volume: "4.5M" },
  { symbol: "HDFC", name: "HDFC Bank", price: 1890.75, change: -1.23, volume: "2.8M" },
]

const chartData = [
  { time: "9:15", NIFTY: 23200, SENSEX: 77800 },
  { time: "10:30", NIFTY: 23350, SENSEX: 78100 },
  { time: "12:00", NIFTY: 23400, SENSEX: 78200 },
  { time: "2:00", NIFTY: 23456, SENSEX: 78234 },
  { time: "3:30", NIFTY: 23456, SENSEX: 78234 },
]

export default function MarketsPage() {
  // const [selectedIndex, setSelectedIndex] = useState("NIFTY")

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Markets</h1>
      <p className="text-gray-700 dark:text-gray-300">Real-time market data and stock performance</p>

      {/* Market Indices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketIndices.map((index) => (
          <Card key={index.name} title={index.name}>
            <p className="text-2xl font-bold mb-2">{index.value.toLocaleString()}</p>
            <p className={`text-sm font-semibold ${index.changeType === "up" ? "text-green-600" : "text-red-600"}`}>
              {index.changeType === "up" ? "↑" : "↓"} {Math.abs(index.change)}%
            </p>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card title="Market Trend">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">NIFTY 50 vs SENSEX Performance</p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="NIFTY" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="SENSEX" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <Card title="Market Distribution">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Sector Allocation</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: "IT", value: 25 },
                  { name: "Finance", value: 30 },
                  { name: "Energy", value: 20 },
                  { name: "Others", value: 25 },
                ]}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                <Cell fill="#8884d8" />
                <Cell fill="#82ca9d" />
                <Cell fill="#ffc658" />
                <Cell fill="#ff7c7c" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Top Gainers and Losers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Gainers */}
        <Card title="Top Gainers">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Best performing stocks today</p>
          <div className="space-y-4">
            {topGainers.map((stock) => (
              <div
                key={stock.symbol}
                className="flex items-center justify-between p-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{stock.symbol}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{stock.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">₹{stock.price.toFixed(2)}</p>
                  <p className="text-sm text-green-600 font-semibold">+{stock.change}%</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Losers */}
        <Card title="Top Losers">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Worst performing stocks today</p>
          <div className="space-y-4">
            {topLosers.map((stock) => (
              <div
                key={stock.symbol}
                className="flex items-center justify-between p-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{stock.symbol}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{stock.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">₹{stock.price.toFixed(2)}</p>
                  <p className="text-sm text-red-600 font-semibold">{stock.change}%</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
