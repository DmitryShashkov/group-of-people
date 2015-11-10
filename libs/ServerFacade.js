'use strict';

var ServerFacade = (function () {
    var _sendRequest = function (method, URI, body, callback) {
            var xhr;
            
            if (XMLHttpRequest) {
                xhr = new XMLHttpRequest();
                xhr.open(method, URI, true);
                
                xhr.addEventListener('readystatechange', function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            callback(xhr.responseText);
                        }
                    }
                }, false);
                
                xhr.send(body);
            } else {
                console.warn('Oh noes');
            }
        },
        
        _create = function (itemType) {
            if (itemType === 'group') {
                _sendRequest('GET', '/getStudents', '', function (responseText) {
                    Mediator.publish('initGroup', JSON.parse(responseText));
                });
            }  
        },
        
        _delete = function (itemType, itemValue) {
            if (itemType === 'person') {
                _sendRequest('DELETE', '/deleteStudent', JSON.stringify(itemValue.toJSON()), function (responseText) {
                    Mediator.publish('initGroup', JSON.parse(responseText));
                });
            }
        },
        
        _add = function (item) {
            _sendRequest('POST', '/addStudent', JSON.stringify(item.toJSON()), function (responseText) {
                Mediator.publish('initGroup', JSON.parse(responseText));
            });
        },
        
        _update = function (oldHash, newPerson) {
            _sendRequest('PATCH', '/editStudent', 
                JSON.stringify({
                    'old': oldHash,
                    'new': newPerson.toJSON()
                }),
                function (responseText) {
                    Mediator.publish('renderGroup');
                });
        };
        
    return {
        create: _create,
        delete: _delete,
        add: _add,
        update: _update
    };
})();