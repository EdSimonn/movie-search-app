import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Category from "./components/Category";

const API_KEY = process.env.OMDB_API_KEY

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState("");
  const [movie, setMovie] = useState([]);
  const [series, setSeries] = useState([]);

  const getMovieRequest = async (searchedMovies) => {
    const url = `https://www.omdbapi.com/?s=${searchedMovies}&apikey=${API_KEY}`;
    const categoryMovie = `https://www.omdbapi.com/?s=iron man&type=movie&apikey=${API_KEY}`;
    const categorySeries = `https://www.omdbapi.com/?s=big&type=series&apikey=${API_KEY}`;

    const res = await fetch(url);
    const response1 = await fetch(categoryMovie);
    const response2 = await fetch(categorySeries);

    const resJson = await res.json();
    const resJson1 = await response1.json();
    const resJson2 = await response2.json();

    if (resJson.Search) {
      setMovies(resJson.Search);
    }
    setMovie(resJson1.Search);
    setSeries(resJson2.Search);
  };

  useEffect(() => {
    getMovieRequest(searchedMovies);
  }, [searchedMovies]);

  return (
    <div className="">
      <Navbar />
      <Hero />
      <Search
        searchedMovies={searchedMovies}
        setSearchedMovies={setSearchedMovies}
      />
      <div className="-mt-8">
        <MovieList movies={movies} />
      </div>
      <div className="-mt-16">
        <Category movie={movie} series={series} />
      </div>
    </div>
  );
};

export default App;
