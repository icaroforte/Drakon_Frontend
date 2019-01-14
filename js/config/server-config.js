(function(angular, undefined) {
	'use strict';

	var _baseUrl = "https://drakon-back.herokuapp.com/api/v1/";

	angular.module('drakon').constant('api', {
		entorpecentes: resourceOf('entorpecentes')
	});

	function resourceOf(resourceName) {
		return _baseUrl + resourceName;
	}

})(angular);
