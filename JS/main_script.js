(function($){
    $(window).load(function(){
        $('.content').mCustomScrollbar({
        	theme:"dark-thick",
        	scrollInertia: 275
        });
    });
})(jQuery);

$(document).ready(function(){
	$('img').click(function() {
		$(this).fadeOut('fast');
	});
	/* The following will not work with a custom scroll bar; should be replaced with button*/
	$('.content').scroll(function() {
		$('.my_face').fadeOut('fast');
		$('header').slideUp();
		$('.content').css("margin", "50px 100px 0 150px");
		$('.current').css("margin", "0px 100px 0 150px");
	});
});
