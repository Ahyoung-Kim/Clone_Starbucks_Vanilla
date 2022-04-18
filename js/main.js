const search = document.querySelector('.search');
const searchInput = search.querySelector('input');

/* 돋보기 아이콘 눌러도 input 창 포커스 되도록 */
search.addEventListener('click', function () {
  searchInput.focus();
});

/* 인풋창 포커스 되면 */
searchInput.addEventListener('focus', function () {
  /* 클래스 추가하기 */
  search.classList.add('focused');
  /* html 속성 지정하기 */
  searchInput.setAttribute('placeholder', '통합검색');
});

/* 인풋창 포커스 해제되면 */
searchInput.addEventListener('blur', function () {
  /* 클래스 삭제하기 */
  search.classList.remove('focused');
  /* html 속성 지정하기 */
  searchInput.setAttribute('placeholder', '');
});


const badges = document.querySelector('header .badges');

//window 객체: 브라우저 창 화면 자체를 의미
//throttle : 함수가 우르르 실행되는 것을 방지하도록 0.3초간 부하를 준다
// _.throttle(함수, 시간(ms)) -> 몇초에 한번씩 함수가 실행될지 
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);

  //window.scrollY : 화면이 위에서부터 몇 px 떨어진 지점에 위치하는지 
  if (window.scrollY > 500) {
    // 배지 숨기기
    //애니메이션 처리: gsap.to(요소, 지속시간(s), 옵션);
    //옵션은 객체 타입으로 
    gsap.to(badges, .6, {
      //opacity만 쓰면 시각적으로만 사라지는 것이지, 실제로는 존재함, 클릭 가능
      opacity: 0,
      display: 'none'
    });
  } else {
    //배지 보이기
    gsap.to(badges, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

//VISUAL 이미지들 순차적으로 하나씩 나타나도록
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //애니메이션 처리: gsap.to(요소, 지속시간(s), 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

//swiper Swiper(선택자 , 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  //direction: 'horizontal', //기본값
  //한번에 3개의 슬라이드를 보여주겠다
  slidesPerView: 3,
  //10px 간격으로
  spaceBetween: 10,
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 //5초에 한번씩 슬라이드
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion){
    //숨김 처리
    promotionEl.classList.add('hide');
  }else{
    //보여짐 처리
    promotionEl.classList.remove('hide');
  }
});