"use client";
import React, { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const [testimonials, setTestimonials] = useState<
    {
      id: string;
      name: string;
      role: string;
      description: string;
      image: string;
    }[]
  >([]);
  const [error, setError] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTestimonials([
        {
          id: "1",
          name: "علي الشهري",
          role: "مؤسس محسوب",
          description:
            ".كمؤسس لم نحصل على هذا المنتج بين ليلة وضحاها، بل تعبنا وسهرنا شهور طويلة لنقدم لكم شيئًا يليق باحتياجاتكم الحقيقية. عملنا على دراسة تحديات الافراد والشركات الصغيرة في إدارة الاشتراكات لنصنع نظامًا شاملًا يجمع بين البساطة والدقة والتحليل الذكي. مع أدوات تمكنكم من اتخاذ قرارات مالية سليمة وتوفير الوقت والجهد. نطمح من خلال محسوب أن نساعدكم على ادارة اشتراكاتكم ، وأن نصنع تجربة استخدام ممتعة وفعالة للجميع",
          image: "https://avatars.githubusercontent.com/u/155554105?v=4",
        },
        // {
        //   id: "2",
        //   name: "شركة التقنية المتقدمة",
        //   role: "فريق الإدارة المالية",
        //   description:
        //     "كشركة تضم عدة فرق ومئات الاشتراكات الشهرية، واجهنا تحديًا حقيقيًا في إدارة وتتبع المدفوعات المتكررة. محسوب قدم لنا حلًا متكاملاً ينظم كل شيء بدقة مذهلة - من أدوات التسويق إلى خدمات السحابة والتطبيقات المتخصصة. لم نعد نخشى مفاجآت الفواتير أو الاشتراكات المكررة، وأصبحت عملية المتابعة المالية لا تتعدى بضع دقائق شهريًا.",
        //   image: "https://via.placeholder.com/100x100.png?text=Company+Logo",
        // },
        // {
        //   id: "3",
        //   name: "سارة الغامدي",
        //   role: "قائدة فريق المنتج",
        //   description:
        //     "ما يميز محسوب هو الجمع الرائع بين البساطة والعمق. النظام سهل الاستخدام لكنه يقدم رؤية تحليلية متقدمة تساعدنا في اتخاذ قرارات ذكية حول الاشتراكات. اكتشفنا من خلاله أكثر من 5 اشتراكات غير مستخدمة كنا ندفعها شهريًا دون أن ندري! الآن أصبح فريقنا أكثر كفاءة ووعيًا بمصروفاتنا التقنية.",
        //   image: "https://randomuser.me/api/portraits/women/44.jpg",
        // },
        // {
        //   id: "4",
        //   name: "فريق تطوير الأعمال",
        //   role: "شركة النمو المتسارع",
        //   description:
        //     "محسوب لم يكن مجرد أداة تنظيمية، بل أصبح شريكًا استراتيجيًا في نمو شركتنا. من خلال التقارير التحليلية المفصلة، استطعنا تحديد أفضل الأدوات التي تعزز إنتاجيتنا والتخلي عن تلك التي لا تضيف قيمة حقيقية. وفر لنا آلاف الريالات سنويًا ورفع من كفاءة عملياتنا بشكل ملحوظ.",
        //   image: "https://via.placeholder.com/100x100.png?text=Growth+Co",
        // },
        // {
        //   id: "5",
        //   name: "محمد الحربي",
        //   role: "مدير تقنية المعلومات",
        //   description:
        //     "كمسؤول عن البنية التقنية لشركتنا، وجدت في محسوب الحل الأمثل لإدارة وتوحيد كل اشتراكاتنا المتنوعة. النظام وفر لي رؤية شاملة عن أداء كل خدمة وتكلفتها الحقيقية، مما ساعد في مفاوضات التجديد مع الموردين وخفض التكاليف بنسبة 25% مع الحفاظ على جودة الخدمات المقدمة.",
        //   image: "https://randomuser.me/api/portraits/men/67.jpg",
        // },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnFocusIn: true,
    })
  );

  return (
    <div dir="ltr" className="flex justify-center items-center">
      <div className="w-full max-w-4xl p-4  rounded-xl ">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500 border-solid" />
          </div>
        ) : (
          <>
            <Carousel
              plugins={[plugin.current]}
              className="w-full bg-[#ffffff] border border-gray-300 rounded-4xl py-4"
              setApi={setApi}
            >
              <CarouselContent className="gap-4 ">
                {testimonials.length > 0 ? (
                  testimonials.map((im) => (
                    <CarouselItem key={im.id}>
                      <CardContent className="flex flex-col justify-between items-center text-center bg-[#e7e8e9] mx-5 shadow-md rounded-4xl h-100">
                        <div className="mt-4">
                          <img
                            src={im.image}
                            alt={im.name}
                            className="w-20 h-20 grayscale-75 rounded-full object-cover"
                          />
                        </div>

                        <div className="flex-1 flex items-center justify-center px-4">
                          <p className="text-gray-900 md:text-base text-xs leading-relaxed font-bold">
                            {im.description}
                          </p>
                        </div>

                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {im.name}
                          </h3>
                          <p className="text-sm text-gray-500">{im.role}</p>
                        </div>
                      </CardContent>
                    </CarouselItem>
                  ))
                ) : (
                  <div className="flex justify-center items-center h-64">
                    <p className="text-center text-gray-500">
                      {error || "No images available"}
                    </p>
                  </div>
                )}
              </CarouselContent>
            </Carousel>
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: count }).map((_, index) => (
                <span
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    current === index + 1 ? "bg-orange-500" : "bg-gray-300"
                  } ${
                    current === index + 1
                      ? " duration-500 w-12"
                      : "duration-500 w-4"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
