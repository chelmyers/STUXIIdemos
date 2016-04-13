// Your app's JS goes here

//Wait until HTML is loaded
$(document).ready(function(){

	var nameSpace = $(".user-name");
	var nameInput = $(".user-name-input");
	var nameSave  = $(".user-name-save");

	// var element = $("#id");

	nameSave.click(function(event) {
		event.preventDefault();

		localStorage.setItem("user-name", nameInput.val());

		nameSpace.html(nameInput.val());
	});

	if(localStorage.length > 0){
		nameSpace.html(localStorage.getItem("user-name"));
	}

	//// Clear localStorage
	//localStorage.clear();

});
