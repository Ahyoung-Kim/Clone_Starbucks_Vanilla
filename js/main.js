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