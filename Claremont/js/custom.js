$(document).ready(function() {
    
//HP Slideshow
    $('.hp-slideshow').cycle({
        fx: 'fade',
        timeout: 0,
        pager: '#slideshow-pager'
    })

//HP Callout Interactivity
    $('.callouts div a').on({
        mouseenter: function() {
            $(this).stop().animate({bottom: "0"}, 600);
        },    
        mouseleave: function() {
            $(this).stop().animate({bottom: "-150px"}, 600);
        }
    });    

//HP Timeline
    $('.tl-list li').first().addClass('active-time');

    $('.wrap-tl-marker').click(function() {

        var item = this;

        $('.tl-list li').removeClass('active-time', 2000);

        setTimeout(function() {
            $(item).parent().addClass('active-time', 2000);
        }, 400);    
    });

// Weather Plugin
    if ($("#box-weather").length) {
        $.simpleWeather({
            zipcode: "78626",
            unit: 'f',
            success: function(weather) {
                $("#box-weather").append('<div class="weatherpic"><img width="95" src="'+weather.image+'" /></div>');
                $("#box-weather").append('<h2>'+weather.temp+'&deg; F</h2>');
                $("#box-weather").append("<span class='first'>"+weather.currently+"</span>");
                $("#box-weather").append('<a href="'+weather.link+'" target="_blank">View Forecast &raquo;</a>');
            },
            error: function(error) {
                $("#box-weather").html('<p>'+error+'</p>');
            }
        });
    }

//login modal
    $('.bt-member-login').click(function() {
        $('.memberLogin').fadeIn('fast');
        $('.closeLogin').fadeIn('fast');
        console.log ('working');
    });

    $('.bt-member-login').click(function(e) {
        e.preventDefault();
        if ($.cookie('LOGIN_KEY')) {
            window.location = "/club/scripts/mylocker/mylocker.asp?NS=MYLOCKER";
        } else {
            $('.memberLogin').fadeIn('fast');
            $('.loginOverlay').fadeIn('fast');
        }
    });
    
    $('.closeLogin').click(function() {
        $('.memberLogin').fadeOut('fast');
        $('.closeLogin').fadeOut('fast');
    });
    $('.closeButton').click(function() {
        $('.memberLogin').fadeOut('fast');
        $('.closeLogin').fadeOut('fast');
    });

    $('input.username').focus(function() {
        if ( $('input.username').val() == "" )
        $('label.username').fadeOut();
    });
    $('input.username').blur(function() {
        if ( $('input.username').val() == "" )
        $('label.username').fadeIn();
    });
    if ( $('input.username').val() == "" ) $('label.username').fadeIn();
    
    $('input.password').focus(function() {
        if ( $('input.password').val() == "" )
        $('label.password').fadeOut();
    });
    $('input.password').blur(function() {
        if ( $('input.password').val() == "" )
        $('label.password').fadeIn();
    });


//Fix Left Nav 2 Lines
    $(".sidebar-nav li a").each(function() {
        if ($(this).height() > 30) {
            $(this).addClass("two-lines");
        };
    });

//IP Banner Slideshow
    $(".box-slideshow").cycle({
		fx: 'fade',
        pager:  '#nav-slide', 
         
        // callback fn that creates a thumbnail to use as pager anchor 
        pagerAnchorBuilder: function(idx, slide) {
            var image_url = slide.title;
            return '<li><a href="#"><img src="' + image_url + '"  /></a></li>'; 
        } 
    });

//FB Slider
    $('.fb-slider').hover(function() {
        $('.fb-slider').stop(true, false).animate({
            left: '0px'
        })
    }, function() {
        $('.fb-slider').stop(true, false).animate({
            left: '-318px'
        })
    });

//full width announcement - above content and sidebar
    $(".main .private-announcements.full").prependTo($(".main"));
    $(".private-announcements.full .wrap-announcements").wrap("<div class='wrap'>");

//Dropdown Buttons
    $(".btn-dropdown").on("click", function() {
    	if ($(".dropdown-button").hasClass("open")) {
    		$(".dropdown-button").removeClass("open");
    	} else {
    		$(".dropdown-button").addClass("open");
    	};

        return false;
    });


//Fix Calendar 
    var page_title = $("html.club_scripts_calendar_weekly_calendar .content-right h1").text();
    page_title = page_title.replace("Club ","");
    $("html.club_scripts_calendar_weekly_calendar .content-right h1").text(page_title);

    $("html.club_scripts_calendar_weekly_calendar .cal_frmMain a.cal_back_link").html("&laquo; Back");
    $("html.club_scripts_calendar_weekly_calendar .cal_frmMain a.cal_next_link").html("Next &raquo;");

    $(".club_scripts_calendar_view_club_calendaritem img[src='/club/images/calendar/outlook_calendar.gif']").parent().remove();

//MRM Fixes
/*calendar item*/
$('html.club_scripts_calendar_view_club_calendaritem ul.sidebar-nav li a:contains("Calendar")').parent().addClass('active');


});
