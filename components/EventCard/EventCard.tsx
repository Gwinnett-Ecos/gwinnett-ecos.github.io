"use client";
import { Button } from "..";

export type EventCardProps = {
  title: string;
  description: string;
  link: string;
  moreInformation?: string;
};

export default function EventCard({
  title,
  description,
  link,
  moreInformation,
}: EventCardProps) {
  return (
    <div className="w-80 lg:w-[280px] p-4 lg:p-8 bg-white rounded-2xl shadow border border-primary-2-200 flex-col justify-start items-start gap-1 lg:gap-4 inline-flex">
      <div className="self-stretch text-primary-2-400 text-lg font-semibold lg:text-[28px] lg:font-extrabold leading-[42px]">
        {title}
      </div>
      <div className="self-stretch text-slate-500 text-xs lg:text-base leading-relaxed">
        {description}
      </div>
      <div className="flex-grow" />
      <div className="self-stretch justify-end items-start gap-2 inline-flex">
        {moreInformation && (
          <Button
            variant="secondary"
            color="primary-2"
            text="Learn more"
            props={{
              onClick: () => window.open(moreInformation, "_blank"),
              className: "text-slate-500",
            }}
          />
        )}
        {/* bg-primary-2-500 */}
        <Button
          variant="filled"
          color="primary-2"
          text="Register"
          props={{
            onClick: () => window.open(link, "_blank"),
          }}
        />
      </div>
    </div>
  );
}
