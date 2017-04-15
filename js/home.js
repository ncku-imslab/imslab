(function() {
})();

window.onload = function () {
  var hash = window.location.hash;
  if(hash.length > 0) {
    hash = hash.substring(4);
    console.log(hash);
    scrollTo(hash);
    eventFire(document.getElementById(hash),"click");
  }
}
