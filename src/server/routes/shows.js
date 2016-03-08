var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');

function Shows() {
    return knex('shows');
};


router.get('/shows', function(req, res, next) {
//   res.status(200).json('testing');
  Shows().select()
  
  .then( function (result) {  
      res.status(200).json(result);
  });
  
});


router.get('/shows/:id', function (req, res, next){

  Shows().select().where('id', req.params.id)
  
  .then( function (result) {  
      res.status(200).json(result);
  });
  
});


router.post('/shows', function(req, res, next) {

  Shows().insert({
      name : req.body.name,
      channel : req.body.channel,
      genre : req.body.genre,
      rating : req.body.rating,
      explicit : req.body.explicit
  })
  
  .then( function (result) {  
      res.status(200).json(result);
  });
  
});


router.put('/shows/:id', function(req, res, next) {
  
  Shows().update(req.body).where('id', req.params.id)
  
  .then( function (result) {  
      res.status(200).json(result);
  });
  
});


router.delete('/shows/:id', function(req, res, next) {

  Shows().where('id', req.params.id).del()
  
  .then( function (result) {
    
    console.log('deleted');  
      res.status(200).json(result);
  });
  
});

module.exports = router;
