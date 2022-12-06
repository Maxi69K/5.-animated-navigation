// Animated Navigation
/*
const menuToggle = document.getElementById('menu-toggle');
const activeElements = document.querySelectorAll('.active-element');
const navBtnIcons = menuToggle.childNodes[1];
const pageBg = document.querySelector('.main-container');
const listItems = document.querySelectorAll('.main-nav-list a');

menuToggle.addEventListener('click', animation);

function animation() {
    for (let active = 0; active < activeElements.length; active++) {
        activeElements[active].classList.toggle('active');
    }
    navBtnIcons.classList.toggle('fa-times');

    if (navBtnIcons.classList.contains('fa-times')) {                             // Uzima zadatu klasu
        pageBg.style.filter = 'blur(3px)';
    } else {
        setTimeout(function () {
            pageBg.style.filter = 'blur(0px)';
        }, 500);
    }

    listItems.forEach(function (item, index) {
        //console.log(index);
        //console.log(item.style.transition = `all .5s linear ${index *0.3}s`); 
        item.style.transition = `all .5s linear ${index *0.3}s`;
    });
}
*/

// Animated Navigation
(function () {
    let animatedNav = {
        menuToggle: document.getElementById('menu-toggle'),
        activeElements: document.querySelectorAll('.active-element'),
        pageBg: document.querySelector('.main-container'),
        listItems: document.querySelectorAll('.main-nav-list a'),
        init: () => animatedNav.menuToggle.addEventListener('click', animatedNav.animation),
        animation: () => {
            navBtnIcons = animatedNav.menuToggle.childNodes[1];
            for (let active = 0; active < animatedNav.activeElements.length; active++) {
                animatedNav.activeElements[active].classList.toggle('active');
            }
            navBtnIcons.classList.toggle('fa-times');
            if (navBtnIcons.classList.contains('fa-times')) {
                animatedNav.pageBg.style.filter = 'blur(3px)';
            } else {
                setTimeout(function () {
                    animatedNav.pageBg.style.filter = 'blur(0px)';
                }, 500);
            }
            animatedNav.listItems.forEach(function (item, index) {
                item.style.transition = `all .5s linear ${index *0.3}s`;
            });
        }
    };
    animatedNav.init();
})()