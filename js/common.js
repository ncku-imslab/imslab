var nav, navTop, hasTabs = false;

(function() {
  nav = document.getElementsByClassName("nav-tabs")[0];
  if(typeof nav === "undefined") 
    nav = document.getElementsByClassName("navbar")[0];
  else {
    nav.addEventListener('click', navClick, false);
    hasTabs = true;
  }
  navTop = nav.offsetTop;

  var lists = document.getElementsByClassName("enableOpen");
  for(var i=0; i<lists.length; ++i) 
    lists[i].addEventListener("click", toggleList, false);
})();

$(window).bind("scroll", function() {
  var offset = $(document).scrollTop();
  if(offset > navTop) nav.addClass("navbar-fixed-top");
  else nav.removeClass("navbar-fixed-top");

  if(hasTabs) {
    var tabs = nav.getElementsByTagName("A");
    for(var i=0; i<tabs.length; ++i) {
      if(tabs[i].parentElement.hasClass("toTop")) continue;
      var id = tabs[i].getAttribute("href").substr(1);
      id = document.getElementById(id);
      var pos = id.offsetTop + id.offsetHeight - 82;
      if(offset <= pos) {
        if(!tabs[i].parentElement.hasClass("active")) {
          var act = nav.getElementsByClassName("active");
          if(act.length) act[0].removeClass("active");
          tabs[i].parentElement.addClass("active");
        }
        break;
      } 
    }
  }
});

window.onload = function () {
  var hash = window.location.hash;
  if(hash.length > 0 && hash.indexOf("#go-")!==-1 ) {
    hash = hash.substring(4);
    scrollTo(hash);
    eventFire(document.getElementById(hash),"click");
  }
}

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
      if(content) {
        e.target.toggleClass("active");
        content.toggleClass("active");
        window.location.hash = "go-"+id;
      }
    }
  }
}

function navClick(e) {
  if(e.target.tagName.toUpperCase() === "A") {
    if(e.target.parentElement.hasClass("toTop")) { 
      var body = $("html, body");
      body.stop().animate({scrollTop: 0}, '500', 'swing');
    } else {
      var id = e.target.getAttribute("href").substr(1);
      scrollTo(id);
    }
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
  if(!this.hasClass(name)) {
    this.className += (" "+name);
    this.className = this.className.trim();
  }
  return this;
};

Element.prototype.hasClass = function(name) {
  if(this.className.indexOf(name) !== -1) return true;
  else return false;
};

function eventFire(el, etype){
    if (el.fireEvent) {
          el.fireEvent('on' + etype);
            } else {
                  var evObj = document.createEvent('Events');
                      evObj.initEvent(etype, true, false);
                          el.dispatchEvent(evObj);
                            }
}
