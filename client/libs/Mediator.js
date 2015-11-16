'use strict';

var Mediator = (function () {
    var surrogate = {};
    
    _.extend(surrogate, Backbone.Events);
    
    return {
        publish: surrogate.trigger,
        subscribe: surrogate.on
    };
})();