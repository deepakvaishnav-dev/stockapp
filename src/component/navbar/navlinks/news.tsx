import { useState, useEffect, useRef, useCallback } from "react"
import Card from "../../card-table/card"
import Button from "../../card-table/button"

// TypeScript interfaces
interface NewsItem {
  id: number
  title: string
  description: string
  category: string
  image: string
  date: string
  url: string
}

interface ApiNewsItem {
  title: string
  description: string
  urlToImage: string
  publishedAt: string
  url: string
}

const categories = ["All", "Global Markets", "Technology", "Finance"]

// Function to categorize news based on keywords
const categorizeNews = (title: string, description: string): string => {
  const lowerTitle = title.toLowerCase()
  const lowerDesc = description.toLowerCase()

  const techKeywords = ['tech', 'software', 'ai', 'startup', 'internet', 'digital', 'computer', 'mobile', 'app']
  const financeKeywords = ['bank', 'interest', 'economy', 'currency', 'rupee', 'dollar', 'investment', 'fund', 'loan', 'credit', 'stock', 'bond', 'market']

  if (techKeywords.some(keyword => lowerTitle.includes(keyword) || lowerDesc.includes(keyword))) {
    return "Technology"
  } else if (financeKeywords.some(keyword => lowerTitle.includes(keyword) || lowerDesc.includes(keyword))) {
    return "Finance"
  } else {
    return "Global Markets"
  }
}

// Function to format date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

  if (diffInHours < 1) return "Less than an hour ago"
  if (diffInHours === 1) return "1 hour ago"
  if (diffInHours < 24) return `${diffInHours} hours ago`
  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays === 1) return "1 day ago"
  return `${diffInDays} days ago`
}

export default function NewsPage() {
  const [newsArticles, setNewsArticles] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [totalResults, setTotalResults] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)

  const fetchNews = useCallback(async (pageNum: number, append: boolean = false) => {
    try {
      if (!append) setLoading(true)
      else setLoadingMore(true)
      setError(null)

      const response = await fetch(`https://newsapi.org/v2/everything?q=finance+technology+business&sortBy=publishedAt&pageSize=20&page=${pageNum}&apiKey=ce804aaf3cc94019bc0e0c0a11da19a2`)
      if (!response.ok) {
        throw new Error('Failed to fetch news')
      }
      const data = await response.json()
      const articles: ApiNewsItem[] = data.articles

      if (!append) {
        setTotalResults(data.totalResults)
      }

      const mappedNews: NewsItem[] = articles.map((item, index) => ({
        id: append ? newsArticles.length + index + 1 : index + 1,
        title: item.title,
        description: item.description,
        category: categorizeNews(item.title, item.description),
        image: item.urlToImage,
        date: formatDate(item.publishedAt),
        url: item.url
      }))

      if (append) {
        setNewsArticles(prev => [...prev, ...mappedNews])
      } else {
        setNewsArticles(mappedNews)
      }

      if (newsArticles.length + mappedNews.length >= data.totalResults) {
        setHasMore(false)
      }
    } catch (err) {
      setError('Failed to load news')
      console.error('Error fetching news:', err)
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }, [newsArticles.length])

  useEffect(() => {
    fetchNews(1, false)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current
        if (scrollTop + clientHeight >= scrollHeight - 100 && !loadingMore && hasMore) {
          setPage(prev => prev + 1)
          fetchNews(page + 1, true)
        }
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [loadingMore, hasMore, page, fetchNews])

  const filteredNews =
    selectedCategory === "All" ? newsArticles : newsArticles.filter((article) => article.category === selectedCategory)

  if (loading && page === 1) {
    return (
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Market News</h1>
        <p className="text-gray-700 dark:text-gray-300">Latest updates from the stock market and financial world</p>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </div>
    )
  }

  if (error && newsArticles.length === 0) {
    return (
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Market News</h1>
        <p className="text-gray-700 dark:text-gray-300">Latest updates from the stock market and financial world</p>
        <div className="flex justify-center items-center h-64">
          <p className="text-red-500 text-lg">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="p-6 space-y-6 overflow-y-auto h-screen">
      <h1 className="text-2xl font-bold">Market News</h1>
      <p className="text-gray-700 dark:text-gray-300">Latest updates from the stock market and financial world ({newsArticles.length} of {totalResults} articles loaded)</p>

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
            <div className="aspect-video overflow-hidden bg-gray-200 cursor-pointer" onClick={() => window.open(article.url, '_blank')}>
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
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 cursor-pointer hover:text-blue-600" onClick={() => window.open(article.url, '_blank')}>{article.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{article.description}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Loading Spinner for Infinite Scroll */}
      {loadingMore && (
        <div className="flex justify-center items-center py-6">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  )
}
