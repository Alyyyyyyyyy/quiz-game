var logo = document.getElementById("controlMark1").getBoundingClientRect();
// var initialX = window.pageXOffset + logo.left - 14;
// var initialY = window.pageYOffset + logo.top - 15;

// 0220修改
var initialX = window.pageXOffset + logo.left + (logo.width / 2) - 9;
var initialY = window.pageYOffset + logo.top - 15;

var mark = document.getElementById('sliderControlMark');
mark.style.left = initialX;
mark.style.top = initialY;
var dis = document.getElementById("sliderControl").getBoundingClientRect().width / 4;

function slide_1() {
    document.querySelector('#slide-1').style.display = "block";
    document.querySelector('#slide-2').style.display = "none";
    document.querySelector('#slide-3').style.display = "none";
    document.querySelector('#slide-4').style.display = "none";

    var now = document.getElementById("controlMark1").getBoundingClientRect();
    var x = window.pageXOffset + now.left + (now.width / 2) - 9;

    mark.style.left = x;
}

function slide_2() {

    document.querySelector('#slide-1').style.display = "none";
    document.querySelector('#slide-2').style.display = "block";
    document.querySelector('#slide-3').style.display = "none";
    document.querySelector('#slide-4').style.display = "none";

    // document.getElementById('sliderControlMark').style.transform = "translateX(265px)";
    // document.getElementById('sliderControlMark').style.transform = `translateX(${dis - 3}px)`;


    var now = document.getElementById("controlMark2").getBoundingClientRect();
    var x = window.pageXOffset + now.left + (now.width / 2) - 9;

    mark.style.left = x;
}

function slide_3() {
    document.querySelector('#slide-1').style.display = "none";
    document.querySelector('#slide-2').style.display = "none";
    document.querySelector('#slide-3').style.display = "block";
    document.querySelector('#slide-4').style.display = "none";

    var now = document.getElementById("controlMark3").getBoundingClientRect();
    var x = window.pageXOffset + now.left + (now.width / 2) - 9;

    mark.style.left = x;

}

function slide_4() {
    document.querySelector('#slide-1').style.display = "none";
    document.querySelector('#slide-2').style.display = "none";
    document.querySelector('#slide-3').style.display = "none";
    document.querySelector('#slide-4').style.display = "block";

    var now = document.getElementById("controlMark4").getBoundingClientRect();
    var x = window.pageXOffset + now.left + (now.width / 2) - 9;

    mark.style.left = x;
}