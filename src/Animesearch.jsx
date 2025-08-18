import React, { useEffect, useState } from 'react';

const animeKeywords = ['Naruto', 'One Piece', 'Bleach', 'Demon Slayer', 'Jujutsu Kaisen'];

function Animesearch() {
  const [animeList, setAnimeList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimeByKeywords = async () => {
      try {
        const responses = await Promise.all(
          animeKeywords.map(async (title) => {
            const res = await fetch(
              `https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(title)}`
            );
            const data = await res.json();
            return data.data?.[0]; // Get top result per search
          })
        );

        const cleaned = responses.filter(Boolean); // Remove any undefined/null
        setAnimeList(cleaned);
      } catch (err) {
        console.error('Failed to fetch anime:', err);
        setError('Something went wrong while loading anime.');
      }
    };

    fetchAnimeByKeywords();
  }, []);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!animeList.length) return <p>Loading anime results...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>🎌 Auto-Loaded Anime Results</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {animeList.map((anime) => {
          const attr = anime.attributes;

          return (
            <div
              key={anime.id}
              style={{
                width: 300,
                border: '1px solid #ccc',
                borderRadius: 10,
                padding: 15,
                background: '#f5f5f5',
              }}
            >
              <h3>{attr.titles.en_jp || attr.titles.en || attr.titles.ja_jp}</h3>

              {attr.posterImage?.medium && (
                <img
                  src={attr.posterImage.medium}
                  alt="Poster"
                  style={{ width: '100%', borderRadius: 6 }}
                />
              )}

              <p><strong>Synopsis:</strong> {attr.synopsis?.substring(0, 150)}...</p>
              <p><strong>Episodes:</strong> {attr.episodeCount || 'N/A'}</p>
              <p><strong>Status:</strong> {attr.status}</p>
              <p><strong>Type:</strong> {attr.showType}</p>
              <p><strong>Rating:</strong> {attr.averageRating || 'N/A'}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Animesearch;
