//specifies an angular app module, giving it a name and declaring the type (in this case and array)
var app = angular.module('myApp', ['ngMaterial', 'ngMdIcons']);

//defines the app's function. giving it a name and a function to execute
app.controller('AppListControl', function ($scope) {
	//array of apps described by the attributes name and description.
	$scope.apps = [
		{ name: 'Transit Pulse',
		    desc: 'A real-time transit app for NYC.'},
		{ name: 'uBooks',
		    desc: 'A convenient book used book exchange for students.'},
		{ name: 'Another App',
		    desc: 'Some shit by Me I guess...'}
	];
});

app.controller('testControl', function ($scope) {
	
});