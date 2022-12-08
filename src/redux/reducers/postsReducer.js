import * as types from "../actions/types";

export default (posts = [], action) => {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS:
      return action.payload;
    case types.CREATE_POST_SUCCESS:
      return [action.payload, ...posts];
    case types.DELETE_POST_SUCCESS:
      return posts.filter((post) => post._id !== action.payload._id);
    case types.UPDATE_POST_SUCCESS:
      return posts.map((post) => {
        if (post._id === action.payload._id) {
          return action.payload;
        }
        return post;
      });
    default:
      return posts;
  }
};
