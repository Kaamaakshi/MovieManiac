import React from "react";
import "./App.css";
import Fire from "./assets/fire.png";

import Party from "./assets/partying-face.png";
import Star from "./assets/glowing-star.png";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <MovieList type="popular" Title="Popular Movies" emoji={Fire} />
        <MovieList type="toprated" Title="Top Rated Movies" emoji={Star} />
        <MovieList type="upcoming" Title="Upcoming Movies" emoji={Party} />
      </main>
    </div>
  );
};

export default App;
