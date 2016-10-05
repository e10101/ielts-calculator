(function () {
    // Ref: http://stackoverflow.com/a/32649448/4288118
    angular
        .module('app')
        .filter('score', filter);

    function filter() {
        return function (value) {
            var result = Math.floor(value);
            var part = value % 1;
            if (part >= 0.75) {
                result += 1;
            } else if (part >= 0.25) {
                result += 0.5;
            } else {
                result += 0;
            }
            return result;
        };
    }

})();