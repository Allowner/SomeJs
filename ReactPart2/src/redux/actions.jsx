var fetchFilms = function(films) {
  return {
    type: "SET_STATE",
    films: films
  };
};

var sortFilms = function(items, sortBy) {
  var films = items.sort((a, b) => a[sortBy] > b[sortBy]);
  return {
    type: "SET_STATE",
    films: films
  };
};

export default { fetchFilms, sortFilms };
