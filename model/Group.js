'use strict';

function Group () {
    var people = [];
    
    this.get = function (i) {
        return people[i];
    };
    
    this.set = function (i, value) {
        people[i] = value;
        return this;
    };
    
    this.each = function (applyingFunction) {
        people.forEach(function (item) {
            applyingFunction(item);
        });
    }
    
    this.init = function (hash) {
        var key;
        people = [];
        for (key in hash) {
            people.push(new Person(
                hash[key]['id'],
                hash[key]['name'],
                hash[key]['surname'],
                hash[key]['gender'],
                hash[key]['skype']
            ));
        }
    };
    
    this.toJSON = function () {
        var hash = {};
        
        people.forEach(function (item, i) {
            hash[i] = item.toJSON();
        });
        
        return hash;
    }
    
    return this;
}