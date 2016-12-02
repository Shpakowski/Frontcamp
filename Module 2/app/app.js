'use strict'

import './news/style.scss'

import CreatePage from './news/createPage'
import GetData from './news/getData'

let getData = new GetData();
let createPage = new CreatePage();

getData.httpGet('https://newsapi.org/v1/articles?source=bbc-news&apiKey=1107f2407bac441fb648b733408dd11f')
    .then( function(response) {
        createPage.parseResults(JSON.parse(response));
    }, function (error) {
        console.log(error);
    });
