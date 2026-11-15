import Banner from "@/components/shared/Banner";
import NetherCard from "@/components/shared/NetherCard";
import OverworldCard from "@/components/shared/OverworldCard";

export default function Home() {
  return (
    <>
      <Banner />

      {/*Contents Section*/}
      <section className="w-11/12 mx-auto max-w-205 flex items-center justify-center gap-8 py-16">
        <OverworldCard></OverworldCard>
        <NetherCard></NetherCard>
      </section>
    </>
  );
}
