import { useState } from "react"
import Card from "../../card-table/card"
import Button from "../../card-table/button"

// Sample news data
const newsArticles = [
  {
    id: 1,
    title: "NIFTY 50 Reaches New All-Time High",
    description:
      "The NIFTY 50 index surged to a new all-time high, driven by strong performance in IT and financial sectors.",
    category: "Global Markets",
    image: "/img/stock-market-chart.png",
    date: "2 hours ago",
  },
  {
    id: 2,
    title: "Tech Stocks Rally on Strong Earnings",
    description:
      "Major technology companies report better-than-expected quarterly earnings, boosting investor confidence.",
    category: "Technology",
    image: "/img/technology-stocks.png",
    date: "4 hours ago",
  },
  {
    id: 3,
    title: "RBI Maintains Interest Rates",
    description:
      "The Reserve Bank of India keeps the repo rate unchanged at 6.5%, signaling a pause in the rate hike cycle.",
    category: "Finance",
    image: "/img/interest-rates.jpg",
    date: "6 hours ago",
  },
  {
    id: 4,
    title: "Oil Prices Surge on Supply Concerns",
    description: "Crude oil prices jump 3% amid concerns about global supply disruptions and geopolitical tensions.",
    category: "Global Markets",
    image: "/img/oil-prices-chart.png",
    date: "8 hours ago",
  },
  {
    id: 5,
    title: "Rupee Strengthens Against Dollar",
    description: "The Indian rupee appreciates to a 6-month high against the US dollar on strong FII inflows.",
    category: "Finance",
    image: "/img/currency-exchange.png",
    date: "10 hours ago",
  },
  {
    id: 6,
    title: "Startup Ecosystem Booms in India",
    description:
      "India sees record number of unicorn startups in 2024, attracting massive venture capital investments.",
    category: "Technology",
    image: "/img/startup-ecosystem.jpg",
    date: "12 hours ago",
  },
]

const categories = ["All", "Global Markets", "Technology", "Finance"]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredNews =
    selectedCategory === "All" ? newsArticles : newsArticles.filter((article) => article.category === selectedCategory)

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Market News</h1>
      <p className="text-gray-700 dark:text-gray-300">Latest updates from the stock market and financial world</p>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((article) => (
          <Card key={article.id} title="">
            <div className="aspect-video overflow-hidden bg-gray-200">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500">{article.date}</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">{article.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{article.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
