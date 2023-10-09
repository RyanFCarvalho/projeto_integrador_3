const express = require('express')

const TaskController = require('../controllers/TaskController')

const router = express.Router()

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.get('/:id', TaskController.showTask)
router.post('/delete', TaskController.removeTask)
router.get('/edit/:id', TaskController.editTask)
router.post('/edit', TaskController.editTaskSave)
router.post('/done', TaskController.doneTask)
router.get('/', TaskController.showTasks)

module.exports = router