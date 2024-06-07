import './Post.css';

import React, {  Component } from 'react';
import { ImHappy,ImSmile, ImBaffled, ImAngry} from "react-icons/im";



export class Post extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      rate:0,
    }
  }

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
          <p className="username"><strong>{this.props.username}</strong>:  {this.props.title}</p>
          <p className="message">{this.props.text}</p>
          {
          this.props.photo && this.props.photo !== 'self' && this.props.photo !== 'default' && (() => {
            const extension = this.props.photo.split('.').pop().toLowerCase();

            if (['jpg', 'jpeg', 'png', 'bmp', 'webp'].includes(extension)) {
              return <img className='post_photo' src={this.props.photo} alt="photo" />;
            } else if (extension === 'gif') {
              return <img className='post_photo' src={this.props.photo} alt="gif" />;
            } else {
              return null;
            }
          })()
        }
        {
          this.props.video && this.props.video.reddit_video && (
            <video className='post_photo' controls>
              <source src={this.props.video.reddit_video.fallback_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
        }
        </div>
        <p className="post_rates_style">{this.state.rate} purrs</p>
      </div>
    )
  }
}

export default Post;

