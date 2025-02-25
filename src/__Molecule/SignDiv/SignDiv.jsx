import React from "react";
import Movie from "../../assets/Movie.png";
import Input from "../../__Atom/Input/Input";
import Btn from "../../__Atom/Btn/Btn";
import { useForm } from "react-hook-form";
import { SignSchema } from "../../Schemas/SignSchema";
import { yupResolver } from "@hookform/resolvers/yup";

function SignDiv({ goSign }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignSchema),
  });

  const onSubmit = (data) => {
    goSign();
    const Information = {
      email: data.email,
      password: data.password,
    };
    localStorage.setItem("information", JSON.stringify(Information));
  };
  return (
    <>
      <div className="  w-full h-screen bg-[#10141E] gap-[80px] flex flex-col justify-center items-center pl-[10px] pr-[10px]">
        <img src={Movie} alt="MovieIcon" />
        <div className=" max-w-[400px]  flex flex-col justify-between p-[32px]  w-full h-[373px] bg-[#161D2F] rounded-[20px]">
          <h1 className="text-white text-[32px]">Login</h1>
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
            <Input
              placeholder="Repeat Password"
              register={register}
              regName="RepPassword"
              errors={errors}
              max={17}
              type="password"
            />
            <Btn btnText="Create an account" />
          </form>
          <div className="w-full flex justify-center">
            <h3 className="text-white text-[15px]">
              Already have an account?{" "}
              <span
                onClick={goSign}
                className="cursor-pointer text-[#FC4747] text-[15px]"
              >
                Login
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignDiv;
