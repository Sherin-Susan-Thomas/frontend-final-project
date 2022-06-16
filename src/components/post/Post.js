import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  return (
    <div className="post">
      <h1>
        <span className="postTitle">{post.title}</span>
      </h1>

      <p className="postAuthor">
        Postedby:
        <Link to={`/home/?user=${post.username}`} className="link">
          {post.username}
        </Link>
      </p>
      <h4>
        Tags: <span className="hash">#{post.categories[0]}</span>
      </h4>
      {post.picture && <img className="postImg" src={post.picture} alt="" />}
      <div className="postInfo">
        <div className="postDetails"></div>

        <br />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <div className="postDesc">{post.description}</div>
      <Link to={`/post/${post._id}`} className="link">
        <button>Read More</button> <br />
      </Link>

      <button className="likeButton">
        <span className="hearts" role="img" aria-label="heart image">
          ❤️
        </span>
      </button>

      <span className="likes"> x {post.likes}</span>
    </div>
  );
};
