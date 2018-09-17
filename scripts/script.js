function addLoadEvent(func){
    var old_onload = window.onload;
    // the first onload function to be added
    if (typeof window.onload != "function") {
            window.onload = func;
    } else {
        // more functions need to be added
        window.onload = function() {
            old_onload();
            func();
        }
    }
}

// I should check whether the current browser supports the two methods, but...
var pics = document.getElementById('banner').getElementsByTagName('div');
var dots = document.getElementById('dots').getElementsByTagName('span');
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
            changeDots();
        }, 3000);
    };
    // start auto-changing as soon as the page is loaded
    banner_area.onmouseout();
}

function changeImage() {
    // hide other images in the banner
    for (var i = 0; i < pics.length; i++) {
        pics[i].style.display = 'none';
    }
    // show the current image
    pics[index].style.display = 'block';
}

function changeDots() {
    for (var i = 0; i < dots.length; i++) {
        dots[i].setAttribute('class', '');
    }
    dots[index].setAttribute('class', 'active');
}

function prepareArrow() {
    if (!document.getElementById || !document.getElementsByTagName) return false;
    var prev_arrow = document.getElementById('prev');
    var next_arrow = document.getElementById('next');
    var curr_active = document.getElementsByClassName('slide-active')[0];
    curr_active.getAttribute('class');
    prev_arrow.onclick = function () {
        index--;
        if (index < 0) index = pics.length - 1;
        changeImage();
        changeDots();
    };
    next_arrow.onclick = function () {
        index++;
        if (index >= pics.length) index = 0;
        changeImage();
        changeDots();
    };
}

function prepareDots() {
    var i;
    for (i = 0; i < dots.length; i++) {
        dots[i].id = 'dot' + i;
        dots[i].onclick = function () {
            index = this.id.slice(3);
            // alert(index);
            changeImage();
            changeDots();
        };
    }
}

// add multiple window.onload functions
addLoadEvent(autoImageSlide);
addLoadEvent(prepareArrow);
addLoadEvent(prepareDots);