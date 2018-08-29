$(function(){
    // 비쥬얼 영역에 마우스가 올라가면 애니메이션 재생
// 능력치 그래프 
    $('.about_container').hide();
	var yoffset = 500;	// 스크로 보정값
	var about_top = $('.about_box').offset().top - yoffset;
    console.log(about_top);
	$(window).on('scroll', function(){
		var win_scroll_top = $(window).scrollTop();
		
		// #skill 섹션에 도달하면 그래프 애니메이션 시작
		if(win_scroll_top >= about_top){
			$('.about_box').animate({
                width:'50%'
            }, function(){
                $('#about .about2').animate(
                {
                    opacity:1
                },1000)
            });
            $('.about_container')
				.slideDown(1500,'swing');
        };
        $(window).on('scroll', function(){
		var win_scroll_top = $(window).scrollTop();
		var point = [70, 70, 80, 70, 50, 50];
		
		// #skill 섹션에 도달하면 그래프 애니메이션 시작
		if(win_scroll_top >= about_top){
			for(var i = 0; i < 6; i++){
				$('#skill .skill_list span')
					.eq(i)
					.animate({width: point[i]+'%'});
			}	
		}
		console.log(win_scroll_top);
		if(win_scroll_top >= header_height){
			$('#main_gnb').addClass('fixed');
		} else{
			$('#main_gnb').removeClass('fixed');
		}
	});
		
	});
    var yoffset = 400;	// 스크로 보정값
	var about_top = $('#skill').offset().top - yoffset;
	var header_height = parseInt($('#main_header').css('height'));
	console.log(header_height);

	
    $('#work_content').hide();
    var woffset = 0;	// 스크로 보정값
	var work_top = $('.work_box').offset().top - woffset;
    console.log(work_top);
	$(window).on('scroll', function(){
		var win_scroll_wtop = $(window).scrollTop();
		if(win_scroll_wtop >= work_top){
			$('.work_box').animate({
                width:'50%',
            },function(){
                $('#work_content').slideDown(1500,'swing')
                
            });
        }
		
	});
   
    
    
    // 페이지 스크롤 효과
    $('#main_gnb a').on('click', function(){
        // 이동한 내부 링크의 위치값(hash)
        var target = $(this.hash);
        console.log(target);
        $('html, body').animate({
            scrollTop: target.offset().top
        });
        return false; // 앵커태그 무효화
    });

  $('.visual_txt').hide();
    $('#visual').mouseover(
		function(){
			$('.visual_txt')
				.fadeIn(1500,'swing');
		}
	);
});