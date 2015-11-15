'use strict';

var Controller = (function () {
    function Constructor () {
        var group = new Group(),
            groupView = new GroupView(),
            personEditView = new PersonEditView('save'),
            $container = $('#container');
    
        Mediator.subscribe('editingRequested', function (person) {
            personEditView.set('mode', 'save');
            personEditView.render(person, $container);
        });
        
        Mediator.subscribe('groupUpdated', function () {
            groupView.render($container);
        });
        
        Mediator.subscribe('groupReceived', function (hash) {
            group.init(hash);
            groupView.set('group', group);
            groupView.render($container);
        });
        
        Mediator.subscribe('removingRequested', function (person) {
            ServerFacade.remove('person', person);
        });
        
        Mediator.subscribe('addingRequested', function () {
            personEditView.set('mode', 'add');
            personEditView.render(new Person('','','','',''), $container);
        });
        
        ServerFacade.create('group');
        
        return this;
    }
    
    return Constructor;
})();