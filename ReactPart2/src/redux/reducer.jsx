var reducer = function(state = [], action) {
  switch (action.type) {
    case "SET_STATE": {
      return { data: action.films.data };
    }
    default:
      return state;
  }
};

export default reducer;
