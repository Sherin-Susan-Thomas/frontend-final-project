import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  return (
    <div className="post">
      <Link to={`/post/${post._id}`} className="link">
        <h1>
          <span className="postTitle">{post.title}</span>
        </h1>
      </Link>
      <Link to={`/home/?user=${post.username}`} className="link">
        <p className="postAuthor">{post.username}</p>
      </Link>

      {post.picture && <img className="postImg" src={post.picture} alt="" />}
      <div className="postInfo">
        <div className="postDetails">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>

        <br />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <div className="postDesc">{post.description}</div>
    </div>
  );
};
