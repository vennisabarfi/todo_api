const express = require('express');
const app =  express();
const port = 3000;
const viewtasksRouter = require('./viewtasksRouter');
const addtasksRouter = require('./addtasksRouter');
const removetasksRouter = require('./removetasksRouter');
const updatetasksRouter = require('./updatetasksRouter');

//Setting up homepage
app.get('/', function(req, res){
    res.send ("Welcome to the todo list API");
})

// Read Tasks
app.use(viewtasksRouter);

// Add New Tasks 
app.use(addtasksRouter);

// Delete Tasks
app.use(removetasksRouter);

//Update Tasks
app.use(updatetasksRouter);

// Port set up
app.listen(port, function(){
    console.log(`Listening on port ${port}`);
})
