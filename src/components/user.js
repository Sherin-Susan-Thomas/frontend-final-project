/* import { createPost } from 'api'; */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from 'actions/posts';


const User = () => {
const [postData, setPostData] = useState({
creator: ' ', title: ' ', message: ' ', tags: ' ', selectedFile: ' '
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

    <label htmlFor="username">Creator</label>
<input
  type="text"
  value={postData.creator}
  onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
/>

<label htmlFor="title">Title</label>
<input
  type="title"
  value={postData.title}
  onChange={(e) => setPostData({ ...postData, title: e.target.value })}
/>

<label htmlFor="message">Message</label>
<input
  type="message"
  value={postData.message}
  onChange={(e) => setPostData({ ...postData, message: e.target.value })}
/>

<label htmlFor="tags">Tags</label>
<input
  type="tags"
  value={postData.tags}
  onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
/>

<button type="submit">Submit</button>
<button onClick={clear}>Clear</button>
    </form>
</div>

)
}

export default User;