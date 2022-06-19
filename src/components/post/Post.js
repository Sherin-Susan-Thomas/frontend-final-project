import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  return (
    <div className="post">
      
      <div className="postHeader">
        <span className="postTitle">{post.title}</span>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
       
      {post.picture && <img className="postImg" src={post.picture} alt="" />}
      </div>


      <div className="postInfo">
      <p className="postAuthor"><strong> Posted by: </strong>
       
        <Link to={`/home/?user=${post.username}`} className="link">
          {post.username}
        </Link>
      </p>
      </div>
   

        <div className="postDesc">{post.description}</div>
      <Link to={`/post/${post._id}`} className="link">
        <button className="readMore">Read More</button> <br />
      </Link>
      

      <div className="postDetails">
    
      <h4>
      <span className="hash">#{post.categories[0]}</span>
      </h4>

   
      
      </div>

      <div className="likeBox">

      <button className="likeButton">
        <span className="hearts" role="img" aria-label="heart image">
          ❤️
        </span>
      
      </button>
      <span className="likes"> x {post.likes}</span>
      </div>
    </div>
  );
};
