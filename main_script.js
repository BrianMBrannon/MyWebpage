$(document).ready(function(){
	$('img').click(function() {
		$(this).fadeOut('fast');
	});
	$('.content').scroll(function() {
		$('.my_face').fadeOut('fast');
		$('header').slideUp();
	});
	$(window).click(function() {
		$('header').slideDown();
	});
});
