export const formatMinutes = (minutes, hours) => {
  if (minutes < 10 && hours > 0) {
    return `0${minutes}:`;
  }

  if (minutes > 0) {
    return `${minutes}:`;
  }

  return "";
};
