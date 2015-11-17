'use strict';

var PersonEditView = Backbone.View.extend({
    template: templates['personEdit'],
    events: {
        'click #saveButton': function () {
            this.saveChanges();
        } 
    },
    initialize: function (params) {
        if (params.model) {
            this.model = params.model;
            this.oldHash = this.model.toJSON();
        }
        if (params.mode) {
            this.mode = params.mode;
        }
    },
    saveChanges: function () {   
        this.setPersonProperties();
        if (this.mode === 'save') { 
            ServerFacade.update(this.oldHash, this.model.toJSON());
        } else {
            ServerFacade.add(this.model);
        } 
    },
    setPersonProperties: function () {
        var model = this.model;
        this.$('.input').each (function (i, item) {
            model.set($(item).attr('id'), $(item).val());
        });
    },
    render: function () {
        this.$el.append(this.template(this.model.toJSON()));
        this.$('#saveButton').val((this.mode === 'save') ? 'Save' : 'Add');
        
        return this;
    }
}); 