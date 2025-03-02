import React from "react";
import EachMovie from "../EachMovie/EachMovie";

function MoviePlace({
  Data,
  all,
  movie,
  serie,
  favorite,
  FavoriteMovies,
  searchValue,
}) {
  const filteredData = Data.filter((m) =>
    m.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <>
      <h1 className="text-white text-[32px] mt-[40px] mb-[32px]">
        {all && searchValue.length === 0 && "Recommended for you"}
        {movie && searchValue.length === 0 && "Movies"}
        {serie && searchValue.length === 0 && "TV series"}
        {searchValue.length > 0 && "Results"}
      </h1>
      <div className="w-full auto pr-[36px] justify-between flex flex-wrap">
        {searchValue.length > 0
          ? filteredData.map((movie) => (
              <EachMovie
                movie={movie}
                key={movie.title}
                FavoriteMovies={FavoriteMovies}
              />
            ))
          : all &&
            Data.map((movie) => (
              <EachMovie
                movie={movie}
                key={movie.title}
                FavoriteMovies={FavoriteMovies}
              />
            ))}
        {searchValue.length === 0 &&
          movie &&
          Data.filter((movie) => movie.category === "Movie").map((movie) => (
            <EachMovie
              movie={movie}
              key={movie.title}
              FavoriteMovies={FavoriteMovies}
            />
          ))}
        {searchValue.length === 0 &&
          serie &&
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
