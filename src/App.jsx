import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard'; // adjust path as needed
import SignupForm from './features/Signup'; // adjust path as needed
import Dullnews from './features/dullnews'; // adjust path as needed
import Animesearch from "./Animesearch"; // adjust path as needed
import JikanAnimeList from './JikanAnimeList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/dullnews' element={<Dullnews />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/animesearch" element={<Animesearch />} />
        
      </Routes>
    </Router>
  );
}

export default App;


