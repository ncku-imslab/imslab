var path = require('path');
var url = require('url');
var menu = require('./data/zh-TW/menu.json');
var home = require('./data/zh-TW/home.json');
var news = require('./data/news.json');
var research = require('./data/zh-TW/research.json');
var projects = require('./data/projects.json');
var member = require('./data/zh-TW/member.json');
var members = require('./data/members.json');
var honor = require('./data/zh-TW/honor.json');
var honors = require('./data/honors.json');
var resource = require('./data/zh-TW/resource.json');
var conf = require('./data/conference.json');
var contact = require('./data/zh-TW/contact.json');

route = [
  {
    data: {
      "url": "",
      "title": "IMS Lab",
      "menu_home": true,
      "menu": menu,
      "home": home,
      "news": news,
      "baseUrl": "./"
    },
    "partials": './partials.js',
    "layout":  "./view/home.hbs",
    "filename": "./docs/index.html"
  },
  { // home page in /cht directory (to solve cache problem)
    data: {
      "url": "",
      "title": "IMS Lab",
      "menu_home": true,
      "menu": menu,
      "home": home,
      "news": news,
      "baseUrl": "../"
    },
    "partials": './partials.js',
    "layout":  "./view/home.hbs",
    "filename": "./docs/cht/index.html"
  },
  {
    data: {
      "url": "research",
      "title": "研究 - IMS Lab",
      "menu_research": true,
      "menu": menu,
      "research": research,
      "projects": projects,
      "baseUrl": "../"
    },
    "partials": './partials.js',
    "layout":  "./view/research.hbs",
    "filename": "./docs/research/index.html"
  },
  {
    data: {
      "url": "member/professor",
      "title": "指導教授 - IMS Lab",
      "menu_member": true,
      "menu": menu,
      "member": member,
      "baseUrl": "../../"
    },
    "partials": './partials.js',
    "layout":  "./view/member/professor.hbs",
    "filename": "./docs/member/professor/index.html"
  },
  {
    data: {
      "url": "member/student",
      "title": "學生 - IMS Lab",
      "menu_member": true,
      "menu": menu,
      "member": member,
      "baseUrl": "../../",
      "members": members.students
    },
    "partials": './partials.js',
    "layout":  "./view/member/member.hbs",
    "filename": "./docs/member/student/index.html"
  },
  {
    data: {
      "url": "member/alumni",
      "title": "學成下山 - IMS Lab",
      "menu_member": true,
      "menu": menu,
      "member": member,
      "baseUrl": "../../",
      "members": members.alumni
    },
    "partials": './partials.js',
    "layout":  "./view/member/member.hbs",
    "filename": "./docs/member/alumni/index.html"
  },
  {
    data: {
      "url": "honor",
      "title": "榮譽 - IMS Lab",
      "menu_honor": true,
      "menu": menu,
      "honor": honor,
      "baseUrl": "../",
      "honors": honors
    },
    "partials": './partials.js',
    "layout":  "./view/honor.hbs",
    "filename": "./docs/honor/index.html"
  },
  {
    data: {
      "url": "resource",
      "title": "相關資源 - IMS Lab",
      "menu_resource": true,
      "menu": menu,
      "resource": resource,
      "baseUrl": "../",
      "conf": conf
    },
    "partials": './partials.js',
    "layout":  "./view/resource.hbs",
    "filename": "./docs/resource/index.html"
  },
  {
    data: {
      "url": "contact",
      "title": "聯絡我們 - IMS Lab",
      "menu_contact": true,
      "menu": menu,
      "contact": contact,
      "baseUrl": "../"
    },
    "partials": './partials.js',
    "layout":  "./view/contact.hbs",
    "filename": "./docs/contact/index.html"
  }
];

module.exports = route;
