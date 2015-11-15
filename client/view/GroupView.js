'use strict';

var GroupView = (function () {
    function Constructor (_group) {
        var attributes = {
            group: _group
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
    
    Constructor.prototype.render = function ($container) {
        var group = this.get('group'),
            $addButton = $('<input type = \'button\' value = \'Add new student\' class=\'buttons\'>'),
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
    
    return Constructor;
})();