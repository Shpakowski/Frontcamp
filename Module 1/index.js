'use strict';

class CreatePage {
    httpGet(url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = function() {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            };

            xhr.onerror = function() {
                reject(new Error("Network Error"));
            };

            xhr.send();
        });
    }

    parseResults (response) {
        let elem,
            date,
            data = response.articles,
            constainer = document.querySelector('.news_wrapper');

        data.forEach(function(item) {
            date = item.publishedAt.split('T');
            elem = document.createElement('div');
            elem.className = 'news_block';
            elem.innerHTML = `<img src="${item.urlToImage}" 
                alt="${item.title}" class="news_block__img">
                <h2 class="news_block__title">${item.title}</h2>
                <p class="news_block__description">
                    ${item.description}
                </p>
                <div class="news_block__footer">
                <span class="news_block__author">&copy; ${item.author}</span>
                <span class="news_block__date">Date: ${date[0]}</span>
                <a class="news_block__more-link" title="${item.title}" href="${item.url}" target="_blank">More ...</a>
            </div>`;
            constainer.appendChild(elem);
        });
    }
}

let getData = new CreatePage();

getData.httpGet('https://newsapi.org/v1/articles?source=bbc-news&apiKey=1107f2407bac441fb648b733408dd11f')
.then( function(response) {
    getData.parseResults(JSON.parse(response));
}, function (error) {
    console.log(error);
});