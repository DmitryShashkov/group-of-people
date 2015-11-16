'use strict';

var Controller = (function () {
    var group = new Group(),
        groupView = new GroupView(),
        personEditView = new PersonEditView();
            
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
            groupView.render(group, $('#container'));
        });
        
        Mediator.subscribe('removingRequested', function (person) {
            ServerFacade.remove('person', person);
        });
        
        Mediator.subscribe('editingRequested', function (person) {
            personEditView.render(person, $('#container'), 'save');
        });
        
        Mediator.subscribe('addingRequested', function () {
            personEditView.render(new Person({}), $('#container'), 'add');
        });
    }
    
    function groupReRender (groupHash) {
        group.init(groupHash);
        groupView.render(group, $('#container'));
    }
    
    return Constructor;
})();