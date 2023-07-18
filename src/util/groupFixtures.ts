import { Fixture, GroupedFixtures } from "@/app/page";

export const groupFixturesByHourAndCompetition = (fixtures: Fixture[]) => {
    return fixtures.reduce((acc: GroupedFixtures, fixture: Fixture) => {
      const { start_time, competition } = fixture;
      const hour = new Date(start_time).getHours().toString();
      acc[hour] = acc[hour] || {};
      acc[hour][competition] = acc[hour][competition] || [];
      acc[hour][competition].push(fixture);
      return acc;
    }, {});
  };