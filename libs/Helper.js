'use strict';

function Helper () {
    function clearContent (element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        // element.innerHTML = '';
    }
    
    return {
        'clearContent': clearContent
    };
}