import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const BannerItem = ({ item }) => {
  const navigate = useNavigate();
  const { backdrop_path, title, id } = item;
  return (
    <div className="h-full w-full relative mb-10">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg z-5"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
        className="w-full h-full rounded-lg object-cover"
      />
      <div className="absolute bottom-5 left-5 z-10 w-full text-white">
        <h1 className="font-bold text-4xl ">{title}</h1>
        <div className="flex items-center gap-x-3 my-6">
          <span className="border border-white py-2 px-4 rounded-lg">
            Action
          </span>
          <span className="border border-white py-2 px-4 rounded-lg">
            Action
          </span>
          <span className="border border-white py-2 px-4 rounded-lg">
            Action
          </span>
        </div>
        <Button bgColor="primary" onClick={() => navigate(`/movie/${id}`)}>
          Watch
        </Button>
      </div>
    </div>
  );
};

export default BannerItem;
