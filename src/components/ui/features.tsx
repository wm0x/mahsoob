"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Highlighter } from "./highlighter";
import { motion } from "framer-motion";
import { CardsCarouselDemo } from "./cardsCarouse";

export default function Features() {
  return (
    <div
      className="relative flex flex-col size-full items-center justify-center rounded-2xl    "
      dir="rtl"
    >
      <div className="absolute inset-0 z-10 overflow-hidden rounded-xl ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:15px_15px]",
            "[background-image:radial-gradient(#1d1d1d_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#1d1d1d_1px,transparent_1px)]",
            "[mask-image:radial-gradient(circle,rgba(0,0,0,.3)_20%,rgba(0,0,0,0)_100%)]",
            "mask-image-[radial-gradient(circle,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)]",
            "mask-repeat-no-repeat mask-position-center"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex rounded-2xl items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)] bg-[#1d1d1d] "></div>
      </div>
      <div
        className=" h-screen mt-2 z-[40] md:text-5xl text-gray-800 w-full rounded-2xl "
        dir="rtl"
      >
        <div className="flex mx-auto lg:items-start font-black lg:justify-start rounded-full p-2 text-xl  text-[#1d1d1d] w-fit lg:mr-53 md:mr-10 mt-50">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Highlighter action="highlight" color="#f54900">
              <div className="py-2">
                <span className="mr-2 bg-gradient-to-r p-4 text-3xl md:text-5xl from-[#ffedd4] to-[#ffedd4] bg-clip-text text-transparent">
                  مزايــا محـسـوب ؟
                </span>
              </div>
            </Highlighter>
          </motion.div>
        </div>
        <div className="z-[40]">
          <CardsCarouselDemo />
        </div>
      </div>
    </div>
  );
}
