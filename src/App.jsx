import React from 'react';
import Header from './features/Header';
import Dullnews from './features/dullnews';
function App() {
  return (
    <div className="parent-container">
      <Header />
      <Dullnews />
      {/* Other content can go here */}
    </div>
  );
}
export default App;
