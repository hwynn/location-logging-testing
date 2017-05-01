app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	$scope.sortType = 	'content.Floor';
	$scope.sortReverse = false;
	
	
	$scope.getMyPosition = function(){
		var fucknuts = [ NULL, NULL ];
	}
	
	
	
	
	
	
	
	
	
	
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
			$scope.$apply(function(){
			$scope.myLatitude = position.coords.latitude.toString();
			$scope.myLongitude = position.coords.longitude.toString();
			$http({
				 url: "js/locationAsk.php", 
				 method: "GET",
				 params: {
					 mylat: $scope.myLatitude,
					 mylong: $scope.myLongitude
					 }  
			}).then(function successCallback(response) {
				console.log("We got a response!");
				$scope.content = response.data;
				$scope.statuscode = response.status;
				$scope.statustext = response.statustext;
				
				
				
				// this callback will be called asynchronously
				// when the response is available
			  }, function errorCallback(response) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				$scope.content = "Something went wrong";
				console.log("something bad happened");
				//https://www.w3schools.com/angular/angular_http.asp
			  });
			console.log("Hello?");
			
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





//http://stackoverflow.com/questions/28860910/create-an-angularjs-factory-object-to-hold-an-array
// https://www.w3schools.com/angular/angular_sql.asp

var app = angular.module('myApp', []);
app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});
app.filter('myFormat',['hexafy', function(hexafy) {
    return function(x) {
        return hexafy.myFunc(x);
    };
}]);
app.controller('myCtrl', function($scope) {
    $scope.counts = [255, 251, 200];
});




<script>
         var mainApp = angular.module("mainApp", []);
         
         mainApp.factory('MathService', function() {
            var factory = {};
            
            factory.multiply = function(a, b) {
               return a * b
            }
            return factory;
         });
         
         mainApp.service('CalcService', function(MathService){
            this.square = function(a) {
               return MathService.multiply(a,a);
            }
         });
         
         mainApp.controller('CalcController', function($scope, CalcService) {
            $scope.square = function() {
               $scope.result = CalcService.square($scope.number);
            }
         });
      </script>