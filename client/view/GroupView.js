'use strict';

var GroupView = Backbone.View.extend({
    render: function (group, $container) {
        var $addButton = $('<input type = \'button\' value = \'Add new student\' class=\'buttons\'>'),
            $div;
        
        Helper.clearContent($container);
            
        group.each(function (item) {
            $div = $('<div></div>');
            $div.append((new PersonShowView()).render(item));
            $div.addClass('divs');
            $container.append($div);   
        });
        
        $addButton.on('click', function () {
            Mediator.publish('addingRequested');
        });
        $container.append($addButton);
    }
});