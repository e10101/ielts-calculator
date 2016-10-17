(function () {
    angular
        .module('app', ['ngStorage', 'ui.router']);

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('listening', {
                url: '/listening',
                templateUrl: '/partials/listening/listening.view.html',
                controller: 'listeningCtrl as vm'
            })
            .state('calculator', {
                url: '/',
                templateUrl: '/partials/calculator/calculator.view.html',
                controller: 'calculatorCtrl as vm'
            });


        $urlRouterProvider.otherwise('/');

        // use the HTML5 History API
        // $locationProvider.html5Mode(true);
    }

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', config]);
})();

