// Your app's JS goes here

//Wait until HTML is loaded
window.onload = function() {

	var nameSpace = document.querySelector(".user-name");
	var nameInput = document.querySelector(".user-name-input");
	var nameSave  = document.querySelector(".user-name-save");

	//var element = document.querySelector("#id");
	//var elements = document.querySelectorAll(".selectors");

	//other version of selection
	//var nameSave  = document.getElementsByClassName("user-name-save")[0];
	// var element = document.getElementById(id);

	nameSave.onclick = function(event) {
		event.preventDefault();

		//localStorage.setItem("user-name", nameInput.value);

		nameSpace.innerHTML = nameInput.value;
	}

	// if(localStorage.length > 0){
	// 	nameSpace.innerHTML = localStorage.getItem("user-name");
	// }

	//// Clear localStorage
	//localStorage.clear();

};
