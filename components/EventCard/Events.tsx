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
  spaceBetween = 24,
}: EventsProps) {
  return (
    <Swiper
      className={className}
      spaceBetween={spaceBetween}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
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
