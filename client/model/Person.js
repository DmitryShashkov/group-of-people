'use strict';

var Person = Backbone.Model.extend ({
    defaults: {
        id: 0,
        name: 'John',
        surname: 'Smith',
        gender: 'male',
        skype: 'unknown'
    },
    initialize: function (params) {
        this.id =  params.id,
        this.name = params.name,
        this.surname = params.surname,
        this.gender = params.gender,
        this.skype = params.skype
    },
    toString: function () {
		return this.get('name') + ' ' + this.get('surname') + 
			', ' + this.get('gender');
	},
    toJSON: function () {
        return {
            'id': this.get('id'),
            'name': this.get('name'),
            'surname': this.get('surname'),
            'gender': this.get('gender'),
            'skype': this.get('skype')
        };
    }
});