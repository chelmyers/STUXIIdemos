$('#pin-button').click( function() {
	addMarker(0,0);
});

$('#info').click( function() {
	$("#app-info").css("display", "inherit");
});

$('#close').click( function() {
	$("#app-info").css("display", "none");
});