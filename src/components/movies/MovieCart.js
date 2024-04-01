import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieCart = ({ item }) => {
  const { poster_path, title, release_date, vote_average, id } = item;
  const navigate = useNavigate();
  return (
    <div className=" rounded-lg p-3 bg-slate-800 text-white">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="rounded-lg w-full h-[250px] object-cover"
      />
      <div className="flex flex-col">
        <div className="my-4 font-bold h-[48px]">{title}</div>
        <div className="flex justify-between items-center opacity-60 mb-5 text-[13px] font-[400] ">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <div className="">
          <Button onClick={() => navigate(`/movie/${id}`)} full>
            Watch now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCart;

export const MovieCartSkeletion = () => {
  return (
    <div className=" rounded-lg p-3 bg-slate-800 text-white">
      <LoadingSkeleton
        width="100%"
        height="250px"
        radius="8px"
      ></LoadingSkeleton>
      <div className="flex flex-col">
        <div className="my-4 font-bold h-[48px]">
          <LoadingSkeleton
            width="100%"
            height="48px"
            radius="8px"
          ></LoadingSkeleton>
        </div>
        <div className="flex justify-between items-center opacity-60 mb-5 text-[13px] font-[400] ">
          <span>
            <LoadingSkeleton
              width="60px"
              height="30px"
              radius="8px"
            ></LoadingSkeleton>
          </span>
          <span>
            <LoadingSkeleton
              width="60px"
              height="30px"
              radius="8px"
            ></LoadingSkeleton>
          </span>
        </div>
        <div className="">
          <LoadingSkeleton
            width="100%"
            height="40px"
            radius="8px"
          ></LoadingSkeleton>
        </div>
      </div>
    </div>
  );
};
