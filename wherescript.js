function findMe(){
	var x = document.getElementById("whereinfo");
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(my_position){
	//we're using an XMLHttpRequest!
	xmlhttp=new XMLHttpRequest();
	//variable name vN
	//variable data vD
	//these will be packaged and sent into the xmlhttp request
	var our_page = "places.php";
	var	vN_LA = "lat=";
	var	vD_LA = my_position.coords.latitude.toString();
	var vN_LO = "long=";
	var	vD_LO = my_position.coords.longitude.toString();
	var vN_A = "accy=";
	var	vD_A = my_position.coords.accuracy.toString();
	var vN_T = "time=";
	var	vD_T = my_position.timestamp.toString();
	var our_url = our_page + vN_LA + vD_LA + "&" + vN_LO + vD_LO + "&" + vN_A + vD_A + "&" + vN_T + vD_T;
		x.innerHTML = "You're here!<br>" + 
		"latitude: " + vD_LA + 
		"<br>longitude: " + vD_LO +
		"<br>accuracy: " + vD_A +
		"<br>time: " + vD_T;
		//x.innerHTML = "You're here!<br>";
		xmlhttp.open("POST", our_url, true);
		xmlhttp.send();
		});
	}
	else {
		x.innerHTML = "Sorry. We couldn't get it to work.";
	}
}