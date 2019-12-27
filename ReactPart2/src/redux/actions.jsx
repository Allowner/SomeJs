var fetchFilms = function(films) {
  console.log("fetch", films);
  return {
    type: "SET_STATE",
    films: films
  };
};

var sortFilms = function(items, sortBy) {
  var films = items.sort((a, b) => {
    return a[sortBy] > b[sortBy] ? 1 : -1;
  });

  console.log("afterSortKekw", films);
  return {
    type: "SET_STATE",
    films: { data: films }
  };
};

export default { fetchFilms, sortFilms };
