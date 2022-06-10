import React from "react";
import "./singlepost.css";
​
​
export const SinglePost = () => {
return(
    <div className="singlePost">SINGLE POST
    <div className="singlePostWrapper">
<img 
src="https://resebloggaren.se/wp-content/uploads/2020/02/rio-de-janeiro-1963744_1920.jpg"
alt=""
className="singlePostImg">
</img>
<h1 className="singlePostTitle">lorem ipsum lorem ipsum
<div className="singlePostEdit">
<i className="singlePostIcon">edit</i>
<i className="singlePostIcon">trash</i>
</div>
</h1>
<div className="singlePostInfo">
    <span className="singlepostAuthor">Author:</span>
</div>
    </div>
    </div>
)
};