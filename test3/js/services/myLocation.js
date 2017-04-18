app.factory('myLocation', ['$http', function($http) 
{ 
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json') 
    .success(function(data) { 
    return data; 
  }) 
    .error(function(err) { 
    return err; 
  }); 
}]);

//use this to get geolocation data somehow then pass it to the controller