'use strict';

var http = require('http'),
    url = require('url'),
    querystring = require('querystring');

http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname,
        query = url.parse(request.url).query,
        id = querystring.parse(query)['id'],

        result = {
            'pathname': pathname,
            'id': id,
            'value': Math.floor(Math.random() * 100)
        };

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(result));
    
}).listen(
    8080,
    function() {
        console.log('Echo Server listening on port 8080');
    }
);
