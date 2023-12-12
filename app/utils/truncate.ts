export const truncateDescription = (
  description: string,
  size: number
): string => {
  const words = description.split(" ");
  return words.length <= size
    ? description
    : words.slice(0, size).join(" ") + "...";
};
