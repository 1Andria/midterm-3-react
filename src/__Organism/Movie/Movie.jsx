import React, { useState } from "react";
import SideHeader from "../../__Molecule/SideHeader/SideHeader";
import Search from "../../__Atom/Search/Search";
import SwiperCont from "../../__Molecule/Swiper/Swiper";
import MoviePlace from "../../__Molecule/MoviePlace/MoviePlace";

function Movie({ Data }) {
  const [all, setAll] = useState(true);
  const [movie, setMovie] = useState(false);
  const [series, setSeries] = useState(false);
  function ToAll() {
    setAll(true);
    setMovie(false);
    setSeries(false);
  }
  function ToMovie() {
    setAll(false);
    setMovie(true);
    setSeries(false);
  }
  function ToSeries() {
    setAll(false);
    setMovie(false);
    setSeries(true);
  }
  return (
    <>
      <div className="pl-[32px] w-full h-screen overflow-y-auto bg-[#10141E] gap-[36px] justify-center  flex pt-[27px]">
        <SideHeader ToAll={ToAll} ToMovie={ToMovie} ToSeries={ToSeries} />
        <div className="max-w-[1260px] w-full flex flex-col  ">
          <Search />
          {/* <SwiperCont Data={Data} /> */}
          <MoviePlace Data={Data} all={all} movie={movie} serie={series} />
        </div>
      </div>
    </>
  );
}

export default Movie;
