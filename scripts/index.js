//index.js(로이드)

//item 메뉴에 올렸을 때 나오는 서브메뉴

const itemMenu = document.querySelector('nav .main_menu > li:nth-child(3)');
const menuOpen = document.querySelector('.menu_open_wrap');
const popup_bg = document.querySelector('.popup_bg');
const bestCategory = document.querySelectorAll('.best_category_group > button')

menuOpen.style.display ='none';
popup_bg.style.display ='none';

itemMenu.addEventListener('mouseenter',showMenu); // itemMenu.addEventListener('mouseover',showMenu); 
itemMenu.addEventListener('mouseleave',hideMenu); // itemMenu.addEventListener('mouseout',hideMenu);
function showMenu(){
    menuOpen.style.display = 'flex';
    popup_bg.style.display = 'block';
}
function hideMenu(){
    menuOpen.style.display = 'none';
    popup_bg.style.display = 'none';
}


// const itemMenu = document.querySelector('nav .main_menu > li:nth-child(3) a');
// const menuOpen = document.querySelector('.menu_open_wrap');
// const popup_bg = document.querySelector('.popup_bg');
// const bestCategory = document.querySelectorAll('.best_category_group > button')

// menuOpen.style.display ='none';
// popup_bg.style.display ='none';

// itemMenu.addEventListener('mouseover',showMenu);
// itemMenu.addEventListener('mouseout',hideMenu);
// function showMenu(){
//     menuOpen.style.display = 'flex';
//     popup_bg.style.display = 'block';
// }
// function hideMenu(){
//     menuOpen.style.display = 'none';
//     popup_bg.style.display = 'none';
// }


//swiper 메인 배너

const slide = new Swiper('.hero-banner',{
    direction:'horizontal',
    loop:true,
    slidesPerView:1,
    autoplay:{
        delay:6000,
        disableOnInteraction:false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    }
})

// 베스트 카테고리 메뉴 활성화
// bestCategory.forEach((o)=>{
//     o.addEventListener('click',()=>{
//         bestCategory.forEach((o2)=>{
//             o2.classList.remove('active');
//         });
        
//         o.classList.add('active');
//     });
// });

//카테고리메뉴 생성
const categoryMenu = document.querySelector("div.category_menu > .category_wrap");
for (let i = 0 ; i < categoryDB.length ; i++) {
    const categoryLi = document.createElement('li');

    categoryLi.innerHTML = `
                    <a href="#">
                        <p class="thumb"><img src="${categoryDB[i].image}" alt="${categoryDB[i].image_alt}"></p>
                        <p class="desc">${categoryDB[i].name}</p>
                    </a>
    `;

    categoryMenu.appendChild(categoryLi);
}
//3행 BEST 섹션 카테고리
const bestCategoryGroup = document.querySelector(".best_sec > .best_category_group");
for (let i = 0 ; i < bestCategoryDB.length ; i++) {
    const bestCategoryBtn = document.createElement('button');
    bestCategoryBtn.type = 'button';
    bestCategoryBtn.className = bestCategoryDB[i].type;
    bestCategoryBtn.textContent = bestCategoryDB[i].name;

    if (i == 0) {
        bestCategoryBtn.classList.add('active');
    }

    bestCategoryBtn.addEventListener('click',()=>{

        //카테고리메뉴 버튼 전체 비활성화 처리
        const btnGroup = document.querySelectorAll(".best_sec > .best_category_group > button");
        btnGroup.forEach((o)=>{
            o.classList.remove('active');
        });
        
        //선택한 카테고리메뉴 버튼 활성화 처리
        bestCategoryBtn.classList.add('active');

        //선택한 카테고리에 맞는 상품 노출
        showCategoryItem(bestCategoryDB[i].type);
    });
    
    bestCategoryGroup.appendChild(bestCategoryBtn);
}

// 3행 BEST 섹션
showCategoryItem("ring");


//4행  NEW 섹션
const newContents = document.querySelector(".new_sec > ul.contents");
for(let i = 0; i < newDB.length ; i++){
    const newLi = document.createElement('li');

    newLi.innerHTML = `<a href="#">
                            <p class="product_thumb">
                                <img src="${newDB[i].image}" alt="${newDB[i].image_alt}">
                            </p>
                            <div class="product_desc">
                                <p class="new_icon"><img src="${newDB[i].icon}" alt="${newDB[i].icon_alt}"></p>
                                <h3 class="name">${newDB[i].name}</h3>
                                <p class="price">${newDB[i].price.toLocaleString()}원</p>
                                <p class="review">리뷰 ${newDB[i].review_count}</p>
                            </div>
                        </a>
                    `;
    newContents.appendChild(newLi);
}

// 6행 watch 섹션
// const watchContents = document.querySelector('.watch_sec > ul.item_small_contetns');
// for(let i = 0; i < watchDB.length ; i++){
//     const watchLi = document.querySelector('li');

//     watchLi.innerHtml = `<li> <!-- 리스트 시작01 -->
//                                 <a href="#" class="item_small">
//                                     <p class="item_small_thumb"><img src="${watchDB[i].image}" alt="${watchDB[i].image_alt}"></p>
//                                     <div class="item_info">
//                                         <div class="name_review_wrap">
//                                             <h3 class="item_name">${watchDB[i].name}</h3>
//                                             <p class="item_price">${watchDB[i].price}</p>
//                                             <p class="item_review">${watchDB[i].review}리뷰 35</p>
//                                         </div>
//                                         <button type="button" class="like_btn"><img src="./images/like_btn.svg" alt=""></button>
//                                     </div>
//                                 </a>
//                             </li>
//                         `;
// }



// 7행 오늘출발 섹션
const todayContents = document.querySelector('.today_sec > ul.contents');
for(let i = 0; i < todayDB.length ; i++){
    const todayLi = document.createElement('li');

    todayLi.innerHTML = `<a href="#">
                            <p class="product_thumb">
                                <img src="${todayDB[i].image}" alt="${todayDB[i].image_alt}">
                            </p>
                            <div class="product_desc">
                                <h3 class="name">${todayDB[i].name}</h3>
                                <p class="price">${todayDB[i].price.toLocaleString()}원</p>
                                <p class="review">리뷰 ${todayDB[i].review_count}</p>
                            </div>
                        </a>
                    `;
    todayContents.appendChild(todayLi);
}

function showCategoryItem(categoryType) {
    const bestContents = document.querySelector('.best_sec > ul.contents');
    bestContents.innerHTML = "";
    
    for(let i = 0; i < bestDB.length ; i++){
        if (bestDB[i].type != categoryType) {
            continue;
        }

        const bestLi = document.createElement('li');
    
        bestLi.innerHTML = `<a href="#">
                                <p class="best_thumb">
                                    <img src="${bestDB[i].image}" alt="${bestDB[i].image_alt}">
                                </p>
                                <div class="product_desc">
                                    <h3 class="name">${bestDB[i].name}</h3>
                                    <p class="price">${bestDB[i].price.toLocaleString()}원</p>
                                    <p class="review">리뷰 ${bestDB[i].review_count}</p>
                                </div>
                            </a>
                        `;
        bestContents.appendChild(bestLi);
    } 
}