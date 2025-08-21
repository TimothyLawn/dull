import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsViewer = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "2e6aacdc74c3459ab3444a42e804131b";
  const DEFAULT_TOPIC = "latest"; // We'll use this as default text search
  const STORAGE_KEY = "cached_news";
  const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000;

  const fetchNews = async (searchQuery = DEFAULT_TOPIC, saveToCache = true) => {
    setLoading(true);
    try {
     const response = await axios.get(
  `https://api.worldnewsapi.com/search-news?text=${encodeURIComponent(searchQuery)}&language=en`, {
    headers: {
      "x-api-key": API_KEY
    }
  }
);


      const fetched = response.data.news || [];
      setArticles(fetched);

      if (saveToCache) {
        const cache = {
          timestamp: Date.now(),
          articles: fetched,
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

  useEffect(() => {
    const cache = localStorage.getItem(STORAGE_KEY);
    if (cache) {
      const { timestamp, articles: cachedArticles, query: cachedQuery } =
        JSON.parse(cache);
      if (Date.now() - timestamp < CACHE_EXPIRY_MS) {
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

  useEffect(() => {
    if (query.trim().length < 3) return;

    const timer = setTimeout(() => {
      fetchNews(query, false);
    }, 600);

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
                <strong>{article.source_country || "Unknown source"}</strong>{" "}
                – {new Date(article.publish_date).toLocaleString()}
              </p>
              {article.image && (
                <img
                  src={article.image}
                  alt="news"
                  style={{ maxWidth: "100%" }}
                />
              )}
              <p>{article.summary || article.text}</p>
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
