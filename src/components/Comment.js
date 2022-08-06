import React from 'react'

const Comment = (props) => {
    const comment = props.data;
    return (
        <div>
            <p><span className='commentUser'>{comment.userName} :</span> {comment.content}</p>
        </div>
    );
};

export default Comment;

