import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Favorite from "../../assets/favorite.svg";
import Start from "../../assets/Shape.png";
import MovieCategory from "../../assets/Movies.svg";
import SerieCategory from "../../assets/Series.svg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
function SwiperCont({ Data }) {
  const [hover, setHover] = useState(null);

  return (
    <>
      <div className="w-full h-auto flex flex-col gap-[25px] mt-[35px]">
        <h1 className="text-[32px] text-white">Trending</h1>
        <div className="w-[1350px] overflow-x-hidden h-[230px]  ">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            className="w-full h-full"
          >
            {Data.filter((movie) => movie.isTrending).map((movie) => (
              <SwiperSlide key={movie.title}>
                <div
                  onMouseEnter={() => setHover(movie.title)}
                  onMouseLeave={() => setHover(null)}
                  className="w-full cursor-pointer pt-[16px] pr-[24px] pl-[24px] pb-[24px]  h-full rounded-lg flex flex-col justify-between "
                  style={{
                    opacity: hover === movie.title ? 0.8 : 1,
                    backgroundImage: `url(${movie.thumbnail.trending.small})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="w-full flex justify-end">
                    <div className="w-[32px] flex justify-center items-center h-[32px] rounded-[50%] bg-[rgba(0,0,0,0.5)]">
                      <img src={Favorite} alt="Favorite" />
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <div
                      className={`w-[117px] justify-evenly flex items-center h-[48px] rounded-[28px] bg-[rgba(0,0,0,0.5)] ${
                        hover === movie.title ? "opacity-[1]" : "opacity-[0]"
                      }`}
                    >
                      <img src={Start} alt="Start_btn" />
                      <h3 className="text-[18px] text-white">Play</h3>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-[3px]">
                    <div className="flex items-center gap-[7px] ">
                      <p className="text-[15px] text-white">{movie.year}</p>
                      <div className="w-[3px] h-[3px] rounded-[50%] bg-white"></div>
                      <img
                        src={
                          movie.category === "Movie"
                            ? MovieCategory
                            : SerieCategory
                        }
                        className="w-[12px] h-[12px] opacity-[0.7]"
                      />
                      <p className="text-[15px] text-white">
                        {movie.category === "Movie" ? "Movie" : "TV Series"}
                      </p>
                      <div className="w-[3px] h-[3px] rounded-[50%] bg-white"></div>
                      <p className="text-[15px] text-white">{movie.rating}</p>
                    </div>
                    <h1 className="text-[24px] text-white">{movie.title}</h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SwiperCont;
