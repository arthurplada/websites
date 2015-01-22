$(document).ready(function() {

    $('#website').addClass('timeline');
    $('.ul_timeline li').first().addClass('activeLi');

    $('.item_timeline').click(function() {
        
        var year = this.title;
        var text = $(this).html();
        var href = $(this).attr('href');
        var img = $(this).parent().find("img").attr("src");

        var testimonials_txt = $(this).parent().find("span blockquote").html();
        var testimonials_name = $(this).parent().find("span b").html();

        var item = this;

        $('.item_timeline').parent().removeClass('activeLi');

        $('.text-timeline h3').animate({ opacity: 0 }, 'slow');
        $('.text-timeline p').animate({ opacity: 0 }, 'slow');
        $('.text-timeline a').animate({ opacity: 0 }, 'slow');

        $('.title-timeline blockquote').animate({ opacity: 0 }, 'slow');
        $('.title-timeline p').animate({ opacity: 0 }, 'slow');

        setTimeout(function() {
        	$('.text-timeline h3').html(year);
        	$('.text-timeline p').html(text);
            $('.text-timeline a').attr('href',href);
            $('.trophy').css('background-image', "url("+img+")");

            $('.title-timeline blockquote').html(testimonials_txt);
            $('.title-timeline p').html(testimonials_name);

        	$(item).parent().addClass('activeLi');
        	
        }, 600);

		
        $('.text-timeline h3').animate({ opacity: 1 }, 'slow');
        $('.text-timeline p').animate({ opacity: 1 }, 'slow');
        $('.text-timeline a').animate({ opacity: 1 }, 'slow');
        $('.title-timeline blockquote').animate({ opacity: 1 }, 'slow');
        $('.title-timeline p').animate({ opacity: 1 }, 'slow');


        return false;
        

    });
    
});