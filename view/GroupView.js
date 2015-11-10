'use strict';

function GroupView (_group) {
    var group = _group;
        
    this.setGroup = function (value) {
        group = value;
    }
    
    this.render = function (container) {
        var addButton = document.createElement('input'),
            div;
        
        Helper.clearContent(container);
            
        group.each(function (item) {
            div = document.createElement('div');
            div.appendChild((new PersonShowView()).render(item));
            div.classList.add('divs');
            container.appendChild(div);   
        });
        
        addButton.type = 'button';
        addButton.value = 'Add new student';
        addButton.classList.add('buttons');
        addButton.addEventListener('click', function () {
            Mediator.publish('add');
        });
        
        container.appendChild(addButton);
    }
    
    return this;
}