import "./Topic.css";

import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../store/postsSlice";


export const Topic = (props) => {
  
  const dispatch = useDispatch();
  const { display_name} = props.topic;

  const handleTopicClick = (e) => {
    console.log(`topic: ${display_name}!`);
    dispatch(fetchPosts(display_name));
  }
  

  return (
    <div className="topic_style">
      <p onClick={handleTopicClick} id="mostPopularTopic">{display_name}</p>
    </div>
  )
  
}

export default Topic;


