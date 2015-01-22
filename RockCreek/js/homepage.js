$(document).ready(function() {
    
    //Callout 1 config 
    $('.callout').hover(function() {
        $(this).find(".top").stop().animate({bottom:'0px'});
    }, function() {
        $(this).find(".top").stop().animate({bottom:'-250px'});        
    });

    //Callout 2 config 
    $('.callout2').hover(function() {
        $(this).find(".bottom").stop().animate({top:'0px'});
    }, function() {
        $(this).find(".bottom").stop().animate({top:'-250px'});        
    });


    $("a.iframe").fancybox({
        'titleShow'     : false,
        'transitionIn'  : 'fade',
        'transitionOut' : 'fade',
    });
	
});

