import React, { useRef } from "react";
import SearchIcon from "../../assets/search.png";

function Search() {
  const InputRef = useRef(null);

  function FocusInput() {
    InputRef.current.focus();
  }
  return (
    <>
      <div className="w-full h-[50px] gap-[24px] flex items-center  pr-[36px]">
        <img
          onClick={FocusInput}
          src={SearchIcon}
          className="w-[30px] h-[30px] cursor-pointer"
          alt="Search"
        />
        <input
          ref={InputRef}
          placeholder="Search for movies or TV series"
          className="w-full h-full border-b  focus:border-b-[#5A698F] border-b-transparent  focus:outline-none text-white text-[24px]"
        ></input>
      </div>
    </>
  );
}

export default Search;
