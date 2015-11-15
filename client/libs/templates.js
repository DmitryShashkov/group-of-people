var templates = (function () {
    var _personShow = _.template([
            '<div>',
                '<%= id %>. <%= name %> <%= surname %>',
            '</div>',
            '<div>',
                '(<%= gender %>, skype: <%= skype %>)',
            '</div>',
            '<input type = \'button\' value = \'Edit\' class=\'buttons\' id=\'editButton\'>',
            '<input type = \'button\' value = \'Delete\' class=\'buttons\' id=\'deleteButton\'>'
        ].join('')),
        
        _personEdit = _.template([
            '<div class = \'divs\'>',
                '<input type = \'text\' id=\'id\' class=\'input\' value = \'',
                    '<%= id %>',
                '\'>',
                ' (id)',
            '</div>',
            '<div class = \'divs\'>',
                '<input type = \'text\' id=\'name\' class=\'input\' value = "',
                    '<%= name %>',
                '">',
                ' (name)',
            '</div>',
            '<div class = \'divs\'>',
                '<input type = \'text\' id=\'surname\' class=\'input\' value = "',
                    '<%= surname %>',
                '">',
                ' (surname)',
            '</div>',
            '<div class = \'divs\'>',
                '<input type = \'text\' id=\'gender\' class=\'input\' value = \'',
                    '<%= gender %>',
                '\'>',
                ' (gender)',
            '</div>',
            '<div class = \'divs\'>',
                '<input type = \'text\' id=\'skype\' class=\'input\' value = \'',
                    '<%= skype %>',
                '\'>',
                ' (skype)',
            '</div>',
            '<input type = \'button\' class=\'buttons\' id=\'saveButton\'>'
        ].join(''));
    
    return {
        personShow: _personShow,
        personEdit: _personEdit
    };
})();