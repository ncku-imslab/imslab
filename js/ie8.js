window.onload = function(){
  document.getElementById("searchBtn").innerHTML = '<img src="./images/search.png" alt="🔍" />';
};

window.onresize = function(event) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if(w>767) {
    var emt = document.getElementsByClassName("ie-phone-show");
  }
  else {
    var emt = document.getElementsByClassName("ie-phone-hidden");
  }
  for(var i=0; i<emt.length; ++i)
    emt[i].style.display = "none";
};

