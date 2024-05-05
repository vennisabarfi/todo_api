const express = require('express');
const router = express.Router();

const todo_data  = require('./todo_data');

router.get('/viewtasks', function(req,res,next){
    res.json(todo_data);
})

module.exports = router;
