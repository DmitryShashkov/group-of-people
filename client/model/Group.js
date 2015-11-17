'use strict';

var Group = Backbone.Collection.extend({
    model: Person,
    init: function (hash) {
        var key;
        
        this.reset();
        for (key in hash) {
            this.models.push(new Person(hash[key]));
        }
    }
});