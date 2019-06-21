const express = require('express');
const db = require('./models');

const app = express();

app.use(express.urlencoded({extended: false}));

//default route
app.get('/', function(req, res) {
  res.send("everything works!");
});

//GET all songs
app.get('/songs', function(req, res) {
  db.song.findAll().then(function(songs) {
    res.json(songs);
  })
});

//GET one song
app.get('/songs/:id', function(req, res) {
  db.song.findOne({
    where: {id: parseInt(req.params.id)}
  }).then(function(song) {
    res.json(song);
  })
});

//POST (add) one song
app.post('/songs', function(req, res) {
  db.song.create({
    songTitle: req.body.songTitle,
    artist: req.body.artist,
    album: req.body.album,
    year: parseInt(req.body.year)
  }).then(function(data) {
    console.log(data);
    res.json(data);
  })
});

//PUT (update) a song
app.put('/songs/:id', function(req, res) {
  db.song.update({
    songTitle: req.body.songTitle,
    artist: req.body.artist,
    album: req.body.album,
    year: parseInt(req.body.year)
  }, {
    where: {id: parseInt(req.params.id)}
  }).then(function(data) {
    res.json(data);
  });
});

//DELETE a song
app.delete('/songs/:id', function(req, res) {
  db.song.destroy({
    where: {id: parseInt(req.params.id)}
  }).then(function(data) {
    res.json(data);
  });
});

app.listen(3000, function(req, res) {
  console.log("I am listening 🥺 on 3000");
});