// Your app's JS goes here

//Wait until HTML is loaded
window.onload = function() {

	var nameSpace = document.getElementsByClassName("user-name")[0];
	var nameInput = document.getElementsByClassName("user-name-input")[0];
	var nameSave  = document.getElementsByClassName("user-name-save")[0];

	nameSave.onclick = function(event) {
		event.preventDefault();

		localStorage.setItem("user-name", nameInput.value);

		nameSpace.innerHTML = nameInput.value;
	}

	if(localStorage.length > 0){
		nameSpace.innerHTML = localStorage.getItem("user-name");
	}

	//// Clear localStorage
	// localStorage.clear();

};
