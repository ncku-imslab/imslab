var path = require('path');
var url = require('url');
var news = require('./data/news.json');
var projects = require('./data/projects.json');

route = [
  {
    data: {
      "title": "IMS Lab",
      "menu_home": true,
      "news": news,
      "baseUrl": "./"
    },
    "partials": './partials.js',
    "layout":  "./view/index.hbs",
    "filename": "./docs/index.html"
  },
  {
    data: {
      "title": "研究 - IMS Lab",
      "menu_research": true,
      "projects": projects,
      "baseUrl": "../"
    },
    "partials": './partials.js',
    "layout":  "./view/research.hbs",
    "filename": "./docs/research/index.html"
  },
  {
    data: {
      "title": "指導教授 - IMS Lab",
      "menu_member": true,
      "baseUrl": "../../"
    },
    "partials": './partials.js',
    "layout":  "./view/member/professor.hbs",
    "filename": "./docs/member/professor/index.html"
  }
];

module.exports = route;
