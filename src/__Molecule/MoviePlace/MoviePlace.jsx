import React from "react";
import EachMovie from "../EachMovie/EachMovie";

function MoviePlace({ Data, all, movie, serie }) {
  return (
    <>
      <h1 className="text-white text-[32px] mt-[40px] mb-[32px]">
        Recommended for you
      </h1>
      <div className="w-full auto pr-[36px] justify-between flex flex-wrap">
        {all && Data.map((movie) => <EachMovie movie={movie} />)}
        {movie &&
          Data.filter((movie) => movie.category === "Movie").map((movie) => (
            <EachMovie movie={movie} />
          ))}
        {serie &&
          Data.filter((movie) => movie.category === "TV Series").map(
            (movie) => <EachMovie movie={movie} />
          )}
      </div>
    </>
  );
}

export default MoviePlace;
