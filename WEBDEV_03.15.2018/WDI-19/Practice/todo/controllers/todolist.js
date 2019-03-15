const mongoose = require('mongoose')

const todoListController = {

    index: (todolist, req, res) =>{
        console.log("/ route has been called")
    }
    
    res.render('./todolist', {
        list:Object.values(todolist)

    });
}
