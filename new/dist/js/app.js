/**
 * Created by qingyun2 on 16/10/24.
 */
angular.module('myApp',['ui.router','tab','news'])
    .config(['$stateProvider', '$urlRouterProvider', function ($state, $urlRouter) {
        $state
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'tab.html'
            })
            .state('tab.news',{
                url:'/news',
                templateUrl:'news.html',
                controller:"NewsController"
            })
            .state('tab.recommend',{
                url:'/recommend',
                templateUrl:'recommend.html'
            })
            .state('tab.news_detail',{
                url:'/news_detail',
                templateUrl:'news_detail.html'
            })
        ;
        $urlRouter.otherwise('tab/news')
    }]);
