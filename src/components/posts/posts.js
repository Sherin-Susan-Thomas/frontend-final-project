import React from "react";
import "./posts.css";
import { Post } from "components/post/Post";

export const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((p) => (
        <div key={p._id}>
          <Post post={p} />
        </div>
      ))}
    </div>
  );
};
