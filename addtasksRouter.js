const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid');
const todo_data = require('./todo_data');

router.post('/addtasks', function(req,res){
    // request newTask which is a json file from client
    const newTask = req.body;
    // assign unique identifier
    const newTask_id = uuidv4();
    // push new data
    todo_data.push(newTask);
    //Send message to show completion
    res.json([{message: 'Successfully added new item to list', task: newTask}]);

})



module.exports = router;
