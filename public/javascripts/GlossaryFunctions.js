﻿// Confirm that the item is not too long for the field
function checkLength(o, n, min, max) {
    if (o.val().length > max || o.val().length < min) {
        o.addClass("ui-state-error");
        updateTips("Length of " + n + " must be between " +
		min + " and " + max + ".");
        return false;
    } else {
        return true;
    }
}

// Sets the title for the Add/Edit glossary form and sets the Glossary Item ID
function NewGlossaryItem() {
    $("input#id").val(-1);
    $("#dialog-form").attr("title", "New glossary item");
    $("#dialog-form").dialog("open");
}

// Sets the title for the Add/Edit glossary form and updates the required fields
function EditGlossaryItem(id) {
    $("#dialog-form").attr("title", "Edit glossary item");
    $("input#term").val($("#term" + id).html());
    $("textarea#description").val($("#description" + id).html());
    $("input#id").val(id);
    $("#dialog-form").dialog("open");
}

// Opens the dekete dialog and then calls the Delete item function
function DeleteGlossaryDialog(id) {
    $("input#deleteglossaryitemID").val(id);
    $("#dialog-confirm").dialog("open");
}

// Deletes the selected item from the glossary and then removes the item from the table.
function DeleteItem() {
    var id = $("input#deleteglossaryitemID").val();
    DeleteRowFromTable(id);
    deleteglossaryitem(id);
}

// Add item to the table
function AddRowToGlossary(GlossaryID, Term, Description) {
    // Add item to the datatable
    var newRow = $('#GlossaryTable').dataTable().fnAddData([
        Term,
        Description,
        "<a href=\"\" onclick=\"EditGlossaryItem(" + GlossaryID + ");return false;\">Edit Item</a>",
        "<a href=\"\" onclick=\"DeleteGlossaryDialog(" + GlossaryID + ");return false;\">Delete</a>"
        ]
    );

    // Set the required id's
    var oSettings = $('#GlossaryTable').dataTable().fnSettings();
    var nTr = oSettings.aoData[newRow[0]].nTr;
    $($('#GlossaryTable tr')[nTr.rowIndex]).attr('id', "RowID" + GlossaryID);    
    $('td', nTr)[0].setAttribute( 'id', "term" + GlossaryID);
    $('td', nTr)[1].setAttribute('id', "description" + GlossaryID);
}

// Delete item to the table
function DeleteRowFromTable(GlossaryID) {
    // Immediately remove the first row
    $('#GlossaryTable').dataTable().fnDeleteRow(
        $('#GlossaryTable').dataTable().fnGetPosition(
            document.getElementById('RowID' + GlossaryID)));

}