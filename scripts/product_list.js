// 상품 썸네일 마우스 호버시 이미지 변경
const smallThumb = document.querySelectorAll('.small_thumb img');
const bigThumb = document.querySelector('.big_thumb img');
console.log(smallThumb,bigThumb);

function thumbFunc(target1,target2){
    return target1.src = target2.src;
}
smallThumb[0].addEventListener('mouseover',()=>{
    thumbFunc(bigThumb, smallThumb[0])
})
smallThumb[1].addEventListener('mouseover',()=>{
    thumbFunc(bigThumb, smallThumb[1])
})
smallThumb[2].addEventListener('mouseover',()=>{
    thumbFunc(bigThumb, smallThumb[2])
})