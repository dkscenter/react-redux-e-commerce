const initialState = {
  isLogin: false,
  // Step 1 Set Default state of register data
  // Step 9 Set Default state of user profile
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER": {
      // Step 10 Return new state after login
      return ;
    }
    case "SET_REGISTER": {
      // Step 2 Return new state after register
      return ;
    }
    case "RESET_USER": {
      // Step 18 Return new state after logged out
      return ;
    }
    default: {
      return state;
    }
  }
};
