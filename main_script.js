$(document).ready(function(){
	$('img').click(function() {
		$(this).fadeOut('fast');
	});
	$('.content').scroll(function() {
		$('header').slideUp();
	});
	$(window).click(function() {
		$('header').slideDown();
	});
});
