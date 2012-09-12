// json call to add the item to the glossary
function AddGlossaryItem(Term, Definition) {
    var GlossaryID = -1;

    $.ajax({
        url: '/home/AddGlossaryItem',
        type: 'POST',
        dataType: 'json',
        data: {
            Term: Term,
            Definition: Definition
        },
        success: function(data) {
            // The item was added to the db so add it to the table
            AddRowToGlossary(data, Term, Definition);
        },
        error: function(xhr, ajaxOptions, error) {
            alert(xhr.status);
            alert('Error: ' + xhr.responseText);
        }
    });

    return GlossaryID;
}

// json call to update an item to the glossary
function UpdateGlossaryItem(GlossaryID, Term, Definition) {

    $.ajax({
        url: '/home/UpdateGlossaryItem',
        type: 'POST',
        dataType: 'json',
        data: {
            GlossaryID: GlossaryID,
            Term: Term,
            Definition: Definition
        },
        success: function(data) {
            data;
        },
        error: function(xhr, ajaxOptions, error) {
            alert(xhr.status);
            alert('Error: ' + xhr.responseText);
        }
    });
}

// json call to delete an item from the glossary
function DeleteGlossaryItem(GlossaryID) {

    $.ajax({
        url: '/home/DeleteGlossaryItem',
        type: 'POST',
        dataType: 'json',
        data: {
            GlossaryID: GlossaryID
        },
        success: function(data) {
            data;
        },
        error: function(xhr, ajaxOptions, error) {
            alert(xhr.status);
            alert('Error: ' + xhr.responseText);
        }
    });
}