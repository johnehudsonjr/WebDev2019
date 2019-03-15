const express = require('express'); // Loading the express module on our server
const app = express(); // Creates a new instance of express on our server

//  When a request comes in at localhost:3000 it will first land at the "/" location and run the function
app.get('/', function(req, res) { 
    // res.send('<html><h1 class = "blue"> Hello World</h1> <style> .blue{color: red;}</style></html>')
    let movies = ['A', 'B', 'c']

    console.log(req.query)
    res.send(JSON.stringify(movies));
  // when a request comes in at localhost:3000, it will respond 
});

// BELOW

// When I type: http://localhost:3000/food/waffles
// I Get: You like waffles
app.get('/food/:foodID', function (req, res){
     res.send("You like " + req.params.foodID)
})

app.get('/food/:foodID', function (req, res){
    res.send("You like " + req.params.foodID)
})





// This says that this is where the port will run EX localhost:3000
const port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, function() {
    
  // tells the server where to listen for requests on port 3000

  console.log('hello-express is listening on port ' + port);
}); // actualizing the line above