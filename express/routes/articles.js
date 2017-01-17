var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var nconf = require('nconf');
var resData;
nconf.argv()
    .env()
    .file({ file: './config.json' });

var connectionConf = nconf.get('database');

var data1 = {
    author: 'Shpakich1',
    title: 'Охеренная новость1',
    body: '1Все мы очень скоро умрем, вот так вот!!!!!',
    image: 'https://img.tyt.by/620x620s/n/zamirovskiy/0e/10/2_novye_dengi_denominaciya_zam_tutby_phsl_28062016.jpg',
}

var data2 = {
    author: 'Shpakich2',
    title: 'Охеренная новость2',
    body: '2Все мы очень скоро умрем, вот так вот!!!!!',
    image: 'https://t.championat.com/s/480x360/news/big/1481893622901835819.jpg',
}

var data3 = {
    author: 'Shpakich3',
    title: 'Охеренная новость3',
    body: '3Все мы очень скоро умрем, вот так вот!!!!!',
    image: 'https://t.championat.com/s/480x360/news/big/14819681351431207870.jpg',
}

console.log(connectionConf);
mongoose.connect(connectionConf);

//Articles Schema
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ArticleSchema = new Schema({
    author    : {type: String, match: /[a-z]/, maxlength: 200, default: 'Unknown'},
    title     : {type: String, maxlength: 300, default: 'Not available'},
    body      : {type: String, maxlength: 2000, default: 'Not available'},
    image     : {type: String, default: ''},
    date      : { type: Date, default: Date.now }
});

var Article = mongoose.model('Article', ArticleSchema);

/*[data1,data2,data3].forEach(function(item) {
    var instance = new Article(item);

    instance.save(function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('good');
        }
    }) 
});*/

Article.find({}, function(err, data) {
    if(err) {
        console.log(err);
    } else {
        //console.log(data);
        resData = data;
    }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    var params = req.query;
    console.log(params);
    res.json(resData);
});


/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req);
    var params = req.body;    
    if(params.author || params.title || params.body) {
        var instance = new Article({
            author: params.author,
            title: params.title,
            body: params.body,
            image: params.image
        });

        instance.save(function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log('good');
            }
        });
    }
    res.render('index', { title: 'articles',  data: resData });
});

module.exports = router;
