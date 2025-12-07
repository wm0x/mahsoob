import React from "react";
import { CarouselPlugin } from "./carusel/carousel";
import { cn } from "@/lib/utils";
import { Highlighter } from "./highlighter";

function LatestUpdates() {
  return (
    <div
      className="relative flex flex-col size-full items-center justify-center rounded-2xl   "
      dir="rtl"
    >
      <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:15px_15px]",
            "[background-image:radial-gradient(#1d1d1d_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#1d1d1d_1px,transparent_1px)]",
            "[mask-image:radial-gradient(circle,rgba(0,0,0,.3)_20%,rgba(0,0,0,0)_100%)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex rounded-2xl items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)] bg-[#1d1d1d]"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mt-15 md:mt-5 lg:mt-32 text-center lg:pt-32">
        <Highlighter action="underline" color="#f54900">
          <span className="mr-2 text-center mb-7 mx-auto p-4 text-xl md:text-3xl from-[#f08700] to-[#ffedd4] bg-clip-text text-black font-bold">
          آراء من مؤسسين وفِرق استخدموا محسوب
          </span>
        </Highlighter>
        <div className="carousel text-center mt-10">
          <CarouselPlugin />
        </div>
      </div>
    </div>
  );
}

export default LatestUpdates;
