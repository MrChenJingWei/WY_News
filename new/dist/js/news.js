angular.module('news', ['ui.router'])
    .controller('NewsController', ['$scope', '$http', '$state', function ($scope, $http, $state) {

            $http({
                method: 'jsonp',
                url: 'http://localhost:5555?myUrl=' + 'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html' + '&callback=JSON_CALLBACK'
            }).then(function success(result) {
                result = result.data;
                result = result.T1348647853363;
                result.splice(0,1);
                $scope.newsObj.newList = result;
                console.log(result);
            },function error(e) {
                console.log(e)
            });


        $scope.newsObj = {

            newList: [],
            goToNewsDetail:function () {
                $state.go('tab.news_detail')
            }

        }


    }]);