import * as types from "../actions/types";

export default (utils = {}, action) => {
  switch (action.type) {
    case types.AVATAR_FETCH:
      return { ...utils, avatar: action.payload };
    default:
      return utils;
  }
};
