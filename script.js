var app = angular.module("app", []);
app.controller("HelloController", function($scope){
	$scope.message = "Hello World";
});


app.controller("getName",function($scope){
  $scope.firstName = "";
  $scope.lastName = "";
    return $scope.firstName + " " + $scope.lastName;
});


app.controller("usingFilters",function($scope){
	var data = [
		{name: "Devendra", dateOfBirth: new Date("19 February, 1992"), gender: "Male", companyName: "Cyber Group"},
		{name: "Vishal", dateOfBirth: new Date("October 19, 1992"), gender: "Male", companyName: "Cyber Group"},
		{name: "Lagnesh", dateOfBirth: new Date("July 22, 1992"), gender: "Male", companyName: "Cyber Group"},
		{name: "Shantanu", dateOfBirth: new Date("March 19, 1988"), gender: "Male", companyName: "Cyber Group"},
	];

	$scope.data = data;
});