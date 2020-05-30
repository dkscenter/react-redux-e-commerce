export const setNumber = () => {
  return {
    type: "SET_NUMBER",
  };
};

export const setUsername = (username) => {
  return {
    type: "SET_USERNAME",
    username,
  };
};
