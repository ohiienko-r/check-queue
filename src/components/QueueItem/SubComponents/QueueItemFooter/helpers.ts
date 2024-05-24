import { Timestamp } from "firebase/firestore";

export const getCreationTimeString = (createdAt: Timestamp) => {
  if (!createdAt) return "";

  const date = createdAt.toDate().toLocaleDateString("en-US", {
    timeZone: "Etc/GMT-3",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const time = createdAt.toDate().toLocaleTimeString("en-US", {
    timeZone: "Etc/GMT-3",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Use 24-hour time format
  });

  return `${date} ${time}`;
};
