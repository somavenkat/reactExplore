export const increment = (data) => {
  return {
    type: "INCREMENT",
    payload: data,
  };
};

export const decrement = (data) => {
  return {
    type: "DECREMENT",
    payload: data,
  };
};

export const reset = (data) => {
  return {
    type: "RESET",
    payload: data,
  };
};

export const logIn = () => {
  return {
    type: "LOG_IN",
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};
