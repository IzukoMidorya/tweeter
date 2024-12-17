require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Tweet = require('./models/tweets');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
let title = '';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose
  .connect(
    'mongodb+srv://netninja:Salinas051288@node-tuts.4ygbqsh.mongodb.net/?retryWrites=true&w=majority&appName=Node-tuts'
  )
  .then(() => {
    `Connected to MongoDB.`;
  })
  .catch((err) => {
    console.log(`ERR: ${err}`);
  });

// const tweets = [
//   { username: 'abz', tweet: 'Im with God' },
//   { username: 'ian', tweet: 'Im with God also' },
//   { username: 'Abdul', tweet: 'We are all in God' },
// ];

app.get('/tweets', async (req, res) => {
  title = 'Tweets';
  const tweets = await Tweet.find({});
  res.render('tweets/home', { tweets, title });
});

app.get('/create', (req, res) => {
  title = 'Create';
  res.render('tweets/inventory', { title });
});

app.post('/create', async (req, res) => {
  // tweets.push(req.body);
  console.log(req.body);
  const tweet = new Tweet(req.body);
  await tweet.save();
  res.redirect('/tweets');
  // title = 'tweets';

  // res.render('tweets/home', { tweets, title });
});

app.listen(port, () => {
  console.log(`listen ${port}`);
});
