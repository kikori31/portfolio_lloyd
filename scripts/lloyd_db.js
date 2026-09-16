/* lloyd_db.js */

//2행 gold~시계 카테고리 메뉴
const categoryDB = [
    {
        id: 1,
        name: 'GOLD',
        image: './images/category_gold.jpg',
        image_alt: 'gold'
    },
    {
        id: 2,
        name: '랩 다이아몬드',
        image: './images/category_lab.jpg',
        image_alt: '랩 다이아몬드'
    },
    {
        id: 3,
        name: '커플/웨딩',
        image: './images/category_couple.jpg',
        image_alt: '커플/웨딩'
    },
    {
        id: 4,
        name: '24K 순금',
        image: './images/category_24k.jpg',
        image_alt: '24K 순금'
    },
    {
        id: 5,
        name: '실버',
        image: './images/category_silver.jpg',
        image_alt: '실버'
    },
    {
        id: 6,
        name: '시계',
        image: './images/category_watch.jpg',
        image_alt: '시계'
    },
];
// 3행 BEST 카테고리 섹션
const bestCategoryDB = [
    {
        id: 1,
        type: 'ring',
        name: '반지'
    },
    {
        id: 2,
        type: 'earring',
        name: '귀걸이'
    },
    {
        id: 3,
        type: 'piercing',
        name: '피어싱'
    },
    {
        id: 4,
        type: 'necklace',
        name: '목걸이'
    },
    {
        id: 5,
        type: 'couplering',
        name: '커플링'
    },
    {
        id: 6,
        type: 'bracelet',
        name: '팔찌&발찌'
    },
    {
        id: 7,
        type: 'diamond',
        name: '다이아몬드'
    },
    {
        id: 8,
        type: '24kgold',
        name: '순금'
    },
    {
        id: 9,
        type: 'watch',
        name: '시계'
    },
];

// 3행 BEST 섹션
const bestDB = [
    {
        id: 1,
        type: 'ring',
        name: '디어 리본 큐빅 10K 반지',
        price: 399000,
        review_count: 50,
        image: './images/best_thumb01.jpg',
        image_alt: ''
    },
    {
        id: 2,
        type: 'ring',
        name: '왕관 물고기 10K 반지',
        price: 259000,
        review_count: 20,
        image: './images/best_thumb02.jpg',
        image_alt: ''
    },
    {
        id: 3,
        type: 'ring',
        name: '베이직 탄생석 12월 콜렉트링 10K 여성 반지',
        price: 199000,
        review_count: 40,
        image: './images/best_thumb03.jpg',
        image_alt: ''
    },
    {
        id: 4,
        type: 'ring',
        name: '튜더로즈가든 핑크 페어컷 14K 반지',
        price: 999000,
        review_count: 29,
        image: './images/best_thumb04.jpg',
        image_alt: ''
    },
    {
        id: 1,
        type: 'earring',
        name: '디어 리본 큐빅 10K 귀걸이',
        price: 399000,
        review_count: 50,
        image: './images/best_thumb01.jpg',
        image_alt: ''
    },
    {
        id: 2,
        type: 'earring',
        name: '왕관 물고기 10K 귀걸이',
        price: 259000,
        review_count: 20,
        image: './images/best_thumb02.jpg',
        image_alt: ''
    },
    {
        id: 3,
        type: 'earring',
        name: '베이직 탄생석 12월 콜렉트링 10K 여성 귀걸이',
        price: 199000,
        review_count: 40,
        image: './images/best_thumb03.jpg',
        image_alt: ''
    },
    {
        id: 4,
        type: 'earring',
        name: '튜더로즈가든 핑크 페어컷 14K 귀걸이',
        price: 999000,
        review_count: 29,
        image: './images/best_thumb04.jpg',
        image_alt: ''
    },
    {
        id: 1,
        type: 'piercing',
        name: '디어 리본 큐빅 10K 피어싱',
        price: 399000,
        review_count: 50,
        image: './images/best_thumb01.jpg',
        image_alt: ''
    },
    {
        id: 2,
        type: 'piercing',
        name: '왕관 물고기 10K 피어싱',
        price: 259000,
        review_count: 20,
        image: './images/best_thumb02.jpg',
        image_alt: ''
    },
    {
        id: 3,
        type: 'piercing',
        name: '베이직 탄생석 12월 콜렉트링 10K 여성 피어싱',
        price: 199000,
        review_count: 40,
        image: './images/best_thumb03.jpg',
        image_alt: ''
    },
    {
        id: 4,
        type: 'piercing',
        name: '튜더로즈가든 핑크 페어컷 14K 피어싱',
        price: 999000,
        review_count: 29,
        image: './images/best_thumb04.jpg',
        image_alt: ''
    },
    {
        id: 1,
        type: 'necklace',
        name: '디어 리본 큐빅 10K 피어싱',
        price: 399000,
        review_count: 50,
        image: './images/best_thumb01.jpg',
        image_alt: ''
    },
    {
        id: 2,
        type: 'necklace',
        name: '왕관 물고기 10K 피어싱',
        price: 259000,
        review_count: 20,
        image: './images/best_thumb02.jpg',
        image_alt: ''
    },
    {
        id: 3,
        type: 'necklace',
        name: '베이직 탄생석 12월 콜렉트링 10K 여성 피어싱',
        price: 199000,
        review_count: 40,
        image: './images/best_thumb03.jpg',
        image_alt: ''
    },
    {
        id: 4,
        type: 'necklace',
        name: '튜더로즈가든 핑크 페어컷 14K 피어싱',
        price: 999000,
        review_count: 29,
        image: './images/best_thumb04.jpg',
        image_alt: ''
    },
    {
        id: 1,
        type: 'couplering',
        name: '디어 리본 큐빅 10K 피어싱',
        price: 399000,
        review_count: 50,
        image: './images/best_thumb01.jpg',
        image_alt: ''
    },
    {
        id: 2,
        type: 'couplering',
        name: '왕관 물고기 10K 피어싱',
        price: 259000,
        review_count: 20,
        image: './images/best_thumb02.jpg',
        image_alt: ''
    },
    {
        id: 3,
        type: 'couplering',
        name: '베이직 탄생석 12월 콜렉트링 10K 여성 피어싱',
        price: 199000,
        review_count: 40,
        image: './images/best_thumb03.jpg',
        image_alt: ''
    },
    {
        id: 4,
        type: 'couplering',
        name: '튜더로즈가든 핑크 페어컷 14K 피어싱',
        price: 999000,
        review_count: 29,
        image: './images/best_thumb04.jpg',
        image_alt: ''
    },
    {
        id: 1,
        type: 'bracelet',
        name: '디어 리본 큐빅 10K 피어싱',
        price: 399000,
        review_count: 50,
        image: './images/best_thumb01.jpg',
        image_alt: ''
    },
    {
        id: 2,
        type: 'bracelet',
        name: '왕관 물고기 10K 피어싱',
        price: 259000,
        review_count: 20,
        image: './images/best_thumb02.jpg',
        image_alt: ''
    },
    {
        id: 3,
        type: 'bracelet',
        name: '베이직 탄생석 12월 콜렉트링 10K 여성 피어싱',
        price: 199000,
        review_count: 40,
        image: './images/best_thumb03.jpg',
        image_alt: ''
    },
    {
        id: 4,
        type: 'bracelet',
        name: '튜더로즈가든 핑크 페어컷 14K 피어싱',
        price: 999000,
        review_count: 29,
        image: './images/best_thumb04.jpg',
        image_alt: ''
    },
    {
        id: 1,
        type: 'diamond',
        name: '디어 리본 큐빅 10K 피어싱',
        price: 399000,
        review_count: 50,
        image: './images/best_thumb01.jpg',
        image_alt: ''
    },
    {
        id: 2,
        type: 'diamond',
        name: '왕관 물고기 10K 피어싱',
        price: 259000,
        review_count: 20,
        image: './images/best_thumb02.jpg',
        image_alt: ''
    },
    {
        id: 3,
        type: 'diamond',
        name: '베이직 탄생석 12월 콜렉트링 10K 여성 피어싱',
        price: 199000,
        review_count: 40,
        image: './images/best_thumb03.jpg',
        image_alt: ''
    },
    {
        id: 4,
        type: 'diamond',
        name: '튜더로즈가든 핑크 페어컷 14K 피어싱',
        price: 999000,
        review_count: 29,
        image: './images/best_thumb04.jpg',
        image_alt: ''
    },
    {
        id: 1,
        type: '24kgold',
        name: '디어 리본 큐빅 10K 피어싱',
        price: 399000,
        review_count: 50,
        image: './images/best_thumb01.jpg',
        image_alt: ''
    },
    {
        id: 2,
        type: '24kgold',
        name: '왕관 물고기 10K 피어싱',
        price: 259000,
        review_count: 20,
        image: './images/best_thumb02.jpg',
        image_alt: ''
    },
    {
        id: 3,
        type: '24kgold',
        name: '베이직 탄생석 12월 콜렉트링 10K 여성 피어싱',
        price: 199000,
        review_count: 40,
        image: './images/best_thumb03.jpg',
        image_alt: ''
    },
    {
        id: 4,
        type: '24kgold',
        name: '튜더로즈가든 핑크 페어컷 14K 피어싱',
        price: 999000,
        review_count: 29,
        image: './images/best_thumb04.jpg',
        image_alt: ''
    },
    {
        id: 1,
        type: 'watch',
        name: '디어 리본 큐빅 10K 피어싱',
        price: 399000,
        review_count: 50,
        image: './images/best_thumb01.jpg',
        image_alt: ''
    },
    {
        id: 2,
        type: 'watch',
        name: '왕관 물고기 10K 피어싱',
        price: 259000,
        review_count: 20,
        image: './images/best_thumb02.jpg',
        image_alt: ''
    },
    {
        id: 3,
        type: 'watch',
        name: '베이직 탄생석 12월 콜렉트링 10K 여성 피어싱',
        price: 199000,
        review_count: 40,
        image: './images/best_thumb03.jpg',
        image_alt: ''
    },
    {
        id: 4,
        type: 'watch',
        name: '튜더로즈가든 핑크 페어컷 14K 피어싱',
        price: 999000,
        review_count: 29,
        image: './images/best_thumb04.jpg',
        image_alt: ''
    },
];

//4행  NEW 섹션
const newDB = [
    {
        id: 1,
        name: '0.095ct 6프롱 다이아몬드 14K 목걸이',
        price: 459000,
        review_count: 21,
        image: './images/new_thumb01.jpg',
        image_alt: '',
        icon: './images/new_icon.svg',
        icon_alt: ''
    },
    {
        id: 2,
        name: '에센셜 포인트 십자가 10K 펜던트',
        price: 199000,
        review_count: 12,
        image: './images/new_thumb02.jpg',
        image_alt: '',
        icon: './images/new_icon.svg',
        icon_alt: ''
    },
    {
        id: 3,
        name: '[실버 925] 빅 오벌컷 스톤 목걸이',
        price: 99000,
        review_count: 6,
        image: './images/new_thumb03.jpg',
        image_alt: '',
        icon: './images/new_icon.svg',
        icon_alt: ''
    },
    {
        id: 4,
        name: '포인트 세팅 14K 볼반지',
        price: 329000,
        review_count: 14,
        image: './images/new_thumb04.jpg',
        image_alt: '',
        icon: './images/new_icon.svg',
        icon_alt: ''
    },
    {
        id: 5,
        name: '[조카 선물 추천] 24K 순금 반돈 청룡 돌반지',
        price: 498000,
        review_count: 26,
        image: './images/new_thumb05.jpg',
        image_alt: '',
        icon: './images/new_icon.svg',
        icon_alt: ''
    },
];
//6행 워치 스트랩 섹션
const watchDB = [
    {
        id: 1,
        name: '어썸스퀘어 마더오브펄 여성 가죽시계 아이보리',
        price: 199000,
        review_count: 35,
        image: './images/women_watch01.jpg',
        image_alt: '',
    },
    {
        id: 2,
        name: '어썸 뱅글 스퀘어 여성 메탈시계 - 블랙',
        price: 129000,
        review_count: 17,
        image: './images/women_watch02.jpg',
        image_alt: '',
    },
    {
        id: 3,
        name: '아델 여성 가죽 시계 버건디-핑크골드',
        price: 199000,
        review_count: 42,
        image: './images/women_watch03.jpg',
        image_alt: '',
    },
    {
        id: 4,
        name: '다이버 남성 시계 블랙',
        price: 129000,
        review_count: 48,
        image: './images/men_watch01.jpg',
        image_alt: '',
    },
    {
        id: 5,
        name: '오픈하트 남성 시계 화이트 브라운',
        price: 199000,
        review_count: 12,
        image: './images/men_watch01.jpg',
        image_alt: '',
    },
    {
        id: 6,
        name: '옥토- 실버블루&블루 크로노그래프 남성 시계',
        price: 199000,
        review_count: 26,
        image: './images/men_watch01.jpg',
        image_alt: '',
    }, 
    {
        id: 7,
        name: '[애플워치 38-41mm 호환]베이직 슬림핏스테인리스 로즈 스트랩',
        price: 19000,
        review_count: 50,
        image: './images/watch_apple01.jpg',
        image_alt: '',
    },
    {
        id: 8,
        name: '[갤럭시워치 20mm 호환]실리콘 레더 스트랩 브라운',
        price: 19900,
        review_count: 16,
        image: './images/watch_apple02.jpg',
        image_alt: '',
    },
    {
        id: 9,
        name: '[애플워치 38-41mm 호환] 스몰 스프링카멜 실버커넥터 가죽 스트랩',
        price: 19900,
        review_count: 28,
        image: './images/watch_apple03.jpg',
        image_alt: '',
    },
]

//7행  오늘출발 섹션
const todayDB = [
    {
        id: 1,
        name: '하트인하트 핑크 다이아몬드 10K 목걸이',
        price: 429000,
        review_count: 26,
        image: './images/today_thumb01.jpg',
        image_alt: '',
        icon: '',
        icon_alt: ''
    },
    {
        id: 2,
        name: '크레센도 테니스 10K 원터치 링 귀걸이(M)',
        price: 259000,
        review_count: 40,
        image: './images/today_thumb02.jpg',
        image_alt: '',
        icon: '',
        icon_alt: ''
    },
    {
        id: 3,
        name: '더블 펜던트 10K 목걸이',
        price: 429000,
        review_count: 40,
        image: './images/today_thumb03.jpg',
        image_alt: '',
        icon: '',
        icon_alt: ''
    },
    {
        id: 4,
        name: '실버925 에센셜 파베십자가 팔찌',
        price: 49000,
        review_count: 20,
        image: './images/today_thumb04.jpg',
        image_alt: '',
        icon: '',
        icon_alt: ''
    },
    {
        id: 5,
        name: '쇼콜라 라운드 14K 귀걸이',
        price: 259000,
        review_count: 40,
        image: './images/today_thumb05.jpg',
        image_alt: '',
        icon: '',
        icon_alt: ''
    },
];