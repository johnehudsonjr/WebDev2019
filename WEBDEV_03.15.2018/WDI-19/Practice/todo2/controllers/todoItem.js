const TodoItem = require('../models/todoItem')

const todoItemController = {

    create: (req, res) => {
        
        TodoItem.create({
            title: req.query.title,
            coffeeLevel: req.query.coffeeLevel,
            completed: false,
            date: new Date()
        }).then (newItem =>{
            res.render('todoItem/create', newItem);
        })
    },

    index: (req, res) => {
        TodoItem.find({}).then(items => {
        res.render('todoItem/index', {items:items});
        });

    }
}

module.exports  = todoItemController;