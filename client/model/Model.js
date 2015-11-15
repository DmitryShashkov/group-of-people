'use strict';

var Model = (function () {
    function Constructor (hash) {
        var attributes = hash;
            
        this.set = function (key, value) {
            attributes[key] = value;
            return this;
        };
        
        this.get = function (key) {
            return attributes[key];
        };
        
        return this;
    }
    
    return Constructor;
})();