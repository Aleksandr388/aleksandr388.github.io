var e=document.querySelector(".mobile-menu"),n=document.querySelectorAll(".switch-menu-btn"),t=document.querySelector(".overlay"),r=document.querySelector(".menu-items"),c=document.querySelectorAll(".menu-list"),o=document.querySelector(".currency-btn"),i=document.querySelector(".box__dropdown");function s(e,n){return n.contains(e)}for(var l=0;l<n.length;l++)n[l].addEventListener("click",function(){e.classList.toggle("hidden"),t.classList.toggle("overlay-show")});function a(e){for(var n=0;n<c.length;n++)e.nextElementSibling!=c[n]&&c[n].classList.add("hidden-menu");e.nextElementSibling.classList.toggle("hidden-menu")}function u(){i.classList.remove("show"),o.classList.remove("active")}r.addEventListener("click",function(e){for(var n=e.target;n!=this;){if("A"==n.tagName)return void a(n);n=n.parentNode}}),document.addEventListener("click",function(e){var r=e.target;document.querySelector("li .menu-list")&&document.querySelectorAll("li .menu-list").forEach(function(e){for(var n=e;!n.classList.contains("menu-items");)n=n.parentElement;if(!s(r,n))for(var t=0;t<c.length;t++)c[t].classList.add("hidden-menu")})}),o.addEventListener("click",function(){i.classList.toggle("show"),o.classList.toggle("active")}),document.addEventListener("click",function(e){var t=e.target;document.querySelector(".box__dropdown.show")&&document.querySelectorAll(".box__dropdown.show").forEach(function(e){var n=e;for(e.previousElementSibling;!n.classList.contains("currency");)n=n.parentElement;s(t,n)||u()})}),t.addEventListener("click",function(){e.classList.toggle("hidden"),t.classList.toggle("overlay-show")});var d=document.querySelector(".currency-btn"),m=1.3,f=4.96,L=1.15,g=[89.99,47.5,89.99,69.95,29.95,89.99],v=document.querySelectorAll(".cost");function h(e){switch(u(),d.innerHTML="",e){case"usd":d.innerHTML="Currency : USD <i class='fas fa-chevron-down'></i>";for(var n=0;n<v.length;n++)v[n].innerHTML="",v[n].innerHTML="<sup>$</sup>"+(g[n]*m).toFixed(2);break;case"pln":d.innerHTML="Currency : PLN <i class='fas fa-chevron-down'></i>";for(n=0;n<v.length;n++)v[n].innerHTML="",v[n].innerHTML="<sup>zł</sup>"+(g[n]*f).toFixed(2);break;case"eur":d.innerHTML="Currency : EUR <i class='fas fa-chevron-down'></i>";for(n=0;n<v.length;n++)v[n].innerHTML="",v[n].innerHTML="<sup>€</sup>"+(g[n]*L).toFixed(2);break;case"gbr":d.innerHTML="Currency : GBR <i class='fas fa-chevron-down'></i>";for(n=0;n<v.length;n++)v[n].innerHTML="",v[n].innerHTML="<sup>£</sup>"+g[n]}}document.querySelector(".usd").addEventListener("click",function(e){h(e.target.className)}),document.querySelector(".pln").addEventListener("click",function(e){h(e.target.className)}),document.querySelector(".eur").addEventListener("click",function(e){h(e.target.className)}),document.querySelector(".gbr").addEventListener("click",function(e){h(e.target.className)});