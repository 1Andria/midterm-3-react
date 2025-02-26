import React from "react";
import EachMovie from "../EachMovie/EachMovie";

function MoviePlace({ Data, all, movie, serie, favorite, FavoriteMovies }) {
  return (
    <>
      <h1 className="text-white text-[32px] mt-[40px] mb-[32px]">
        {all && "Recommended for you"}
        {movie && "Movies"}
        {serie && "TV series"}
      </h1>
      <div className="w-full auto pr-[36px] justify-between flex flex-wrap">
        {all &&
          Data.map((movie) => (
            <EachMovie
              movie={movie}
              key={movie.title}
              FavoriteMovies={FavoriteMovies}
            />
          ))}
        {movie &&
          Data.filter((movie) => movie.category === "Movie").map((movie) => (
            <EachMovie
              movie={movie}
              key={movie.title}
              FavoriteMovies={FavoriteMovies}
            />
          ))}
        {serie &&
          Data.filter((movie) => movie.category === "TV Series").map(
            (movie) => (
              <EachMovie
                movie={movie}
                key={movie.title}
                FavoriteMovies={FavoriteMovies}
              />
            )
          )}

        {favorite && (
          <div className="flex w-full flex-col">
            <h1 className="text-white text-[36px] mt-[-40px] mb-[32px]">
              BookMarked Movies
            </h1>
            <div className="w-full pr-[36px] justify-between flex flex-wrap">
              {favorite &&
                Data.filter(
                  (movie) => movie.isBookmarked && movie.category === "Movie"
                ).map((movie) => (
                  <EachMovie
                    movie={movie}
                    key={movie.title}
                    FavoriteMovies={FavoriteMovies}
                  />
                ))}
            </div>
            <h1 className="text-white text-[36px] mt-[-10px] mb-[32px]">
              BookMarked TV Series
            </h1>

            <div className=" w-full pr-[36px] justify-between flex flex-wrap">
              {favorite &&
                Data.filter(
                  (movie) =>
                    movie.isBookmarked && movie.category === "TV Series"
                ).map((movie) => (
                  <EachMovie
                    movie={movie}
                    key={movie.title}
                    FavoriteMovies={FavoriteMovies}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MoviePlace;
