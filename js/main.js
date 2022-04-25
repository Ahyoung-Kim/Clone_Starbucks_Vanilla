const badges = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

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


    //버튼 보이기
    gsap.to(toTopEl, 0.2, {
      x: 0
    })

  } else {
    //배지 보이기
    gsap.to(badges, .6, {
      opacity: 1,
      display: 'block'
    });

    //버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x: 100
    })
  }
}, 300));

toTopEl.addEventListener('click', function (){
  gsap.to(window, .7, {
    scrollTo: 0   //gsap의 scrollToPlugIn CDN
  })
});

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


//아이콘 둥둥

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  //애니메이션 처리: gsap.to(요소, 지속시간(s), 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size, //y축으로 얼마만큼 움직이면서 애니메이션
    repeat: -1, //무한 반복
    yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생해서 위아래로 재생되게
    ease: Power1.easeInOut,  //gsap easing
    delay: random(0, delay) //몇 초 뒤에 애니메이션을 실행하겠다.
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  //메소드체이닝 : 스크롤 감시.클래스넣었다뺐다.
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //(현재 뷰포트의 맨 위는 0, 맨 아래는 1) 뷰포트의 0.8 지점에 걸렸을 때
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());

});


new Swiper('.awards .swiper', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, //한 번에 5개의 슬라이드 보이게
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});