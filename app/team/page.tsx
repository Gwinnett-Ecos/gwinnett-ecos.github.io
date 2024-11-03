import { Marker, Team } from "@/components";
import { TEAM_DATA } from "../data";

export default function Events() {
  return (
    <>
      <main className="px-6 md:px-18 max-w-xl md:max-w-5xl mx-auto py-24">
        <section className="md:my-8 lg:mx-12 space-y-4 mx-12">
          <h1 className="text-primary-4-500">
            Our Team
            <Marker title="About Us" icon="info" id="about" />
          </h1>
          <Team team={TEAM_DATA} />
        </section>
        <div className="h-16 lg:h-24"></div>
      </main>
    </>
  );
}
