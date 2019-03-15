//import express and create web app
//Step 1 & Step 2
const express = require('express'); 
const app = express(); 

app.set('view engine', 'hbs');

let todoList = {}; 
let idCounter = 0;


// function renderTodoList(list){

//     let html ="<ul>";

//     Object.keys(list).forEach(key =>{
//        html += "<li>" + list[key].title + "</li>";
//     });

//     html += "</ul>";

//     return html
// }


//render the to do list on the home route 
//step 4
//get function 

// handle the / route

app.get('/', todoListController.index);
// app.get('/', (req, res) => {
//     console.log("/ route has been called")

//     res.render('./todoList', {list:Object.values(todoList)})
// });



//This will show the  '/create' route 
app.get('/create', (req, res) => { 
    let newItem = {
        id: ++idCounter, 
        title: "Movies",
        text: "Love this movie."
    }
    //give each new item and ID number 
    // [] is how you are adding items 
    todoList[newItem.id] = newItem;


    // send back the new to do list item AND This should be the last thing on list
    res.send(newItem);
});




app.get('/show/:itemId' , (req, res) => {
        console.log(req);

        res.send(todoList[req.params.itemId]);
});



//last thing in the file 
//step 3
//start your web server and console log that its running 
app.listen(3000, () => {
    console.log('the server is running on port 3000')
}); 