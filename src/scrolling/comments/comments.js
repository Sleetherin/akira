

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { fetchComments } from "../../store/commentsSlice";
import { Comment } from "../../components/comment/Comment";


export const Comments = (props) => 
{
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments?.comments || []);
    const status = useSelector((state) => state.comments?.status || 'idle');
    const error = useSelector((state) => state.comments?.error || null);
    const subreddit = props.subreddit;
    const postId = props.id;

    useEffect(() => {
        if(status === "idle")
        {
           dispatch(fetchComments({subreddit,postId}));
        }
    },[status,dispatch,subreddit,postId])

    let content_comments;

    if(status === "loading")  {content_comments = (<div>comments by your fellow cats are loading...</div>)}
    else if(status === "succeeded")
    {
        
        content_comments = 
        (
            <div>
               {comments.map((comment) => (
                    <div key={comment.id}>
                        <Comment
                           user={comment.author}
                           message={comment.body}
                        />
                        
                    </div>
                ))}
            </div>
        )

   
    }
    else if(status === "failed")
    {
        content_comments = (<div>{error}</div>);
    }

    return(
    <div 
    style={{backgroundColor:"#FA3299",
        marginLeft:"0px", 
        marginRight:"15px",
        overflowY:"scroll", 
        height:"300px",
        paddingLeft:"10px",
        paddingRight:"10px",
    }}>
       {content_comments}
    </div>
    )
}


