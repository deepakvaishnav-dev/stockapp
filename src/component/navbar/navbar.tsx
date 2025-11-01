import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Search, Menu, X, ChevronDown, LogOut, Settings, User } from "lucide-react"
import { useAuth } from "../../context/AuthContext"

// interface MarketIndex {
//   symbol: string
//   value: string
//   change: number
//   isPositive: boolean
// }

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { user, logout } = useAuth()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownOpen && !(event.target as Element).closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  // Mock market data
  // const marketIndices: MarketIndex[] = [
  //   { symbol: "NIFTY 50", value: "23,456.50", change: 1.24, isPositive: true },
  //   { symbol: "SENSEX", value: "77,890.25", change: 0.89, isPositive: true },
  //   { symbol: "DOW", value: "42,123.45", change: -0.45, isPositive: false },
  // ]

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Markets", href: "/markets" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "News", href: "/news" },
    { label: "Analytics", href: "/analytics" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="max-w-8xl px-2 sm:px-4 lg:px-6">
        {/* Main navbar container */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              📈
            </div>
            <span className="hidden sm:inline text-xl font-bold text-foreground">StockHub</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-blue-700 transition-colors rounded-md hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right section: Search, Market Summary, User */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center gap-2 bg-muted rounded-lg px-3 py-2 w-80">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search stocks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Market Summary Widget - Desktop */}
            {/* <div className="hidden xl:flex items-center gap-3 px-3 py-2 bg-muted rounded-lg">
              {marketIndices.slice(0, 2).map((index) => (
                <div key={index.symbol} className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-foreground">{index.symbol}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-medium text-foreground">{index.value}</span>
                    <span
                      className={`text-xs font-semibold ${
                        index.isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {index.isPositive ? "+" : ""}
                      {index.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div> */}

            {/* User Section */}
            {user ? (
              <div className="relative dropdown-container">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    {user.email.charAt(0).toUpperCase()}
                  </div>
                  <ChevronDown className="h-4 w-4 hidden sm:inline" />
                </button>
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
                    <div className="py-1">
                      <div className="px-4 py-2 text-sm text-muted-foreground">
                        {user.email}
                      </div>
                      <hr className="my-1" />
                      <button
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-muted"
                        onClick={() => {
                          logout();
                          setIsDropdownOpen(false);
                        }}
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Link to="/login" className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors">
                  Login
                </Link>
                <Link to="/signup" className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors">
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            {/* Mobile Search */}
            <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search stocks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Market Summary */}
            {/* <div className="bg-muted rounded-lg p-3 space-y-2">
              <p className="text-xs font-semibold text-foreground/60 uppercase">Market Summary</p>
              {marketIndices.map((index) => (
                <div key={index.symbol} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{index.symbol}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-foreground">{index.value}</span>
                    <span
                      className={`font-semibold ${
                        index.isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {index.isPositive ? "+" : ""}
                      {index.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div> */}

            {/* Mobile Auth Buttons */}
            {!user && (
              <div className="flex gap-2 pt-2">
                <Link
                  to="/login"
                  className="flex-1 px-4 py-2 text-sm font-medium border border-border bg-transparent hover:bg-muted rounded-lg transition-colors text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="flex-1 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
