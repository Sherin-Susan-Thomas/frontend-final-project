import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./singlepost.css";
import axios from "axios";

export const SinglePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [update, setUpdate] = useState("");
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
      setTitle(res.data.title);
      setDescription(res.data.description);
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
    } catch (err) {
      console.log(err);
    }
  };

  const handleupdate = async () => {
    try {
      await axios.put("https://final-sprint.herokuapp.com/api/posts/" + path, {
        username: user,
        title: title,
        description: description,
      });
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="singlePost">
       <span className="singlePostDate">
          <b>Date: {new Date(post.createdAt).toDateString()}</b>
        </span>
      <div className="singlePostWrapper">

     
        
        {post.picture && (
          <img src={post.picture} alt="" className="singlePostImg" />
        )}
<div className="singleRow">

        {update ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
      
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlepostAuthor">
            <b>Posted by: {post.username}</b>
          </span>
        </div>
     
        {update ? (
          <input
            type="textarea"
            value={description}
            className="singlepostdescInput"
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <div className="singlePostDesc">
            <p className="singlepostdesc">{post.description}</p>
          </div>
        )}
        {update ? (
          <button className="singlePostButton" onClick={handleupdate}>
            Update post
          </button>
        ) : (
          ""
        )}
              {post.username === user && (
              <div className="singlePostEdit">
              <i
                className="singlePostIcon far fa-edit"
                onClick={() => setUpdate(true)}
              ></i>
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={handleDelete}
              ></i>
            </div>
            )}
            </div>
      </div>
    </div>
  );
};
