import React from "react";
import { useSelector } from "react-redux";


import SinglePost from "./singlepost";

const Posts = () => {
    const posts = useSelector((state) => state.posts);

console.log(posts);


    return (
        <>
        <h1>POSTS</h1>
        <SinglePost />
        <SinglePost />


        </>
    );


};

export default Posts;