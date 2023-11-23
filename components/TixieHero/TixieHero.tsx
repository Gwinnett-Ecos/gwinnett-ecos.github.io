import Image from "next/image";
import tixie from "./tixie.png";

export default function TixieHero() {
  const image = (className: string) => (
    <Image
      className={`rounded-2xl bg-primary-4-100 shadow-lg shadow-primary-4-100 ${className}`}
      src={tixie}
      alt="Photo of Tixie Fowler"
    />
  );
  return (
    <>
      <div className="md:h-12"></div>
      <div className="hidden lg:block w-fill h-[429px] relative">
        {image("left-0 top-0 absolute -translate-y-12")}
        <div className="w-80 left-1/2 top-0 absolute transform -translate-x-1/2">
          <div className="w-[100vw] h-[195px] left-0 top-0 absolute bg-sky-100 bg-opacity-75 rounded-lg backdrop-blur-2xl" />
          <div className="w-[376px] h-[140px] left-8 top-6 absolute flex-col justify-start items-start inline-flex">
            <div className="w-[323px] h-[110px] text-cyan-900 text-5xl font-black leading-[55.20px]">
              Miss. Tixie Fowler
            </div>
            <div className="text-primary-4-500 text-[17px] font-bold leading-relaxed">
              Ecology Educator ・ Sponsor
            </div>
            <div className="relative left-24 lg:left-16 top-10 text-slate-700 text-lg font-normal leading-relaxed">
              Non-profit founder of gardens for growing community and district
              program assistant for the Gwinnett Soil and Water Conservation
              District.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:w-fill justify-center md:flex-row md:gap-8 lg:hidden">
        {image("h-48 w-48 sm:h-72 sm:w-72 object-cover")}
        <div className="px-8 md:px-4 flex flex-col gap-1 sm:gap-2 md:basis-96">
          <div className="text-cyan-900 text-2xl md:text-5xl font-black leading-tight">
            Miss. Tixie Fowler
          </div>
          <div className="text-primary-4-500 text-sm md:text-base font-bold leading-relaxed">
            Ecology Educator ・ Sponsor
          </div>
          <div className="text-slate-700 text-xs md:text-lg font-normal leading-relaxed">
            Non-profit founder of gardens for growing community and district
            program assistant for the Gwinnett Soil and Water Conservation
            District.
          </div>
        </div>
      </div>
    </>
  );
}
