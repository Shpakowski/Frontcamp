'use strict'

export default class {
    parseResults (response) {
        let elem,
            date,
            data = response.articles,
            constainer = document.querySelector('.news_wrapper');

        data.forEach(function(item) {
            date = item.publishedAt ? item.publishedAt.split('T') : '';
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