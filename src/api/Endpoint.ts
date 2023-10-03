export const BASE = "api end point";

export const getRootData = () => {
  return encodeURI(`/`);
};
export const getFilmsDataUrl = () => {
  return encodeURI(`/films/`);
};
export const getStarshipsDataUrl = () => {
  return encodeURI(`/starships/`);
};
