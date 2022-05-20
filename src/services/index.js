export const getBeers = (callback) => {
  fetch("https://api.punkapi.com/v2/beers/")
    .then((response) => response.json())
    .then((response) => callback(response));
};
