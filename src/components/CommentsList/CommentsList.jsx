import React from 'react';

import './CommentsList.css';

export const CommentsList = ({ comments }) => {

  return (
    <div className="container">
      {(comments.length === 0) ? (
        <h2>No comments yet</h2>
      ) : (
        <div className="list-group">
          <h2>Comments</h2>
          {comments.map(comment => (
            <div className="list-group-item list-group-item-action" key={comment.id} >
              <p className="mb-1" style={{ wordWrap: 'break-word' }}>{comment.text}</p>
              <div className="d-flex w-100 justify-content-between">
                <span style={{ fontStyle: 'italic' }}>
                  Author: {comment.author || 'Anonymous'}
                </span>
                <small>{comment.createdAt}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}