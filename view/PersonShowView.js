'use strict';

function PersonShowView (parentNode) {  
    this.render = function (person, container) {
        var personTemplate = templates['person'],
            editButton = document.createElement('input'),
            deleteButton = document.createElement('input'),
            div = document.createElement('div'),
            textNode = personTemplate(person.toJSON()),
            resultDiv = document.createElement('div');
        
        editButton.type = 'button';
        editButton.value = 'Edit';
        editButton.classList.add('buttons');
        editButton.addEventListener('click', function () {
            Mediator.publish('edit', person);
        });
        
        deleteButton.type = 'button';
        deleteButton.value = 'Delete';
        deleteButton.classList.add('buttons');
        deleteButton.addEventListener('click', function () {
            Mediator.publish('delete', person);
        }, false);
        
        div.innerHTML = textNode;
        resultDiv.appendChild(div);
        resultDiv.appendChild(editButton);
        resultDiv.appendChild(deleteButton);
        
        if (container) {
            Helper.clearContent(container);
            container.appendChild(resultDiv);
        }
        
        return resultDiv;
    }
    
    return this;
}