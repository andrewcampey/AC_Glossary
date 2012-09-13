// json call to add the item to the glossary
function addglossaryitem(Term, Description) {
    var GlossaryID = -1;

	$.ajax({
	url: '/home/addglossaryitem',
	data: {
		Term: Term,
        Description: Description
	},
	async: true,
	//dataType: 'script',
        success: function(data) {
			alert(data);
            // The item was added to the db so add it to the table
            AddRowToGlossary(data, Term, Description);
        },
        error: function(xhr, ajaxOptions, error) {
			alert(xhr.status);
            alert('Error: ' + xhr.responseText);
		}
	});

    return GlossaryID;
}

// json call to update an item to the glossary
function updateglossaryitem(GlossaryID, Term, Description) {

	$.ajax({
	url: '/home/updateglossaryitem',
	data: {
		GlossaryID: GlossaryID,
		Term: Term,
        Description: Description
	},
	async: true,
	//dataType: 'script',
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
function deleteglossaryitem(GlossaryID) {

	$.ajax({
		url: '/home/deleteglossaryitem',
		data: {
			GlossaryID: GlossaryID,
			Term: Term,
			Description: Description
		},
		async: true,
		//dataType: 'script',
			success: function(data) {
				data;
			},
			error: function(xhr, ajaxOptions, error) {
				alert(xhr.status);
				alert('Error: ' + xhr.responseText);
			}
	});
}