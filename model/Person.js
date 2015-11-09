'use strict';

var Person = (function () {
    function Constructor (_id, _name, _surname, _gender, _skype) {
        var attributes = {
            id: _id,
            name: _name,
            surname: _surname,
            gender: _gender,
            skype: _skype};
            
        this.set = function (key, value) {
            attributes[key] = value;
            return this;
        };
        
        this.get = function (key) {
            return attributes[key];
        };
        
        return this;
    }
    
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
    
    return Constructor;
})(); 