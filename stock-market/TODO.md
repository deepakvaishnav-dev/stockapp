# TODO for NewsPage Component Update

## Steps to Complete
- [x] Define TypeScript interfaces for API response and NewsItem
- [x] Add useState hooks for news data, loading state, and error handling
- [x] Implement useEffect to fetch data from the API on component mount
- [x] Create fetch function with error handling and data mapping (including category derivation based on keywords)
- [x] Update UI to display loading spinner while fetching
- [x] Update UI to show error message if API fails
- [x] Ensure category filtering works with dynamic data
- [x] Replace API with NewsAPI (working API)
- [x] Add infinite scroll functionality (load 20 initially, fetch next 20 on scroll to bottom)
- [x] Show loading spinner at bottom during infinite scroll
- [x] Add click functionality to open full news article in new tab
- [ ] Test the component for responsiveness and functionality (dev server running on http://localhost:5174/)
