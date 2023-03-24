export const formatHours = (hours) => {
  if (hours < 10 && hours !== 0) {
    return `${hours}:`;
  }

  if (hours >= 10) {
    return `${hours}:`;
  }

  return "";
};
