import React from "react";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../../config/config";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieCart from "./MovieCart";
const MovieMeta = ({ type = "video" }) => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbApi.getMovieMeta(movieId, type), fetcher);
  if (!data) return null;
  if (type === "credits") {
    const { cast } = data;
    if (!cast || cast.length <= 0) return null;
    return (
      <div className="max-w-[800px] w-full mx-auto">
        <h1 className="text-[40px] font-[600] flex items-center justify-center mb-10">
          Casts
        </h1>
        <div className="grid grid-cols-4 gap-x-6 mb-20">
          {cast?.slice(0, 4).map((item) => (
            <div key={item.id} className="">
              <img
                src={tmdbApi.getImage(item?.profile_path)}
                alt=""
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <span className="font-[600] text-[18px] py-3 flex  justify-center items-center">
                {item?.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    const { results } = data;
    if (!results || results.length <= 0) return null;
    if (type === "videos") {
      return (
        <div>
          <div className="flex flex-col gap-10">
            {results?.slice(0, 3).map((item) => (
              <div className="max-w-[800px] mx-auto w-full aspect-video">
                <iframe
                  width="864"
                  height="486"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-fill"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (type === "similar") {
      return (
        <div className="similar py-10 page-container">
          <h2 className="text-3xl font-medium mb-10">Similar movies</h2>
          <div className="movie-list">
            <Swiper
              grabCursor={"true"}
              spaceBetween={40}
              slidesPerView={"auto"}
            >
              {results.length > 0 &&
                results.map((item) => (
                  <SwiperSlide key={item.id}>
                    <MovieCart item={item}></MovieCart>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      );
    }
  }
};

export default MovieMeta;
