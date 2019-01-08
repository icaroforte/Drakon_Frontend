(function(angular, undefined) {
	'use strict';

	angular.module('drakon').factory('EntorpecentesService', entorpecenteService);

	entorpecenteService.$inject = ['$http', 'api'];

	function entorpecenteService($http, api) {
		return {
			getEntorpecentes: getEntorpecentes,
			save: save
		};

		function getEntorpecentes() {
			return $http.get(api.entorpecentes);
		}

		function save(entorpecente){
			if(entorpecente._id){
				return $http.put(api.entorpecentes + '/' + entorpecente._id, entorpecente);
			} else{
				return $http.post(api.entorpecentes, entorpecente);
			}
		}
	} 

})(angular);