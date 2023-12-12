export const useItem = (index: number, total: number) => {
  const size = 10;
  const initialColor = [254, 179, 215];
  const finalColor = [203, 182, 255];
  const red =
    initialColor[0] + (index / (total - 1)) * (finalColor[0] - initialColor[0]);
  const green =
    initialColor[1] + (index / (total - 1)) * (finalColor[1] - initialColor[1]);
  const blue =
    initialColor[2] + (index / (total - 1)) * (finalColor[2] - initialColor[2]);
  const color = `rgb(${red}, ${green}, ${blue})`;
  return {
    color,
    size,
  };
};
