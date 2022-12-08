import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import postsReducer from "./postsReducer";
import loadingReducer from "./loadingReducer";
import authReducer from "./authReducer";
import utilsReducer from "./utilsReducer";
export default combineReducers({
  posts: postsReducer,
  error: errorReducer,
  loading: loadingReducer,
  auth: authReducer,
  utils: utilsReducer,
});
