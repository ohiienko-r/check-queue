export const extractId = (link: string): number => {
  return +link.split("=")[1];
};
