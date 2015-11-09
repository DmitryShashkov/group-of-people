'use strict';
var Person = require('./Person');

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
    
    Constructor.prototype.init = function () {
        var people = [new Person(1,'Artem','Yekzarkho','male','x23-rd23'),
            new Person(2,'Yevheniia','Kryschyk','female','jenya_krishchik'),
            new Person(3,'Yulyia','Lur\'eva','female','lurievajulia'),
            new Person(4,'Dmytro','Shashkov','male','the_dermatolog'),
            new Person(5,'Marian','Kotsylovs\'kyi','male','kotsherox2'),
            new Person(6,'Oleksandr','Poltorak','male','alexandr.poltorak'),
            new Person(7,'Dmytryi','Hun\'ko','male','gunkodmitriy'),
            new Person(8,'Oleksandr','Den\'ha','male','san.sanch11')],
            i;
        
        this.remove();
        for (i = 0; i < people.length; i++) {
            this.set(i, people[i]);
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

module.exports = Group;