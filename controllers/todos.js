// controllers/todos.js

function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll()
    });
  }

   // controllers/todos.js

 module.exports = {
    index
  };
  
  function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll()
    });
  }

   // controllers/todos.js

 // Convention is to name the model in uppercase and singular
 const Todo = require('../models/todo');

 module.exports = {
   index
 };