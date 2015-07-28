var toggle = $('.toggle');

var button = $('.btn');

var navHighlights = document.getElementsByClassName('navbar-nav');

toggle.click(function() {
	if(toggle.hasClass('active')){
		toggle.removeClass('active');
		$(this).addClass('active');
	}
});
