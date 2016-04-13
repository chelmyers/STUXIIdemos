// Your app's JS goes here

//Wait until HTML is loaded
window.onload = function() {

	var menuItems = document.getElementsByClassName("menu-item");
	var totalCell = document.getElementsByClassName("total")[0];

	// cart
	// -item
	// --name
	// --price
	// --quanitity


	menuItems.onclick = function(event) {
		var itemName = this.dataset.menuItem;
		var itemPrice = this.dataset.menuPrice;

		console.log(itemName + itemPrice);

		//var cartArray = [this.dataset.menuItem, this.dataset.menuItem;

		//localStorage.setItem("user-name", nameInput.value);


	}

	if(localStorage.length > 0){
		//nameSpace.innerHTML = localStorage.getItem("user-name");
	}

	//// Clear localStorage
	//localStorage.clear();

};
