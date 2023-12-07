import { Calendar, Events, Hero, Marker, Team, TixieHero } from "@/components";
import BannerDesktop from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Timeline from "@/components/Timeline/Timeline";

export default function Home() {
  return (
    <>
      <main className="px-6 md:px-18 max-w-xl md:max-w-5xl mx-auto space-y-8 sm:space-y-12 md:space-y-20">
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
              since 2022.
            </span>
          </BannerDesktop>
          <Timeline
            // NOTE: declare Tailwind CSS class before use connect()
            content={[
              { variant: "start" },
              // h-[10px]
              // md:h-[15px]
              { length: 10 },
              {
                variant: "year",
                year: "2022",
              },
              // h-[45px]
              // md:h-[67.5px]
              { length: 45 },
              {
                title: "Conception",
                description:
                  "Started in January 2023 with Lily under Gwinnett sponsorship. Guided by Ms. Tixie.",
                month: "January",
              },
              // h-[75px]
              // md:h-[112.5px]
              { length: 75 },
              {
                variant: "year",
                year: "2023",
              },
              // h-[100px]
              // md:h-[150px]
              { length: 10 },
              {
                title: "High School Connection",
                description:
                  "May 1st, 2023: Initiatives to connect high schoolers Lily and John at SCE meetings.",
                month: "May",
              },
              { length: 100 },
              {
                title: "Summer Planning",
                description:
                  "Summer 2023: Government planning, officer recruitment, and school scheduling efforts took place.",
                month: "Summer",
              },
              { length: 100 },
              {
                title: "Core Committee Established",
                description:
                  "Sep 1st, 2023: Formation of a core committee with members across Gwinnett County.",
                month: "September",
              },
              { length: 100 },
              { variant: "upcoming" },
              { length: 45 },
            ]}
          />
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
              <Events
                className="flex-shrink flex-grow w-80 h-96 lg:h-auto lg:w-auto"
                events={[
                  {
                    title: "Tentative Discovery Presentation",
                    description: "Present in Discovery HS about Gwinnett Ecos",
                    link: "/",
                  },
                ]}
              />
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
            We got an entire team dedicated to support a greener Gwinnett
            <Marker title="Our Team" icon="communities" id="team" />
          </h1>
          <TixieHero />
          <Team
            team={[
              {
                name: "Tanya Nguyen",
                position: "Communication Head",
                image: "/team/tanya.png",
                description:
                  "I’m a junior at South Gwinnett High School, and also their Environmental Club President! I spend time reading poetry, binging about every trending show, and enjoying nature in every way possible.",
              },
              {
                name: "Isabella Garcia",
                position: "Research Head",
                image: "/team/isabella.png",
                description:
                  "I hope to major in chemical engineering. I’m super excited to be working with all of you this year and to teach my passion for research while also leaving a positive impact on our community.",
              },
              {
                name: "Elizabeth Nguyen",
                position: "Marketing Head",
                image: "/team/elizabeth.png",
                description:
                  "I'm a senior at GSMST who isn’t afraid of hands-on activity, and is committed to learning and applying newly learned skills to help make an impact on the environment. As the marketing head of G-ECOS I'll be applying marketing skills to help promote and develop the future events and projects.",
              },
              {
                name: "Theogracia Alese",
                position: "Research Head",
                image: "/team/theo.png",
                description:
                  "A senior at the Gwinnett School of Mathematics, Science, and Technology. Spends her time reading, playing the viola, playing the kalimba, making art, crocheting, baking, and/or sleeping.",
              },
              {
                name: "Johnny Ho",
                position: "Research Head",
                image: "/team/johnny.png",
                description:
                  "I enjoy late-night walks, creating playlists on Spotify, and making people laugh. My favorite place to be is at the beach. Fun fact: I haven’t broken any bones in my body (yet.)",
              },
              {
                name: "Malaika Crates",
                position: "Communication Head",
                image: "/team/malaika.png",
                description:
                  "I'm a senior at GSMST, passionate about making a positive impact on the environment. I enjoy going on walks in my neighborhood and listening to music, my favorite artist is Brent Faiyaz!",
              },
              {
                name: "Keren Oh",
                position: "Communication Head",
                image: "/team/keren.png",
                description:
                  "I’m a Communication’s head for Gwinnett E-COS! I love taking my dogs with me to go hiking and reading science fiction in my free time, especially to relieve some stress!",
              },
            ]}
          />
        </section>
        <Footer />
      </main>
    </>
  );
}
