'use strict';

var Helper = (function () {
    function clearContent (element) {
        $(element).html('');
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