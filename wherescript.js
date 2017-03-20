function findMe(){
	var x = document.getElementById("whereinfo");
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(my_position){
		x.innerHTML = "You're here!<br>" + 
		"latitude: " + my_position.coords.latitude + 
		"<br>longitude: " + my_position.coords.longitude +
		"<br>accuracy: " + my_position.coords.accuracy +
		"<br>time: " + my_position.timestamp;
		//x.innerHTML = "You're here!<br>";
		});
	}
	else {
		x.innerHTML = "Sorry. We couldn't get it to work.";
	}
	
}