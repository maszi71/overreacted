export const convertDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const createPostDate = (id: number): Date => {
  return new Date(new Date().getTime() - id * 24 * 60 * 60 * 1000);
};
