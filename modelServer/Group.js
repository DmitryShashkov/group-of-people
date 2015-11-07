'use strict';
var Person = require('./Person');

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
    
    this.init = function () {
        people = [new Person(1,'Artem','Yekzarkho','male','x23-rd23'),
            new Person(2,'Yevheniia','Kryschyk','female','jenya_krishchik'),
            new Person(3,'Yulyia','Lur\'eva','female','lurievajulia'),
            new Person(4,'Dmytro','Shashkov','male','the_dermatolog'),
            new Person(5,'Marian','Kotsylovs\'kyi','male','kotsherox2'),
            new Person(6,'Oleksandr','Poltorak','male','alexandr.poltorak'),
            new Person(7,'Dmytryi','Hun\'ko','male','gunkodmitriy'),
            new Person(8,'Oleksandr','Den\'ha','male','san.sanch11')];
    };
    
    this.toJSON = function () {
        var hash = {};
        
        people.forEach(function (item, i) {
            hash[i] = item.toJSON();
        });
        
        return hash;
    };
    
    this.indexOf = function (item) {
        var index = -1;
        
        people.forEach(function (currItem, i) {
            if (currItem.equals(item)) {
                index = i;
            }
        });
        
        return index;
    };
    
    this.delete = function (item) {
        var index = this.indexOf(item);
        people.splice(index, 1);
    };
    
    return this;
}

module.exports = Group;