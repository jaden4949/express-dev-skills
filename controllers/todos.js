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

 function show(req, res) {
    res.render('todos/show', {
      todo: Todo.getOne(req.params.id),
    });
  }
module.exports = {
    index,
    show,
    new: newTodo
  };
    
  function newTodo(req, res) {
    res.render('todos/new', { title: 'New Todo' });
  }

function create(req, res) {
  console.log(req.body);
  // The model is responsible for creating data
  // Todo.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/todos');
  create
};
	
function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect('/todos');
}