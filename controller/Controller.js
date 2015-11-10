'use strict';

function Controller () {
    var group = new Group(),
        groupView = new GroupView(),
        //personShowView = new PersonShowView(),
        personEditView = new PersonEditView(),
        container = document.getElementById('container');
    
    Mediator.subscribe('preview', function (person) {
        personShowView.render(container, person);
    });
    
    Mediator.subscribe('edit', function (person) {
        personEditView.render(person, container);
    });
    
    Mediator.subscribe('renderGroup', function () {
        groupView.render(container);
    });
    
    Mediator.subscribe('initGroup', function (hash) {
        group.init(hash);
        groupView.setGroup(group);
        groupView.render(container);
    });
    
    Mediator.subscribe('delete', function (person) {
        ServerFacade.delete('person', person);
    });
    
    ServerFacade.create('group');
    
    return this;
}