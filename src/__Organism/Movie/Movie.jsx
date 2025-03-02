import React, { useEffect, useState } from "react";
import SideHeader from "../../__Molecule/SideHeader/SideHeader";
import Search from "../../__Molecule/Search/Search";
import SwiperCont from "../../__Molecule/Swiper/Swiper";
import MoviePlace from "../../__Molecule/MoviePlace/MoviePlace";

function Movie({ Data }) {
  const [all, setAll] = useState(true);
  const [movie, setMovie] = useState(false);
  const [series, setSeries] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies"));
    if (storedMovies) {
      setMovies(storedMovies);
    } else {
      setMovies(Data);
      localStorage.setItem("movies", JSON.stringify(Data));
    }
  }, [Data]);

  function ToAll() {
    setAll(true);
    setMovie(false);
    setSeries(false);
    setFavorite(false);
  }
  function ToMovie() {
    setAll(false);
    setMovie(true);
    setSeries(false);
    setFavorite(false);
  }
  function ToSeries() {
    setAll(false);
    setMovie(false);
    setSeries(true);
    setFavorite(false);
  }
  function ToFavorite() {
    setAll(false);
    setMovie(false);
    setSeries(false);
    setFavorite(true);
  }
  function FavoriteMovies(title) {
    const updatedMovies = movies.map((m) =>
      m.title === title ? { ...m, isBookmarked: !m.isBookmarked } : m
    );
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  }
  console.log(searchValue);

  return (
    <>
      <div className="pl-[32px] w-full h-screen overflow-y-auto bg-[#10141E] gap-[36px] justify-center  flex pt-[27px]">
        <SideHeader
          ToAll={ToAll}
          ToMovie={ToMovie}
          ToSeries={ToSeries}
          ToFavorite={ToFavorite}
        />
        <div className="max-w-[1260px] w-full flex flex-col  ">
          <Search setSearchValue={setSearchValue} />
          {all && <SwiperCont Data={Data} FavoriteMovies={FavoriteMovies} />}
          <MoviePlace
            Data={movies}
            all={all}
            movie={movie}
            serie={series}
            favorite={favorite}
            FavoriteMovies={FavoriteMovies}
            searchValue={searchValue}
          />
        </div>
      </div>
    </>
  );
}

export default Movie;
