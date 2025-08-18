import React, { useState, useEffect } from 'react';
import axios from 'axios';


const NewsViewer = () => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const DEFAULT_TOPIC = 'latest';
  const STORAGE_KEY = 'cached_news';
  const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000;
  const number = 120345687

  const fetchNews = async (searchQuery = DEFAULT_TOPIC, saveToCache = true) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&apiKey=${API_KEY}`
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
      console.error('Error fetching news:', error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cache = localStorage.getItem(STORAGE_KEY);
    if (cache) {
      const { timestamp, articles: cachedArticles, query: cachedQuery } = JSON.parse(cache);
      const now = Date.now();
      if (now - timestamp < CACHE_EXPIRY_MS) {
        console.log('✅ Loaded news from cache');
        setArticles(cachedArticles);
        setQuery(cachedQuery || '');
        return;
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    fetchNews();
  }, []);

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
        {number.toLocaleString()}
          {articles.map((article, index) => (
            <li key={index} className="article-item">
              <h3>{article.title}</h3>
              <p>
                <strong>{article.source.name}</strong> -{' '}
                {new Date(article.publishedAt).toLocaleString()}
              </p>
              {article.urlToImage && (
                <img src={article.urlToImage} alt="news" />
              )}
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
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
