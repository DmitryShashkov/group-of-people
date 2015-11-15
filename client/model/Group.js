'use strict';

var Group = (function () {   
    function Constructor () {
        Group.super.call(this);
        return this;
    }
    
    Helper.extend(Constructor, Collection);
      
    Constructor.prototype.init = function (hash) {
        var key;
        
        this.remove();
        for (key in hash) {
            this.push(new Person(
                hash[key]['id'],
                hash[key]['name'],
                hash[key]['surname'],
                hash[key]['gender'],
                hash[key]['skype']
            ));
        }
    };
    
    return Constructor;
})();