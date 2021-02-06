(function($) {
 "use strict";
 
$(document).ready(function(){

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});

});




var headerView=function(){var scroll=$(window).scrollTop();if(scroll<=70){$("body").removeClass("compact");}
else{$("body").addClass("compact");}}


headerView();$(window).scroll(function(){headerView();});

})(jQuery);