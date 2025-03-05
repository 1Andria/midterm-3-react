import React, { useState } from "react";
import MovieIcon from "../../assets/Movie.png";
import Person from "../../assets/Person.png";
import { All } from "../../Icons/All";
import { MovieIconSvg } from "../../Icons/Movies";
import { SeriesSvg } from "../../Icons/Series";
import { BookMarkedSvg } from "../../Icons/BookMarked";

function SideHeader({ ToSeries, ToMovie, ToAll, ToFavorite }) {
  const [active, setActive] = useState(1);
  function AllClick() {
    ToAll();
    setActive(1);
  }

  function MovieClick() {
    ToMovie();
    setActive(2);
  }
  function SeriesClick() {
    ToSeries();
    setActive(3);
  }
  function FavoriteClick() {
    ToFavorite();
    setActive(4);
  }
  return (
    <>
      <div className=" max-lg:pr-[20px] max-lg:pl-[20px] max-lg:w-full max-lg:h-[72px] max-lg:flex-row pt-[35px] pb-[35px] w-[96px] h-[760px] rounded-[20px] bg-[#161D2F] flex flex-col items-center justify-between max-mm:rounded-[0px]">
        <div className=" flex max-lg:flex-row max-lg:w-full flex-col items-center max-lg:gap-[0px] gap-[60px]">
          <img
            className="w-[32px] max-mm:w-[25px] max-mm:h-[20px] h-[25px]"
            src={MovieIcon}
            alt="MovieIcon"
          />
          <div className=" flex flex-col max-lg:justify-center max-lg:flex-row max-lg:w-full gap-[30px]">
            <div className="cursor-pointer" onClick={AllClick}>
              <All isActive={active === 1} />
            </div>
            <div onClick={MovieClick} className="cursor-pointer">
              <MovieIconSvg isActive={active === 2} />
            </div>
            <div onClick={SeriesClick} className="cursor-pointer">
              <SeriesSvg isActive={active === 3} />
            </div>
            <div onClick={FavoriteClick} className="cursor-pointer">
              <BookMarkedSvg isActive={active === 4} />
            </div>
          </div>
        </div>
        <img
          src={Person}
          alt="person"
          className="max-mm:w-[24px] max-mm:h-[24px]"
        />
      </div>
    </>
  );
}

export default SideHeader;
