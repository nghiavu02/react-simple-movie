import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../config/config";
import MovieCart, { MovieCartSkeletion } from "../components/movies/MovieCart";
import ReactPaginate from "react-paginate";
const itemsPerPage = 20;
const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(tmdbApi.getMovieList("popular", nextPage));
  const { data, error } = useSWR(url, fetcher);
  const movies = data?.results || [];
  const loading = !data && !error;
  const handlSearch = () => {
    if (query) {
      setUrl(tmdbApi.getMovieSearch(query, nextPage));
    } else {
      setUrl(tmdbApi.getMovieList("popular", nextPage));
    }
  };
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const pageCount = Math.ceil(data?.total_results / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.total_results;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
  useEffect(() => {
    if (!data || !data.total_results) return;
    if (query === "") {
      setUrl(tmdbApi.getMovieList("popular", nextPage));
    } else {
      setUrl(tmdbApi.getMovieSearch(query, nextPage));
    }
  }, [nextPage]);
  console.log(nextPage, data);
  return (
    <div className="py-10 page-container">
      <div className="flex gap-x-5 items-center mb-5">
        <input
          type="text"
          className="bg-slate-800 p-4 text-white w-full outline-none rounded-lg"
          placeholder="Type here to search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="p-4 rounded-lg bg-primary text-white hover:opacity-80"
          onClick={handlSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {/* {loading && (
        <div className="w-10 h-10 border border-primary border-4 border-t-transparent mx-auto rounded-full animate-spin"></div>
      )} */}
      {loading && (
        <div className="grid grid-cols-4 gap-10">
          {loading &&
            new Array(itemsPerPage)
              .fill(0)
              .map((item) => <MovieCartSkeletion></MovieCartSkeletion>)}
        </div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieCart key={item.id} item={item}></MovieCart>
          ))}
      </div>
      <div className="mt-10 mx-auto flex justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination "
        />
      </div>
    </div>
  );
};

export default MoviesPage;
