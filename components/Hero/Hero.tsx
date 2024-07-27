"use client";

import Link from "next/link";
import { Button } from "..";
import loveTheEarth from "./love-the-earth.png";
import Image from "next/image";

export default function Hero() {
  const image = (
    <div className="relative w-full lg:w-1/2 max-w-lg lg:max-w-auto lg:h-auto">
      <div className="absolute w-[50vw] h-[50vw] lg:w-[min(100vw,1024px)] lg:h-[min(100vw,1024px)] -right-0 md:-right-20 lg:-right-[min(70vw,512px)] top-12 sm:top-0 md:-top-12 lg:-top-[min(50vw,512px)] bg-primary-2-100 shadow-lg shadow-primary-2-200 rounded-full transition-all duration-300 ease-in-out" />
      <Image
        src={loveTheEarth}
        alt="Love the Earth (courtesy of Illiyin Studio)"
        className="z-10 w-full h-full relative lg:scale-125"
      />
    </div>
  );

  const textClass =
    "text-4xl lg:text-5xl font-extrabold leading-snug lg:leading-tight";

  const content = (
    <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-4 max-w-xl">
      <div className="text-left">
        <span className={`text-primary-1-500 ${textClass}`}>
          Environmental Conservation
          <br />
        </span>
        <span className={`text-slate-600 ${textClass}`}>
          from
          <br />
        </span>
        <span className={`text-primary-3-500 ${textClass}`}>Gwinnett</span>
      </div>
      <div className="text-slate-600 text-sm lg:text-lg font-normal leading-7 lg:leading-relaxed">
        The Gwinnett&rsquo;s Environmentally Concerned Organization of Students
        aims to raise awareness about environmental issues in our community by
        offering educational resources and opportunities for hands-on
        conservation activities. Our hope is to inspire more high school
        students to participate in environmental action and community service.
      </div>
      <div className="flex flex-row justify-start items-start gap-2">
        <Link
          href="https://www.instagram.com/p/C0rwQ1oxXXA/"
          className="bg-primary-3-500 px-4 py-2.5 text-white rounded-full"
        >
          Join US
        </Link>
        <Button
          variant="secondary"
          className="space-x-2"
          onClick={() => {
            document
              .querySelector("section:nth-of-type(1)")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>Learn More</span>          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-4 lg:justify-between mt-24 md:mt-32">
      {image}
      {content}
    </div>
  );
}
