var toggle = $('.toggle');

var button = $('.btn');

var navHighlights = document.getElementsByClassName('navbar-nav');

toggle.click(function() {
	if(toggle.hasClass('active')){
		toggle.removeClass('active');
		$(this).addClass('active');
	}
});

$(window).scroll(function() {
	if($('.navbar').offset().top > 5){
		$('.navbar-fixed-top').addClass('animated').addClass('slideOutUp')
		$('.nav-animation').removeClass('fadeOutLeft').addClass('fadeInLeft');
	} else if ($('.navbar').offset().top < 5) {
		$('.navbar-fixed-top').removeClass('slideOutUp').addClass('slideInDown');
		$('.nav-animation').removeClass('fadeInLeft').addClass('fadeOutLeft');
	}
});

$(document).ready(
    function(){
        $('#sidenav').mouseenter(
            function(){
                $(this)
                    .animate(
                        {
                            'width':'150px'
                        },250);
            }
        ).mouseleave(
            function(){
                $(this)
                    .animate(
                        {
                            'width':'50px'
                        },250);
            }
        );
    }
);
