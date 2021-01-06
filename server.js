const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const comments = [];

app.get('/api', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json(comments);
});

app.post('/api', parser.json(), (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  const newComment = req.body;
  comments.push(newComment);

  res.json(comments);
});

app.use(express.static('build'))

app.listen(port, () => {
  console.log(`alive on port - ${port}`)
});
