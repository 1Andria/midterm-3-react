import React from "react";

function Input({ placeholder, register, regName, errors, max }) {
  return (
    <>
      <div className="maxw-[336px] relative h-[37px] border-b border-b-[#5A698F] ">
        <input
          type="text"
          className="w-full text-white text-[15px] pl-[16px] h-full focus:outline-none"
          placeholder={placeholder}
          {...register(regName)}
          maxLength={max}
        />
        {errors[regName] && (
          <span className="text-red-500 absolute right-[20px] ">
            {errors[regName].message}
          </span>
        )}
      </div>
    </>
  );
}

export default Input;
