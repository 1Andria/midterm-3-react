import React, { useRef } from "react";
import SearchIcon from "../../assets/search.png";

function Search({ setSearchValue }) {
  const InputRef = useRef(null);

  function FocusInput() {
    InputRef.current.focus();
  }
  return (
    <>
      <div className="w-full max-mm:pl-[10px]  h-[50px] max-mm:gap-[12px] gap-[24px] flex items-center   pr-[36px]">
        <img
          onClick={FocusInput}
          src={SearchIcon}
          className="w-[30px] max-mm:w-[24px] max-mm:h-[24px] h-[30px] cursor-pointer"
          alt="Search"
        />
        <input
          ref={InputRef}
          placeholder="Search for movies or TV series"
          className="w-full max-mm:text-[16px] h-full border-b  focus:border-b-[#5A698F] border-b-transparent  focus:outline-none text-white text-[24px]"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
      </div>
    </>
  );
}

export default Search;
