import "./Comment.css";

import React from 'react';

export const Comment = ({user,message}) => 
{
    return(
    <div className="comment_style">
        <p><strong>{user}</strong>: {message}</p>
    </div>
    )
}





