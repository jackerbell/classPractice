$(document).ready(function(){
  //DOM이 완성되면 실행된다.
  menu()
  $('#slide_contents').bxSlider({
    auto: true,
    speed:400,
    pause:3000,
    mode:'horizontal',
    autoHover:true,
    pager:true
    /* 여기에다가 slideWidth:1200, slideHeight:300 을 작성해보았으나 변화가 없었음
    그래서 직접 jquery.bxslider.css 파일에서 직접 수정하기로 함 */
  })
})

function menu(){
  $("#gnb>li").hover(
      //mouseover
      function(){
          console.log('mouseover')
          $(".lnb").stop().slideDown()
          //chainging기법, stop을 사용해서 이전 애니메이션 중지
          //->드랍다운 메뉴가 자연스럽게 된다.
          //stop을 안쓰면 애니메이션이 큐에 쌓여서...중첩...
      },
      //mouseout
      function(){
          console.log('mouseout')
          $(".lnb").stop().slideUp()
      }
  )
}
/* 
no Jquery plugIn version (강의 자료)
function slide(){
  setInterval(slide_move,3000)
}

var curTop = 0
function slide_move(){
  $('#slide_contents').animate({'top':curTop},400,'swing')
  curTop = curTop - 300
  if(curTop==-900){
    curTop = 0
  }
}
*/