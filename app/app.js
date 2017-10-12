var personsApp = angular.module('personsApp', []);

personsApp.controller('PersonListController', function PersonListController($scope, $http) {
	$http.get('http://localhost:3000/persons')
		.then(function successCallback(response) {
		$scope.persons = response.data;
	}); 
});
