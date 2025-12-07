"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export default function Prices() {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPrices = [
    {
      type: "الباقة المجانية",
      price: "مجاني",
      period: "مدى الحياة",
      features: [
        "عرض جميع اشتراكاتك في مكان واحد",
        "متابعة حتى 5 اشتراكات",
        "إشعارات قبل تجديد الاشتراكات",
        "واجهة مستخدم بسيطة وسهلة",
        "دعم عبر البريد الإلكتروني",
        
      ],
      buttonText: "ابدأ الآن",
      popular: false,
    },
    {
      type: "الباقة الأساسية",
      price: "19",
      period: "شهرياً",
      yearlyPrice: "190 ",
      yearlyPeriod: "سنوياً (توفير 20%)",
      features: [
        "كل ميزات الباقة المجانية",
        "متابعة عدد غير محدود من الاشتراكات",
        "تقارير شهرية مفصلة",
        "تحليل الأنماط وتوفير التكاليف",
        "إشعارات مخصصة",
        "دعم فني سريع",
        "تصدير البيانات",
      ],
      buttonText: "اشترك الآن",
      popular: true,
    },
    {
      type: "الباقة المتقدمة",
      price: "69",
      period: "شهرياً",
      yearlyPrice: "690",
      yearlyPeriod: "سنوياً (توفير 18%)",
      features: [
        "كل ميزات الباقة الأساسية",
        "فرق متعددة وإدارة جماعية",
        "تقارير متقدمة وتحليلات مخصصة",
        "دمج مع أدوات المحاسبة",
        "دعم على مدار الساعة",
        "نسخ احتياطي تلقائي",
        "وصول مبكر للميزات الجديدة",
        "استشارات توفير التكاليف",
      ],
      buttonText: "الترقية الآن",
      popular: false,
    },
  ];

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className=" -translate-y-12 " dir="rtl">
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
      <div className="text-center mb-12 ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          خطط الأسعار
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          اختر الخطة التي تناسب احتياجاتك واستمتع بإدارة اشتراكاتك بكل سهولة
        </p>

        <div className="flex justify-center mb-12 " dir="ltr">
          <button
            onClick={togglePricing}
            className="relative flex items-center h-10 w-60 p-1 rounded-full bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <span
              className={`absolute h-8 w-28 ml-1 rounded-full shadow-md transform transition-transform duration-300 ${
                isYearly
                  ? "translate-x-full bg-white"
                  : "translate-x-0 bg-white"
              }`}
            />
            <div className="flex justify-between items-center w-full relative z-10 font-semibold">
              <span
                className={`flex-1 text-center transition-colors duration-300 ${
                  isYearly ? "text-gray-700" : "text-orange-600"
                }`}
              >
                شهري
              </span>
              <span
                className={`flex-1 text-center transition-colors duration-300 ${
                  isYearly ? "text-orange-600" : "text-gray-700"
                }`}
              >
                سنوي
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 z-[40]">
        {monthlyPrices.map((p, index) => (
          <div
            key={index}
            className={`flex flex-col p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
              p.popular
                ? "bg-gradient-to-br from-black to-neutral-900 text-white border-2 border-orange-400 transform scale-105"
                : "bg-white text-gray-800 border-2 border-gray-200 z-[40]"
            }`}
          >
            {p.popular && (
              <div className="bg-orange-500 font-bold py-1 px-4 rounded-full text-sm mb-4 self-center text-white">
                الأكثر مبيعاً
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2 ">{p.type}</h3>
            <div className="my-6">
              {p.yearlyPrice ? (
                <>
                  <span className="text-4xl font-extrabold flex">
                    {isYearly ? p.yearlyPrice : p.price}
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1124.14 1256.39"
                      className="h-10 w-10"
                    >
                      <defs>
                        <style>{`.cls-1 { fill: currentColor; }`}</style>
                      </defs>
                      <path
                        className="cls-1"
                        d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"
                      />
                      <path
                        className="cls-1"
                        d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"
                      />
                    </svg>
                  </span>
                  <span className="text-orange-500 block mt-1">
                    {isYearly ? p.yearlyPeriod : p.period}
                  </span>
                  {isYearly && (
                    <span className="text-blue-400 text-sm font-medium block mt-1">
                      توفير 20% مقارنة بالدفع الشهري
                    </span>
                  )}
                </>
              ) : (
                <>
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className="text-green-500"> / {p.period}</span>
                </>
              )}
            </div>
            <ul className="flex-1 mb-8 space-y-6">
              {p.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className={`w-5 h-5 mt-0.5 ml-2 mr-2 ${
                      p.popular ? "text-orange-700" : "text-green-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                p.popular
                  ? "bg-orange-600 text-white hover:bg-orange-700 shadow-xs shadow-white"
                  : "bg-black text-white hover:bg-black/70"
              }`}
            >
              {p.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
