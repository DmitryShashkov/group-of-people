'use strict';

var Model = require('./Model'),
    Helper = require('../libs/Helper'),
    
    Person = (function () {
    function Constructor (_id, _name, _surname, _gender, _skype) {
        Person.super.call(this, {
            id: _id,
            name: _name,
            surname: _surname,
            gender: _gender,
            skype: _skype
        });
        
        return this;
    }
    
    Helper.extend(Constructor, Model);
    
    Constructor.prototype.toString = function () {
		return this.get('name') + ' ' + this.get('surname') + 
			', ' + this.get('gender');
	};
	
    Constructor.prototype.toJSON = function () {
        return {
            'id': this.get('id'),
            'name': this.get('name'),
            'surname': this.get('surname'),
            'gender': this.get('gender'),
            'skype': this.get('skype')
        };
    };
    
    Constructor.prototype.toArray = function () {
        return [
            this.get('id'),
            this.get('name'),
            this.get('surname'),
            this.get('gender'),
            this.get('skype'),
        ];
    };
    
    Constructor.prototype.equals = function (item) {
        var res = false;
        
        if ((this.get('id') === item.get('id')) &&
            (this.get('name') === item.get('name')) &&
            (this.get('surname') === item.get('surname')) &&
            (this.get('gender') === item.get('gender')) &&
            (this.get('skype') === item.get('skype'))) {
                res = true;
            }
            
        return res;
    };
    
    return Constructor;
})(); 

module.exports = Person;