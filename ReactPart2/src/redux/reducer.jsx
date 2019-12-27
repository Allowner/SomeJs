var reducer = function(state = [], action) {
  switch (action.type) {
    case "SET_STATE": {
      console.log("reducer", action.films.data);
      return { data: action.films.data };
    }
    default:
      return state;
  }
};

export default reducer;
