const initialState = {
  customNumber: 0,
  customText: "",
  isLogin: false,
  profile: {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_NUMBER": {
      return {
        ...state,
        customNumber: ++state.customNumber,
      };
    }
    case "SET_USERNAME": {
      return {
        ...state,
        customText: action.username,
      };
    }
    case "SET_USER": {
      return {
        ...state,
        profile: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
