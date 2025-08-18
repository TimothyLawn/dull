import React from 'react';
import Header from './features/Header';
import Dullnews from './features/dullnews';
import { Link } from 'react-router-dom';
import RickAndMortyList from './RickAndMortyList'; // adjust path as needed


const Dashboard = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/animesearch">Anime Search</Link>
          </li>
          <li>
            <Link to="/jikananimelist">Jikan Anime List</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>

      <Header />
      <Dullnews />
      <RickAndMortyList />  
    </div>
  );
};

export default Dashboard;
