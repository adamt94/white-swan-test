"use client";
import { Fixture, GroupedFixtures } from "@/app/page";
import { formatDateTimeHhMm } from "@/util/dateFormat";
import Tabs from "../Tabs/Tabs";
import TabPanel from "../Tabs/TabPanel";
import FixtureItem from "../FixtureItem/FixtureItem";
import { useRouter } from "next/navigation";

type FixturesProps = {
  groupedFixtures: GroupedFixtures;
};

const Fixtures: React.FC<FixturesProps> = ({ groupedFixtures }) => {
  const router = useRouter();
  const onFixtureClick = (fixture: Fixture) => {
    router.push(`/odds/${fixture.fixture_id}`);
  };
  return (
    <Tabs tabs={[...Object.keys(groupedFixtures)].map((tab) => `${tab}:00`)}>
      {Object.entries(groupedFixtures).map(([hour, competitions]) => (
        <TabPanel key={hour}>
          <ul className="flex flex-col text-center">
            {Object.entries(competitions).map(([competition, fixtures]) => (
              <li key={competition}>
                <hr className="w-full on-surface-variant-border my-1" />
                <p className="outline-text label-medium my-2">{competition}</p>
                {fixtures.map((fixture) => (
                  <FixtureItem
                    key={fixture.fixture_id}
                    fixture={fixture}
                    onItemClick={onFixtureClick}
                  />
                ))}
              </li>
            ))}
            <hr className="w-full on-surface-variant-border my-1" />
          </ul>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default Fixtures;
