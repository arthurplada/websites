$(document).ready(function() {
    
    $(".box-slideshow").cycle({
		fx: 'fade',
    });

    var current = 1;
	var height = $('.wrap-slidetext li').height();
	var numberDivs = $('.wrap-slidetext li').length;
	var first = $('.wrap-slidetext li:nth-child(1)');
	setInterval(function() {
		var number = current * -height;
		
		first.animate({ 'marginTop': number}, 1000);
		if (current === numberDivs - 1) {
			first.delay(1000);
			first.animate({ 'marginTop': 0}, 1000);
			current = 1;
			first.delay(1000);
		} else current++;
	}, 3000); 
    
    resizeImg();


    $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').stop().animate({
	          scrollTop: target.offset().top
	        }, 2000,'easeInOutExpo');
	        return false;
	      }
	    }
	});


});

$(window).scroll(function() {
    
    if($(window).scrollTop() > $(window).height()) {
        $(".homepage-content-navigation").addClass("fixed-navigation");
        $("#homepage-content").css("padding-top", "50px");
    } else {
        $(".homepage-content-navigation").removeClass("fixed-navigation");
        $("#homepage-content").css("padding-top", "0px");
    }

    
	for (var i = $('.wrap-homepage-content .homepage-content').length - 1; i >= 0; i--) {
		var current_box = $('.wrap-homepage-content .homepage-content')[i].id;
		var scroll_value = $(document).scrollTop();

		var position_ini = ($("#"+current_box).position().top) - 20;
		var position_end = position_ini + $("#"+current_box).height();

		if (scroll_value > position_ini && scroll_value < position_end) {
			$(".nav-homepage li").removeClass("active");
			$('a[href=#'+current_box+']').parent().addClass("active");
		};
		
	};

}); 

$(window).resize(function() {
	resizeImg();
});

function resizeImg() {
	$(".wrap-header").height($(window).height());
}
