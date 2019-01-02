const db = require('../models');

db.movie.create({
  title: 'Die Hard',
  year: 1988,
  genre: 'Christmas',
  runtime: 132,
  tagline: 'Yippee ki-yay...',
})
.then(createdMovie => {
  console.log(`Successfully created movie: ${createdMovie.title}`);
})
.catch(err => {
  console.log(`Error: ${err}`);
});