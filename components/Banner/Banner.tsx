"use client";
import React from "react";

export type BannerProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

function BannerDesktop({ title, children, className }: BannerProps) {
  return (
    <div
      className={`w-[100vw] md:relative md:-translate-x-[calc((100vw-100%+3rem)/2)] lg:-translate-x-[calc((100vw-1024px+3rem)/2)] flex flex-col justify-center items-center gap-4 py-12 bg-primary-1-100 z-10 ${className}`}
    >
      <div className="max-w-2xl h-auto flex-col justify-start items-start gap-3 inline-flex">
        <div className="self-stretch text-center text-lime-500 text-4xl font-extrabold leading-snug">
          {title}
        </div>
        <div className="self-stretch text-center">{children}</div>
      </div>
    </div>
  );
}

function BannerMobile({ title, children, className }: BannerProps) {
  return (
    <div
      className={`"w-full h-auto px-4 py-2 border-t border-b border-lime-500 justify-center items-center gap-2.5 inline-flex" ${className}`}
    >
      <div className="grow shrink basis-0">
        <span className="text-slate-600 text-sm font-bold font-['Inter'] leading-7">
          {title}
        </span>
        <span className="text-slate-600 text-sm font-normal font-['Inter'] leading-7">
          {children}
        </span>
      </div>
    </div>
  );
}

export default function Banner(props: BannerProps) {
  return (
    <>
      <div className="hidden md:block">
        <BannerDesktop {...props} />
      </div>
      <div className="flex md:hidden">
        <BannerMobile {...props} />
      </div>
    </>
  );
}
