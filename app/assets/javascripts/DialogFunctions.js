// Set up the two dialogs used for the glossary
function InitaliseDialogs() {
    LoadAddUpdateGlossaryDialog();
    LoadDeleteConfirmationDialog();
}

// Setup the Add/Update glossary dialog item.
function LoadAddUpdateGlossaryDialog() {
    $("#dialog:ui-dialog").dialog("destroy");

    var term = $("#term"),
    definition = $("#definition"),
    allFields = $([]).add(term).add(definition),
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
                bValid = bValid && checkLength(definition, "definition", 5, 2000);

                if (bValid) {
                    if ($("input#glossaryitemID").val() == -1) {
                        AddGlossaryItem(term.val(), definition.val());
                    } else {
                        // Update the item in the database and then update the values in the table;
                        GlossaryID = UpdateGlossaryItem($("input#glossaryitemID").val(), term.val(), definition.val());
                        glossaryitemID = $("input#glossaryitemID").val();
                        $("#term" + glossaryitemID).html(term.val());
                        $("#definition" + glossaryitemID).html(definition.val());
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