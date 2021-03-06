﻿// Set up the two dialogs used for the glossary
function InitaliseDialogs() {
    LoadAddUpdateGlossaryDialog();
    LoadDeleteConfirmationDialog();
}

// Setup the Add/Update glossary dialog item.
function LoadAddUpdateGlossaryDialog() {
    $("#dialog:ui-dialog").dialog("destroy");

    var term = $("#term"),
    description = $("#description"),
    allFields = $([]).add(term).add(description),
    tips = $(".validateTips");

    $("#dialog-form").dialog({
        autoOpen: false,
        height: 350,
        width: 500,
        modal: true,
        buttons: {
            "Save": function() {
                var bValid = true;
                allFields.removeClass("ui-state-error");

                bValid = bValid && checkLength(term, "term", 1, 255);
                bValid = bValid && checkLength(description, "description", 5, 2000);

                if (bValid) {
                    if ($("input#id").val() == -1) {
                        addglossaryitem(term.val(), description.val());
                    } else {
                        // Update the item in the database and then update the values in the table;
                        GlossaryID = updateglossaryitem($("input#id").val(), term.val(), description.val());
                        id = $("input#id").val();
                        $("#term" + id).html(term.val());
                        $("#description" + id).html(description.val());
                    }

                    $(this).dialog("close");
                }
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
        }
    });

    // Add click function the #Add button
    $("#Add")
    .button()
    .click(function() {
        NewGlossaryItem();
    });
}

// Load the Delete confirmation dialog
function LoadDeleteConfirmationDialog() {
    $("#dialog-confirm").dialog({
        autoOpen: false,
        resizable: false,
        height: 170,
        modal: true,
        buttons: {
            "Delete this item": function() {
                $(this).dialog("close");
                DeleteItem();
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });
}