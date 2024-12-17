const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
let title = '';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const tweets = [
  { username: 'abz', tweet: 'Im with God' },
  { username: 'ian', tweet: 'Im with God also' },
  { username: 'Abdul', tweet: 'We are all in God' },
];

app.get('/tweets', (req, res) => {
  title = 'Tweets';
  res.render('tweets/home', { tweets, title });
});

app.get('/create', (req, res) => {
  title = 'Create';
  res.render('tweets/inventory', { tweets, title });
});

app.post('/create', (req, res) => {
  tweets.push(req.body);
  title = 'tweets';
  res.render('tweets/home', { tweets, title });
});

app.listen(port, () => {
  console.log(`listen ${port}`);
});
