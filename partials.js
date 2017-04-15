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
    return member[key];
  });
};

function getPartials(filename) {
  var template = fs.readFileSync('./layout/'+filename+'.html', 'utf8');
  template = template.replace(/[\t\n]/g, '');
  return template;
}
