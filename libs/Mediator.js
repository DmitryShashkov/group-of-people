'use strict';

var Mediator = (function () {
    var _channels = {},
    
        _subscribe = function (channel, handler) {
            var channels = _channels;
            
            if (channels[channel]) {
                channels[channel].push(handler);
            }
            else {
                channels[channel] = [handler];
            }
        },
        
        _publish = function (channel, data) {
            var channels = _channels;
            
            if (channels[channel]) {
                (channels[channel]).forEach(function (handler) {
                    handler(data);
                });
            }
        };
    
    return {
        publish: _publish,
        subscribe: _subscribe
    };
})();