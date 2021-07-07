import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import listReducer from "./listReducer";

export default combineReducers({
  loginReducer,
  userReducer,
  listReducer,
});
