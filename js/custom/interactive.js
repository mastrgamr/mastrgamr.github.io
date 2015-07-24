var toggle = $('.toggle');

var contactBtn = $('.contact');
var about = $('#aboutContent');
var portfolio = $('#portfolioContent');
var swapContent = false;

var button = $('.btn');

var navHighlights = document.getElementsByClassName('navbar-nav');

toggle.click(function() {
	if(toggle.hasClass('active')){
		toggle.removeClass('active');
		$(this).addClass('active');
	}
	//alert("Clicked!");
});

button.click(function() {
	$('.foot').addClass('fade');
});

$('.portfolio').click(function() {
	aboutContent.fadeOut(400);
});
