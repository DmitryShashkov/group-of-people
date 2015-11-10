'use strict';

function PersonEditView (_mode) {
    var attributes = {
            mode: _mode
        };
    
    this.set = function (key, value) {
        attributes[key] = value;
        return this;
    };
    
    this.get = function (key) {
        return attributes[key];
    };
    
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
        saveButton.value = (this.get('mode') === 'save') ? 'Save' : 'Add';
        saveButton.classList.add('buttons');
        saveButton.mode = this.get('mode');
        saveButton.addEventListener('click', function () {
            setPersonProperties();
            if (this.mode === 'save') {
                Mediator.publish('renderGroup');
            } else {
                ServerFacade.add(person);
            }
            
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