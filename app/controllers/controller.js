(function() {
 app.controller('homeController', ["$scope","$http",function($scope,$http) {

    $scope.Movies = [];
    $scope.MoviesDB = [];
    $http.get("json/jsonmovies.json").then(function(r) {
        $scope.MoviesDB = r.data.Movies;
        $scope.Movies = $scope.MoviesDB;
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
    ];

    $scope.validateSearch = function(newVal) {

        if (!newVal) {
            $scope.Movies = $scope.MoviesDB;
        }else if (newVal.length > 2){
            $scope.search(newVal);
        }
    }

    $scope.$watch('keyword',$scope.validateSearch);
    $scope.$watch('searchCriteria.key',function(newVal) {
        console.log(newVal);
        $scope.validateSearch($scope.keyword);
    });

    $scope.search = function(keyword) {
        var searchKey = $scope.searchCriteria.key;
        $scope.Movies = [];
        angular.forEach($scope.MoviesDB, function(movie, key) {
            for(prop in movie){
                console.log(prop);
                if (prop == searchKey && movie[prop].toLowerCase().includes(keyword.toLowerCase())) {
                    $scope.Movies.push(movie);
                }
            }
        });
    }

}]);
}).call(this);

