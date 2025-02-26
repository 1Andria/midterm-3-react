import React, { useState } from "react";
import MovieCategory from "../../assets/Movies.svg";
import SerieCategory from "../../assets/Series.svg";
import Start from "../../assets/Shape.png";
import { FavoriteSvg } from "../../Icons/Favorite";

function EachMovie({ movie, FavoriteMovies }) {
  const [hover, setHover] = useState(null);

  return (
    <>
      <div
        className="flex flex-col  mb-[30px] cursor-pointer"
        onMouseEnter={() => setHover(movie.title)}
        onMouseLeave={() => setHover(null)}
      >
        <div
          className="w-[280px] pr-[16px] pt-[16px] h-[174px] rounded-[8px]"
          style={{
            opacity: hover === movie.title ? 0.8 : 1,
            backgroundImage: `url(${movie.thumbnail.regular.small})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full flex justify-end">
            <button
              onClick={() => FavoriteMovies(movie.title)}
              className="w-[32px] flex justify-center items-center h-[32px] rounded-[50%] bg-[rgba(0,0,0,0.5)] cursor-pointer"
            >
              <div>
                <FavoriteSvg />
              </div>
            </button>
          </div>
          <div className="w-full flex justify-center mt-[20px]">
            <div
              className={`w-[117px] justify-evenly flex items-center h-[48px] rounded-[28px] bg-[rgba(0,0,0,0.5)] ${
                hover === movie.title ? "opacity-[1]" : "opacity-[0]"
              }`}
            >
              <img src={Start} alt="Start_btn" />
              <h3 className="text-[18px] text-white">Play</h3>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-[3px] mt-[8px]">
          <div className="flex items-center gap-[7px] ">
            <p className="text-[15px] text-white opacity-[0.75]">
              {movie.year}
            </p>
            <div className="w-[3px] h-[3px] rounded-[50%] opacity-[0.75] bg-white"></div>
            <img
              src={movie.category === "Movie" ? MovieCategory : SerieCategory}
              className="w-[12px] h-[12px] opacity-[0.75]"
            />
            <p className="text-[15px] opacity-[0.75] text-white">
              {movie.category === "Movie" ? "Movie" : "TV Series"}
            </p>
            <div className="w-[3px] h-[3px] opacity-[0.75] rounded-[50%] bg-white"></div>
            <p className="text-[15px] opacity-[0.75] text-white">
              {movie.rating}
            </p>
          </div>
          <h1 className="text-[24px] text-white">{movie.title}</h1>
        </div>
      </div>
    </>
  );
}

export default EachMovie;
