// This is used to import ecpress
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')


const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());


// importing pug into file
app.set('view engine', 'pug')
// This is where we create a route 
app.get('/', (req, res) => {
    res.render('index');
});

// Adding another route
app.get('/cards', (req, res) => {
    // res.render access pug/handlebars which is rendered template
    // passes in two arguments, first is 'card' which is the card.pug file
    // second is the variable prompt(updated on card.pug file and this is what will change from index)
    res.render('card', {prompt: "Who is buried in Grant's tomb?", hint: "List his full name"});
});

app.get('/sandbox', (req,res) =>{
    res.render('sandbox', {callA: "Knock Knock.", responseA:"Who is there?"} )
});


app.get('/hello', (req, res)=>{
    res.render('hello');
});

app.post('/hello', (req, res)=>{
    res.cookie('username', req.body.username)
    res.render('hello', {name:req.body.username});
    
});

// Port that the server is listening
app.listen(3000, ()=> {
    console.log("The application is running at localhost: 3000.")
});
