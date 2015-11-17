'use strict';

var Controller = (function () {
    var group = new Group(),
        groupView = new GroupView({models: group});
            
    function Constructor () {
        setupMediator();
        ServerFacade.create('group');
        
        return this;
    }
    
    function setupMediator () {
        Mediator.subscribe('groupReceived', function (groupHash) {
            groupReRender(groupHash);
        });
        
        Mediator.subscribe('groupUpdated', function () {
            groupView.render($('#container'));
        });
        
        Mediator.subscribe('removingRequested', function (person) {
            ServerFacade.remove('person', person);
        });
        
        Mediator.subscribe('editingRequested', function (person) {
            $('#container').html(new PersonEditView({
                model: person,
                mode: 'save'
            }).render().$el);
        });
        
        Mediator.subscribe('addingRequested', function () {
            $('#container').html(new PersonEditView({
                model: new Person({}),
                mode: 'add'
            }).render().$el);
        });
    }
    
    function groupReRender (groupHash) {
        group.init(groupHash);
        groupView.render($('#container'));
    }
    
    return Constructor;
})();