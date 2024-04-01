import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../../config/config";
import Button from "../button/Button";
import MovieCart, { MovieCartSkeletion } from "../movies/MovieCart";

const SlideMovies = ({ title, api }) => {
  const { data, error } = useSWR(api, fetcher);
  const movies = data?.results || [];
  const isLoading = !data && !error;

  return (
    <div className="my-10">
      <h1 className="font-[600] text-[30px] mb-10">{title}</h1>
      <div className="movie-cart">
        {isLoading && (
          <>
            <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
              <SwiperSlide>
                <MovieCartSkeletion></MovieCartSkeletion>
              </SwiperSlide>
              <SwiperSlide>
                <MovieCartSkeletion></MovieCartSkeletion>
              </SwiperSlide>
              <SwiperSlide>
                <MovieCartSkeletion></MovieCartSkeletion>
              </SwiperSlide>
              <SwiperSlide>
                <MovieCartSkeletion></MovieCartSkeletion>
              </SwiperSlide>
              <SwiperSlide>
                <MovieCartSkeletion></MovieCartSkeletion>
              </SwiperSlide>
            </Swiper>
          </>
        )}
        {!isLoading && (
          <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
            {movies.length > 0 &&
              movies.map((item) => (
                <SwiperSlide key={item.id}>
                  <MovieCart item={item}></MovieCart>
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default SlideMovies;
