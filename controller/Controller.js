'use strict';

function Controller () {
    var group = new Group(),
        groupView = new GroupView(),
        personEditView = new PersonEditView('save'),
        container = document.getElementById('container');
    
    Mediator.subscribe('edit', function (person) {
        personEditView.set('mode', 'save');
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
    
    Mediator.subscribe('add', function () {
        personEditView.set('mode', 'add');
        personEditView.render(new Person('','','','',''), container);
    });
    
    ServerFacade.create('group');
    
    return this;
}