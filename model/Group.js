'use strict';

var Group = (function () {
    function Constructor () {
        var people = [];
    
        this.get = function (i) {
            return people[i];
        };
        
        this.set = function (i, value) {
            people[i] = value;
            return this;
        };
        
        this.each = function (applyingFunction) {
            people.forEach(function (item, i) {
                applyingFunction(item, i);
            });
        };
        
        this.push = function (value) {
            people.push(value);
        };
        
        this.remove = function (item) {
            var index;
            
            if (item) {
                index = this.indexOf(item);
                people.splice(index, 1);
            } else {
                people = [];
            }            
        };
        
        return this;
    }
    
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
    
    Constructor.prototype.toJSON = function () {
        var hash = {};
        
        this.each(function (item, i) {
            hash[i] = item.toJSON();
        });
        
        return hash;
    };
    
    Constructor.prototype.indexOf = function (item) {
        var index = -1;
        
        this.each(function (currItem, i) {
            if (currItem.equals(item)) {
                index = i;
            }
        });
        
        return index;
    };
    
    return Constructor;
})();