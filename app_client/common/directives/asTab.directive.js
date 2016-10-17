(function () {
    // http://stackoverflow.com/a/26296273
    angular
        .module('app')
        .directive('enterAsTab', directive);

    function directive() {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13 || event.which === 32) {
                    event.preventDefault();
                    var elementToFocus = element.next('div[data-type=word]').find('input[type=text]')[0];
                    if(angular.isDefined(elementToFocus)) {
                        elementToFocus.focus();
                    } else {
                        elementToFocus = element.next('div').next('div[data-type=word]').find('input[type=text]')[0];
                        if(angular.isDefined(elementToFocus)) {
                            elementToFocus.focus();
                        }
                    }
                    //
                    // var inputs = element.closest('.panel').find(':input');
                    // // console.log(element.closest('div[data-type=word]'));
                    // console.log(element.next('div'));
                    // console.log(element.next('div').next('div[data-type=word]'));
                    // console.log(element.next('div[data-type=word]'));
                    // console.log(element.closest('div[data-type=word]').find('input')[0]);
                    // console.log(element.next('div[data-type=word]').find('input')[0]);
                    // // inputs.eq( inputs.index(this)+ 1 ).focus();
                }
                console.log(event.which);
            });
        };
    }

})();
