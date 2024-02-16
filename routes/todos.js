var express = require('express');
var router = express.Router();
  // Require the controller that exports To-Do CRUD functions
  var todosCtrl = require('../controllers/todos');
 
// GET /todos
router.get('/', todosCtrl.index);
// GET /todos/:id
router.get('/:id', todosCtrl.show);
// GET /todos/new   <-- this new route cannot not stay here!
router.get('/:id', todosCtrl.show);
// POST /todos
router.post('/', todosCtrl.create);  // add this route
// new route below
router.delete('/:id', todosCtrl.delete);
module.exports = router;
