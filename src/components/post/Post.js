import React from "react";
import "./post.css";
import { Link } from "react-router-dom";


export const Post = ({post}) => {
  return (
    <div className="post">
      {post.photo &&(
      <img
        className="postImg"
        src={post.photo}
        alt=""
      />
      
      )}
      <div className="postInfo">
        <div className="postDetails">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
          </div>
          <Link to={`/post/${post.id}`} className="link">  <span className="postDetail">{post.title}</span>
</Link>
    
 
        <span className="postDescription">
          ate velit esse cillum dolore eu fugiat nulla pariatur
        </span>
        <br />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <div className="postDesc">
        {post.desc}
      </div>
      <img
        className="postImg"
        src="https://resebloggaren.se/wp-content/uploads/2020/02/rio-de-janeiro-1963744_1920.jpg"
        alt=""
      ></img>
      <div className="postInfo">
        <div className="postDetails">
          <span className="postDetail">RIO</span>
        </div>
        <span className="postDescription">
          ate velit esse cillum dolore eu fugiat nulla pariatur
        </span>
        <br />
        <span className="postDate">1 hour ago</span>
      </div>
      <div className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipicididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <img
        className="postImg"
        src="https://resebloggaren.se/wp-content/uploads/2020/02/rio-de-janeiro-1963744_1920.jpg"
        alt=""
      ></img>
      <div className="postInfo">
        <div className="postDetails">
          <span className="postDetail">RIO</span>
        </div>
        <span className="postDescription">
          ate velit esse cillum dolore eu fugiat nulla pariatur
        </span>
        <br />
        <span className="postDate">1 hour ago</span>
      </div>
      <div className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipicididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <img
        className="postImg"
        src="https://resebloggaren.se/wp-content/uploads/2020/02/rio-de-janeiro-1963744_1920.jpg"
        alt=""
      ></img>
      <div className="postInfo">
        <div className="postDetails">
          <span className="postDetail">RIO</span>
        </div>
        <span className="postDescription">
          ate velit esse cillum dolore eu fugiat nulla pariatur
        </span>
        <br />
        <span className="postDate">1 hour ago</span>
      </div>
      <div className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipicididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <img
        className="postImg"
        src="https://resebloggaren.se/wp-content/uploads/2020/02/rio-de-janeiro-1963744_1920.jpg"
        alt=""
      ></img>
      <div className="postInfo">
        <div className="postDetails">
          <span className="postDetail">RIO</span>
        </div>
        <span className="postDescription">
          ate velit esse cillum dolore eu fugiat nulla pariatur
        </span>
        <br />
        <span className="postDate">1 hour ago</span>
      </div>
      <div className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipicididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  );
};
