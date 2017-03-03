var path = require('path');
var url = require('url');
var menu = require('./data/en/menu.json');
var news = require('./data/zh-TW/news.json');
var projects = require('./data/zh-TW/projects.json');
var members = require('./data/members.json');
var honors = require('./data/zh-TW/honors.json');
var conf = require('./data/conference.json');

route = [
  {
    data: {
      "url": "",
      "title": "IMS Lab",
      "menu_home": true,
      "menu": menu,
      "news": news,
      "baseUrl": "../",
      "lang": "en/"
    },
    "partials": './partials.js',
    "layout":  "./view/index.hbs",
    "filename": "./docs/en/index.html"
  },
  {
    data: {
      "url": "research",
      "title": "Research - IMS Lab",
      "menu_research": true,
      "menu": menu,
      "projects": projects,
      "baseUrl": "../../",
      "lang": "en/"
    },
    "partials": './partials.js',
    "layout":  "./view/research.hbs",
    "filename": "./docs/en/research/index.html"
  },
  {
    data: {
      "url": "member/professor",
      "title": "Professor - IMS Lab",
      "menu_member": true,
      "menu": menu,
      "baseUrl": "../../../",
      "lang": "en/"
    },
    "partials": './partials.js',
    "layout":  "./view/member/professor.hbs",
    "filename": "./docs/en/member/professor/index.html"
  },
  {
    data: {
      "url": "member/student",
      "title": "Students - IMS Lab",
      "menu_member": true,
      "menu": menu,
      "baseUrl": "../../../",
      "lang": "en/",
      "members": members.students
    },
    "partials": './partials.js',
    "layout":  "./view/member/member.hbs",
    "filename": "./docs/en/member/student/index.html"
  },
  {
    data: {
      "url": "member/alumni",
      "title": "Alumni - IMS Lab",
      "menu_member": true,
      "menu": menu,
      "baseUrl": "../../../",
      "lang": "en/",
      "members": members.alumni
    },
    "partials": './partials.js',
    "layout":  "./view/member/member.hbs",
    "filename": "./docs/en/member/alumni/index.html"
  },
  {
    data: {
      "url": "honor",
      "title": "Honors - IMS Lab",
      "menu_honor": true,
      "menu": menu,
      "baseUrl": "../../",
      "lang": "en/",
      "honors": honors
    },
    "partials": './partials.js',
    "layout":  "./view/honor.hbs",
    "filename": "./docs/en/honor/index.html"
  },
  {
    data: {
      "url": "resource",
      "title": "Resource - IMS Lab",
      "menu_resource": true,
      "menu": menu,
      "baseUrl": "../../",
      "lang": "en/",
      "conf": conf
    },
    "partials": './partials.js',
    "layout":  "./view/resource.hbs",
    "filename": "./docs/en/resource/index.html"
  },
  {
    data: {
      "url": "contact",
      "title": "Contact - IMS Lab",
      "menu_contact": true,
      "menu": menu,
      "baseUrl": "../../",
      "lang": "en/"
    },
    "partials": './partials.js',
    "layout":  "./view/contact.hbs",
    "filename": "./docs/en/contact/index.html"
  }
];

module.exports = route;
