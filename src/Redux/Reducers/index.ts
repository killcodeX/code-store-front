import { combineReducers } from "redux";
import { CodeReducer } from "./postReducer";
import AuthReducer from "./authReducer";

export default combineReducers({
  post: CodeReducer,
  auth: AuthReducer,
});
