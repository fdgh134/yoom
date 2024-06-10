
/* 인트로 */
$(function(){

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEq = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];;
      while (c.charAt(0) == ' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEq) == 0)
        return c.substring(nameEq.length, c.length);
    }
    return null;
  }

  var welcomeSection = $('.welcome-section'),
      enterButton = welcomeSection.find('.content-wrap');

  if (!getCookie("visited")) {

    setTimeout(function(){
      welcomeSection.removeClass('content-hidden');
    },800);

    /* 안녕하세요! */

    enterButton.on('click',function(e){
      e.preventDefault();
      welcomeSection.addClass('content-hidden').fadeOut();

      const tl = gsap.timeline({
        id: 'Timeline',
        onComplete: function () {
          // 트윈이 완료된 후에 실행되는 코드
          $('.wrapper').css('display', 'none');
        }
      });

      const colors = ['#5c6cff', '#5CB8E4', '#F2F2F2'];

      function tween (node) {
        let path = node;
        const delay = Math.random() * 1;
        const length = path.getTotalLength();
        colors.forEach((color, index) => {
          if (index !== 0) {
            path = path.cloneNode();
            node.parentNode.appendChild(path);
          }
          path.setAttribute('stroke', color);
          tl.set(path, {
            strokeDasharray: length + 0.5,
            strokeDashoffset: length + 0.6,
            autoRound: false
          }, 0);
          tl.to(path, {
            strokeDashoffset: 0,
            autoRound: false,
            duration: 1.2,
            ease: 'power3.out'
          }, index * 0.25 + delay);
        });
      }

      function fadeOutAnimation() {

        tl.to('.wrapper', {
          opacity: 0, 
          duration: 1, 
          ease: 'power3.ease'
        });

      }

    document.querySelectorAll('.motion path, .motion line').forEach(p => tween(p));
    fadeOutAnimation();

    /* 프로필사진 액션 */
    
    $('.pic > .imgbox').addClass("animate__flipInY").addClass("animate__delay-4s");
    $('.pic > .imgbox').mouseenter(function(){
      $('.pic').removeClass("animate__headShake").addClass("position-relative").addClass("animate__headShake").addClass("animate__infinite");
      $('.profile').removeClass("none").addClass("animate__lightSpeedInLeft");
      $('.header_top').removeClass("none").addClass("animate__fadeInDown");
      $('.introduce').removeClass("none").addClass("animate__fadeInUpBig").addClass("animate__delay-0.5s").one('animationend', function () {
        // introduce 애니메이션이 끝난 후에 실행되는 부분
        $('.career').removeClass("none").addClass("animate__fadeInUpBig").addClass("animate__delay-0.5s").addClass("careerflex").one('animationend', function () {
          // career 애니메이션이 끝난 후에 실행되는 부분
          $('.introduce svg').each(function(index) {
            setTimeout(function() {
              $(this).addClass("animate__animated").addClass("animate__bounce");
              // 마지막 svg 애니메이션이 끝난 후에 btnframe 애니메이션 실행
              if (index === $('.introduce svg').length - 1) {
                $('.btnframe').removeClass("none").addClass("animate__animated").addClass("animate__delay-1s").addClass("animate__fadeInDown");
                $('.line').addClass("lineafter").addClass("linebefore");
                $('body').removeClass("body_overflow");
                $('.content, .grid, .content2_inner').removeClass("none");
                $('.content2, .contact').removeClass("none");
              }
            }.bind(this), index * 300);
          });

          $('.introduce svg').mouseenter(function(){
            $(this).addClass("animate__rubberBand");
          });

          $('.introduce svg').mouseleave(function(){
            $(this).removeClass("animate__rubberBand").removeClass("animate__bounce");
          });

        });
      });
    });
    $('.wrap').removeClass("content-hidden");

    setCookie("visited", "true", 1);
    });
  } else {
    welcomeSection.remove();
    $('.wrapper').remove();
    $('.profile').addClass("animate__lightSpeedInLeft");
    $('.profile, .introduce, .career, .btnframe, .content, .grid, .grud__title, .card, .content2, .content2_inner, .contact').removeClass("none");

  }
});

/* 마우스 스크롤 이벤트 */

let mainContent = document.querySelector(".content");
let isRotatedOut = false;

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value > 400 && !isRotatedOut) {
    isRotatedOut = true;
    $('.introduce').addClass("animate__rotateOutUpLeft");
    $('.career').addClass("animate__rotateOutUpRight");
    $('.pic, .btnframe').removeClass("animate__infinite").addClass("animate__rotateOut").removeClass("animate__delay-2s").removeClass("animate__delay-1s");
  } else if (value <= 400 && isRotatedOut) {
    isRotatedOut = false;
    $('.introduce').removeClass("animate__rotateOutUpLeft").addClass("animate__rotateInDownLeft");
    $('.career').removeClass("animate__rotateOutUpRight").addClass("animate__rotateInDownRight");
    $('.pic, .btnframe').removeClass("animate__rotateOut").addClass("animate__rotateIn");
  } else if (value <= 200) {
    // 200픽셀 이하일 때
    $('.grid').removeClass("animate__fadeInUp").addClass("animate__fadeOutDown");
    $('.card, .grid__title').removeClass("none");
  } else if (value > 200) {
    // 200픽셀 이상일 때
    $('.grid').removeClass("animate__fadeOutDown").addClass("animate__fadeInUp");
  }

  if (value > 3800) {
    $('.contact').removeClass("animate__fadeOutDown").removeClass("none").addClass("animate__fadeInUp");
  } else if (value <= 3800) {
    $('.contact').removeClass("animate__fadeInUp").addClass("animate__fadeOutDown").addClass("none");
  }

})


/* 각 페이지 이동 */

$(".infobtn").click(function(){
  window.open("work/introduce.html");
});

$(".link1 > div:nth-child(3)").click(function(){
  window.open("work/metapos.html");
});
$(".link2 > div:nth-child(3)").click(function(){
  window.open("work/metapos_torder.html");
});
$(".link3 > div:nth-child(3)").click(function(){
  window.open("work/metapos_robot.html");
});
$(".link4 > div:nth-child(3)").click(function(){
  window.open("work/metainnovation.html");
});
$(".link5 > div:nth-child(3)").click(function(){
  window.open("work/nike.html");
});
$(".link6 > div:nth-child(3)").click(function(){
  window.open("work/zin.html");
});
$(".link7 > div:nth-child(3)").click(function(){
  window.open("work/est.html");
});
$(".link8 > div:nth-child(3)").click(function(){
  window.open("work/glox.html");
});

