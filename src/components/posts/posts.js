import React from "react";
import "./posts.css";
import { Post } from "components/post/Post";

export const Posts = () => {
  return (
    <div className="posts">
      {Posts.map(p=>(

<Post post={p}/>
      ))}
    </div>
  );
};
