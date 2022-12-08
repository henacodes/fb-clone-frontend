import { IconButton } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import React from "react";
import "./Modal.css";
const Modal = (props) => {
  return (
    <div className="modal">
      <div className="closeBtn">
        <IconButton onClick={() => props.setShow()}>
          <Cancel />
        </IconButton>
      </div>
      <div className="modal-body">{props.children}</div>
    </div>
  );
};

export default Modal;
