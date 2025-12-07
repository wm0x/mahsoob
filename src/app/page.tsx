import Aboutus from "@/components/ui/aboutus";
import Features from "@/components/ui/features";
import { Hero } from "@/components/ui/hero";
import NavbarDemo from "@/components/ui/navbar";
import ProgressCard from "@/components/ui/scroll";
import { ScrollBasedVelocityImagesDemo } from "@/components/ui/ScrollBasedVelocityImages";
import WhyMahsoob from "@/components/ui/whyMahsoob";
import LatestUpdates from "../components/ui/testimonials";
import Asks from "@/components/ui/AskAccordion";
import Prices from "@/components/ui/prices";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full md:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark scroll-smooth">
      <ProgressCard />
      <header className="sticky top-0 z-[998] p-2 ">
        <NavbarDemo />
      </header>
      <main>
        <div className=" relative">
          <Hero />
        </div>
        <section className="bg-[#fafafa] shadow-[inset_0_12px_12px_-8px_rgba(0,0,0,0.1),inset_0_-12px_12px_-8px_rgba(0,0,0,0.1)]">
          <ScrollBasedVelocityImagesDemo />
        </section>
        <section>
          <Aboutus />
        </section>
        <section className=" md:mt-90 mt-96 pt-96 md:pt-0 translate-y-52 md:translate-y-0">
          <WhyMahsoob />
        </section>
        <section className=" md:mt-0 mt-46 pt-36 md:pt-0">
          <Features />
        </section>
        <section className=" md:mt-12 md:translate-y-10 -translate-y-8 md:pt-12 z-[40]">
          <LatestUpdates />
        </section>
        <section className=" md:mt-12 md:translate-y-10 -translate-y-8 md:pt-12 z-[40]">
          <Asks />
        </section>
        <section>
          <Prices />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
