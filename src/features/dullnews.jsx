import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsViewer = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY ="7509742de02742988fcb2057102b67b0";
  const DEFAULT_TOPIC = "latest";
  const STORAGE_KEY = "cached_news";
  const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000;

  // Fetch function
  const fetchNews = async (searchQuery = DEFAULT_TOPIC, saveToCache = true) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(
          searchQuery
        )}&apiKey=${API_KEY}`
      );
      const fetchedArticles = response.data.articles;
      setArticles(fetchedArticles);

      if (saveToCache) {
        const cache = {
          timestamp: Date.now(),
          articles: fetchedArticles,
          query: searchQuery,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  // Load cached or default on first render
  useEffect(() => {
    const cache = localStorage.getItem(STORAGE_KEY);
    if (cache) {
      const { timestamp, articles: cachedArticles, query: cachedQuery } =
        JSON.parse(cache);
      const now = Date.now();
      if (now - timestamp < CACHE_EXPIRY_MS) {
        console.log("✅ Loaded news from cache");
        setArticles(cachedArticles);
        setQuery(cachedQuery || "");
        return;
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    fetchNews();
  }, []);

  // Debounced auto-search (only if query is 3+ chars)
  useEffect(() => {
    if (query.trim().length < 3) return; // skip short queries

    const timer = setTimeout(() => {
      fetchNews(query, false);
    }, 600); // debounce delay (600ms)

    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = () => {
    if (query.trim()) {
      fetchNews(query);
    }
  };

  return (
    <div className="news-container">
      <h2 className="news-header">🗞️ News Viewer</h2>

      <div className="news-search">
        <input
          type="text"
          placeholder="Search for news (e.g. bitcoin, AI)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading articles...</p>}
      {!loading && articles.length === 0 && <p>No articles found.</p>}

      {articles.length > 0 && (
        <ul className="article-list">
          {articles.map((article, index) => (
            <li key={index} className="article-item">
              <h3>{article.title}</h3>
              <p>
                <strong>{article.source.name}</strong> –{" "}
                {new Date(article.publishedAt).toLocaleString()}
              </p>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt="news"
                  style={{ maxWidth: "100%" }}
                />
              )}
              <p>{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more 🔗
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsViewer;
