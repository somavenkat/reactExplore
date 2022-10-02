const initialState = {
  counter: 0,
};
const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return {
        ...state,
        counter: payload,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: payload,
      };
    case "RESET":
      return {
        ...state,
        counter: payload,
      };
    default:
      return state;
  }
};
export default counterReducer;
