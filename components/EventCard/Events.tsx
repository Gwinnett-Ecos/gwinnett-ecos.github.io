"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EventCard, EventCardProps } from "..";

export type EventsProps = {
  events: EventCardProps[];
  className?: string;
  spaceBetween?: number;
};

export default function Events({
  events,
  className,
  spaceBetween = 16,
}: EventsProps) {
  return (
    <Swiper
      className={className}
      spaceBetween={spaceBetween}
      slidesPerView={2}
      direction="vertical"
      breakpoints={{
        1024: {
          slidesPerView: 2,
          direction: "horizontal",
        },
      }}
    >
      {events.map((event, index) => {
        return (
          <SwiperSlide key={index}>
            <EventCard {...event} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
