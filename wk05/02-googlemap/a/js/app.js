//Google maps
//https://developers.google.com/maps/documentation/javascript/tutorial#HTML5
//https://developers.google.com/maps/documentation/javascript/examples/

$(document).ready(function(){
  var philadelphia = new google.maps.LatLng(39.956083899999996, -75.1767042);
  createMap(philadelphia);

});


function createMap(city) {
  var mapOptions = {
    center: city,
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
    // other options are here:
    // http://www.w3schools.com/googleAPI/ref_mapoptions.asp
  };

  var map = new google.maps.Map(document.getElementById("map"),mapOptions);

}
