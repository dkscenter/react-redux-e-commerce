import user from "./userReducer";
import product from "./productReducer";
import auth from "./authReducer";
import { combineReducers } from "redux";

export default combineReducers({
  user,
  product,
  auth,
});
