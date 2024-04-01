import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../config/config";
import MovieMeta from "../components/movies/MovieMeta";
const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbApi.getMovieDetail(movieId), fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title, overview, genres } = data;

  return (
    <div className="text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-40 "></div>
        <img
          src={tmdbApi.getImage(backdrop_path)}
          alt=""
          className="h-[600px] w-full object-cover"
        />
      </div>
      <div className="relative w-full max-w-[800px] h-[400px] mx-auto mb-10">
        <img
          src={tmdbApi.getImage(poster_path)}
          alt=""
          className="w-full h-full  object-cover rounded-lg -mt-[200px] z-50"
        />
      </div>
      <div className="">
        <h1 className="text-[40px] font-[700] flex items-center justify-center ">
          {title}
        </h1>
        <div className="flex justify-center items-center gap-x-10 my-10">
          {genres.length > 0 &&
            genres.map((item) => (
              <span
                key={item.id}
                className="text-[#7D6AFF] py-2 px-6 border border-[#7D6AFF] rounded-3xl"
              >
                {item.name}
              </span>
            ))}
        </div>
        <p className="max-w-[600px] text-center mx-auto mb-20">{overview}</p>
      </div>
      <MovieMeta type="credits"></MovieMeta>
      <MovieMeta type="videos"></MovieMeta>
      <MovieMeta type="similar"></MovieMeta>
    </div>
  );
};

export default MovieDetailPage;
