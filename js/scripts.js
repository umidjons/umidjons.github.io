angular.module('Site', ['ngRoute', 'ngSanitize', 'angularUtils.directives.dirPagination'])
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
                $http.get('/js/gistsHtml.json').success(callback);
            }
        }
    })
    .controller('HomeCtrl', function ($scope, $sce, Gist) {
        $scope.pagination = {
            current: 1,
            itemsPerPage: 10
        };
        $scope.gists = [];
        Gist.query(function (resp) {
            $scope.gists = resp;
        });

        $scope.openContent = function (gist) {
            $scope.gists.map(function (g) {
                if (angular.equals(g, gist)) {
                    gist.show = !gist.show;
                    gist.html_secure = $sce.trustAsHtml(gist.html);
                } else {
                    g.show = false;
                }
            });
        }
    })
    .controller('AboutCtrl', function ($scope) {

    });