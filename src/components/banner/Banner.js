import React from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetcher } from "../../config/config";
import BannerItem from "./BannerItem";
import "swiper/scss";
const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=fb93802a5f15fb2b3961b749c8c37496`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="banner h-[500px] page-container overflow-hidden">
      <Swiper grabCursor={true} slidesPerView={"auto"} pagination={true}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
