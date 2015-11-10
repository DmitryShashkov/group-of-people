'use strict';

function GroupView (_group) {
    var group = _group;
        
    this.setGroup = function (value) {
        group = value;
    }
    
    this.render = function (container) {
        var div;
        
        Helper.clearContent(container);
            
        group.each(function (item) {
            div = document.createElement('div');
            div.appendChild((new PersonShowView()).render(item));
            div.classList.add('divs');
            container.appendChild(div);   
        });
    }
    
    return this;
}