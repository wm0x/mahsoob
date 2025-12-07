"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./layout-grid.";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        ليش بأمــــــــــــــــــــان ؟
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        اشتراكاتك ومصاريفك بيدك بدون هدر ولا سحوبات مفاجئة.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">ليش اولويتنا ؟</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        ما نشارك بياناتك ولا نستخدمها إلا لخدمتك أمانك أهم من أي شي وخصوصيتك خط
        <span className="text-red-500 mr-1">أحمر</span>
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        مرسومـــــــــــــــه !!
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        بدال ما تبقى خططك مجرد كلام أو أوراق ضايعة هنا بتشوفها قدامك واضحة
        ومرتبه وتقدر تتابعها خطوة بخطوة
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      أهدافك محسوبة  
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      أهدافك واضحة قدامك ومحاسبك محسوب على كل ريال، كل مصروف، وكل خطوة مالية
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/img/icons/testgridIMg.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "img/icons/testgridimg2.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/img/icons/testgridimg3.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/img/icons/testgridimg4.png",
  },
];
