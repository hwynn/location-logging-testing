function initMap(x, data) {
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 19,
	  center: x
	});
	//custom markers made by: http://www.benjaminkeen.com/google-maps-coloured-markers/
	var mymarker = new google.maps.Marker({
	  position: x,
	  icon: 'css/GoogleMapsMarkers/red_MarkerU', 
	  map: map
	});
	console.log("boop");
	for(var i in data)
	{
		var rgender = data[i].Gender.concat(" restroom");
		var rdistance = data[i].distance_in_meters.concat(" meters away from you");
		var contentString = '<div id="content">'+'<div id="siteNotice">'+'</div>'+'<div id="bodyContent">'+ data[i].Gender.concat(" restroom") + '<br>' + data[i].distance_in_meters.concat(" meters away from you") + '<br>' + '</div>'+'</div>';
		var restplace = new google.maps.LatLng(parseFloat(data[i].Latitude), parseFloat(data[i].Longitude));	
		//------------https://developers.google.com/maps/documentation/javascript/markers
		
		var infowindow = new google.maps.InfoWindow();
	
		var marker = new google.maps.Marker({
			map: map
		});
		marker.content = '<div id="content">'+'<div id="siteNotice">'+'</div>'+'<div id="bodyContent">'+ data[i].Gender.concat(" restroom") + '<br>' + data[i].distance_in_meters.concat(" away from you") + '<br>' + '</div>'+'</div>';
		
		marker.setPosition(restplace);
		
		if(data[i].Gender=="female"){marker.setIcon('css/GoogleMapsMarkers/pink_MarkerR');}
		else if(data[i].Gender=="unisex"){marker.setIcon('css/GoogleMapsMarkers/purple_MarkerR');}
		else if(data[i].Gender=="male"){marker.setIcon('css/GoogleMapsMarkers/blue_MarkerR');}
		
		//assistance with infowindow sharing http://stackoverflow.com/questions/3576488/google-maps-infowindow-only-loading-last-record-on-markers
		//http://stackoverflow.com/questions/3576488/google-maps-infowindow-only-loading-last-record-on-markers
		
		google.maps.event.addListener(marker, 'click', function () {
			infowindow.setContent(this.content);
			infowindow.open(map, this);
		}); 
	}
 }

app.controller('MainController', ['$scope', '$http', function($scope, $http) {

			$scope.getGeolocationData = function(position){
				$scope.$apply(function(){
				$scope.myLatitude = position.coords.latitude.toString();
				$scope.myLongitude = position.coords.longitude.toString();
				$scope.makeCall();
				console.log("Hello?");
				});
			}
			
			//this should only be used inside getGeolocationData to ensure coordinates exist
			$scope.makeCall = function(){
				console.log("is this running?");
				$http({
					url: "js/locationAsk.php", 
					method: "GET",
					params: {
						mylat: $scope.myLatitude,
						mylong: $scope.myLongitude,
						//genders. False if results for that gender should be hidden
						gu: $scope.Filters.Genders['unisex'],
						gm: $scope.Filters.Genders['male'],
						gf: $scope.Filters.Genders['female'],
						//handicap. True if we should only show handicap results
						hc: $scope.Filters.HandicapOnly,
						//floor number.
						fl: $scope.Filters.Floor
						}

				}).then(function successCallback(response) {
					console.log("We got a response!");
					console.log($scope.Filters.Genders['female']);
					console.log($scope.Filters.Genders['male']);
					console.log($scope.Filters.Genders['unisex']);
					$scope.content = response.data;
					console.log(typeof response.data);
					for(var i in response.data)
					{
					console.log(response.data[i]);
					}
					$scope.statuscode = response.status;
					$scope.statustext = response.statustext;
					//--------------------google maps stuff
					myLatLng = new google.maps.LatLng({lat: parseFloat($scope.myLatitude), lng: parseFloat($scope.myLongitude)});
					initMap(myLatLng, response.data);
					//-------------------------------------
				}, function errorCallback(response) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
					$scope.content = "Something went wrong";
					console.log("something bad happened");
					//https://www.w3schools.com/angular/angular_http.asp
				});
			}
			$scope.updateB = function() {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition($scope.getGeolocationData);
				}
				else{
				console.log("Your browser does not support html5 geolocation navigator");
				}
				//make error message
			//http://stackoverflow.com/questions/30613442/angularjs-geolocation-data-update help with structuring and calling services
			//http://stackoverflow.com/questions/23185619/how-can-i-use-html5-geolocation-in-angularjs
			}
			$scope.Filters =
			{
				Floor: 1,
				Genders: {unisex: true, female: true, male: true}, //http://stackoverflow.com/questions/14514461/how-do-i-bind-to-list-of-checkbox-values-with-angularjs
				HandicapOnly: false
			}
		}]);
