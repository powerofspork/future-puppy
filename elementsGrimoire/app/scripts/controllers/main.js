'use strict';

/**
 * @ngdoc function
 * @name elementsGrimoireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elementsGrimoireApp
 */
angular.module('elementsGrimoireApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1','Item 2','Item 3'];
	$scope.addTodo = function(){
		$scope.todos.push($scope.todo);
		$scope.todo = '';
	};
	$scope.removeTodo = function (index){
		$scope.todos.splice(index, 1);
	};
  });
