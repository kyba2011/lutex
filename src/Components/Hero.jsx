import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

function Hero() {
  return (
    <div data-bg="dark" className="h-256 w-full bg-teal-dark ">
      <div className="flex flex-col justify-between w-full h-full bg-[url('/hero-bg.png')] bg-cover bg-center pb-12.5 pt-55 xl:pt-56 2xl:pt-67.25 px-20">
        <div className="flex justify-between">
          <h1 className="text-[90px] font-semibold  text-white font-[Manrope] max-w-186.5 w-full tracking-tighter">Дом, в котором уютно с Любимым текстилем</h1>

          <p className="text-white mt-10 text-end max-w-115 w-full font-[Manrope]  font-normal text-[22px] tracking-tight">
            Постельное бельё и трикотаж из 100% хлопка от производителя
            с 20-летним опытом
          </p>
        </div>
        <div className="flex justify-between">
          <div className="relative bg-white flex items-center rounded-[10px] justify-between max-w-157.5 w-full h-50 p-7.5 pr-26">
            <img src="/hero-iimg.png" alt="" className="w-67.5 h-35 " />
            <p className="text-[22px] w-36 font-normal">Постельное белье</p>

            <a href="" className="absolute flex w-12.5 h-12.5 pt-0.5 rounded-full bg-teal-dark justify-center items-center bottom-7.5 right-7.5">
              <IoIosArrowRoundBack className="w-7.5 h-7.5 text-[#D9B46C] z-10 -rotate-135" />
            </a>

          </div>
          <div className="relative bg-white flex items-center rounded-[10px] justify-between max-w-157.5 w-full h-50 p-7.5 pr-26">
            <img src="/hero-img.png" alt="" className="w-67.5 h-35 " />
            <p className="text-[22px] w-36 font-normal">Трикотаж</p>
            <a href="" className="absolute flex w-12.5 h-12.5 pt-0.5 rounded-full bg-teal-dark justify-center items-center bottom-7.5 right-7.5">
              <IoIosArrowRoundBack className="w-7.5 h-7.5 text-[#D9B46C] z-10 -rotate-135" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
