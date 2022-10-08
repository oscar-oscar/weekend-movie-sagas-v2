const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres where the movie id matches 
  // the movie id passed in the url : index js /api/movie/${action.payload}
  // always test query in postico first. 
  // junction table naming not ideal...movie_id should have been movies_id 
  // refer to movie saga walkthrough video at 56:00 min in for explaination
  const query = `SELECT * FROM genres JOIN "movies_genres" 
                ON "genres"."id" = "movies_genres"."genre_id" 
                WHERE "movies_genres"."movie_id"=$1;`;
  //passing array=req.params.id
  pool.query(query, [req.params.id])//movie passed
    .then(result => {
      //returns first item (the movie which is an object) in array 
      // object in reducer
      // returns one result when matching by id
      // this all passes through SET_MOVIE_DETAILS in saga
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});

module.exports = router;