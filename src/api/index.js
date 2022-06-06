import axios from "axios";

const url = 'https://final-sprint.herokuapp.com/api/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);

