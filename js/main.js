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
