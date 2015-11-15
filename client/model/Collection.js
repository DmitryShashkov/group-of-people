'use strict';

var Collection = (function () {
    function Constructor () {
        var collection = [];
    
        this.get = function (i) {
            return collection[i];
        };
        
        this.set = function (i, value) {
            collection[i] = value;
            return this;
        };
        
        this.each = function (applyingFunction) {
            collection.forEach(function (item, i) {
                applyingFunction(item, i);
            });
        };
        
        this.push = function (value) {
            collection.push(value);
        };
        
        this.remove = function (item) {
            var index;
            
            if (item) {
                index = this.indexOf(item);
                collection.splice(index, 1);
            } else {
                collection = [];
            }            
        };
        
        return this;
    }
    
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
            if (_.isEqual(currItem.toJSON(), item.toJSON())) {
                index = i;
            }
        });
        
        return index;
    };
    
    return Constructor;
})();