const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return (state += Number(action.payload));
    case "DECREMENT":
      return (state -= Number(action.payload));
    default:
      return state;
  }
};

export default counterReducer;
