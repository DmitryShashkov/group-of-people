'use strict';

var Helper = (function () {
    function clearContent (element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    
    function extend (Child, Parent) {
        function Surrogate () {
            this.constructor = Child;
        }
        Surrogate.prototype = Parent.prototype;
        Child.prototype = new Surrogate();
        Child.super = Parent;
    }
    
    return {
        'clearContent': clearContent,
        'extend': extend
    };
})();

module.exports = Helper;