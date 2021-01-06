import axios from 'axios';
import { useEffect, useState } from 'react';
import { CommentForm } from './components/CommentForm/CommentForm';
import { CommentsList } from './components/CommentsList/CommentsList';

const API_URL = '/api';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async() => {
    await axios.get(API_URL)
      .then(res => setComments(res.data))
  }

  return (
    <>
      <CommentForm setComments={setComments} />
      <CommentsList comments={comments} />
    </>
  );
}

export default App;
