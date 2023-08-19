const UI = {
    overlay(){
        let html = `
            <div class="overlay"></div>
        `
        $('body').append(html);
    }
}
$(document).ready(function(){
	$("ul.panel li:not("+$("ul.tab li a.selected").attr("href")+")").hide()

	$("ul.tab li a").mouseover(function(){
		$("ul.tab li a").removeClass("selected");
		$(this).addClass("selected");
		$("ul.panel li").hide();
		$($(this).attr("href")).show();
		return false;
	});

	$(window).scroll(function () {
        100 < $(this).scrollTop() ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut();
      
        if ($(window).width() < 1280) {
            if ($(this).scrollTop() > 100) {
                $('.new-logo').css('width', '145px');
            } else {
                $('.new-logo').css('width', '160px');
            }
        } else {
            if ($(this).scrollTop() > 100) {
                $('.new-logo').css('width', '210px');
            } else {
                $('.new-logo').css('width', '240');
            }
        }
    }),
    $(".scroll-top").on("click", function () {
        return (
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                600
            ),
            !1
        );
    })
	$('.side-toggle').click(function(){
        $('.side-nav').addClass('active')
        UI.overlay()
    })
	$(document).on('click','.overlay',function(){
        $(this).remove()
        $('.side-nav').removeClass('active')
    })
    $('.toggle-item').click(function(){
        let elData = $(this).data('val')

        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        if(elData === 'casino') {
            $('.casino-cards').removeClass('hide')
            $('.slot-cards').addClass('hide')
        }else{
            $('.slot-cards').removeClass('hide')
            $('.casino-cards').addClass('hide')
        }
    })
})