var http = require('http'),
    fs = require('fs'),
    Person = require('./modelServer/Person'),
    Group = require('./modelServer/Group');

function isRestRequest (uri) {
    var res = true;
    
    if (uri.indexOf('.') > -1) {
        res = false;
    }
    
    return res;
}

function handleFiles (request, response) {
    console.log('Got request for ' + request.url);
    response.writeHead(200, {});
    fs.readFile(request.url.replace('\/', ''), function (err, data) {
        if (err) {
            console.log('[ERROR]: request for ' + request.url);
        } else {
            response.write(data.toString(), function () {         
                response.end();
            });
        }
    });
}
    
function route (request, response) {
    var handlers = {
            '/hello': helloHandler,
            '/students': studentsHandler
        };
    
    function helloHandler () {
        console.log('Saying hello...');
        response.writeHead(200, {});
        response.write('Hello Dmitry!!', function () {         
            response.end();
        });
    }
    
    function studentsHandler () {
        var group = new Group();
        group.init();
        
        console.log('Sending group list...');
        response.writeHead(200, {});
        response.write(JSON.stringify(group.toJSON()), function () {         
            response.end();
        });
    }
    
    if (handlers[request.url]) {
        handlers[request.url]();
    }
}

http.createServer(function(request, response) {
    if (!isRestRequest(request.url)) {
        handleFiles(request, response);
    } else {
        route(request, response);
    }
}).listen(3000);

   