var app = angular.module('app', ['ui.router','ui.bootstrap'])
.config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      views: {
        main: {
          controller: 'homeController',
          templateUrl: 'app/views/home.html'
        }
      }
    });
    $urlRouterProvider.otherwise(function($injector) {
      var $state = $injector.get('$state');
      $state.go("home");
    });
  }
  ]);



app.service('WS', ['$q','$http',function($q,$http) {
  var callService = function(url) {
    var deferred = $q.defer();
    var dataPost = {};
    var config = {};
    $http.get(url).success(function(response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };
}]);