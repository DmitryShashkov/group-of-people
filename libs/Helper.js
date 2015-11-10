'use strict';

var Helper = (function () {
    function clearContent (element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    
    return {
        'clearContent': clearContent
    };
})();