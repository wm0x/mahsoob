import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <div
      className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/40 to-white mt-20 rounded-4xl"
      dir="rtl"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent shadow-[0_0_25px_5px_rgba(253,186,116,0.4)]"></div>

      <footer className="w-full pt-20 pb-12 text-black relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-right">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={"/img/mahsoob_logo.svg"}
                alt={"logo"}
                width={45}
                height={45}
              />
              <span className="text-2xl font-bold text-black">محـســــوب</span>
            </div>
            <p className="text-black/70 max-w-xs leading-relaxed">
              رفيقك الذكي لإدارة الاشتراكات والمصاريف.            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:mt-5">
            <h4 className="text-sm font-black border-b-4 rounded border-orange-500 text-black/80 tracking-wider mb-3">
              اكتشف
            </h4>
            <div className="flex flex-col gap-3 text-center md:text-right">
              <a
                href="#terms"
                className="text-black/70 hover:text-orange-500 text-sm transition-colors"
              >
                الشروط والأحكام
              </a>
              <a
                href="#privacy"
                className="text-black/70 hover:text-orange-500 text-sm transition-colors"
              >
                الخصوصية والأمان
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 mt-5">
            <h4 className="text-sm font-black border-b-4 rounded border-orange-500 text-black/80 tracking-wider">
              تابعنا
            </h4>
            <div className="flex gap-5 text-black/60">
              <a href="#" className="hover:text-orange-500 transition-colors">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <FaTiktok size={22} />
              </a>
            </div>

            <div className="mt-4 w-full">
              <p className="text-black/70 text-sm mb-2">اشترك في النشرة البريدية</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 bg-white border border-orange-200 rounded-r-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-l-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                  اشتراك
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-6 text-center text-sm text-black/60 border-t border-black/5">
          كل الحقوق محفوظة
          <br />
          محـســــوب © {new Date().getFullYear()}
        </div>
      </footer>
      <div className="w-full items-center text-center justify-center ">
        <h1 className="text-4xl md:text-7xl p-2 font-bold bg-gradient-to-b from-orange-500 to-white bg-clip-text text-transparent opacity-30">
          مــــــــــــــــــــحـــــــــــــــــــــســــــــــــوب
        </h1>
      </div>
    </div>
  );
}

export default Footer;
