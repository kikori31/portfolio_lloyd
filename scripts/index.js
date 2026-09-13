//index.js(로이드)

//item 메뉴에 올렸을 때 나오는 서브메뉴

const itemMenu = document.querySelector('nav > a:nth-child(3)');
const menuOpen = document.querySelector('.menu_open_wrap');
const popup_bg = document.querySelector('.popup_bg');
const bestCategory = document.querySelectorAll('.best_category_group > button')

menuOpen.style.display ='none';
popup_bg.style.display ='none';

itemMenu.addEventListener('mouseover',showMenu);
itemMenu.addEventListener('mouseout',hideMenu);
function showMenu(){
    menuOpen.style.display = 'flex';
    popup_bg.style.display = 'block';
}
function hideMenu(){
    menuOpen.style.display = 'none';
    popup_bg.style.display = 'none';
}

//swiper 메인 배너

const slide = new Swiper('.hero-banner',{
    direction:'horizontal',
    loop:true,
    slidesPerView:1,
    autoplay:{
        delay:6000,
        disableOnInteraction:false,
    },
    
})

// 베스트 카테고리 메뉴 활성화
bestCategory.forEach((o)=>{
    o.addEventListener('click',()=>{
        bestCategory.forEach((o2)=>{
            o2.classList.remove('active');
        });
        
        o.classList.add('active');
    });
});
