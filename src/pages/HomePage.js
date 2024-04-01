import React, { useEffect } from "react";
import Banner from "../components/banner/Banner";
import SlideMovies from "../components/slide/SlideMovies";
import { tmdbApi } from "../config/config";
const HomePage = () => {
  return (
    <div className="text-white page-container p-5">
      <Banner></Banner>
      <SlideMovies
        title={"Now Playing"}
        api={tmdbApi.getMovieList("now_playing")}
      ></SlideMovies>
      <SlideMovies
        title={"Top rated movies"}
        api={tmdbApi.getMovieList("top_rated")}
      ></SlideMovies>
      <SlideMovies
        title={"Popular movies"}
        api={tmdbApi.getMovieList("popular")}
      ></SlideMovies>
    </div>
  );
};

export default HomePage;
