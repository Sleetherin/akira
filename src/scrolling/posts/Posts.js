import Post from "../../components/post/Post";
import "./Posts.css";

import React, { Component } from 'react';

export class Posts extends Component {
  render() {
    return (
      <div className="scrolling_posts_style">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    )
  }
}

export default Posts;
