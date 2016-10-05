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

        vm.scores = [
            {
                type: 'listening',
                name: '听力',
                arr: [
                    {
                        score: 0,
                        range: {
                            min: 0,
                            max: 0
                        }
                    },
                    {
                        score: 1,
                        range: {
                            min: 1,
                            max: 1
                        }
                    },
                    {
                        score: 2,
                        range: {
                            min: 2,
                            max: 2
                        }
                    },
                    {
                        score: 2.5,
                        range: {
                            min: 3,
                            max: 3
                        }
                    },
                    {
                        score: 3,
                        range: {
                            min: 4,
                            max: 5
                        }
                    },
                    {
                        score: 3.5,
                        range: {
                            min: 6,
                            max: 9
                        }
                    },
                    {
                        score: 4,
                        range: {
                            min: 10,
                            max: 12
                        }
                    },
                    {
                        score: 4.5,
                        range: {
                            min: 13,
                            max: 15
                        }
                    },
                    {
                        score: 5,
                        range: {
                            min: 16,
                            max: 19
                        }
                    },
                    {
                        score: 5.5,
                        range: {
                            min: 20,
                            max: 22
                        }
                    },
                    {
                        score: 6,
                        range: {
                            min: 23,
                            max: 26
                        }
                    },
                    {
                        score: 6.5,
                        range: {
                            min: 27,
                            max: 29
                        }
                    },
                    {
                        score: 7.0,
                        range: {
                            min: 30,
                            max: 32
                        }
                    },
                    {
                        score: 7.5,
                        range: {
                            min: 33,
                            max: 34
                        }
                    },
                    {
                        score: 8,
                        range: {
                            min: 35,
                            max: 36
                        }
                    },
                    {
                        score: 8.5,
                        range: {
                            min: 37,
                            max: 38
                        }
                    },
                    {
                        score: 9,
                        range: {
                            min: 39,
                            max: 40
                        }
                    }
                ]
            },
            {
                type: 'a-reading',
                name: '阅读（A类）',
                arr: [
                    {
                        score: 0,
                        range: {
                            min: 0,
                            max: 0
                        }
                    },
                    {
                        score: 1,
                        range: {
                            min: 1,
                            max: 1
                        }
                    },
                    {
                        score: 2,
                        range: {
                            min: 2,
                            max: 2
                        }
                    },
                    {
                        score: 2.5,
                        range: {
                            min: 3,
                            max: 3
                        }
                    },
                    {
                        score: 3,
                        range: {
                            min: 4,
                            max: 5
                        }
                    },
                    {
                        score: 3.5,
                        range: {
                            min: 6,
                            max: 9
                        }
                    },
                    {
                        score: 4,
                        range: {
                            min: 10,
                            max: 12
                        }
                    },
                    {
                        score: 4.5,
                        range: {
                            min: 13,
                            max: 15
                        }
                    },
                    {
                        score: 5,
                        range: {
                            min: 16,
                            max: 19
                        }
                    },
                    {
                        score: 5.5,
                        range: {
                            min: 20,
                            max: 22
                        }
                    },
                    {
                        score: 6,
                        range: {
                            min: 23,
                            max: 26
                        }
                    },
                    {
                        score: 6.5,
                        range: {
                            min: 27,
                            max: 29
                        }
                    },
                    {
                        score: 7.0,
                        range: {
                            min: 30,
                            max: 32
                        }
                    },
                    {
                        score: 7.5,
                        range: {
                            min: 33,
                            max: 34
                        }
                    },
                    {
                        score: 8,
                        range: {
                            min: 35,
                            max: 36
                        }
                    },
                    {
                        score: 8.5,
                        range: {
                            min: 37,
                            max: 38
                        }
                    },
                    {
                        score: 9,
                        range: {
                            min: 39,
                            max: 40
                        }
                    }
                ]
            },
            {
                type: 'g-reading',
                name: '阅读（G类）',
                arr: [
                    {
                        score: 0,
                        range: {
                            min: 0,
                            max: 0
                        }
                    },
                    {
                        score: 1,
                        range: {
                            min: 1,
                            max: 1
                        }
                    },
                    {
                        score: 2,
                        range: {
                            min: 2,
                            max: 4
                        }
                    },
                    {
                        score: 2.5,
                        range: {
                            min: 5,
                            max: 7
                        }
                    },
                    {
                        score: 3,
                        range: {
                            min: 8,
                            max: 11
                        }
                    },
                    {
                        score: 3.5,
                        range: {
                            min: 12,
                            max: 14
                        }
                    },
                    {
                        score: 4,
                        range: {
                            min: 15,
                            max: 16
                        }
                    },
                    {
                        score: 4.5,
                        range: {
                            min: 19,
                            max: 22
                        }
                    },
                    {
                        score: 5,
                        range: {
                            min: 23,
                            max: 25
                        }
                    },
                    {
                        score: 5.5,
                        range: {
                            min: 26,
                            max: 29
                        }
                    },
                    {
                        score: 6.0,
                        range: {
                            min: 30,
                            max: 31
                        }
                    },
                    {
                        score: 6.5,
                        range: {
                            min: 32,
                            max: 33
                        }
                    },
                    {
                        score: 7,
                        range: {
                            min: 34,
                            max: 35
                        }
                    },
                    {
                        score: 7.5,
                        range: {
                            min: 36,
                            max: 37
                        }
                    },
                    {
                        score: 8,
                        range: {
                            min: 38,
                            max: 38
                        }
                    },
                    {
                        score: 8.5,
                        range: {
                            min: 39,
                            max: 39
                        }
                    },
                    {
                        score: 9,
                        range: {
                            min: 40,
                            max: 40
                        }
                    }
                ]
            }
        ];

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

        vm.range = function(min, max, step) {
            step = step || 1;
            var input = [];
            for (var i = min; i <= max; i += step) {
                input.push(i);
            }
            return input;
        };
    }
})();