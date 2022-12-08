import * as types from "./types";
import * as api from "../api";
export const loginUser = (credentials) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(credentials);
    dispatch({
      type: types.LOGIN_USER_SUCCESS,
      payload: {
        token: data.token,
        user: data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: types.ERROR,
      payload: error.response
        ? {
            message: error.response.data.message,
            status: error.response.status,
          }
        : {
            message: "Can't Connect to the server , please try again",
            status: 500,
          },
    });
  }
};

export const checkUser = () => async (dispatch) => {
  let token = localStorage.getItem("fbCloneToken");
  if (token) {
    try {
      const { data } = await api.getAuthorizedUser(token);
      dispatch({
        type: types.CHECK_TOKEN,
        payload: {
          user: data,
          token: token,
        },
      });
    } catch (error) {
      dispatch({
        type: types.ERROR,
        payload: error.response
          ? {
              message: error.response.data.message,
              status: error.response.status,
            }
          : {
              message: "Can't Connect to the server , please try again",
              status: 500,
            },
      });
    }
  }
};

export const createUser = (userData) => async (dispatch) => {
  dispatch({
    type: types.CREATE_USER_REQUEST,
  });
  try {
    const { data } = await api.createUser(userData);
    dispatch({
      type: types.CREATE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.ERROR,
      payload: error.response
        ? {
            message: error.response.data.message,
            status: error.response.status,
          }
        : {
            message: "Can't Connect to the server , please try again",
            status: 500,
          },
    });
  }
};
