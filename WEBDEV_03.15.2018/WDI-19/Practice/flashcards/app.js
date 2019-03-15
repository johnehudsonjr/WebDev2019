// This is used to import ecpress
const express = require('express');
const app = express();

// This is where we create a route 
app.get('/', (request, response) => {
    response.send('I love John Hudson. He is goals.');
});



app.listen(3000, function(){
    console.log("info",'Server is running at port : ' + 3000);
});
