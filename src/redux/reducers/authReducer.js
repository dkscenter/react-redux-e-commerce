const initialState = {
  isLogin: false,
  profile: {
    id: null,
    email: null,
    first_name: null,
    last_name: null,
    avatar: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        isLogin: true,
        profile: action.payload,
      };
    }
    case "RESET_USER": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
