var path = require('path');
var url = require('url');

route = [
  {
    data: {
      "title": "IMS Lab"
    },
    "partials": './partials.js',
    "layout":  "./view/index.hbs",
    "filename": "./docs/index.html"
  }
];

module.exports = route;
