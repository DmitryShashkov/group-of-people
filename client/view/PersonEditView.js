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
        var personTemplate = templates['personEdit'],
            personHash = person.toJSON(),
            $resultDiv = $('<div></div>'),
            $saveButton;
        
        function setPersonProperties () {
            var $inputs = $('.input');
            
            $inputs.each (function (i, item) {
                person.set($(item).attr('id'), $(item).val());
            });
        }
        
        $resultDiv.append(personTemplate(person.toJSON()));
        
        $saveButton = $resultDiv.find('#saveButton');
        $saveButton.val((this.get('mode') === 'save') ? 'Save' : 'Add');
        $saveButton.attr('mode', this.get('mode'));
        $saveButton.on('click', function () {   
            setPersonProperties();
            if ($(this).attr('mode') === 'save') {
                ServerFacade.update(personHash, person.toJSON());
            } else {
                ServerFacade.add(person);
            } 
        });

        if ($container) {
            Helper.clearContent($container);
            $container.append($resultDiv);
        }
        
        return $resultDiv;
    }
    
    return Constructor;
})();