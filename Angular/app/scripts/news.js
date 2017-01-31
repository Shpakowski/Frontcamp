'use strict';

class NewsController {
    constructor($http) {
        this.$http = $http;
        this.url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=1107f2407bac441fb648b733408dd11f';
        this.articles = [];
    }

    $onInit() {
        this.$http.get(this.url).then(response => {
            this.articles = response.data.articles;
        }, () => {
            console.log('Error');
        });
    }
}

(function(angular) {
    angular
    .module('microApp', [])
    .component('news', {
        template: `<div class="news_block" ng-repeat="item in $ctrl.articles">
            <img ng-src="{{item.urlToImage}}" alt="{{item.title}}" class="news_block__img">
            <h2 class="news_block__title">{{item.title}}</h2>
            <p class="news_block__description">
               {{item.description}}
            </p>
            <div class="news_block__footer">
                <span class="news_block__author">&copy; {{item.author}}</span>
                <a class="news_block__more-link" title="{{item.title}}" ng-href="{{item.url}}" target="_blank">More ...</a>
        </div>`,
        controller: NewsController
  });
})(window.angular);