import axios from "axios";

export const login = (payload, props) => {
  return (dispatch) => {
    axios.get("https://reqres.in/api/users/5").then((res) => {
      props.history.push("/user");
      return dispatch({
        type: "SET_USER",
        payload: res.data.data,
      });
    });
  };
};

export const register = ({ email, password }, props) => {
  return (dispatch) => {
    axios
      .post("https://reqres.in/api/register", {
        email: "eve.holt@reqres.in",
        password: "pistol",
      })
      .then((res) => {
        props.history.push("/login");
        return dispatch({
          type: "SET_REGISTER",
          payload: {
            ...res.data,
            email,
            password,
          },
        });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET_USER",
    });
  };
};
