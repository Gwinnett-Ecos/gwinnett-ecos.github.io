"use client";

import { Marker } from "@/components";
import Image from "next/image";
import canva from "@/public/our-impact/hurricane-canva.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Modal from "react-modal";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

export default function Events() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <main className="px-6 md:px-18 max-w-xl md:max-w-5xl mx-auto py-12 lg:py-24">
        <section className="space-y-4 my-12 mx-4 pb-12 md:pb-6 lg:pb-16">
          <h1 className="text-primary-2-500 mt-6">
            Our Impact
            <Marker title="Our Impact" icon="pages" id="our-impact" />
          </h1>
          <p className="max-w-xl text-slate-500 text-lg font-normal">
            GECOS is hosting a district-wide Hurricane Helene Relief Drive to
            help suffering families in North Carolina with the aftermath of
            Hurricane Helene. Donations are accepted at 4 different high schools
            in multiple clubs: Berkmar, Brookwood, GSMST, and South Gwinnett. We
            are collecting donations like canned goods, socks, blankets, gloves,
            hats, buddy heaters, kerosine heaters, and propane!
          </p>
          <div className="h-6 lg:h-10"></div>
          <div className="flex gap-16 items-center">
            <div className="flex flex-row gap-8 md:gap-16 items-center relative z-10 w-full max-w-full">
              <div className="relative max-w-full rounded-xl shadow-lg shadow-primary-2-200 flex-grow">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
                  modules={[Autoplay, Navigation]}
                  className="rounded-xl w-full relative"
                >
                  <SwiperSlide>
                    <div className="relative h-0 pb-[56.25%]">
                      <Image
                        src={canva}
                        alt="Hurricane Helene Relief Drive Flyer"
                        className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                        onClick={openModal}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative h-0 pb-[56.25%]">
                      <video
                        controls
                        className="absolute top-0 left-0 w-full h-full rounded-xl"
                        playsInline
                        preload="metadata"
                      >
                        <source
                          src="/our-impact/red-cross-help.MOV"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative h-0 pb-[56.25%]">
                      <video
                        controls
                        className="absolute top-0 left-0 w-full h-full rounded-xl"
                        playsInline
                        preload="metadata"
                      >
                        <source
                          src="/our-impact/gecos-hurricane-helen-official.MOV"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <button className="swiper-button-prev absolute top-1/2 left-2 -translate-y-1/2 rounded-full z-20">
                  <MdChevronLeft className="text-primary-500 size-6" />
                </button>
                <button className="swiper-button-next absolute top-1/2 right-2 -translate-y-1/2 rounded-full z-20">
                  <MdChevronRight className="text-primary-500 size-6" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Expanded Image"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="relative w-full max-w-3xl">
          <Image
            src={canva}
            alt="Hurricane Helene Relief Drive Flyer"
            className="w-full h-auto rounded-lg"
          />
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white bg-primary-500 p-2 rounded-full focus:outline-none"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
