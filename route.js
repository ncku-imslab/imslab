var path = require('path');
var url = require('url');
var news = require('./data/news.json');
var projects = require('./data/projects.json');
var members = require('./data/members.json');
var honors = require('./data/honors.json');

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
  },
  {
    data: {
      "title": "學生 - IMS Lab",
      "menu_member": true,
      "baseUrl": "../../",
      "members": members.students
    },
    "partials": './partials.js',
    "layout":  "./view/member/member.hbs",
    "filename": "./docs/member/student/index.html"
  },
  {
    data: {
      "title": "學生 - IMS Lab",
      "menu_member": true,
      "baseUrl": "../../",
      "members": members.alumni
    },
    "partials": './partials.js',
    "layout":  "./view/member/member.hbs",
    "filename": "./docs/member/alumni/index.html"
  },
  {
    data: {
      "title": "榮譽 - IMS Lab",
      "menu_honor": true,
      "baseUrl": "../",
      "honors": honors
    },
    "partials": './partials.js',
    "layout":  "./view/honor.hbs",
    "filename": "./docs/honor/index.html"
  }
];

module.exports = route;
