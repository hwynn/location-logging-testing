app.controller('MainController', ['$scope', function($scope) {
	  if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
			$scope.$apply(function(){
			$scope.myLatitude = position.coords.latitude.toString();
			$scope.myLongitude = position.coords.longitude.toString();
			});
		});
	//http://stackoverflow.com/questions/23185619/how-can-i-use-html5-geolocation-in-angularjs
	}
	
	$scope.bathrooms = 
	[ 
		{ 
			floor: 2, 
			distance: 72, 
			gender: 'Female', 
			accessible: true 
		}, 
		{ 
			floor: 2, 
			distance: 72, 
			gender: 'Female', 
			accessible: true 
		}, 
		{ 
			floor: 2, 
			distance: 75, 
			gender: 'Unisex', 
			accessible: true 
		}, 
		{ 
			floor: 2, 
			distance: 206, 
			gender: 'Female', 
			accessible: false 
		}, 
		{ 
			floor: 2, 
			distance: 213, 
			gender: 'Unisex', 
			accessible: false 
		}, 
		{ 
			floor: 1, 
			distance: 81, 
			gender: 'Unisex', 
			accessible: true 
		}, 
		{ 
			floor: 3, 
			distance: 50, 
			gender: 'Female', 
			accessible: false 
		}, 
		{ 
			floor: 3, 
			distance: 140, 
			gender: 'Unisex', 
			accessible: true 
		}
	];

}]);

function captureUserLocation() {
    geolocationSvc.getCurrentPosition().then(onUserLocationFound);
}


// https://www.w3schools.com/angular/angular_sql.asp




/*
app.controller('MainController', ['$scope', 'myLocation', function($scope, myLocation) { 
    myLocation.success(function(data) { 
    $scope.geolocationshitIguess = data; 
  });
}]);*/