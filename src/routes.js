const express = require('express');
const router = express.Router();
const TaskController = require('./controllers/taskController');

router.post('/', TaskController.createTask);
router.get('/', TaskController.getAllTask);
router.put('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);

module.exports = router;
