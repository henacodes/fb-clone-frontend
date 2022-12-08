import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//components
import CreatePost from "../components/CreatePost/";
import Post from "../components/Post/Post";

//Actions
import { fetchPostsAction } from "../redux/actions/postAction";
import { fetchAvatar } from "../redux/actions/utilsAction";
const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPostsAction());
    dispatch(fetchAvatar());
  }, []);

  return (
    <div className="feed">
      <CreatePost />

      <div className="posts">
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
