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
		type: 'POST',
        url: 'http://nameless-peak-8796.herokuapp.com/home/addglossaryitem.json',
		data: "{}",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
        success: function() {
            // The item was added to the db so add it to the table
            //AddRowToGlossary(data, Term, Description);
			alert('woot woot');
        },
        error: function(xhr, ajaxOptions, error) {
            alert('doh');
			alert(xhr.status);
            //alert('Error: ' + xhr.responseText);
        }
    });

    return GlossaryID;
}