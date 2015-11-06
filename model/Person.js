'use strict';

function Person (_id, _name, _surname, _gender, _skype) {
    var attributes = {
        id: _id,
	    name: _name,
		surname: _surname,
		//age: -1,
		gender: _gender,
		skype: _skype};
	
    this.set = function (key, value) {
	    attributes[key] = value;
		return this;
	};
	
	this.get = function (key) {
	    return attributes[key];
	};

	this.toString = function () {
		return attributes['name'] + ' ' + attributes['surname'] + 
            //', ' + attributes['age'] + 'years old' + 
			', ' + attributes['gender'];
	};
	
    this.toJSON = function () {
        return {
            'id': attributes['id'],
            'name': attributes['name'],
            'surname': attributes['surname'],
            //'age': attributes['age'],
            'gender': attributes['gender'],
            'skype': attributes['skype']
        };
    };
    
    this.toArray = function () {
        return [
            attributes['id'],
            attributes['name'],
            attributes['surname'],
            attributes['gender'],
            attributes['skype'],
        ];
    }
    
	return this;
}