"use client";
import { Logo } from "..";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  return (
    // TODO: fix footer under sm breakpoint
    <div className="w-[100vw] md:relative -translate-x-[1.5rem] sm:w-full sm:translate-x-0 md:w-[100vw] md:-translate-x-[calc((100vw-100%+3rem)/2)] lg:-translate-x-[calc((100vw-1024px+3rem)/2)] px-6 pt-2 pb-8 md:pb-12 bg-primary-1-100 flex justify-center gap-2.5">
      <div className="self-stretch justify-start items-start inline-flex w-full max-w-5xl">
        <div className="grow shrink flex-col justify-start items-start inline-flex md:gap-2">
          <div className="text-lime-700 text-xs md:text-base font-normal leading-normal">
            Making earth greener since 2022
          </div>
          <div className="text-lime-700 text-xs md:text-base font-normal leading-normal">
            © 2023 The Gwinnett Ecos
          </div>
          <div className="justify-start items-center gap-0.5 inline-flex">
            <button
              onClick={() =>
                window.open("https://www.instagram.com/gwinnett.ecos/")
              }
            >
              <InstagramIcon />
            </button>
            <button
              className="w-6 h-6 relative material-symbols-outlined text-primary-1-700"
              onClick={() => {
                window.open("mailto:gwinnettecos@gmail.com");
              }}
            >
              mail
            </button>
          </div>
          <div className=" text-lime-700 text-xs md:text-base font-bold leading-normal">
            About Us · Events · Team
          </div>
        </div>
        <Logo />
      </div>
    </div>
  );
}
