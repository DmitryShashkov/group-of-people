'use strict';

function GroupView (_group) {
    var group = _group;
        
    this.setGroup = function (value) {
        group = value;
    }
    
    this.render = function (container) {
        var helper = new Helper(),
            tableConstructor = new TableConstructor(),
            detailsButton, deleteButton, personArray;
        
        helper.clearContent(container);
            
        group.each(function (item) {
            detailsButton = document.createElement('input');
            detailsButton.type = 'button';
            detailsButton.value = 'Details';
            detailsButton.addEventListener('click', function () {
                Mediator.publish('preview', item);
            }, false);
            
            deleteButton = document.createElement('input');
            deleteButton.type = 'button';
            deleteButton.value = 'Delete';
            deleteButton.addEventListener('click', function () {
                Mediator.publish('delete', item);
            }, false);
            
            personArray = item.toArray();
            personArray.push(detailsButton);
            personArray.push(deleteButton);
            
            tableConstructor.addRow(personArray);
        });
        
        tableConstructor.deployTable(container);
    }
    
    return this;
}