'use strict';
var Person = require('./Person'),
    Collection = require('./Collection'),
    Helper = require('../libsServer/Helper'), 
    
    Group = (function () {
    function Constructor () {
        Group.super.call(this);
        return this;
    }
    
    Helper.extend(Constructor, Collection);
    
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
    
    return Constructor;
})();

module.exports = Group;