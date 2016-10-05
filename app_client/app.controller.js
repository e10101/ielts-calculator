(function () {
    angular
        .module('app')
        .controller('appCtrl', ctrl);

    ctrl.$inject = ['$scope', '$localStorage'];
    function ctrl($scope, $localStorage) {
        var vm = this;
        vm.info = {
            title: '雅思分数计算器 - IELTS Band Score Calculator',
            domain: 'ielts.sjz.io',
            company: {
                name: '',
                link: '',
                depart: {
                    name: ''
                }
            },
            creator: {
                name: '勇创程序工作室',
                link: 'http://sjz.io/'
            }
        };
        vm.isFullFilled = false;
        vm.resultScore = null;
        vm.items = $localStorage.$default({
            arr: [
                {
                    type: 'listening',
                    name: '听力',
                    placeholder: 'Listening',
                    score: null
                }
                ,
                {
                    type: 'reading',
                    name: '阅读',
                    placeholder: 'Reading',
                    score: null
                },
                {
                    type: 'writing',
                    name: '写作',
                    placeholder: 'Writing',
                    score: null
                },
                {
                    type: 'speaking',
                    name: '口语',
                    placeholder: 'Speaking',
                    score: null
                }
            ]
        });

        $scope.$watch(
            function () {
                return vm.items;
            },
            function (nv, ov) {
                console.log('vm.items changed', nv);
                var isFullFilled = true;
                nv.arr.forEach(function(item) {
                    if (item.score === null) {
                        isFullFilled = false;
                    }
                });
                vm.isFullFilled = isFullFilled;
                vm.resultScore = isFullFilled ? vm.resultScore : null;
            },
            true
        );

        vm.calculate = function () {
            var sum = 0;
            vm.items.arr.forEach(function (item) {
                sum += item.score;
            });
            vm.resultScore = sum / 4;

            var str = "我的雅思总分[" + vm.resultScore + "] - 雅思分数计算器 - ";
            vm.items.arr.forEach(function(item) {
                str += item.name + ":" + item.score + "/";
            });
            str += vm.info.domain;

            vm.info.title = str;
        };
    }
})();