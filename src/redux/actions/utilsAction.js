import * as types from "./types";
import * as api from "../api";

export const fetchAvatar = () => async (dispatch) => {
  const token = localStorage.getItem("fbCloneToken");
  try {
    const { data } = await api.getAvatar(token);
    dispatch({
      type: types.AVATAR_FETCH,
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.ERROR,
      payload: error.response
        ? {
            status: error.response.status,
            message: error.response.data.message,
          }
        : {
            status: 500,
            message: "Internal server error while fetching a data",
          },
    });
  }
};
