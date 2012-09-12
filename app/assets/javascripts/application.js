// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
// json call to add the item to the glossary
function addglossaryitem() {
    var GlossaryID = -1;

	$.ajax({
	url: 'http://nameless-peak-8796.herokuapp.com/home/addglossaryitem',
	data: { },
	async: true,
	//dataType: 'script',
        success: function() {
            // The item was added to the db so add it to the table
            //AddRowToGlossary(data, Term, Description);
			alert('woot woot');
        },
        error: function(xhr, ajaxOptions, error) {
            alert('doh');
			//alert(xhr.status);
            alert('Error: ' + xhr.responseText);
        }
	});
/*
    $.ajax({
		type: 'POST',
        url: 'http://nameless-peak-8796.herokuapp.com/home/addglossaryitem',
		data: "{}",
		dataType: "script",
        success: function() {
            // The item was added to the db so add it to the table
            //AddRowToGlossary(data, Term, Description);
			alert('woot woot');
        },
        error: function(xhr, ajaxOptions, error) {
            alert('doh');
			//alert(xhr.status);
            alert('Error: ' + xhr.responseText);
        }
    });*/

    return GlossaryID;
}


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