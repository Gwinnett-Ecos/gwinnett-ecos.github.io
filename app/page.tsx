import { Calendar, Hero, Marker, Team } from "@/components";
import BannerDesktop from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Timeline from "@/components/Timeline/Timeline";
import Image from "next/image";
import Link from "next/link";
import { TEAM_DATA, TIMELINE_DATA } from "./data";

export default function Home() {
  return (
    <>
      <main className="px-6 md:px-18 max-w-xl md:max-w-5xl mx-auto space-y-12 md:space-y-20">
        <Hero />
        <section className="space-y-4">
          <h1 className="text-primary-1-500">
            About Us
            <Marker title="About Us" icon="info" id="about" />
          </h1>
          <BannerDesktop
            title={`“Connect students in all Gwinnett County environmental clubs” `}
          >
            <span className="text-slate-500 text-base font-normal leading-[30px]">
              We connect students in various Gwinnett County environmental clubs
              to raise awareness of environmental issues in our community by
              providing educational resources and hands-on conservation
              activities,
            </span>
            <span className="text-slate-500 text-base font-bold leading-[30px]">
              {" "}
            </span>
            <span className="text-primary-1-500 text-base font-bold leading-[30px]">
              since 2023.
            </span>
          </BannerDesktop>
          <Timeline
            // NOTE: declare Tailwind CSS class before use connect()
            content={TIMELINE_DATA as any}
          />
          <BannerDesktop title={`Our Sponsor `}>
            <span className="text-slate-500 text-base font-normal leading-[30px]">
              We are proud to be sponsored by{" "}
              <Link
                href="https://gwinnettswcd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-1-400 font-bold"
              >
                Gwinnett Soil and Water Conservation District
              </Link>
            </span>
            <div className="flex flex-row flex-wrap justify-center mt-2">
              <Image
                src="/gswcd.png"
                height={192}
                width={192}
                alt="Logo of SWCD"
                className="w-16 h-16"
              />
            </div>
          </BannerDesktop>
        </section>
        <section className="space-y-4 md:pb-6 lg:pb-16">
          <h1 className="text-primary-2-500">
            Upcoming Events
            <Marker title="Upcoming Events" icon="pages" id="events" />
          </h1>
          <p className="max-w-xl text-slate-500 text-lg font-normal">
            Stay up-to-date on the latest news and events from our research team
            and partners, and find opportunities to make our community a better
            place.
          </p>
          <div className="h-6 lg:h-10"></div>
          <div className="flex gap-16 items-center">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-10 w-full max-w-full">
              <Calendar />
              {/* TODO: fix hardcode */}
            </div>
            <svg
              width="919"
              height="590"
              viewBox="0 0 919 590"
              fill="none"
              className="max-w-full object-cover absolute left-0 h-[432px] lg:h-auto overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M624.489 0H-386.848V590H625.13V588.717C787.405 588.371 918.848 456.715 918.848 294.359C918.848 132.003 787.405 0.346722 625.13 0.0006837V0H624.489Z"
                fill="url(#paint0_linear_115_532)"
              />
              {/* infinitely left rectangle */}
              <rect
                x="-10000"
                y="0"
                width="10000"
                height="590"
                fill="#FDEED3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_115_532"
                  x1="68.4782"
                  y1="333.478"
                  x2="736.717"
                  y2="333.478"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FDEED3" />
                  <stop
                    offset="0.992405"
                    stopColor="#FDEED3"
                    stopOpacity="0.0681983"
                  />
                  <stop offset="1" stopColor="#FDEED3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>
        <section className="space-y-4">
          <h1 className="max-w-4xl w-fill text-center text-primary-4-400 text-2xl md:text-4xl font-extrabold leading-snug">
            We have an entire team dedicated to supporting a greener Gwinnett
            <Marker title="Our Team" icon="communities" id="team" />
          </h1>
          <Team team={TEAM_DATA} />
        </section>
        <Footer />
      </main>
    </>
  );
}
