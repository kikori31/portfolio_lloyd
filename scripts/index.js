//index.js(로이드)

//item 메뉴에 올렸을 때 나오는 서브메뉴

const itemMenu = document.querySelector('nav > a:nth-child(3)');
const menuOpen = document.querySelector('.menu_open_wrap');

menuOpen.style.display ='none';

itemMenu.addEventListener('mouseover',showMenu);
itemMenu.addEventListener('mouseout',hideMenu);
function showMenu(){
    menuOpen.style.display = 'flex';
}
function hideMenu(){
    menuOpen.style.display = 'none';
}



//메인 슬라이드 Swiper
// const introSlide = new Swiper('.main-slide',{
//     direction:'vertical',
//     mousewheel:true,
// });
