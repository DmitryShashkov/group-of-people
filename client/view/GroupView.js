'use strict';

var GroupView = Backbone.View.extend({
    initialize: function (params) {
        if (params.models) {
            this.models = params.models;
        }
    },
    render: function ($container) {      
        $container.html('');
            
        this.models.each(function (item) {
            $container.append((new PersonShowView({model: item})).render().$el);   
        });
        
        $container.append($('<input type = \'button\' value = \'Add new student\'' + 
            ' id = \'addButton\' class=\'buttons\'>'));
        $container.find('#addButton').on('click',function () {
            Mediator.publish('addingRequested');
        });
            
        return $container;
    }
});