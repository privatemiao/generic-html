materialAdmin.service('UserService', [ '$http', '$q', function($http, $q) {
	var user = {
		resources : [ '1', '2' ]
	};
	return {
		resources : function() {
			var deferred = $q.defer();
			if (user.resources.length > 0) {
				deferred.resolve({
					data : user.resources
				});
			} else {
				$http.get('generic/system/resources').then(function(response) {
					deferred.resolve(response);
				}, function(error) {
					deferred.reject(error);
				});
			}
			return deferred.promise;
		}
	};
} ])