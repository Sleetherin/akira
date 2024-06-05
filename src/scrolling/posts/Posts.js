import Post from "../../components/post/Post";
import "./Posts.css";

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/postsSlice";

const PostsFunction = ({subreddit}) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if(status === 'idle')
      {
        dispatch(fetchPosts(subreddit));
      }
  }, [status, dispatch, subreddit]);


    let content;

    if(status === 'loading'){content = (<div>Loading ...</div>); }
    else if(status === 'succeeded')
    {
      content = (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <Post username={post.author} title={post.title} text={post.selftext} photo={post.url} video={post.media}/>
            </div>
            ))}
        </div>
      )
    }
    else if(status === 'failed')
    {
      content = (<div>{error}</div>);
    }

    return(
      <div className="scrolling_posts_style">
        {content}
      </div>
    )
}

export default PostsFunction;


//className="scrolling_posts_style"