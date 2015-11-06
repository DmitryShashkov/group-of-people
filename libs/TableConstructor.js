'use strict';

function TableConstructor () {
	var table = document.createElement('table');

	this.addRow = function (rowArray) {
		var newRow = table.insertRow(),
            key, newCell, textNode;
        
        rowArray.forEach(function (item) {
            newCell = newRow.insertCell();
            newCell.classList.add('borders');
            
            if (item instanceof HTMLElement) {
                newCell.appendChild(item);
            } else {
                textNode = document.createTextNode(item);
                newCell.appendChild(textNode);
            } 
        });

		return this;
	}

	this.deployTable = function (container) {
		container.appendChild(table);
	}

	return this;
}