export const formatDateTimeHhMm =  (timestamp: string | number) => {
    const date = typeof timestamp === "number" ? new Date(timestamp) : timestamp;
    const dateTime = new Date(date);
    const hours = dateTime.getHours().toString().padStart(2, '0');
    const minutes = dateTime.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

type HourlyTimestamps = {
  [hour: string]: string[];
};

export function categorizeTimestampsByHour(
  timestamps: string[]
): string[] {
  const hourlyTimestamps: HourlyTimestamps = {};

  timestamps.forEach((timestamp) => {
    const hour = new Date(Number(timestamp)).getHours().toString();
    if (!hourlyTimestamps[hour]) {
      hourlyTimestamps[hour] = [];
    }
    hourlyTimestamps[hour].push(timestamp);
  });

  return Object.keys(hourlyTimestamps);
}
