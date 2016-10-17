(function () {
    angular
        .module('app')
        .controller('appCtrl', ctrl);

    ctrl.$inject = ['$scope', '$localStorage', '$filter'];
    function ctrl($scope, $localStorage, $filter) {
        var vm = this;
    }
})();