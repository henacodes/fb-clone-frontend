import * as types from "./types";
import * as api from "../api";
export const fetchPostsAction = () => async (dispatch) => {
  dispatch({
    type: types.FETCH_POSTS_REQUEST,
  });
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: types.FETCH_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.ERROR,
      payload: error.response
        ? {
            status: error.response.status,
            message: error.response.data.message,
          }
        : {
            status: 500,
            message: "Can't connect to the server",
          },
    });
  }
};

export const createPostAction = (postData, token) => async (dispatch) => {
  dispatch({
    type: types.CREATE_POST_REQUEST,
  });

  try {
    const { data } = await api.createPost(postData, token);
    dispatch({
      type: types.CREATE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.ERROR,
      payload: {
        message: error.response.data.message,
        status: error.response.data.status,
      },
    });
  }
};
