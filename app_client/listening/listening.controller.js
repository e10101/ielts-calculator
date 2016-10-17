(function () {
    angular
        .module('app')
        .controller('listeningCtrl', ctrl);

    ctrl.$inject = [];
    function ctrl() {
        var vm = this;

        vm.pageHeader = {
            title: '双拼在线练习',
            subtitle: 'typing.sjz.io',
            content:
            // '<p>还在编写过程中,编写过程在panda.tv直播. 直播地址:<a target="_blank" href="http://www.panda.tv/427273">http://www.panda.tv/427273</a></p>' +
            '<p>目前应用还在编写过程中……</p>' +
            '<p>交流贴： <a href="http://tieba.baidu.com/p/4609950818">百度小鹤双拼吧</a> / <a href="http://tieba.baidu.com/p/4609935833">百度双拼吧</a></p>' +
            '<p>在线练习（开发中）：<a href="#article">小鹤双拼在线练习</a></p>' +
            '<p>如有任何建议或者意见，可以通过邮箱联系我：<a href="mailto:typing@sjz.io">typing@sjz.io</a> </p>' +
            '<p>本应用由<a href="http://sjz.io">勇创软件工作室</a>开发</p>'
        };

        vm.content= "Well now, once the problem of projection had been solved, the next challenge for the inventors was to make the films longer and more interesting. A continuing problem at the time was that the films had a tendency to break when they were being played - a problem which was caused by the tension between the two wheels, or 'reels' as they are called, which hold the film. Now this problem was solved by two American brothers. They developed the 'Lantham Loop', which was the simple addition of a third reel between the two main reels, and this took all the tension away with the result that the film stopped snapping.";
        vm.isShowContent = true;
        vm.items = [];

        vm.convert = function(content) {
            // var items = content.split(/\s*\b\s*/);
            //
            // vm.items = items;

            var items = [], matches;
            var regex = /([a-zA-Z]+)([^a-zA-Z]*)/g;

            var matches2 = content.match(regex);
            console.log('matches', matches2);
            while (matches = regex.exec(content)) {
                // console.log('xx', matches);
                var word = matches[1];
                var punctuation = matches[2];
                items.push({
                    type: 'word',
                    val: word
                });
                if (punctuation !== '' && punctuation !== ' ') {
                    console.log(punctuation);
                    items.push({
                        type: 'punctuation',
                        val: punctuation
                    });
                }
            }

            console.log(items);
            vm.items = items;
        };
    }

})();