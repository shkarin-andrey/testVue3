export const formatSeconds = (seconds, minutes, hours) => {
  if (seconds < 10 && (hours > 0 || minutes > 0)) {
    return `0${seconds}`;
  }

  if (seconds > 0) {
    return `${seconds}`;
  }

  return "0";
};
