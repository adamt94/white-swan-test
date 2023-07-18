import FixtureItem from "@/app/components/FixtureItem/FixtureItem";
import Tabs from "@/app/components/Tabs/Tabs";
import TabPanel from "@/app/components/Tabs/TabPanel";
import { useRouter } from "next/navigation";
import { groupFixturesByHourAndCompetition } from "@/util/groupFixtures";
import Fixtures from "@/app/components/Fixtures/Fixtures";

export type Fixture = {
  fixture_id: string;
  start_time: string;
  country_name: string;
  competition: string;
  home: string;
  away: string;
};

export type GroupedFixtures = {
  [hour: string]: {
    [competition: string]: FixtureItem[];
  };
};

async function getFixtures() {
  const res = await fetch("http://localhost:3000/api/fixtures");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const fixtures = await getFixtures();
  const groupedFixtures = groupFixturesByHourAndCompetition(fixtures);

  return (
    <main className="p-10">
      <h1 className="title-large primary-text">Fixtures</h1>
      <h2 className="text-center on-surface-text"> 2023-07-13</h2>
      <div className="flex flex-col items-center w-96 m-auto">
        <Fixtures groupedFixtures={groupedFixtures} />
      </div>
    </main>
  );
}
