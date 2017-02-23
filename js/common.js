(function() {
  var lists = document.getElementsByClassName("enableOpen");
  for(var i=0; i<lists.length; ++i) 
    lists[i].addEventListener("click", toggleList, false);
})();

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

Element.prototype.removeClass = function(name) {
  this.className = this.className.replace(new RegExp('(?:^|\\s)' + name + '(?:\\s|$)'), ' ');
  return this;
};

Element.prototype.addClass = function(name) {
  this.className += (" "+name);
  return this;
};

Element.prototype.hasClass = function(name) {
  if(this.className.indexOf(name) !== -1) return true;
  else return false;
};

Element.prototype.toggleClass = function(name) {
  if(this.hasClass(name)) return this.removeClass(name);
  return this.addClass(name);
}

