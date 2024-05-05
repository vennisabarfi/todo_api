const express = require('express');
const todo_data = require('./todo_data');
const router = express.Router();

router.delete('/removetasks/:id', function(req,res){
    // Receive requested id from client
    const delete_id = req.params.id;
    // Find and match requested client id to database id
    const index = todo_data.findIndex(function(item){
        return item.id === delete_id;
    })
    // Check for match and delete with splice method
    if(index !== -1){
        todo_data.splice(index, 1);
        // Delete Message
        res.json({message: `Item at index: ${delete_id} has been successfully deleted`});
    }else{
        res.status(404).json({message:`No item found at index: ${delete_id}!`}); //404 message
    }
})


module.exports = router;

