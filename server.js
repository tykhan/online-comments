const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
})

const comments = [];

app.get('/api', (req, res) => {
  res.json(comments);
});

app.post('/api', parser.json(), (req, res) => {
  const newComment = req.body;
  comments.push(newComment);

  res.json(comments);
});

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`alive on port - ${port}`)
});
