//Based on https://github.com/samuraijane/willow-creek-news

require('dotenv').config();
const express = require('express');
const session = require('express-session'); // potential delete
const dialogue = require('./mocks/dialogDB.json');
const passport = require('passport'); // potential delete
const path = require('path'); // potential delete

const app = express();

process.env.HTTPS = true

const { PORT } = process.env;

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname + '/react-ui/build')));

app.use(passport.initialize());
app.use(passport.session())

app.get('/heartbeat', (req, res) => {
  res.json({
    "is": "working"
  })
});

app.get('/dialogue', (req, res) => {
  let found;
  if(req.query.name) {
    found = dialogue.filter(line => line.name === req.query.name)[0];
  } else if(req.query.battleId) {
    found = dialogue.filter(line => line.battleId === req.query.battleId)[0];
  } else {
    found = dialogue;
  }
  res.json(found);
});

// catch-all so react can handle routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}`);
});