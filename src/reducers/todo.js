const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return;

    default:
      return state;
  }
};

export default todoReducer;
