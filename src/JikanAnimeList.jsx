import React, { useEffect, useState } from 'react';

const animeKeywords = ['Naruto', 'One Piece', 'Bleach', 'Demon Slayer', 'Jujutsu Kaisen'];

function JikanAnimeList() {
  const [animeList, setAnimeList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimeFromJikan = async () => {
      try {
        const results = await Promise.all(
          animeKeywords.map(async (title) => {
            const res = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(title)}&limit=1`);
            const data = await res.json();
            return data.data?.[0]; // Get the first search result
          })
        );

        setAnimeList(results.filter(Boolean)); // Remove nulls
      } catch (err) {
        console.error(err);
        setError('Failed to fetch data from Jikan API.');
      }
    };

    fetchAnimeFromJikan();
  }, []);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!animeList.length) return <p>Loading anime data from Jikan...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>🎌 Jikan Anime Search Results</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {animeList.map((anime) => (
          <div
            key={anime.mal_id}
            style={{
              width: 300,
              background: '#f4f4f4',
              border: '1px solid #ccc',
              borderRadius: 8,
              padding: 15,
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <h3>{anime.title}</h3>

            {anime.images?.jpg?.image_url && (
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                style={{ width: '100%', borderRadius: 6, marginBottom: 10 }}
              />
            )}

            <p><strong>Type:</strong> {anime.type}</p>
            <p><strong>Episodes:</strong> {anime.episodes}</p>
            <p><strong>Status:</strong> {anime.status}</p>
            <p><strong>Score:</strong> {anime.score || 'N/A'}</p>
            <p><strong>Start:</strong> {anime.aired?.from?.slice(0, 10) || 'N/A'}</p>
            <p><strong>End:</strong> {anime.aired?.to?.slice(0, 10) || 'Ongoing'}</p>

            <p><strong>Synopsis:</strong> {anime.synopsis?.substring(0, 150)}...</p>

            {anime.trailer?.url && (
              <p>
                <a href={anime.trailer.url} target="_blank" rel="noreferrer">
                  ▶ Watch Trailer
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default JikanAnimeList;
