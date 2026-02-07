export const getFormattedDate = (isoString: string) => {
  const date = new Date(isoString);

  const formatted = date.toLocaleString("en-IN", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return formatted;
};