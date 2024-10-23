import { Marker } from "@/components";

export default function Events() {
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
                <img
                  src="/our-impact/hurricane-canva.jpg"
                  alt="Hurricane Helene Relief Drive Flyer"
                  className="rounded-xl w-full"
                />
                <div className="space-y-4 mt-4">
                  <video
                    controls
                    className="rounded-xl w-full h-auto"
                    playsInline
                    preload="metadata"
                    poster="/our-impact/hurricane-canva.jpg"
                  >
                    <source
                      src="/our-impact/red-cross-help.MOV"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <video
                    controls
                    className="rounded-xl w-full h-auto"
                    playsInline
                    preload="metadata"
                    poster="/our-impact/hurricane-canva.jpg"
                  >
                    <source
                      src="/our-impact/gecos-hurricane-helen-official.MOV"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
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
      </main>
    </>
  );
}
