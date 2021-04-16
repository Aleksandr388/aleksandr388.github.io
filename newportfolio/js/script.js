var $page = $("html, body");
$('a[href*="#"]').click(function() {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    400
  );
  return false;
});

//Parallax

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".parallax");
  var instances = M.Parallax.init(elems);
});




// Mobile menu

var menu = document.querySelector(".mobile-menu");
var menuBtn = document.querySelectorAll(".switch-menu-btn");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < menuBtn.length; i++) {

    //Открытие мобильного меню
    menuBtn[i].addEventListener("click", function() {
      menu.classList.toggle("hidden");
      overlay.classList.toggle("overlay-show");
    });
  }

//Проверка на клик по overlay-ю в мобильном меню

overlay.addEventListener("click", function() {
  menu.classList.toggle("hidden");
  overlay.classList.toggle("overlay-show");
});



// Scroll Button

let topContent = document.querySelector('.hello-section');
let scrollBtn = document.querySelector('.scroll_down');
let height = Math.floor(window.pageYOffset);

document.addEventListener('scroll', () => {height = Math.floor(window.pageYOffset)});

function scrollDown() {
  
  if (height <= topContent.offsetHeight) {
    scrollBy(0,20);
    height += 20;
    setTimeout(scrollDown, 5);
  } else {
    height = 0;
  }
}


scrollBtn.addEventListener('click', scrollDown);

// 

