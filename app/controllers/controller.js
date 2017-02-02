(function() {
  	app.controller('homeController', ["$scope","$http",function($scope,$http) {
      
        $scope.Movies = [];
        $scope.MoviesDB = [];
        $http.get("json/jsonmovies.json").then(function(r) {
            $scope.MoviesDB = r.data.Movies;
        });

        $scope.keyword = '';
        $scope.searchCriteria = {};
        $scope.searchKeys = [
        {
            key:"Title",
            label:"Titulo"
        },
        {
            key:"Genre",
            label:"Genero"
        },
        {
            key:"Year",
            label:"Año"
        }
        ]

        $scope.$watch('keyword',function(newVal) {

            if (!newVal) {
                $scope.Movies = $scope.MoviesDB;
            }else{
                $scope.search(newVal);
            }
        });

        $scope.search = function(keyword) {
            var searchKey = $scope.searchCriteria.key;
            angular.forEach($scope.MoviesDB, function(movie, key) {
                for(prop in movie){
                    console.log(prop);
                    if (prop == searchKey) {

                    }
                }
            });
        }

	}]);
}).call(this);

