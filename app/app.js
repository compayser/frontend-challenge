var personsApp = angular.module('personsApp', []);

personsApp.controller('PersonListController', function PersonListController($scope, $http) {
	$http.get('http://localhost:3000/persons')
		.then(function successCallback(response) {
		$scope.persons = response.data;
	}); 
});

personsApp.controller('NewPersonController', function NewPersonController($scope, $http) {
	$scope.person = null;

	$scope.createPerson = function() {
		var id = 100;
		var data = [
			{ 	"id" : id, 
				"photo" : null, 
				"firstName" : null, 
				"lastName" : null, 
				"gender" : null, 
				"birthDate" : null, 
				"jobTitle" : null, 
				"skills" : [],
				"resume" : null
			}
		];
		$http.post('http://localhost:3000/persons/', data)
			.then(function successCallback(response) {
		}); 
	};

});
