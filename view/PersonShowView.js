'use strict';

var PersonShowView = (function () {
    var Constructor = function () {
        return this;
    }
    
    Constructor.prototype.render = function (person, $container) {
        var personTemplate = templates['person'],
            $editButton = $('<input type = \'button\' value = \'Edit\'>'),
            $deleteButton = $('<input type = \'button\' value = \'Delete\'>'),
            $div = $('<div></div>'),
            $resultDiv = $('<div></div>');
        
        $editButton.addClass('buttons');
        $editButton.on('click', function () {
            Mediator.publish('edit', person);
        });
        
        $deleteButton.addClass('buttons');
        $deleteButton.on('click', function () {
            Mediator.publish('delete', person);
        });
        
        $div.append(personTemplate(person.toJSON()));
        $resultDiv.append($div);
        $resultDiv.append($editButton);
        $resultDiv.append($deleteButton);
        
        if ($container) {
            Helper.clearContent($container);
            $container.append(resultDiv);
        }
        
        return $resultDiv;
    }
    
    return Constructor;
})();