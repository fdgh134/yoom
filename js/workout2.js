$(function(){

  $('.line').addClass("lineafter").addClass("linebefore");

  setTimeout(function(){
    $('.work_detail, .detail_inner').removeClass("none");
    $('.detail_inner').addClass("animate__fadeInUp");
    $('.line').removeClass("none");
  },2000);
  /* 마우스 스크롤 이벤트 */
  
  let isRotatedOut = false;
  
  window.addEventListener('scroll', function () {
    let value = window.scrollY;
    console.log("scrollY", value);
  
    if (value > 399 && !isRotatedOut) {
      isRotatedOut = true;
      $('.mockup').removeClass("animate__fadeInUp").removeClass("animate__fadeInDown").addClass("animate__fadeOutUp");
      $('.discription').removeClass("animate__fadeInUp").removeClass("animate__delay-1s").removeClass("animate__fadeInUp").addClass("animate__fadeOutUp");
      $('.detail_inner').removeClass("animate__fadeOutDown").addClass("animate__fadeInUp");
    } else if (value <= 400 && isRotatedOut) {
      isRotatedOut = false;
      $('.mockup').removeClass("animate__fadeOutUp").addClass("animate__fadeInDown");
      $('.discription').removeClass("animate__fadeOutUp").addClass("animate__fadeInDown");
      $('.detail_inner').removeClass("animate__fadeInUp").addClass("animate__fadeOutDown");
    } else if (value >= 800) {
      $('.other_project, .contact').removeClass("none").removeClass("animate__fadeOutDown").addClass("animate__animated").addClass("animate__fadeInUp");
    } else if (value < 800){
      $('.other_project, .contact').removeClass("animate__fadeInUp").removeClass("animate__fadeOutDown").addClass("animate__fadeOutDown");
    } 

  });

  $(".infobtn1").click(function(){
    window.open("https://www.metainno.co.kr/");
  });
  $(".infobtn2").click(function(){
    window.open("https://robot.metainno.co.kr/");
  });
  $(".infobtn3").click(function(){
    window.open("https://morder.metainno.co.kr/");
  });
  $(".infobtn4").click(function(){
    window.open("https://corp.metainno.co.kr/");
  });
  $(".infobtn5").click(function(){
    window.open("http://yoomin102.dothome.co.kr/");
  });
  $(".infobtn6").click(function(){
    window.open("http://snfour4.dothome.co.kr/");
  });
  $(".infobtn7").click(function(){
    window.open("http://snfour5.dothome.co.kr/");
  });
  $(".infobtn8").click(function(){
    window.open("http://glox.co.kr/");
  });
});