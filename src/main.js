'use strict';

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Arrow up버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
});

//Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

//Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
});



//work 누르면 보이게
const content = document.querySelector('.category__content');
const content2 = document.querySelector('.category__content2');
const content3 = document.querySelector('.category__content3');
const contentbtn = document.querySelector('.category__button');
const contentbtn2 = document.querySelector('.category__button2');
const contentbtn3 = document.querySelector('.category__button3');

contentbtn.addEventListener('click', () => {
    content.classList.toggle('open');
})
contentbtn2.addEventListener('click', () => {
    content2.classList.toggle('open');
})
contentbtn3.addEventListener('click', () => {
    content3.classList.toggle('open');
})
