'use strict';

var PersonEditView = Backbone.View.extend({
    render: function (person, $container, mode) {
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
        $saveButton.val((mode === 'save') ? 'Save' : 'Add');
        $saveButton.attr('mode', mode);
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
}); 