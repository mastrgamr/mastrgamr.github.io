//Where my jQuery and Vanilla go.... mmmmm, Vanilla
$(document).ready(function () {

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', 'particles.json', function () {
		console.log('callback - particles.js config loaded');
	});

	//ignore the function below
	$('#play-btn').click(function () {
		$(this).addClass('animated fadeOutRight');
		/*
		$(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			//something
		});
		*/
	});

	//var navToTop = $('#nav').offset().top;
	var headerHeight = $('.header').height();
	//console.dir('$(\'.header\').height(): ' + $('.header').height());

	$(window).scroll(function () {

		//console.log($(window).scrollTop())
		if ($(window).scrollTop() > headerHeight) {
			console.log('My head!');
			$(nav).addClass('fixed-nav');
			$('.content').css('margin-top', headerHeight - 82);
			$('.content').css('padding-top', 132);
		} else {
			$(nav).removeClass('fixed-nav');
			$('.content').css('margin-top', headerHeight);
			$('.content').css('padding-top', 0);
		}
		
		if ($('.animated').scrollTop() > headerHeight + 500) {
			console.log('OY');
			$('.animated').addClass('slideInUp');
		}
	});
});
