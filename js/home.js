(function() {
})();

Element.prototype.removeClass = function(name) {
  this.className = this.className.replace(new RegExp('(?:^|\\s)' + name + '(?:\\s|$)'), ' ');
  return this;
};

Element.prototype.addClass = function(name) {
  this.className += (" "+name);
  return this;
};

