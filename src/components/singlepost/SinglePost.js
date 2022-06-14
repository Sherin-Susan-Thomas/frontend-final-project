import React, { useEffect, useState } from "react";
import "./singlepost.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const SinglePost = () => {
const location = useLocation()
const path= location.pathname.split("/")[2];
const [post, setPost] = useState({})

useEffect(() =>{
  const getPost = async () => {
    const res = await axios.get("/posts/"+ path);
    setPost(res.data)
  };
getPost()
}, [path])

  return (
    <div className="singlePost">
      SINGLE POST
      <div className="singlePostWrapper">
{post.photo &&
  <img
          src={post.photo}
          alt=""
          className="singlePostImg"
        />
}

        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon">
              <span role="img" aria-label="image">
                ✏️
              </span>
            </i>
            <i className="singlePostIcon">
              <span role="img" aria-label="image">
                ❌
              </span>
            </i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlepostAuthor">
            <b>{post.username}</b>
          </span>
          <span className="singlePostDesc">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <div className="singlePostDesc">
          <span className="singlepostdesc">
            {post.desc}
          </span>
        </div>
      </div>
    </div>
  );
};
