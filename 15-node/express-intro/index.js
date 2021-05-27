const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const _ = require('underscore');

// Less basic setup
const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs); // See docs.
const PORT = 1337; // Single definition for ease of modification later (readable + dry)

server.get('/', (req, res) => {
  const bros = 'Groucho Harpo Chico Zeppo'.split(' ');
  const randomBrother = _(bros).sample();

  res.render('home.ejs', { brother: randomBrother, lucky: _.random(1000) }); // "Instance variables"
});

// Dynamic URLs
server.get('/hello/:name', (req, res) => {
  res.send(`Hello ${ req.params.name }`);
});

// Crappy calculator /calc/5/6/+ "11"
server.get('/calc/:x/:y/:operator', (req, res) => {
  let answer;
  if (req.params.operator === '+') {
    answer = Number(req.params.x) + Number(req.params.y);
  } else if (req.params.operator === '-') {
    answer = Number(req.params.x) - Number(req.params.y);
  } // todo: handle multiplication and division

  res.render('calc.ejs', { answer: answer });
});

// Render JSON
server.get('/info.json', (req, res) => {
  res.json({
    name: 'Groucho',
    instrument: 'guitar',
    vice: 'cigars',
    luckyNumber: _.random(40)
  });
});

// Something like HTTParty
server.get('/trivia', (req, res) => {
  axios.get('http://numbersapi.com/random/trivia').then((response) => {
    const fact = response.data;
    res.render('trivia.ejs', { fact: fact });
  });
});

// Form input/output
server.get('/ask', (req, res) => {
  res.render('ask.ejs')
});

server.get('/answer', (req, res) => {
  // TODO: figure out a meaningful answer
  res.render('answer.ejs', { question: req.query.question, answer: 'No comment' })
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }/`));
