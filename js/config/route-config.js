(function(angular, undefined) {
	'use strict';

	angular.module('drakon').config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {
		$routeProvider
			.when('/entorpecentes', {
				templateUrl: 'view/entorpecentes-list.html',
				controller: 'EntorpecentesController',
				controllerAs: 'vm'
			}).when('/entorpecentes/salvar', {
				templateUrl: 'view/entorpecentes-salvar.html',
				controller: 'EntorpecentesController',
				controllerAs: 'vm'
			});
	}

})(angular);