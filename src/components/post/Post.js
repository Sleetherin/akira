import './Post.css';

import React, { Component } from 'react';
import { ImHappy,ImSmile, ImBaffled, ImAngry} from "react-icons/im";


import testPhoto from './jez.jpg';

export class Post extends Component {
  render() {
    return (
      <div className="post_style">
        <div className='rating'>
            <ImHappy/>
            <ImSmile/>
            <ImBaffled/>
            <ImAngry/>
        </div>
        <p className='username'></p>
        <p className='message'>The morning sun cast a golden glow over the tranquil lake, 
        its surface smooth as glass. Birds sang harmoniously, celebrating the new day. A gentle breeze rustled 
        the leaves of the towering oak trees lining the shore. A fisherman in a small wooden boat cast his line, 
        hopeful for a good catch. Nearby, a family picnicked, laughter and the aroma of fresh 
        sandwiches filling the air. Children played, their carefree joy infectious. Nature, in 
        its serene beauty, offered a perfect escape from the hustle and bustle of daily life, 
        reminding everyone of the simple pleasures that often go unnoticed.</p>
        <img className='post_photo' src={testPhoto} alt="a test"/>
      </div>
    )
  }
}

export default Post;
