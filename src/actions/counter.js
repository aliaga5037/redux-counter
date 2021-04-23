export const increment = (times) => {
  return {
    type: "INCREMENT",
    payload: times,
  };
};

export const decrement = (times) => {
  return {
    type: "DECREMENT",
    payload: times,
  };
};
