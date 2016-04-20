// Your app's JS goes here

//Wait until HTML is loaded
$(document).ready(function(){
	var menuItems = $(".menu-item");
	var LSCart;
	totalRow = $('.total-row').html();

	// cart array structure
	// -item
	// --name 0
	// --price 1
	// --quanitity 2


	menuItems.click(function() {
		var itemName = $(this).data('menu-item');
		var itemPrice = $(this).data('menu-price');
		var itemQuantity = 1;
		LSCart = [];

		if(localStorage.getItem("cart")){
			LSCart = JSON.parse(localStorage.getItem("cart"));
		}

		for(var i = 0; i < LSCart.length; i++){
			if(LSCart[i][0] == itemName){
				itemQuantity += LSCart[i][2];
				LSCart.splice(i, 1);
			}
		}

		var item = [itemName, itemPrice, itemQuantity];

		LSCart.push(item);

		localStorage.setItem("cart", JSON.stringify(LSCart));

		populateCart(LSCart);

	});

	if(localStorage.getItem("cart")){
		LSCart = JSON.parse(localStorage.getItem("cart"));
		populateCart(LSCart);
	}
});


function populateCart(array){
	var totalCost = 0;

	$('.cart tbody').html(totalRow);

	for(var i = 0; i < array.length; i++){
		$('.cart tbody').prepend("<tr><td>" + array[i][0]
											+ "</td><td>" + array[i][2]
											+ "</td><td>" + (array[i][2]* array[i][1])
											+ "</td></tr>");

		totalCost += (array[i][2] * array[i][1]);
	}

	$(".total").html(totalCost);
}


//// Clear localStorage
//localStorage.clear();
