const proReducer = (state = [], action) => {
  switch (action.type) {
    case "GETPRO_SUCCESS":
      return [...state, action.payload];
    case "GETAPRO_SUCCESS":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default proReducer;
