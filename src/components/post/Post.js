import './Post.css';

import React, { Component } from 'react';
import { ImHappy,ImSmile, ImBaffled, ImAngry} from "react-icons/im";


import testPhoto from './pink.jpg';

export class Post extends Component {


  render() {
    return (
      <div className="post_style">
        <div className='rating'>
            <ImHappy className='rate'/>
            <ImSmile className='rate'/>
            <ImBaffled className='rate'/>
            <ImAngry className='rate'/>
        </div>
        <div className="message_photo_style">
          <p className="username">{this.props.title}</p>
          <p className="message">{this.props.text}</p>
          <img className='post_photo' src={testPhoto} alt="a test"/>
        </div>
      </div>
    )
  }
}

export default Post;
