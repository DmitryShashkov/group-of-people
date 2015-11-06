'use strict';

function PersonEditView () {     
    this.render = function (container, person) {
        var helper = new Helper(),
            tableConstructor = new TableConstructor(),
            personHash = person.toJSON(),
            saveButton = document.createElement('input'),
            userInput, key;
        
        function setPersonProperties () {
            var inputs = document.getElementsByClassName('input');
            
            [].forEach.call (inputs, function (item) {
                person.set(item.id, item.value);
            });
        }
        
        saveButton.type = 'button';
        saveButton.value = 'Save';
        saveButton.classList.add('full-width');
        saveButton.addEventListener('click', function () {
            setPersonProperties();
            Mediator.publish('preview', person);
        });
        
        helper.clearContent(container);
        for (key in personHash) {
            userInput = document.createElement('input');
            userInput.type = 'text';
            userInput.value = personHash[key];
            userInput.id = key;
            userInput.classList.add('input');
            
            tableConstructor.addRow([
                key + ':', 
                userInput
            ]);
        }
        tableConstructor.addRow([
            saveButton
        ]);
        
        tableConstructor.deployTable(container);
    }
    
    return this;
}