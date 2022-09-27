$(document).ready(function(){
    var wd = $(window);
    /*each() : 선택한 요소 각각에 대하여 함수를 실행*/
    $('div[data-type="background"]').each(function(){
        /*data(): data-*에 속성값을 반환해 줌*/
        var th = $(this);
        $(window).scroll(function(){
            /*마이너스 값으로 스크롤 방향을 반대로 만듦(일종의 착시)*/
            var yPos = -(wd.scrollTop());
            /*th.data('speed')값으로 나눠줌으로 스크롤링 정도를 조절(0.5이므로 스크롤 수치 적어짐)*/
            yPos = -(wd.scrollTop()/th.data('speed'));
            /*패럴렉스 기본 방법*/
            var yPos = wd.scrollTop();
            console.log('세로값'+yPos);
            /*배경이미지 안에서만 패럴렉스 실행되게 하기*/
            var coords = '50%' + yPos + 'px';
            console.log('배경포지션값 : ' + coords);
            th.css({'background-position':coords});
        });
    });
});
