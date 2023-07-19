import { formatDateTimeHhMm } from "./dateFormat";

import { categorizeTimestampsByHour } from "./dateFormat";

describe("formatDateTimeHhMm", () => {
  it("should format a date string as HH:mm", () => {
    const date = new Date("2022-01-01T12:34:56.789Z");
    expect(formatDateTimeHhMm(date)).toBe("12:34");
  });

  describe("categorizeTimestampsByHour", () => {
    it("should categorize timestamps by hour", () => {
      const timestamps = ["1682250580923", "1689250580923", "1681250580923"];
      const expected = ["12", "13", "23"];
      expect(categorizeTimestampsByHour(timestamps)).toEqual(expected);
    });
  });
});
