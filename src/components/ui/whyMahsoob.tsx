import { cn } from "@/lib/utils";
import React from "react";
import { LayoutGridDemo } from "./layoutgrid";
import { Highlighter } from "./highlighter";

export default function WhyMahsoob() {
  return (
    <div>
      <div className="relative flex flex-col rounded-2xl  pt-20 ">
        <div className="absolute inset-0 z-10 overflow-hidden ">
          <div
            className={cn(
              "absolute inset-0 ",
              "[background-size:15px_15px]",
              "[background-image:radial-gradient(#1d1d1d_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#1d1d1d_1px,transparent_1px)]",
              "[mask-image:radial-gradient(circle,rgba(0,0,0,.3)_20%,rgba(0,0,0,0)_100%)]",
              "mask-image-[radial-gradient(circle,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)]",
              "mask-repeat-no-repeat mask-position-center "
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex rounded-2xl items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)] bg-[#1d1d1d] "></div>
        </div>
        <div
          className=" h-screen mt-2 z-[40] md:text-5xl text-gray-800 w-full rounded-2xl "
          dir="rtl"
        >
          <div className="pointer-events-none absolute top-0 left-0 w-full h-8 rounded-2xl shadow-[0_-8px_12px_rgba(0,0,0,0.1)] z-10" />

          <div className="flex mx-auto lg:items-start font-black lg:justify-start rounded-full p-2 text-xl  text-[#1d1d1d] w-fit lg:mr-53 md:mr-10 mt-20">
            <Highlighter action="circle" color="#f54900">
              <span className="mr-2 bg-gradient-to-r p-4 from-gray-800 to-slate-950 bg-clip-text text-transparent text-2xl md:text-5xl">
                ليش محـسـوب ؟
              </span>
            </Highlighter>

            <img
              src="img/arrow.webp"
              alt=""
              className=" mr-40 mt-10 size-10 absolute rotate-180 "
            />
            <span className=" absolute text-xs mt-20 mr-12 text-center md:mt-20 md:mr-55 md:-rotate-0">
              اضغط على الايقونات <br />
              لمشاهدة التفاصيل
            </span>
          </div>
          <div className="relative w-full h-screen">
            <div className="absolute w-full h-full">
              <LayoutGridDemo />
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}
