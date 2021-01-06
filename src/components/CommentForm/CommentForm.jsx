import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import uuid from 'react-uuid';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const CommentForm = ({ setComments }) => {
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');

  const submitForm = (event) => {
    event.preventDefault();

    const commentInfo = {
      author: commentAuthor.trim(),
      text: commentText.trim(),
      createdAt: moment().format('LLL'),
      id: uuid(),
    };

    axios.post(API_URL, commentInfo)
      .then(res => setComments(res.data));

    setCommentAuthor('');
    setCommentText('');
  }

  return (
    <form onSubmit={submitForm} className="container">
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Your name</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          value={commentAuthor}
          onChange={e => setCommentAuthor(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Your comment</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={commentText}
          style={{ resize: 'none' }}
          required
          onChange={e => setCommentText(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-sm">Send comment</button>
    </form>
  )
}