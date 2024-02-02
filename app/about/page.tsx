import { BannerDesktop, Footer, Marker, Timeline } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { TIMELINE_DATA } from "../data";

export default function About() {
  return (
    <>
      <main className="px-6 md:px-18 max-w-xl md:max-w-5xl mx-auto space-y-12 md:space-y-20 pt-24 lg:pt-32">
        <section>
          <h1 className="text-primary-1-500">
            About Us
            <Marker title="About Us" icon="info" id="about" />
          </h1>
          <div className="flex-col gap-4">
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
          </div>
        </section>
        <section className="space-y-4">
          <h1 className="text-primary-1-500">
            Timeline
            <Marker title="About Us" icon="info" id="about" />
          </h1>
          <Timeline
            // NOTE: declare Tailwind CSS class before use connect()
            content={TIMELINE_DATA as any}
          />
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
        </section>
        <Footer />
      </main>
    </>
  );
}
