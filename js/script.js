/**
 author:Chris
 date:2016.11.19
 editor:2016.11.19
 */
window.onload = function () {
    var banner=document.getElementById('banner');
    var list=document.getElementById('banner-list');
    var left=document.getElementById('left');
    var right=document.getElementById('right');
    var page1=document.getElementById('page1');
    var page2=document.getElementById('page2');
    var page3=document.getElementById('page3');

    function animate(offset) {
        list.style.top = parseInt(list.style.top) + offset + 'px';

        if (parseInt(list.style.top) + offset > -604) {
            list.style.top = -2416 + 'px'
        }
        if (parseInt(list.style.top) + offset < -2416) {
            list.style.top = -604 + 'px'
        }
    }

    var circle1 = document.getElementById('circle1');
    var circle2 = document.getElementById('circle2');
    var circle3 = document.getElementById('circle3');
    page1.onclick = function () {
        list.style.top = -604 + 'px';
        page1.className = "current";
        circle1.className = "current";
        page2.className = " ";
        circle2.className = " ";
        page3.className = " ";
        circle3.className = " ";
    };
    page2.onclick = function () {
        list.style.top = -1208 + 'px';
        page2.className = "current";
        circle2.className = "current";
        page1.className = " ";
        circle1.className = " ";
        page3.className = " ";
        circle3.className = " ";
    };
    page3.onclick = function () {
        list.style.top = -1812 + 'px';
        page3.className = "current";
        circle3.className = "current";
        page1.className = " ";
        circle1.className = " ";
        page2.className = " ";
        circle2.className = " ";
    };

    right.onclick = function () {
        animate(-604);
    };
    left.onclick = function () {
        animate(604);
    };

    var timer;
    function play() {
        timer=setInterval(function () {
            right.onclick()
        },1500);
    }
    function stop() {
        clearInterval(timer)
    }
    banner.onmouseover = stop;
    banner.onmouseout = play;
    play();
}
