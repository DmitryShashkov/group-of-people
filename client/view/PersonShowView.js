'use strict';

var PersonShowView = Backbone.View.extend({
    template: templates['personShow'],
    className: 'divs',
    events: {
        'click #editButton': function () {
            Mediator.publish('editingRequested', this.model);
        },
        'click #deleteButton': function () {
            Mediator.publish('removingRequested', this.model);
        }
    },
    initialize: function (params) {
        if (params.model) {
            this.model = params.model;
        }
    },
    render: function () {
        this.$el.append(this.template(this.model.toJSON()));
        
        return this;
    }
});