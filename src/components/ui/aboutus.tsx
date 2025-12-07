"use client"
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./button";
import {
  MdArrowBackIosNew,
  MdHelpOutline,
  MdLightbulb,
  MdSupportAgent,
  MdVisibility,
} from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";

import { GiBrain } from "react-icons/gi";
import { WobbleCard } from "./wobble-card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: -50 }, // start from left
  visible: { opacity: 1, x: 0 }, // natural position
  exit: { opacity: 0, x: 50 }, // go away with scrolling 
};

function Aboutus() {
  return (
    <div className=" min-h-screen relative flex flex-col rounded-2xl  pt-20 ">
      <div className="absolute inset-0 z-10 overflow-hidden rounded-xl">
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
      </div>
      <div
        className=" h-screen mt-2  md:text-5xl text-gray-800 w-full "
        dir="rtl"
      >
        <div className="flex mx-auto lg:items-start font-black lg:justify-start rounded-full p-2 text-xl bg-[#ffedd4] text-[#f54900] w-fit lg:mr-53 md:mr-10 mt-20">
          إحـنا مـين !!
        </div>
        <div className="max-w-2xl text-center md:text-start md:mr-10 lg:text-start lg:mr-53 mt-2">
          <p className="text-xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
            إحـنا محـســـو<span className="text-green-600 ml-1">ب</span> شغفنا
            بالتنظيم ونحب نساعدك{" "}
            <span className="text-[#f54900] dark:text-indigo-400">تدير</span>{" "}
            مصروفاتك. كل <span className="font-bold">اشتراك</span>، كل{" "}
            <span className="font-bold">دفعه</span>، كل ريال{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              {" "}
              تقدر تشوفه{" "}
            </span>
            وتتحكم فيه بدون
            <span className="text-green-600 dark:text-green-400">
              {" "}
              فلوس
            </span>{" "}
            ضايعين.
          </p>
        </div>
        <div className="flex flex-col  md:flex-col lg:flex-row max-w-6xl mx-auto mt-10 gap-6 px-4">
          <div className="bg-[#f54900] hover:scale-102 duration-300 z-[40] text-white rounded-2xl p-8 flex-1 shadow-lg flex flex-col justify-between">
            <div className="flex-1">
              <h3 className="font-bold text-black text-xl mb-4">
                رؤيتنا <MdVisibility className="text-md text-white inline  " />
              </h3>
              <p className="text-xl">
                نطمح نصنع تجربة مالية سهلة وآمنة لكل المستخدمين هدفنا يكون
                التطبيق صديقك في إدارة مصروفاتك وتحقيق استقرارك المالي بدون أي
                وجع راس.
              </p>
            </div>
            <Button
              variant="default"
              className="rounded-lg text-black shadow-xl w-full justify-between hover:bg-gray-100 bg-white cursor-pointer flex gap-1 mt-6"
            >
              جـرّب محـسـوب <MdArrowBackIosNew className="mt-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            <motion.div
              className="bg-[#ffedd4] rounded-2xl p-6 shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold text-xl mb-2">
                <GiBrain className=" text-md inline mb-2" /> فلسفتنا{" "}
              </h3>
              <p className="text-lg">
                نسعى نبسط حياتك المالية نخلي متابعة المصروفات سهلة وواضحة بدون
                أي تعقيد.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#ffedd4] rounded-2xl p-6 shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              exit="exit"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-bold text-lg mb-2">
                <MdLightbulb className="text-md inline " />
                الفكرة{" "}
              </h3>
              <p className="text-lg">
                جاتنا الفكرة من الحاجة لتنظيم المصروفات والاشتراكات في مكان
                واحد.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#ffedd4] rounded-2xl p-6 shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              exit="exit"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-bold text-lg mb-2">
                <MdHelpOutline className="text-md inline" /> لماذا هذا المشروع؟{" "}
              </h3>
              <p className="text-lg">
                لاحظنا أن كثير ناس تضيع فلوسها بسبب الاشتراكات الغير واضحة
                والمدفوعات المتكررة.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#ffedd4] rounded-2xl p-6 shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              exit="exit"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-bold text-lg mb-2">
                <FaHandsHelping className="text-md inline" /> كيف نساعدك؟{" "}
              </h3>
              <p className="text-lg">
                نراقب كل اشتراك كل دفعة ونرسل تذكيرات قبل أي دفعه لتكون مرتاح
                البال.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-20 p-4 border border-gray-400 rounded-2xl bg-gray-800/20 shadow-2xl">
          <WobbleCard containerClassName=" relative col-span-1 z-[40] lg:col-span-3 bg-[#f0f1f2] min-h-[300px] ">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-right text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
                وش ممكن يغير لك محسوب ؟
              </h2>
              <div className="flex flex-col text-sm mt-5 gap-3">
                <h1>🧾 ينظم لك الفواتير والمدفوعات في مكان واحد.</h1>
                <h1>🧠 يخليك أكثر وعي مالي وتخطيط للمستقبل.</h1>
                <h1>🔔 ينبهك قبل أي مصروف غير متوقع.</h1>
                <h1>🎯 يخليك تركز على المهم وتقلل المصاريف الجانبية.</h1>
                <p>واكثثثر..</p>
              </div>
            </div>
            <img
              src="img/mahsoob_logo.svg"
              width={300}
              height={300}
              alt=" demo mahsoob image"
              className="absolute -left-0 md:left-[10%] lg:left-[10%] -bottom-5 object-contain rounded-2xl w-24 h-24 md:w-60 md:h-60"
            />
          </WobbleCard>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
