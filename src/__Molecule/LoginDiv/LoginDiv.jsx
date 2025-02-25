import React, { useEffect, useState } from "react";
import Movie from "../../assets/Movie.png";
import Input from "../../__Atom/Input/Input";
import Btn from "../../__Atom/Btn/Btn";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../Schemas/LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";

function LoginDiv({ goSign, MovieSpace }) {
  const [found, setFound] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data) => {
    const storedInformation = JSON.parse(localStorage.getItem("information"));
    if (
      storedInformation &&
      storedInformation.email === data.email &&
      storedInformation.password === data.password
    ) {
      MovieSpace();
    } else {
      setFound(true);
      reset();
    }
  };
  return (
    <>
      <div className="  w-full h-screen bg-[#10141E] gap-[80px] flex flex-col justify-center items-center pl-[10px] pr-[10px]">
        <img src={Movie} alt="MovieIcon" />
        <div className=" max-w-[400px]  flex flex-col justify-between p-[32px]  w-full h-[373px] bg-[#161D2F] rounded-[20px]">
          <h1 className="text-white text-[32px]">Login</h1>
          {found && (
            <h3 className="text-red-500">
              User not found.try again or{" "}
              <span onClick={goSign} className=" cursor-pointer underline">
                sign up
              </span>
            </h3>
          )}
          <form
            className="flex flex-col gap-[24px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              placeholder="Email address"
              register={register}
              regName="email"
              errors={errors}
              max={30}
              type="email"
            />
            <Input
              placeholder="Password"
              register={register}
              regName="password"
              errors={errors}
              max={17}
              type="password"
            />
            <Btn btnText="Login to your account" />
          </form>
          <div className="w-full flex justify-center">
            <h3 className="text-white text-[15px]">
              Don't have an account?{" "}
              <span
                onClick={goSign}
                className="cursor-pointer text-[#FC4747] text-[15px]"
              >
                Sign Up
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginDiv;
