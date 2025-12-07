"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const asked = [
  {
    question: "ما هو محسوب بالضبط؟",
    answer:
      "محسوب هو أداة لإدارة جميع اشتراكاتك ومصاريفك المالية. يسمح لك بمتابعة الاشتراكات الشهرية والتحكم في المصاريف بسهولة، مع تجربة مجانية لمدة 7 أيام.",
  },
  {
    question: "كيف يمكن لمحسوب مساعدتي شخصياً؟",
    answer:
      "يتيح لك التحكم في جميع اشتراكاتك من نوع SaaS وأدوات التسويق والسحابات في مكان واحد. جميع بياناتك محمية 100%، ولا يتم تخزين أي بيانات بنكية أو مالية.",
  },
  {
    question: "هل محسوب مناسب للفرق والشركات؟",
    answer:
      "نعم، تم تصميمه ليتناسب مع الفرق الكبيرة والصغيرة. يمكنك متابعة مصاريف كل فريق وتحليل التكاليف بسهولة، مع تجربة مجانية لمدة 7 أيام دون التأثير على الخصوصية.",
  },
  {
    question: "أين يتم تخزين بياناتي؟ وهل هي آمنة؟",
    answer:
      "بياناتك محمية بالكامل، ولا يتم تخزين أي شيء على سيرفرات خارجية. الخصوصية هي الأولوية القصوى، ولا يتم التعامل مع البيانات البنكية على الإطلاق.",
  },
  {
    question: "هل يتوفر تقارير وأدوات لمساعدتي؟",
    answer:
      "نعم، يتوفر تقارير مفصلة وإشعارات ذكية لمساعدتك على اتخاذ قرارات مالية أفضل، مع إمكانية تجربة جميع الميزات مجاناً لمدة أسبوع.",
  },
  {
    question: "كيف يمكن تجربة الخدمة؟",
    answer:
      "يمكنك التسجيل وتجربة الخدمة مجاناً لمدة 7 أيام، والاستفادة من جميع الميزات دون الحاجة لتقديم أي بيانات بنكية أو تخزين بياناتك في أي مكان آخر.",
  },
];

interface AskProps {
  question: string;
  answer: string;
}

const AskItem: React.FC<AskProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mb-4 transition-all duration-300 hover:shadow-md rounded-3xl z-[40]">
      <div
        className="flex items-center justify-between p-6 cursor-pointer bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl shadow-sm transition-all duration-300 hover:from-gray-100 hover:to-gray-200"
        onClick={handleToggle}
      >
        <div className="flex-1 font-bold text-lg text-gray-800 pr-4">
          {question}
        </div>
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
          {isOpen ? (
            <FaMinus className="text-gray-500 text-sm" />
          ) : (
            <FaPlus className="text-orange-500 text-sm" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 p-6 bg-white rounded-2xl shadow-inner border border-gray-100 animate-fadeIn">
          <p className="text-gray-600 leading-relaxed text-right">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Asks: React.FC = () => {
  return (
    <div
      className="relative flex flex-col size-full items-center justify-center rounded-2xl md:-translate-y-23  "
      dir="rtl"
    >
      <div className=" inset-0 z-0 overflow-hidden rounded-xl w-full">
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
        <div className="py-12 px-4 md:px-8 rounded-4xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              .لديك استفسار؟ ربما تجد الإجابة هنا. إذا لم تجد ما تبحث عنه، لا
              تتردد في التواصل معنا
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4 " dir="rtl">
            {asked.map(({ question, answer }) => (
              <AskItem question={question} answer={answer} key={question} />
            ))}
          </div>

          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fadeIn {
              animation: fadeIn 0.3s ease-out forwards;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Asks;
