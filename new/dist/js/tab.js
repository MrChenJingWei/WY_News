/**
 * Created by qingyun2 on 16/10/26.
 */
angular.module('tab', [])
    .controller('tabBarController', ['$scope', function ($scope) {
        $scope.tabList = {
            listArr: [
                {demo: '推荐',Durl:".recommend"},
                {demo: '新闻',Durl:".news"},
                {demo: '音乐',Durl:".music"},
                {demo: '星座',Durl:".constellation"},
                {demo: '小说',Durl:".novel"},
                {demo: '家居',Durl:".homeway"},
                {demo: '旅游',Durl:".tour"},
                {demo: '亲子',Durl:".kids"},
                {demo: '笑话',Durl:".joke"},
                {demo: '游戏',Durl:".game"}
            ]
        }
    }]);