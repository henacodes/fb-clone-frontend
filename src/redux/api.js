import axios from "axios";

const URL = "https://fb-clone-backend.onrender.com";

export const createPost = (postData, token) =>
  axios.post(`${URL}/posts/create`, postData, {
    headers: {
      Authorization: `TOKEN ${token}`,
    },
  });

export const deletePosts = (id, token) =>
  axios.put(`${URL}/posts/delete/${id}`, {
    headers: {
      Authorization: `TOKEN ${token}`,
    },
  });
export const fetchPosts = () => axios.get(`${URL}/posts/`);

export const createUser = (userData) =>
  axios.post(`${URL}/users/create`, userData);

export const loginUser = (credentials) =>
  axios.post(`${URL}/users/login`, credentials);

export const getAuthorizedUser = (token) =>
  axios.get(`${URL}/users/me`, {
    headers: {
      Authorization: `TOKEN ${token}`,
    },
  });

export const getAvatar = (token) =>
  axios.get(`${URL}/utils/getAvatar`, {
    headers: {
      Authorization: `TOKEN ${token}`,
    },
  });
