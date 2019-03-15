// Using the require statement. This is going out and grabbing addtl JS code.
var http = require('http');

// grab the port that we want the server to listen from. 3001 is being printed because we are teling it to
var server = http.createServer().listen(3001);
var urlParser = require('url'); // Adds urlParser

console.log('I\'m listening on port: 3001');

// need to take information from the function with request
// request event

server.on('request', function (request, response) {

    var urlObj = urlParser.parse(request.url); //
    var pathname = urlObj.pathname; // parsing our the important info in the url
    console.log("requested: " + pathname);

    console.log(request.url);


    if (pathname == "/fun-times") {

        response.writeHead(200, { 'Content-Type': 'text/html' });

        response.write('<html > ')
        response.write('<h1> Fun Times</h1>')
        response.write('<ul> Things I do For Fun')
        response.write('<li> Sing</li>')
        response.write('<li> Dance</li> </ul>')
        response.write('<style> h1{color:blue;}</style>')
        response.write('<script>console.log(\'I\'m client-side JavaScript being sent via server-side JavaScript\');</script>');
        response.write('</style>');
        response.end();

    }

    else if (pathname == "/movies") {
        response.writeHead(200, { 'Content-Type': 'text/html' });

        response.write('<html > ')
        response.write('<h1> Favorite Movies</h1>')
        response.write('<ul> Movie Titles')
        response.write('<li> Home Alone 2</li>')
        response.write('<li> Home Alone</li> </ul>')
        response.write('<style> h1{color:blue;}</style>')
        response.write('<script>console.log(\'I\'m client-side JavaScript being sent via server-side JavaScript\');</script>');
        response.write('</style>');
        response.end();

    }

   else if (pathname == "/portfolio") {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<html > ')
        response.write('<h1> Coming Soon </h1>')
        response.write('<script>console.log(\'I\'m client-side JavaScript being sent via server-side JavaScript\');</script>');
        response.write('</style>');
        response.end();
    }
    else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<html > ')
        response.write('<h1> Nothing here either</h1>')
        response.write('<script>console.log(\'I\'m client-side JavaScript being sent via server-side JavaScript\');</script>');
        response.write('</style>');
        response.end();
    }
});