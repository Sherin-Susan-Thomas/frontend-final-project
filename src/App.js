import React, { useEffect } from 'react'
/* import SinglePost from 'components/singlepost'; */
import Posts from 'components/posts';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';


export const App = () => {
const dispatch = useDispatch()

useEffect(() => {
dispatch(getPosts());
}, [dispatch]);





  return (
    <Posts></Posts>
  )
}
