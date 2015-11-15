'use strict';

var PersonShowView = (function () {
    var Constructor = function () {
        return this;
    }
    
    Constructor.prototype.render = function (person, $container) {
        var personTemplate = templates['personShow'],
            $resultDiv = $('<div></div>');
        
        $resultDiv.append(personTemplate(person.toJSON()));
        
        $resultDiv.find('#editButton').on('click', function () {
            Mediator.publish('editingRequested', person);
        });
        $resultDiv.find('#deleteButton').on('click', function () {
            Mediator.publish('removingRequested', person);
        });
        
        if ($container) {
            Helper.clearContent($container);
            $container.append(resultDiv);
        }
        
        return $resultDiv;
    }
    
    return Constructor;
})();