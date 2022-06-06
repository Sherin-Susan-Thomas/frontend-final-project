/* import { createPost } from 'api'; */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from 'actions/posts';

//Add picture and array!!!
const User = () => {
const [postData, setPostData] = useState({
title: ' ', description: ' ', username: ' ', categories: ' ', likes: ' ', comments: ' ', 
});

const dispatch = useDispatch();

const handleSubmit = (e) => {
e.preventDefault();
dispatch(createPost(postData));
}

const clear = () => {

}

return(
<div>
    <form>Create a memory!

    <label htmlFor="title">Title</label>
<input
  type="text"
  value={postData.title}
  onChange={(e) => setPostData({ ...postData, title: e.target.value })}
  onSubmit={handleSubmit}
/>

<label htmlFor="description">Description</label>
<input
  type="text"
  value={postData.description}
  onChange={(e) => setPostData({ ...postData, description: e.target.value })}
  onSubmit={handleSubmit}
/>

<label htmlFor="username">Username</label>
<input
  type="text"
  value={postData.username}
  onChange={(e) => setPostData({ ...postData, username: e.target.value })}
  onSubmit={handleSubmit}
/>

<label htmlFor="categories">Categories</label>
<input
  type="text"
  value={postData.categories}
  onChange={(e) => setPostData({ ...postData, categories: e.target.value })}
  onSubmit={handleSubmit}
/>

<label htmlFor="likes">Likes</label>
<input
  type="number"
  value={postData.likes}
  onChange={(e) => setPostData({ ...postData, likes: e.target.value })}
  onSubmit={handleSubmit}
/>

<label htmlFor="comments">Comments</label>
<input
  type="text"
  value={postData.comments}
  onChange={(e) => setPostData({ ...postData, comments: e.target.value })}
  onSubmit={handleSubmit}
/>

<button type="submit">Submit</button>
<button onClick={clear}>Clear</button>
    </form>
</div>

)
}

export default User;