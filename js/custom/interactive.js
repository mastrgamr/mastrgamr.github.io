var inactive = $('.inactive');
var isClicked = false;

var button = $('.btn');

var navHighlights = document.getElementsByClassName('navbar-nav');

inactive.click(function() {
	isClicked = true;
	$('.active').removeClass('active').addClass('inactive');
	$(this).removeClass('inactive').addClass('active');
	//alert("Clicked!");
});

button.click(function() {
	$('.foot').addClass('fade');
});
