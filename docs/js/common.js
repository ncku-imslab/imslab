function toggleList(e){if("LI"===e.target.tagName.toUpperCase()){var t=e.target.id;if(0===t.indexOf("list-")){var s=t.substr(5),a=document.getElementById("content-"+s);a&&a.toggleClass("active")}}}!function(){for(var e=document.getElementsByClassName("enableOpen"),t=0;t<e.length;++t)e[t].addEventListener("click",toggleList,!1)}(),Element.prototype.removeClass=function(e){return this.className=this.className.replace(new RegExp("(?:^|\\s)"+e+"(?:\\s|$)")," "),this},Element.prototype.addClass=function(e){return this.className+=" "+e,this},Element.prototype.hasClass=function(e){return-1!==this.className.indexOf(e)?!0:!1},Element.prototype.toggleClass=function(e){return this.hasClass(e)?this.removeClass(e):this.addClass(e)};