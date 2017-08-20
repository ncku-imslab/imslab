var fs = require("fs");

module.exports= function (hbs) {
  hbs.registerPartial('head', getPartials('head'));
  hbs.registerPartial('header', getPartials('header'));
  hbs.registerPartial('footer', getPartials('footer'));

  hbs.registerHelper('replaceBlank', function(string) {
    return new hbs.SafeString(string.replace(/ /g,'-'));
  });

  hbs.registerHelper('ifCond', function (v1, operator, v2, options) {
    switch (operator) {
      case '==':
        return (v1 == v2) ? options.fn(this) : options.inverse(this);
      case '===':
        return (v1 === v2) ? options.fn(this) : options.inverse(this);
      case '!=':
        return (v1 != v2) ? options.fn(this) : options.inverse(this);
      case '!==':
        return (v1 !== v2) ? options.fn(this) : options.inverse(this);
      case '<':
        return (v1 < v2) ? options.fn(this) : options.inverse(this);
      case '<=':
        return (v1 <= v2) ? options.fn(this) : options.inverse(this);
      case '>':
        return (v1 > v2) ? options.fn(this) : options.inverse(this);
      case '>=':
        return (v1 >= v2) ? options.fn(this) : options.inverse(this);
      case '&&':
        return (v1 && v2) ? options.fn(this) : options.inverse(this);
      case '||':
        return (v1 || v2) ? options.fn(this) : options.inverse(this);
      case '%':
        return (v1 % v2) ? options.fn(this) : options.inverse(this);
      case '!%':
        return (v1 % v2) ? options.inverse(this) : options.fn(this);
      case '!+%':
        return ((v1+1) % v2) ? options.inverse(this) : options.fn(this);
      default:
        return options.inverse(this);
    }
  });

  hbs.registerHelper("getLang", function(member, key) {
    /* for grade titles */
    const grades_en = ["Previous", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"];
    const grades_zh = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    const year1 = parseInt(key.substring(1));
    const year3 = parseInt(key.substring(3));
    if (key[0] === 'b') {
      if(member.lang === 'en') return "Graduate in " + (year1 + 1911);
      else return year1 + " 級";
    } else if (key.substring(0,3) == "gra") {
      if(member.lang === 'en') return "Graduate in " + (year3 + 1911);
      else return year3 + " 年畢";
    } else if (key[0] === 'm') {
      if(member.lang === 'en') return grades_en[year1] + " year";
      else return "碩" + grades_zh[year1];
    } else if (key[0] === 'p') {
      if(member.lang === 'en') return grades_en[year1] + " year";
      else return "博" + grades_zh[year1];
    }
    return member[key];
  });
};

function getPartials(filename) {
  var template = fs.readFileSync('./layout/'+filename+'.html', 'utf8');
  template = template.replace(/[\t\n]/g, '');
  return template;
}

