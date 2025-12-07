"use client";

import React from "react";
import { Card, Carousel } from "./cards-carousel";

export function CardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-10">
      <Carousel items={cards} />
    </div>
  );
}

import { motion } from "framer-motion";
import {
  Lock,
  Shield,
  Fingerprint,
  Server,
  RefreshCcw,
  Database,
  Zap,
  Eye,
  Folder,
  Check,
  PieChart,
  Settings,
  Wallet,
  Smartphone,
  LayoutDashboard,
  Palette,
  Sparkles,
  HeartHandshake,
  Bell,
  RefreshCw,
  Clock,
} from "lucide-react";

import { BsBarChartLine, BsBookshelf, BsGraphUp } from "react-icons/bs";

const SecurityFeatures = () => {
  return (
    <div className="space-y-8">
      <motion.div
        className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-full">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                حماية البيانات بمعايير عالية
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              بياناتك تحت حماية{" "}
              <span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-md mx-1">
                تشفير AES-256
              </span>
              ، نفس المعيار المستخدم في البنوك والحكومات، لضمان سرية وأمان كامل
              لكل معلومة.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                مراجعة أمنية يومية
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                تشفير شامل
              </span>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnlhd2ZxNGUzZHlkbm84czBtb3JuZWJxMXJ4cXQyZWoybXV6Ymx2OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fmkYSBlJt3XjNF6p9c/giphy.gif"
              alt="حماية البيانات"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-row md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-full animate-pulse">
                <RefreshCcw className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                تحديثات حية باستمرار
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              <span className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded-md  ">
                تحديثات أتوماتيكه{" "}
              </span>
              كل يوم فيه تحسينات جديدة وأمان أعلى، والخدمة ما بتوقف أبدًا حتى لو
              كنا نحدث النظام!
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm flex items-center gap-1">
                <Zap className="w-4 h-4" /> ترقيات سريعة
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm flex items-center gap-1">
                <Eye className="w-4 h-4" /> مراقبة لحظية
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm flex items-center gap-1">
                <Shield className="w-4 h-4" /> تحديثات أمنية
              </span>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExejg2NXVrNGE5aHZ3cGhicGZidTA4Z3VmeWdmcmxmOWc4NnZtcTY2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r2mtDhlCkUsjtHS7lU/giphy.gif"
              alt="نظام التحديثات الأتوماتيكية"
              className="w-full h-auto object-contain rounded-xl border border-gray-200"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-100 rounded-full">
                <Database className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                نسخ احتياطي واسترجاع سريع
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              نوفر
              <span className="text-indigo-600 font-bold bg-indigo-50  py-1 rounded-md mx-1">
                نسخ احتياطية يومية
              </span>
              مع خطط استرجاع فورية، بحيث حتى لو حصل أي طارئ، بياناتك ترجع بسرعة
              وأمان.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                نسخ احتياطية مشفرة
              </span>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                استرجاع سريع
              </span>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                حماية من فقدان البيانات
              </span>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExemFqcXViM3l5eDc5MGZ3eWE5Z3VlY2JncDEwc3U3amNkam1yOTkwMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oicNvAdl2lIY8gt4G6/giphy.gif"
              alt="النسخ الاحتياطي"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const AutoCategorizationContent = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-full">
                <Folder className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                نظام تصنيف ذكي
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              <span className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded-md mx-1">
                بنصنف معاملاتك المالية تلقائيًا
              </span>
              بدون أي مجهود منك! النظام يتعرف على أنماط صرفك ويصنف كل عملية في
              مكانها المناسب.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm flex items-center gap-1">
                <BsBookshelf className="w-4 h-4" /> تصنيف تلقائي
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm flex items-center gap-1">
                <PieChart className="w-4 h-4" /> تقارير مفصلة
              </span>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="/img/levels.png"
              alt="نظام التصنيف التلقائي"
              className=" h-60 mx-auto rounded-4xl"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-full">
                <Folder className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                تحليل مصروفات ذكي
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              <span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-md mx-1">
                أكتشف عاداتك المالية
              </span>
              وتعرف على أكثر فئات الإنفاق لديك. تقارير مفصلة لمساعدتك على اتخاذ
              قرارات أفضل.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm flex items-center gap-1">
                <BsGraphUp className="w-4 h-4" /> تحليل مالي
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm flex items-center gap-1">
                <Wallet className="w-4 h-4" /> تتبع الميزانية
              </span>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="/img/analysis.png"
              alt="نظام التصنيف التلقائي"
              className="w-full h-auto object-contain  rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const DummyContent = () => {
    return (
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto text-right">
          <span className="font-bold text-neutral-700">
            فريق دعم فني استثنائي يمتلك المعرفة العميقة والخبرة الواسعة
          </span>{" "}
          نقدم لكم خدمة عملاء متميزة على مدار الساعة، حيث يعمل طاقمنا المدرب بأعلى معايير الكفاءة 
          على حل جميع استفساراتكم وتذليل أي صعوبات تواجهونها. نحن نتفهم احتياجاتكم بدقة ونعمل 
          بجدية لتقديم الحلول الفورية والشاملة التي تضمن تجربة سلسة وخالية من المتاعب.
        </p>
        <img
          src="img/undraw_remote-team_4ljl.svg"
          alt="فريق الدعم الفني المحترف"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    );
  };

const Discovery = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 md:flex">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto leading-relaxed my-auto">
        <span className="font-bold text-neutral-800">
          خوارزميات ذكية ومبتكرة
        </span>{" "}
        تراقب كل اشتراكاتك وتكشف أي هدر مالي قبل ما يصير. تساعدك تتوقع مواعيد
        التجديد وتذكرك فيها{" "}
        <span className="text-green-700 font-semibold mx-1">
          مع اقتراح حلول وبدائل توفر عليك.
        </span>
      </p>
      <img
        src="/img/giphy-brain.gif"
        alt="Financial insights on Macbook"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const Notification = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-yellow-100 rounded-full">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                سرعة خيالية في التنبيهات والتحديثات
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              كل إشعار يوصلك{" "}
              <span className="font-bold text-gray-800"> في نفس اللحظة </span>
              بدون انتظار والتحديثات دايمًا أسرع من اللي تتوقعه.
              <span className="text-gray-700 font-semibold">
              </span>
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm flex items-center gap-1">
                <Bell className="w-4 h-4" /> تنبيهات لحظية
              </span>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm flex items-center gap-1">
                <RefreshCw className="w-4 h-4" /> تحديثات سريعة
              </span>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/img/3dicons-bell-dynamic-gradient.png"
              alt="سرعة في التنبيهات والتحديثات"
              className="w-full h-auto object-contain rounded-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const UIContent = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-100 rounded-full">
                <Smartphone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                واجهة حديثه وممتعه
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              تصميمنا غير أي تطبيق مالي شفته من قبل. انسَ الواجهات المعقدة
              والمملة، لأن تطبيقنا بيخليك تدير فلوسك وأنت مستمتع. كل شيء قدامك،
              مرتب وسهل، وبألوان تريح العين. هذا مو بس تطبيق، هذا رفيقك اللي
              بيخلي رحلة إدارة فلوسك خفيفة وممتعة.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm flex items-center gap-1">
                <LayoutDashboard className="w-4 h-4" /> لوحة تحكم بسيطة وواضحة
              </span>
              <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm flex items-center gap-1">
                <Palette className="w-4 h-4" /> ألوان مريحة للعين
              </span>
              <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm flex items-center gap-1">
                <HeartHandshake className="w-4 h-4" /> سهولة الاستخدام
              </span>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="/img/ui-mahsoob.jpg"
              alt="واجهة التطبيق"
              className="w-full h-auto object-contain shadow-2xl rounded-xl border border-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    category: "الحمايــة",
    title: "جدار حماية ذكي يحمي أموالك ومعلوماتك",
    src: "/img/featuresImg1.png",
    content: <SecurityFeatures />,
  },
  {
    category: "التصنيــف",
    title: "تصنيف تلقائي ذكي لكل معاملاتك المالية",
    src: "/img/featuresIMg3.png",
    content: <AutoCategorizationContent />,
  },
  {
    category: " الواجهــة ",
    title: "واجهة حديثة وسلسة تستمتع باستخدامها",
    src: "/img/featuresImg5.png",
    content: <UIContent />,
  },
  {
    category: "اكتشــاف",
    title: "رصد وإنذارات فورية لأي هدر مالي",
    src: "/img/featuresImg6.png",
    content: <Discovery />,
  },
  {
    category: "السرعــة",
    title: "سرعة خيالية في التنبيهات والتحديثات",
    src: "/img/featuresImg2.png",
    content: <Notification />,
  },
  {
    category: "الدعــم  ",
    title: "فريق دعم على مدار الساعة لمساعدتك",
    src: "/img/featuresImg4.png",
    content: <DummyContent />,
  },
];
