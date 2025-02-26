import React from "react";
import MovieIcon from "../../assets/Movie.png";
import AllCategory from "../../assets/All.svg";
import Movies from "../../assets/Movies.svg";
import Series from "../../assets/Series.svg";
import BookMarked from "../../assets/Bookmarked.svg";
import Person from "../../assets/Person.png";

function SideHeader({ ToSeries, ToMovie, ToAll, ToFavorite }) {
  return (
    <>
      <div className="pt-[35px] pb-[35px] w-[96px] h-[760px] rounded-[20px] bg-[#161D2F] flex flex-col items-center justify-between">
        <div className=" flex flex-col items-center gap-[60px]">
          <img className="w-[32px] h-[25px]" src={MovieIcon} alt="MovieIcon" />
          <div className=" flex flex-col gap-[30px]">
            <img
              src={AllCategory}
              alt="All"
              className="cursor-pointer"
              onClick={ToAll}
            />
            <img
              src={Movies}
              alt="Movies"
              className="cursor-pointer"
              onClick={ToMovie}
            />
            <img
              src={Series}
              alt="TVseries"
              className="cursor-pointer"
              onClick={ToSeries}
            />
            <img
              src={BookMarked}
              onClick={ToFavorite}
              alt="BookMarked"
              className="cursor-pointer"
            />
          </div>
        </div>
        <img src={Person} alt="" />
      </div>
    </>
  );
}

export default SideHeader;
