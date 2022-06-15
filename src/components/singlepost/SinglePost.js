import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./singlepost.css";
import axios from "axios";

export const SinglePost = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        "https://final-sprint.herokuapp.com/api/posts/" + path
      );
      console.log(res);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  const handleDelete = async () => {
    try {
      await axios.delete(
        "https://final-sprint.herokuapp.com/api/posts/" + path,
        { data: { username: user } }
      );
      navigate("/home");
    } catch (err) {}
  };
  console.log(post.username === user);
  return (
    <div className="singlePost">
      SINGLE POST
      <div className="singlePostWrapper">
        {post.picture && (
          <img src={post.picture} alt="" className="singlePostImg" />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user && (
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </h1>

        <div className="singlePostInfo">
          <span className="singlepostAuthor">
            <b>Author:{post.username}</b>
          </span>
        </div>
        <span className="singlePostDate">
          <b>{new Date(post.createdAt).toDateString()}</b>
        </span>
        <div className="singlePostDesc">
          <span className="singlepostdesc">{post.description}</span>
        </div>
      </div>
    </div>
  );
};
