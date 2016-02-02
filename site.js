//Where my jQuery and Vanilla go.... mmmmm, Vanilla
$(document).ready(function() {
    
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
	
    //ignore the function below
	$( '#play-btn' ).click(function() {  
		$(this).addClass('animated fadeOutRight');
		/*
		$(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			//something
		});
		*/
	});
	
	//var navToTop = $('#nav').offset().top;
    var navToTop = $('.header').height();
    //var navHeight = $(nav).height(); //TODO: this isnt the fucking height!! 
    //magic number = 85
	
	$(window).scroll(function () {
		
	  //console.log($(window).scrollTop())
		if ($(window).scrollTop() > navToTop) {
		  console.log('At the Top!');
			$('#nav').addClass('fixed-nav');
            $('.content').css("padding-top", 137); //TODO: patchwork, idk were the extra 40px coming from
		} else {
            $('#nav').removeClass('fixed-nav');
            $('.content').css("padding-top", 97);
        }
  });
	
});