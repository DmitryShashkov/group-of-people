'use strict';

var PersonEditView = (function () {
    var Constructor = function (_mode) {
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
        
        return this;
    }
    
    Constructor.prototype.render = function (person, $container) {
        var personHash = person.toJSON(),
            $saveButton = $('<input type = \'button\'>'),
            $resultDiv = $('<div></div>'),
            $userInput, $div, key;
        
        function setPersonProperties () {
            var $inputs = $('.input');
            
            $inputs.each (function (i) {
                person.set($(this).attr('id'), $(this).val());
            });
        }
        
        $saveButton.val((this.get('mode') === 'save') ? 'Save' : 'Add');
        $saveButton.addClass('buttons');
        $saveButton.attr('mode', this.get('mode'));
        $saveButton.on('click', function () {   
            setPersonProperties();
            if ($(this).attr('mode') === 'save') {
                ServerFacade.update(personHash, person);
            } else {
                ServerFacade.add(person);
            } 
        });
        
        for (key in personHash) {
            $userInput = $('<input type = \'text\'>');
            $userInput.val(personHash[key]);
            $userInput.attr('id', key);
            $userInput.addClass('input');
            
            $div = $('<div></div>');
            $div.append($userInput);
            $div.append(' (' + key + ')');
            $div.addClass('divs');
            
            $resultDiv.append($div);
        }
        
        $resultDiv.append($saveButton);
        
        if ($container) {
            Helper.clearContent($container);
            $container.append($resultDiv);
        }
        
        return $resultDiv;
    }
    
    return Constructor;
})();