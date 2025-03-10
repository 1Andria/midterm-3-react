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
  const foundNumber = filteredData.length;

  return (
    <>
      <h1 className="text-white max-mm:ml-[10px] max-mm:text-[20px] text-[32px] max-xl:mt-[0px] mt-[40px] max-mm:mb-[0px] mb-[32px]">
        {all && searchValue.length === 0 && "Recommended for you"}
        {movie && searchValue.length === 0 && "Movies"}
        {serie && searchValue.length === 0 && "TV series"}
        {searchValue.length > 0 &&
          `Found ${foundNumber} for  "${searchValue}"  `}
      </h1>
      <div className="w-full auto pr-[36px] max-lg:justify-center max-lg:gap-[20px] max-mm:gap-[15px] max-lg:pr-[0px] justify-start gap-[33px] flex flex-wrap">
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
          <div className="  max-mm:mt-[50px] max-mm:ml-[10px] max-mm:mr-[10px]  flex w-full flex-col">
            <h1 className="text-white max-mm:mb-[0px] max-mm:ml-[10px] max-mm:text-[20px] text-[36px] mt-[-40px] mb-[32px]">
              BookMarked Movies
            </h1>
            <div className="w-full max-lg:justify-center max-lg:gap-[20px] max-mm:gap-[15px] max-lg:pr-[0px] pr-[36px] justify-start gap-[20px] flex flex-wrap">
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
            <h1 className="text-white max-mm:mb-[0px] max-mm:mt-[20px] max-mm:text-[20px] text-[36px] mt-[-10px] mb-[32px] max-mm:ml-[10px]">
              BookMarked TV Series
            </h1>

            <div className="max-lg:justify-center max-lg:gap-[20px] max-mm:gap-[15px] max-lg:pr-[0px] w-full pr-[36px]  justify-start gap-[22px] flex flex-wrap">
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
