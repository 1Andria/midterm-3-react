import React, { useState } from "react";
import LoginDiv from "../../__Molecule/LoginDiv/LoginDiv";
import SignDiv from "../../__Molecule/SignDiv/SignDiv";
import Data from "../../data.json";
import Movie from "../Movie/Movie";

function Container() {
  const [login, setLogin] = useState(true);
  const [sign, setSign] = useState(false);
  const [movies, setMovies] = useState(false);
  function goSign() {
    setLogin(!login);
    setSign(!sign);
  }
  function MovieSpace() {
    setLogin(false);
    setSign(false);
    setMovies(true);
  }

  return (
    <>
      {login && <LoginDiv goSign={goSign} MovieSpace={MovieSpace} />}
      {sign && <SignDiv goSign={goSign} />}
      {movies && <Movie Data={Data} />}
    </>
  );
}

export default Container;
