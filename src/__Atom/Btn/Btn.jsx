import React from "react";

function Btn({ btnText, onClick }) {
  return (
    <>
      <div className="max-w-[336px] h-[48px] rounded-[6px]">
        <button
          onClick={onClick}
          type="submit"
          className="w-full h-full  rounded-[6px] bg-[#FC4747] flex justify-center items-center text-white text-[15px] cursor-pointer hover:bg-white hover:text-[#10141E]  "
        >
          {btnText}
        </button>
      </div>
    </>
  );
}

export default Btn;
