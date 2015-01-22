$(document).ready(function() {
    
    $(".box-slideshow").cycle({
		fx: 'fade',
    });
    
});

$(document).scroll(function() {

	var page_height = $("html").height();
    var footer_height = $(".footer").height() + 78;
    var screen_height = $(window).height();

    var position = $(window).scrollTop();

    var calc = page_height - screen_height - footer_height;

    if(calc < position) {
    	$("#nav-slide").css("bottom", (position - calc) + 30);
    }

    //window.console.log("page - "+ page_height + " footer - "+footer_height+" position - "+position + "window screen - "+ screen_height);

}); 