angular.module('Site', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            })
            .when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .factory('Gist', function ($http) {
        return {
            query: function (callback) {
                $http.get('/js/gists.json').success(callback);
            }
        }
    })
    .controller('HomeCtrl', function ($scope, Gist) {
        $scope.gists = [];
        Gist.query(function (resp) {
            $scope.gists = resp;
        });
    })
    .controller('AboutCtrl', function ($scope) {

    });