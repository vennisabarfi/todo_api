const {v4: uuidv4} = require('uuid')
// Using unique identifiers for task id
const todo_data = [
    {id: uuidv4(), task:"Buy groceries", description:"Milk,eggs,bread", due_date:"Tuesday", completed: 0},
    {id:uuidv4(), task:"Finish report", description:"Report for art project", due_date:"Wednesday", completed: 0},
    {id:uuidv4(), task:"Go to gym", description:"Upper body workout for an hour", due_date:"Saturday", completed: 0},
    {id:uuidv4(), task:"Read Book", description:"Finish Half of a Yellow Sun", due_date:"Sunday", completed: 0},
    {id: uuidv4(), task: "Delete Stuff", description: "test data"}
]

module.exports = todo_data;