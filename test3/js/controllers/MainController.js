app.controller('MainController', ['$scope', function($scope) {
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