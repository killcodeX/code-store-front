import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
  VERIFY_LOCAL_STORAGE,
} from "../Actions/actionConstant";

import { saveState, loadState } from "../../Helpers/localStrorage";

const initialState = {
  isAuthenticated: loadState("codeStoreLoggedIn") || false,
  token: "",
  user: loadState("codeStoreUser") || {},
  firstTimeUser: false,
};

// Reducers
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      saveState("codeStoreLoggedIn", true);
      saveState("codeStoreUser", action.user);
      saveState("codeStoretoken", action.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        token: action.token,
      };

    case SIGNUP_SUCCESS:
      saveState("codeStoreLoggedIn", true);
      saveState("codeStoreUser", action.user);
      saveState("codeStoretoken", action.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        token: action.token,
        firstTimeUser: true,
      };

    case LOGOUT_SUCCESS:
      saveState("codeStoreLoggedIn", false);
      saveState("codeStoreUser", {});
      saveState("codeStoretoken", "");
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        token: "",
      };

    case VERIFY_LOCAL_STORAGE:
      const auth = loadState("codeStoreLoggedIn");
      const user = loadState("codeStoreUser");
      const token = loadState("codeStoretoken");
      return {
        ...state,
        isAuthenticated: auth,
        user: user,
        token: token,
      };

    default:
      return state;
  }
};

export default AuthReducer;
