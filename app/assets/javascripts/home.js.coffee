# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
// json call to add the item to the glossary
function addglossaryitem(Term, Definition) {
    var GlossaryID = -1;

    $.ajax({
        url: '/home/addglossaryitem',
        type: 'POST',
        dataType: 'json',
        data: {
            Term: Term,
            Definition: Definition
        },
        success: function(data) {
            // The item was added to the db so add it to the table
            //AddRowToGlossary(data, Term, Definition);
        },
        error: function(xhr, ajaxOptions, error) {
            alert(xhr.status);
            alert('Error: ' + xhr.responseText);
        }
    });

    return GlossaryID;
}