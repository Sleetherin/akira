import "./Topic.css";

import React, { Component } from 'react';


export class Topic extends Component {

  render() {
    const { display_name} = this.props.topic;


    return (
      <div className="topic_style">
         <p>{display_name}</p>
      </div>
    )
  }
}

export default Topic;
/*
import "./Topic.css";

import React, { useRef } from 'react';
import { useDispatch } from "react-redux";

export const Topic = ({topic}) => {

  //const { display_name} = this.props.topic;
  const dispatch = useDispatch();

  const topicClawed = useRef(null);

  const changePosts = () => {
    topicClawed.current.style.color="yellow";
  }

  return (
    <div className="topic_style">
      <p ref={changePosts}>{topic}</p>
    </div>
  )
  
}

export default Topic
//  <p ref={changePosts}>{display_name}</p>*/

