import * as types from "../actions/types";

const initialState = {
  status: null,
  message: null,
};
export default (error = initialState, action) => {
  switch (action.type) {
    case types.ERROR:
      return { status: action.payload.status, message: action.payload.message };
    case types.FETCH_POSTS_SUCCESS:
    case types.CREATE_POST_SUCCESS:
    case types.DELETE_POST_SUCCESS:
    case types.UPDATE_POST_SUCCESS:
    case types.CLEAR_ERRORS:
      return initialState;

    default:
      return error;
  }
};
