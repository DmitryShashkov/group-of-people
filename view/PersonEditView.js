'use strict';

function PersonEditView () {     
    this.render = function (person, container) {
        var personHash = person.toJSON(),
            saveButton = document.createElement('input'),
            resultDiv = document.createElement('div'),
            userInput, key, div, textNode;
        
        function setPersonProperties () {
            var inputs = document.getElementsByClassName('input');
            
            [].forEach.call (inputs, function (item) {
                person.set(item.id, item.value);
            });
        }
        
        saveButton.type = 'button';
        saveButton.value = 'Save';
        saveButton.classList.add('buttons');
        saveButton.addEventListener('click', function () {
            setPersonProperties();
            Mediator.publish('renderGroup', person);
        });
        
        for (key in personHash) {
            userInput = document.createElement('input');
            userInput.type = 'text';
            userInput.value = personHash[key];
            userInput.id = key;
            userInput.classList.add('input');
            
            div = document.createElement('div');
            div.appendChild(userInput);
            textNode = document.createTextNode(' (' + key + ')');
            div.appendChild(textNode);
            div.classList.add('divs');
            
            resultDiv.appendChild(div);
        }
        
        resultDiv.appendChild(saveButton);
        
        if (container) {
            Helper.clearContent(container);
            container.appendChild(resultDiv);
        }
        
        return resultDiv;
    }
    
    return this;
}