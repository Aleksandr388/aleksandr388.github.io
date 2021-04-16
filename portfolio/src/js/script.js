// Scroll Button

var topContent = document.querySelector('.section_hello');
var scrollBtn = document.querySelector('.btn_animate');
var height = Math.floor(window.pageYOffset);

document.addEventListener('scroll', function () {
    height = Math.floor(window.pageYOffset)
});

function scrollDown() {
console.log(1)
    if (height <= topContent.offsetHeight) {
        scrollBy(0, 20);
        height += 20;
        setTimeout(scrollDown, 5);
    } else {
        height = 0;
    }
}


scrollBtn.addEventListener('click', scrollDown);



// ОФОРМЛЕНИЕ ФОРМЫ

var form = document.querySelector('.section_feedback');
var labels = document.getElementsByClassName('feedback-box-fields__label');
var label;


form.addEventListener('click', function (event) {
    var target = event.target;

    if (target.tagName == 'INPUT' || target.tagName == 'TEXTAREA') {
        target = target.getAttribute('id');
    } else if (target.tagName != 'INPUT' || target.tagName == 'TEXTAREA') {

        for (var i = 0; i < labels.length; i++) {
            if (labels[i].previousElementSibling.value) {
                continue;
            }
            labels[i].classList.remove('active');
        }

    }
    heilight(target)
});


function heilight(heilightTag) {
    if (label && !label.previousElementSibling.value) {
        label.classList.remove('active');
    }

    for (var i = 0; i < labels.length; i++) {
        if (labels[i].getAttribute('for') == heilightTag) {
            labels[i].classList.add('active');
            label = labels[i];
        }
    }
}

// КОНЕЦ ОФОРМЛЕНИЯ ФОРМЫ