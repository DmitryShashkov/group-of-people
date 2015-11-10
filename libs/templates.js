var templates = (function () {
    var _person = _.template([
            '<div>',
                '<%= id %>. <%= name %> <%= surname %>',
            '</div>',
            '<div>',
                '(<%= gender %>, skype: <%= skype %>)',
            '</div>'
        ].join(''));
    
    return {
        person: _person
    };
})();