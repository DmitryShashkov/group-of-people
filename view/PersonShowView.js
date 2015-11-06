'use strict';

function PersonShowView () {    
    this.render = function (container, person) {
        var helper = new Helper(),
            tableConstructor = new TableConstructor(),
            personHash = person.toJSON(),
            backButton = document.createElement('input'),
            editButton = document.createElement('input'),
            key;
        
        backButton.type = 'button';
        backButton.value = 'Back';
        backButton.classList.add('full-width');
        backButton.addEventListener('click', function () {
            Mediator.publish('renderGroup');
        });
        
        editButton.type = 'button';
        editButton.value = 'Edit';
        editButton.classList.add('full-width');
        editButton.addEventListener('click', function () {
            Mediator.publish('edit', person);
        });
        
        helper.clearContent(container);
        for (key in personHash) {
            tableConstructor.addRow([
                key + ':', 
                personHash[key]
            ]);
        }
        tableConstructor.addRow([
            backButton,
            editButton
        ]);
        
        tableConstructor.deployTable(container);
    }
    
    return this;
}