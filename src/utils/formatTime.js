import { formatHours } from "./formatHours";
import { formatMinutes } from "./formatMinutes";
import { formatSeconds } from "./formatSeconds";

export const formatTime = (time) => {
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor((time / 60) % 60);
  const seconds = Math.floor(time % 60);

  return `${
    formatHours(hours) +
    formatMinutes(minutes, hours) +
    formatSeconds(seconds, minutes, hours)
  }`;
};
