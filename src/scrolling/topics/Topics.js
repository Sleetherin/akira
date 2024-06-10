import './Topics.css'

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchTopics } from "../../store/topicsSlice";
import Topic from '../../components/topic/Topic';

export const Topics = () => {
  
  const dispatch = useDispatch();
  const { topics, status, error } = useSelector((state) => state.topics);
  
  useEffect(() => {
    dispatch(fetchTopics())
  },[dispatch]);
    
  return (
    <div className="scrolling_topics_style">
      <p className="topics_title_style">TOPICS</p>
      <div className="topics_style">
          {status === 'loading' && <p>Loading...</p>} 
          {status === 'failed' && <p>Error: {error}</p>}
          {status === 'succeeded' &&
            topics.map((topic) => {
              let t = (<Topic key={topic.id} topic={topic} />);

              return t;}
            )
          }
      </div>
    </div>
    )
  
}

export default Topics;


