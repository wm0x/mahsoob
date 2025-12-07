import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

const IMAGES_ROW_A = [
  // arabic compony
  "https://i.ibb.co/rRwwgP1b/Thmanyah-Icon-01.png",
  "https://i.ibb.co/mgLYYnZ/Careem.png",
  "https://i.ibb.co/DHxHGpjG/Jahez.png",
  "https://i.ibb.co/j9S77DtD/Shahid-App-01.png",
  "https://i.ibb.co/v4BmDW51/Fitness-Time-01.png",
  "https://i.ibb.co/n8r2PQPr/Ninja-App.png",
  "https://i.ibb.co/d3vSHMd/STC-01.png",
  "https://i.ibb.co/qYHNNckP/Zain-01.png",
  "https://i.ibb.co/GGvFsCB/Mobily-01.png",
  "https://i.ibb.co/zhtbLXqQ/Hunger-Station.png",
];

const IMAGES_ROW_B = [
  "https://i.ibb.co/5XsNXCq9/netflix-logo-icon.png",
  "https://i.ibb.co/tPBKKPr0/amazon-icon.png",
  "https://i.ibb.co/wF62QfDH/appstore-icon.png",
  "https://i.ibb.co/qwpt95n/google-icon.png",
  "https://i.ibb.co/xq4dwzK5/4202105-microsoft-logo-social-social-media-icon.png",
  "https://i.ibb.co/5XsNXCq9/netflix-logo-icon.png",
  "https://i.ibb.co/4RDzbcwn/playstore-icon.png",
  "https://i.ibb.co/wNwD5bBM/playstation-icon.png",
  "https://i.ibb.co/nHvqV1t/spotify-logo.png",
];

export function ScrollBasedVelocityImagesDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8 mt-10">
      <div>
        <h1 className="flex item-center text-center justify-center sm:text-2xl md:text-3xl lg:text-4xl opacity-40 mb-5">
          يحقق محـســـوب اشتراطات
        </h1>
        <div className="flex items-center justify-center mb-10 ">
          <img src="img/_SAMA.svg" alt="sama_logo" />
        </div>
        <div className="flex item-center text-center justify-center sm:text-2xl md:text-3xl lg:text-4xl opacity-40 mb-5">
          حَاسِب مصروفاتك
        </div>
      </div>
      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4">
          {IMAGES_ROW_A.map((src, idx) => (
            <img
              key={idx}
              src={`${src}`}
              alt="sample"
              loading="lazy"
              decoding="async"
              className="mx-2 inline-block w-40 h-40 rounded-lg object-cover shadow-sm grayscale opacity-80"
            />
          ))}
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
          {IMAGES_ROW_B.map((src, idx) => (
            <img
              key={idx}
              src={`${src}&ixlib=rb-4.0.3`}
              alt="Unsplash sample"
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
              className="mx-4 inline-block h-20 w-20 rounded-lg object-cover shadow-sm grayscale opacity-40"
            />
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#f5f5f5] to-transparent dark:from-[#1d1d1d]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#f5f5f5] to-transparent dark:from-[#1d1d1d]"></div>
    </div>
  );
}
