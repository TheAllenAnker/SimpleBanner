function addLoadEvent(func){
    var old_onload = window.onload;
    if (typeof window.onload != "function") {
            window.onload = func;
    } else {
        window.onload = function() {
            old_onload();
            func();
        }
    }
}

var pics = document.getElementById('banner').getElementsByTagName('div');
console.log(pics);
var index = 0;
var timer = null;

function autoImageSlide() {
    var banner_area = document.getElementById('main');
    banner_area.onmouseover = function() {
        if (timer) {
            clearInterval(timer);
        }
    };
    banner_area.onmouseout = function () {
        timer = setInterval(function () {
            index++;
            if (index >= pics.length) {
                index = 0;
            }
            changeImage();
        }, 3000);
    };
    banner_area.onmouseout();
}

function changeImage() {
    for (var i = 0; i < pics.length; i++) {
        pics[i].style.display = 'none';
    }
    pics[index].style.display = 'block';
}

function prepareArrow() {
    if (!document.getElementById || !document.getElementsByTagName) return false;
    var prev_arrow = document.getElementById('prev');
    var next_arrow = document.getElementById('next');
    var curr_active = document.getElementsByClassName('slide-active')[0];
    curr_active.getAttribute('class');
    prev_arrow.onclick = function () {

    }
}

function prepareDots() {

}

addLoadEvent(autoImageSlide);
addLoadEvent(prepareArrow);
addLoadEvent(prepareDots);