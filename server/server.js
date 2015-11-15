var Server = (function () {
    var http = require('http'),
    fs = require('fs'),
    Person = require('./model/Person'),
    Group = require('./model/Group'),
    group = new Group();

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
        fs.readFile('../client/' + request.url.replace('\/', ''), function (err, data) {
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
                '/getStudents': studentsHandler,
                '/deleteStudent': deleteStudentHandler,
                '/addStudent': addStudentHandler,
                '/editStudent': editStudentHandler
            };
        
        function helloHandler () {
            console.log('Saying hello...');
            response.writeHead(200, {});
            response.write('Hello Dmitry!!', function () {         
                response.end();
            });
        }
        
        function studentsHandler () {        
            console.log('Sending group list...');
            response.writeHead(200, {});
            response.write(JSON.stringify(group.toJSON()), function () {         
                response.end();
            });
        }
        
        function deleteStudentHandler () {
            request.on('data', function (data) {
                var dataObject = JSON.parse(data),
                    person = new Person(dataObject['id'],
                        dataObject['name'],
                        dataObject['surname'],
                        dataObject['gender'],
                        dataObject['skype']);
                    
                console.log('Deleting student: ' + person.toString() + '...');
                group.remove(person);
                response.writeHead(200, {});
                response.write(JSON.stringify(group.toJSON()), function () {         
                    response.end();
                });
            }); 
        }
        
        function addStudentHandler () {
            request.on('data', function (data) {
                var dataObject = JSON.parse(data),
                    person = new Person(dataObject['id'],
                        dataObject['name'],
                        dataObject['surname'],
                        dataObject['gender'],
                        dataObject['skype']);
                    
                console.log('Adding student: ' + person.toString() + '...');
                group.push(person);
                response.writeHead(200, {});
                response.write(JSON.stringify(group.toJSON()), function () {         
                    response.end();
                });
            }); 
        }
        
        function editStudentHandler () {
            request.on('data', function (data) {
                var dataObject = JSON.parse(data),
                    oldPerson = new Person(dataObject['old']['id'],
                        dataObject['old']['name'],
                        dataObject['old']['surname'],
                        dataObject['old']['gender'],
                        dataObject['old']['skype']),
                    newPerson = new Person(dataObject['new']['id'],
                        dataObject['new']['name'],
                        dataObject['new']['surname'],
                        dataObject['new']['gender'],
                        dataObject['new']['skype']);
                    
                console.log('Replacing ' + oldPerson.toString() + ' with ' + newPerson.toString() + '...');
                group.set(group.indexOf(oldPerson), newPerson);
                response.writeHead(200, {});
                response.write('OK', function () {         
                    response.end();
                });
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
    group.init();
})();


   