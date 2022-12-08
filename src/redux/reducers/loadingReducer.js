import * as types from "../actions/types";

export default (loading = false, action) => {
  switch (action.type) {
    case types.LOGIN_USER_REQUEST:
    case types.LOGOUT_USER_REQUEST:
    case types.UPDATE_POST_REQUEST:
    case types.GET_USER_REQUEST:
    case types.FETCH_POSTS_REQUEST:
    case types.DELETE_USER_REQUEST:
    case types.DELETE_POST_REQUEST:
    case types.CREATE_USER_REQUEST:
    case types.CREATE_POST_REQUEST:
    case types.CHECK_TOKEN:
      return (loading = true);

    case types.LOGIN_USER_SUCCESS:
    case types.LOGOUT_USER_SUCCESS:
    case types.UPDATE_POST_SUCCESS:
    case types.GET_USER_SUCCESS:
    case types.FETCH_POSTS_SUCCESS:
    case types.DELETE_USER_SUCCESS:
    case types.DELETE_POST_SUCCESS:
    case types.CREATE_USER_SUCCESS:
    case types.CREATE_POST_SUCCESS:

    case types.LOGIN_USER_FAIL:
    case types.LOGOUT_USER_FAIL:
    case types.UPDATE_POST_FAIL:
    case types.GET_USER_FAIL:
    case types.FETCH_POSTS_FAIL:
    case types.DELETE_USER_FAIL:
    case types.DELETE_POST_FAIL:
    case types.CREATE_USER_FAIL:
    case types.CREATE_POST_FAIL:
    case types.ERROR:
      return (loading = false);

    case types.STOP_LOADING:
      return (loading = false);
    default:
      return loading;
  }
};
