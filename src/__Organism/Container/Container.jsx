import React, { useState } from "react";
import LoginDiv from "../../__Molecule/LoginDiv/LoginDiv";
import SignDiv from "../../__Molecule/SignDiv/SignDiv";

function Container() {
  const [login, setLogin] = useState(true);
  const [sign, setSign] = useState(false);
  function goSign() {
    setLogin(!login);
    setSign(!sign);
  }
  function MovieSpace() {
    setLogin(false);
    setSign(false);
  }
  return (
    <>
      {login && <LoginDiv goSign={goSign} MovieSpace={MovieSpace} />}
      {sign && <SignDiv goSign={goSign} />}
    </>
  );
}

export default Container;
