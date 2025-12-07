"use client";
import React, { Suspense } from "react";
import { Spotlight } from "./spotlight";
import { cn } from "@/lib/utils";
import { PointerHighlight } from "./text-pointer-animation";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";


import { FaToggleOff } from "react-icons/fa6";
import { GiFootsteps } from "react-icons/gi";
import { Highlighter } from "./highlighter";
import { BorderBeam } from "./borderbeam";

export function Hero() {
  return (
    <div
      className="relative flex flex-col size-full items-center justify-center rounded-2xl  pt-20 "
      dir="rtl"
    >
      <div className="absolute inset-0 z-10 overflow-hidden rounded-xl -translate-y-20">
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
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)] bg-[#1d1d1d]"></div>
        <Spotlight />
      </div>

      <div className="relative w-full max-w-7xl mx-auto pt-20 md:pt-32 ">
        <h1 className="text-2xl md:text-5xl font-bold text-center flex justify-center items-center gap-2 text-black dark:text-white">
          سيطر على مدفوعاتك{" "}
          <FaToggleOff className="inline text-4xl md:text-5xl px-2 bg-amber-400 rounded-xl text-white" />
          بسهولة
        </h1>

        <div className="mt-2 font-black text-xl md:text-5xl text-gray-800 text-center mx-auto">
          تتبع
          <GiFootsteps className="inline text-4xl ml-1 mr-1 md:text-5xl bg-green-600 rounded-xl text-white" />
          الاشتراكات ووفر أموالك بثقة
          <p className="mt-2 font-medium">
            <span className="bg-gradient-to-r mt-2 from-gray-500 to-slate-500 bg-clip-text text-transparent">
              منصتك الذكية
              <span className="hidden sm:inline">
                <Highlighter action="box" color="#1d1d1d">
                  <span className="mr-2 bg-gradient-to-r p-2 from-gray-500 to-slate-500 bg-clip-text text-transparent">
                    لإدارة اشتراكاتك بكفاءة
                  </span>
                </Highlighter>
              </span>
              <span className="sm:hidden bg-gradient-to-r p-2 from-gray-500 to-slate-500 bg-clip-text text-transparent">
                لإدارة اشتراكاتك بكفاءة
              </span>
            </span>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <BorderBeam
            duration={8}
            size={300}
            className="from-black via-black/80 to-transparent"
          />
          <div className="w-full rounded-xl border border-gray-300 dark:border-gray-700">
          <Suspense fallback={<div className="text-black">Loading...</div>}>
          <Spline
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
          </Suspense>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
