$(function(){

  $('.line').addClass("lineafter").addClass("linebefore");
  $('.header_top').removeClass("none");
  /* 마우스 스크롤 이벤트 */
  
  let mainContent = document.querySelector(".content");
  let isRotatedOut = false;
  
  window.addEventListener('scroll', function () {
    let value = window.scrollY;
    console.log("scrollY", value);
  
    if (value > 399 && !isRotatedOut) {
      isRotatedOut = true;
      $('.resume_wrap').removeClass("animate__fadeInUp").removeClass("animate__fadeInDown").addClass("animate__fadeOutUp");
     
    } else if (value <= 400 && isRotatedOut) {
      isRotatedOut = false;
      $('.resume_wrap').removeClass("animate__fadeOutUp").addClass("animate__fadeInDown");
    }

  });

});