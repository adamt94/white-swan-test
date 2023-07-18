export const formatDateTimeHhMm =  (timestamp: string | number) => {
    const date = typeof timestamp === "number" ? new Date(timestamp) : timestamp;
    const dateTime = new Date(date);
    const hours = dateTime.getHours().toString().padStart(2, '0');
    const minutes = dateTime.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}