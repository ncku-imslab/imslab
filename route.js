var path = require('path');
var url = require('url');
var news = require('./data/news.json');

route = [
  {
    data: {
      "title": "IMS Lab",
      "news": news
    },
    "partials": './partials.js',
    "layout":  "./view/index.hbs",
    "filename": "./docs/index.html"
  }
];

module.exports = route;
