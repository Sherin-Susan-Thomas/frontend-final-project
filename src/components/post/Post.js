import React, { useState, useEffect } from "react";
import axios from "axios";
import "./post.css";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const postid = post._id;
  console.log("likeid", postid);
  console.log(user);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(post.likes.includes(user.username));
  }, [user._id, post.likes]);

  const likeHandler = () => {
    try {
      axios.put(
        "https://final-sprint.herokuapp.com/api/posts/" + post._id + "/like",
        { username: user.username }
      );
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
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
      <button className="likeButton" onClick={likeHandler}>
        <span className="hearts" role="img" aria-label="heart image">
          ❤️
        </span>
      </button>
      <span className="likes">{like} </span>
    </div>
  );
};
