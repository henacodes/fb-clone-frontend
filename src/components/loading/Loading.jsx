import React from "react";
import "./Loading.css";
import Backdrop from "../Backdrop/Backdrop";
import Spinner from "@material-ui/core/CircularProgress";
const Loading = () => {
  return (
    <div className="loading">
      <div className="spinner">
        <Spinner />
      </div>
      <Backdrop setShow={() => ""} />
    </div>
  );
};

export default Loading;
