import Card from "../../card-table/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

// Sample analytics data
const investmentDistribution = [
  { name: "IT Sector", value: 35 },
  { name: "Finance", value: 25 },
  { name: "Energy", value: 20 },
  { name: "Healthcare", value: 15 },
  { name: "Others", value: 5 },
]

const sectorPerformance = [
  { sector: "IT", return: 12.5 },
  { sector: "Finance", return: 8.3 },
  { sector: "Energy", return: 5.2 },
  { sector: "Healthcare", return: 15.7 },
  { sector: "Pharma", return: 10.2 },
]

const volatilityData = [
  { date: "Mon", volatility: 2.3 },
  { date: "Tue", volatility: 1.8 },
  { date: "Wed", volatility: 3.1 },
  { date: "Thu", volatility: 2.5 },
  { date: "Fri", volatility: 1.9 },
]

const growthData = [
  { month: "Jan", growth: 5.2 },
  { month: "Feb", growth: 3.8 },
  { month: "Mar", growth: 7.1 },
  { month: "Apr", growth: 4.5 },
  { month: "May", growth: 8.9 },
  { month: "Jun", growth: 6.3 },
]

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Analytics</h1>
      <p className="text-gray-700 dark:text-gray-300">Advanced insights and portfolio analysis</p>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Portfolio Beta">
          <p className="text-2xl font-bold">1.24</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Market sensitivity</p>
        </Card>
        <Card title="Sharpe Ratio">
          <p className="text-2xl font-bold">1.85</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Risk-adjusted return</p>
        </Card>
        <Card title="Volatility">
          <p className="text-2xl font-bold">18.5%</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Annual volatility</p>
        </Card>
        <Card title="Diversification">
          <p className="text-2xl font-bold">8.2/10</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Portfolio spread</p>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Investment Distribution */}
        <Card title="Investment Overview">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Portfolio allocation by sector</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={investmentDistribution}
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
                <Cell fill="#8dd1e1" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Sector Performance */}
        <Card title="Sector Performance">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Returns by sector</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sectorPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="sector" />
              <YAxis />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="return" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Volatility Index */}
        <Card title="Volatility Index">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Weekly volatility trend</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={volatilityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
              <Line
                type="monotone"
                dataKey="volatility"
                stroke="#82ca9d"
                strokeWidth={2}
                name="Volatility %"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Growth Trend */}
        <Card title="Growth Trend">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Monthly portfolio growth</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
              <Line type="monotone" dataKey="growth" stroke="#8884d8" strokeWidth={2} name="Growth %" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}
