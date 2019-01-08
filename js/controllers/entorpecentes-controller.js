(function(angular, undefined) {
	'use strict';

	angular.module('drakon').controller('EntorpecentesController', controller);

	controller.$inject = ['$routeParams', '$http', 'EntorpecentesService'];

	function controller($routeParams, $http, entorpecentesService) {
		var vm = this;

		vm.initList = function(){
			vm.entorpecentes = [];

			entorpecentesService.getEntorpecentes().success(function(data){
				vm.entorpecentes = data;
			});
		}

		vm.initSalvar = function(){
			vm.entorpecentes = {};
		}


		vm.save = function(entorpecente){
			entorpecentesService.save(entorpecente).success(function(data){
				console.log(data);
			});
		}
	}

})(angular);