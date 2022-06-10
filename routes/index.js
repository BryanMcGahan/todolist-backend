var express = require('express');
var router = express.Router();
const connection = require('../data/connconfig');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    connection.connect();
    const database = connection.db("TodoList");
    const todoCollection = database.collection("Todo");

    const todosCursor = await todoCollection.find();

    var todosList = [];
    var todos = await todosCursor.forEach(todo => {
      todosList.push(todo);
    })
    res.json(todosList);
  }catch (err){
    next(err);
  }
});

module.exports = router;
