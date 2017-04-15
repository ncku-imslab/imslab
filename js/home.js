(function() {
  var url = window.location.href;
  if(url.indexOf("#list-1")!==-1) {
    window.scrollTo("list-1");
    eventFire(document.getElementById("list-1"),"click");
  }
})();

