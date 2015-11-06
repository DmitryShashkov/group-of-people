'use strict';

function Mediator () {
    return this;
}

Mediator.channels = {};

Mediator.subscribe = function (channel, handler) {
    var channels = Mediator.channels;
    
    if (channels[channel]) {
        channels[channel].push(handler);
    }
    else {
        channels[channel] = [handler];
    }
};

Mediator.publish = function (channel, data) {
    var channels = Mediator.channels;
    
    if (channels[channel]) {
        (channels[channel]).forEach(function (handler) {
            handler(data);
        });
    }
};