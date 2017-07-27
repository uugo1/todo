
var express = require('express');
var router = express.Router();
var todo = require('../controllers/todoController');

 // todo Routes
router.get('/tasks', todo.list_all_tasks);
router.post('/tasks', todo.create_a_task);

router.get('/tasks/:taskId', todo.read_a_task);
router.put('/tasks/:taskId', todo.update_a_task);
router.delete('/tasks/:taskId', todo.delete_a_task);

module.exports = router;
