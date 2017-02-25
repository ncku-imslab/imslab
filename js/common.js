var nav, navTop;

(function() {
  nav = document.getElementsByClassName("nav-tabs")[0];
  if(typeof nav === "undefined") 
    nav = document.getElementsByClassName("navbar")[0];
  else
    nav.addEventListener('click', navClick, false);
  navTop = nav.offsetTop;

  var lists = document.getElementsByClassName("enableOpen");
  for(var i=0; i<lists.length; ++i) 
    lists[i].addEventListener("click", toggleList, false);
})();

$(window).bind("scroll", function() {
  var offset = $(document).scrollTop();
  if(offset > navTop) nav.addClass("navbar-fixed-top");
  else nav.removeClass("navbar-fixed-top");
});

function scrollTo(id) {
  var body = $("html, body");
  var idTop = document.getElementById(id).offsetTop;
  body.stop().animate({scrollTop: idTop - 82}, '500', 'swing');
  return false;
}

function toggleList(e) {
  if(e.target.tagName.toUpperCase() === "LI") {
    var id = e.target.id;
    if(id.indexOf("list-")===0) {
      var num = id.substr(5);
      var content = document.getElementById("content-"+num);
      if(content) content.toggleClass("active");
    }
  }
}

function navClick(e) {
  if(e.target.tagName.toUpperCase() === "A") {
    var id = e.target.getAttribute("href").substr(1);
    var act = e.currentTarget.getElementsByClassName("active");
    for(var i=0; i<act.length; ++i) act[i].removeClass("active");
    e.target.parentElement.addClass("active");
    scrollTo(id);
  }
}

Element.prototype.toggleClass = function(name) {
  if(this.hasClass(name)) return this.removeClass(name);
  return this.addClass(name);
}

Element.prototype.removeClass = function(name) {
  if(!this.hasClass(name)) return this;
  this.className = this.className.replace(new RegExp('(?:^|\\s)' + name + '(?:\\s|$)'), ' ');
  return this;
};

Element.prototype.addClass = function(name) {
  if(!this.hasClass(name))
    this.className += (" "+name);
  return this;
};

Element.prototype.hasClass = function(name) {
  if(this.className.indexOf(name) !== -1) return true;
  else return false;
};

