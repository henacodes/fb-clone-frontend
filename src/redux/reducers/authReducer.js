import * as types from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
export default (auth = initialState, action) => {
  switch (action.type) {
    case types.CREATE_USER_SUCCESS:
      localStorage.setItem("fbCloneToken", action.payload.token);
      return {
        isAuthenticated: true,
        user: {
          username: action.payload.username,
          email: action.payload.email,
        },
        token: action.payload.token,
      };
    case types.CHECK_TOKEN:
      return {
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case types.LOGIN_USER_SUCCESS:
      localStorage.setItem("fbCloneToken", action.payload.token);
      return {
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
      };

    case types.LOGOUT_USER_SUCCESS:
      localStorage.removeItem("fbCloneToken");
      return initialState;

    default:
      return auth;
  }
};
