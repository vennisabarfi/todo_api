const express = require('express');
const router = express.Router();
const todo_data = require('./todo_data');

router.put('/updatetasks/:task/:update', function(req, res) {
    const update_task = req.params.task; // original task
    const update = req.params.update;    // updated task

    // Find the index of the task to be updated
    let index = -1;
    for (let i = 0; i < todo_data.length; i++) {
        if (todo_data[i].task === update_task) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        // Update the task with the new task name
        todo_data[index].task = update;
        res.json({ message: "Update!" });
    } else {
        // Task not found, send 404 response
        res.status(404).json({ message: 'Task not found' });
    }
});


module.exports = router;