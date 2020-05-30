const initialState = {
  isLogin: false,
  token: null,
  email: null,
  password: null,
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
    case "SET_REGISTER": {
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
        password: action.payload.password,
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
