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
            .when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'ContactCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .factory('Gist', function () {
        return {
            query: function () {
                return [
                    {
                        url: 'https://gist.github.com/umidjons/47f616867cf35592512e4c52a9259fc6',
                        title: 'Simple Microservice with Seneca and Express'
                    },
                    {
                        url: 'https://gist.github.com/umidjons/30fe9558b5dff6558a91a5d46b6abd00',
                        title: 'Using readline module'
                    },
                    {
                        url: 'https://gist.github.com/umidjons/c136e7d036af2d7fb8d012401d8d8187',
                        title: 'Testing Express app with Mocha & Expect.js'
                    }
                ];
            }
        }
    })
    .controller('HomeCtrl', function ($scope, Gist) {
        $scope.gists = Gist.query();
    })
    .controller('AboutCtrl', function ($scope) {

    })
    .controller('ContactCtrl', function ($scope) {
        
    });