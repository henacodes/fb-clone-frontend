import { Avatar } from "@material-ui/core";
import { MoreHoriz, ThumbUp } from "@material-ui/icons";
import React from "react";
import moment from "moment";
import "./Post.css";
import { useSelector } from "react-redux";
const Post = ({ post }) => {
  const defaultAvatar = useSelector((state) => state.utils.avatar);
  return (
    <div className="post">
      <div className="top">
        <div>
          <Avatar
            src={
              post.author.profilePic ? post.author.profilePic : defaultAvatar
            }
          />
          <div className="post-username-date">
            <p>{[post.author.username]}</p>
            <p className="time-delay">{moment(post.date_posted).fromNow()}</p>
          </div>
        </div>
        <div>
          <MoreHoriz />
        </div>
      </div>
      <p className="caption">{post.caption}</p>
      {post.img && <img src={post.img} className="post-img" />}
    </div>
  );
};

export default Post;
