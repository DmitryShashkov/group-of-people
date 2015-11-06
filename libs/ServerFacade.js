'use strict';

var ServerFacade = (function () {
    var _sendRequest = function (method, URI, callback) {
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
                
                xhr.send();
            } else {
                console.warn('Oh noes');
            }
        },
        
        _create = function (item) {
            if (item === 'group') {
                _sendRequest('GET','/students',function (responseText) {
                    Mediator.publish('initGroup', JSON.parse(responseText));
                });
            }  
        };
        
    return {
        create: _create
    };
})();