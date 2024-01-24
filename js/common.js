
/* 마우스 커서 */

const cursor = document.querySelector(".mouse_cursor"); //첫번째 커서
const cursor2 = document.querySelector(".mouse_cursor2"); //두번째 커서

//마우스 움직일때 이벤트 발생 (e는 마우스 요소)
window.addEventListener("mousemove", e => {

  //GSAP 사용
  gsap.to(cursor, {duration: 0.15, left: e.pageX -5, top: e.pageY -5});
  gsap.to(cursor2, {duration: 0.5, left: e.pageX -15, top: e.pageY -15});

});