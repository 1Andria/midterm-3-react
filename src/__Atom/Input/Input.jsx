import React, { useState } from "react";

function Input({ placeholder, register, regName, errors, max, type }) {
  return (
    <>
      <div
        className={`maxw-[336px] focus-within:border-b-white relative h-[37px] border-b border-b-[#5A698F] ${
          errors[regName] ? "border-b-[#FC4747]" : "border-b-[#5A698F]"
        } `}
      >
        <input
          type={type}
          className="w-full text-white text-[15px] pl-[16px] h-full focus:outline-none"
          placeholder={placeholder}
          {...register(regName)}
          maxLength={max}
        />
        {errors[regName] && (
          <span className="text-[#FC4747] absolute right-[20px] ">
            {errors[regName].message}
          </span>
        )}
      </div>
    </>
  );
}

export default Input;
