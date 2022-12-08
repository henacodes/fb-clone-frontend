import { Avatar } from "@material-ui/core";
import { SentimentSatisfied } from "@material-ui/icons";
import React, { Component, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import Button from "../Button/Button";
import imgData from "../../assets/henaCGI.jpg";
import "./index.css";

// actions
import { createPostAction } from "../../redux/actions/postAction";

export default () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const defaultAvatar = useSelector((state) => state.utils.avatar);
  console.log(user);
  const [postData, setPostData] = useState({
    caption: "",
    img: "",
    author: "",
  });

  const handlePost = () => {
    dispatch(createPostAction({ ...postData, author: user._id }, token));
    setPostData({
      caption: "",
      img: "",
      author: user._id,
    });
  };

  return (
    <div className="create-post">
      <div className="top">
        <Avatar
          src={user && user.profilePic ? user.profilePic : defaultAvatar}
        />
        <input
          placeholder="what's on your mind"
          id="caption-input"
          value={postData.caption}
          onChange={(e) =>
            setPostData({ ...postData, caption: e.target.value })
          }
        />
      </div>
      <div className="bottom">
        <div>
          <FileBase
            id="file_input"
            outline="none"
            type="file"
            value={postData.img}
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, img: base64 })}
          />
        </div>
        <div>
          <SentimentSatisfied />
          <span>Tag friends</span>
        </div>
        <div>
          <SentimentSatisfied />
          <span>Feeling/Activity</span>
        </div>
      </div>
      {postData.img !== "" && (
        <div className="img-review">
          <img src={postData.img} style={{ width: "100%" }} />
        </div>
      )}

      {(postData.img || postData.caption) && (
        <div className="buttons">
          <Button
            onClick={handlePost}
            buttonText="Post"
            className="btn-primary"
          />
          <Button
            onClick={() => setPostData({ caption: "", img: "" })}
            buttonText="cancel"
            className="btn-secondary"
          />
        </div>
      )}
    </div>
  );
};
