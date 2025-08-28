import React, { useState, useEffect } from "react";
import axios from "axios";

const RickAndMortyList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch characters from API
  const fetchCharacters = async () => {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      setCharacters(res.data.results);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on first render
  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) return <p>Loading Rick & Morty characters...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛸 Rick & Morty Characters</h2>
      <div className="clown" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {characters.map((char) => (
          <div  
            key={char.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
              background: "#fafafa",
            }}
          >
            <img
              src={char.image}
              alt={char.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h4>{char.name}</h4>
            <p>Status: {char.status}</p>
            <p>Species: {char.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickAndMortyList;
