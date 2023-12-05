const reducer = (state, action) => {
  switch (action?.type) {
      case 'GET_ALL_REVIEWS':
          return [...action.payload];
      case 'ADD_REVIEW':
          return [...state, action.payload];
      default:
          return state;
  }
}

export default reducer;