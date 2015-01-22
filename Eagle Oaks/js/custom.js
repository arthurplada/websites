$(document).ready(function() {

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

//full width announcement and welcome back - above content and sidebar
    $(".main .private-announcements.full").prependTo($(".main"));
    $(".private-announcements.full .wrap-announcements").wrap("<div class='wrap'>");
    $(".welcome-back").prependTo($(".main"));

//Dropdown Buttons
    $(".btn-dropdown").on("click", function() {
    	if ($(".dropdown-button").hasClass("open")) {
    		$(".dropdown-button").removeClass("open");
    	} else {
    		$(".dropdown-button").addClass("open");
    	};

        return false;
    });


 //HEADING CHANGES
$('html.club_scripts_msgboard_msgboard_list .content-right br').first().hide();
$('html.club_scripts_msgboard_msgboard_list font b:contains("Club Message Board")').wrap('<h1/>');
$('html.club_scripts_msgboard_msgboard_list font b:contains("Club Message Board")').parent().removeAttr('size').removeAttr('face').removeAttr('color');


//Callout inline fix height
    var bigger_height = 0;
    $(".private_full_width .contentCallout").each(function() {
        if ($(this).height() > bigger_height) {
            bigger_height = $(this).height();
        };
    });
    $(".private_full_width .contentCallout").css("min-height", bigger_height);


//Close Alert
    $(".close-alert").on("click", function() {
        $(".wrap-alert").hide();
        return false;
    });


//Fix Calendar 
    var page_title = $("html.club_scripts_calendar_weekly_calendar .content-right h1").text();
    page_title = page_title.replace("Club ","");
    $("html.club_scripts_calendar_weekly_calendar .content-right h1").text(page_title);

    $("html.club_scripts_calendar_weekly_calendar .cal_frmMain a.cal_back_link").html("&laquo; Back");
    $("html.club_scripts_calendar_weekly_calendar .cal_frmMain a.cal_next_link").html("Next &raquo;");

    $(".club_scripts_calendar_view_club_calendaritem img[src='/club/images/calendar/outlook_calendar.gif']").parent().remove();

    resizeImg();

  $( '.cycle-slideshow' ).on( 'cycle-before', function(e, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag ) {
        $('.cycle-slideshow .slide .slide_descriptions').css({
            '-webkit-transform': 'scale(0.85)',
            '-moz-transform': 'scale(0.85)',
            '-o-transform': 'scale(0.85)',
            'transition': 'all 0.4s ease-out 0s',
            'opacity':'0'
        },1000);
        setTimeout(function(){ $('.cycle-slideshow .slide .slide_descriptions').css({
            '-webkit-transform': 'scale(1)',
            '-moz-transform': 'scale(1)',
            '-o-transform': 'scale(1)',
            'transition': 'all 0.4s ease-out 0s',
            'opacity':'1'
            });},2200);
    });

//ANIMATE HP ITEM CONTENT
    var controller = $.superscrollorama({
        triggerAtCenter: false,
        playoutAnimations: false
    });

    TweenMax.fromTo($('.wrap-header'),1.2,
        {css:{top:'-200px'}, immediateRender:true, ease:Quad.easeInOut},
        {css:{top:'0'},ease:Quad.easeInOut})
            

    controller.addTween('.hp-welcome', 
        (new TimelineLite())
        .append([
            TweenMax.fromTo($('.welcome-text'),1,
                {css:{left:"-169%"}, immediateRender:true},
                {css:{left:"0"}}),
            TweenMax.fromTo($('.link-brochure'),1.2,
                {css:{left:"-169%"}, immediateRender:true},
                {css:{left:"0"}}),
            TweenMax.fromTo($('.circle-sml'),1,
                {css:{left:"155%"}, immediateRender:true},
                {css:{left:"55%"}}),
            TweenMax.fromTo($('.circle-lg'),1.15,
                {css:{left:"169%"}, immediateRender:true},
                {css:{left:"69%"}})
        ]),600, -800); 

    controller.addTween('.callout-slider',
        (new TimelineLite())
        .append([
            TweenMax.fromTo($('.animate-span'),0.5,
                {css:{top:"-30px"}, immediateRender:true},
                {css:{top:"0"}})
            ]), 600, -900); 

    controller.addTween('.callout-slider',
        (new TimelineLite())
        .append([
            TweenMax.fromTo($('.slide img'),1.5,
                {css:{top:"-150"}, immediateRender:true},
                {css:{top:"-451"}})
            ]), 1100, -800);  

    controller.addTween('.hp-wedding',
        (new TimelineLite())
        .append([
            TweenMax.fromTo($('.animate-wed-span'),0.5,
                {css:{top:"-30px"}, immediateRender:true},
                {css:{top:"0"}})
            ]), 600, -900); 
    controller.addTween('.hp-wedding', 
        (new TimelineLite())
        .append([
            TweenMax.fromTo($('.wedding-text'),1,
                {css:{left:"-169%"}, immediateRender:true},
                {css:{left:"0"}}),
            TweenMax.fromTo($('.link-wedding'),1.2,
                {css:{left:"-169%"}, immediateRender:true},
                {css:{left:"0"}}),
            TweenMax.fromTo($('.heart-right'),1,
                {css:{right:"-150px",top:"-200px"}, immediateRender:true},
                {css:{right:"-22px",top:"9px"}}),
            TweenMax.fromTo($('.heart-left'),1.15,
                {css:{left:"-150px",top:"300px"}, immediateRender:true},
                {css:{left:"0",top:"119px"}})
        ]),600, -850);
    controller.addTween('.wrap-video',
        (new TimelineLite())
        .append([
            TweenMax.fromTo($('.animate-vid-span'),0.5,
                {css:{top:"-30px"}, immediateRender:true},
                {css:{top:"0"}})
            ]), 600, -900); 
    controller.addTween('.wrap-video', 
        (new TimelineLite())
        .append([
            TweenMax.fromTo($('.video-text'),1,
                {css:{right:"-169%"}, immediateRender:true},
                {css:{right:"0"}}),
            TweenMax.fromTo($('.link-video'),1.2,
                {css:{right:"-169%"}, immediateRender:true},
                {css:{right:"0"}}),
        ]),600, -850);

    $('#playvid').on('click', function () {
        $('#playvid').fadeOut();
        $('#bgvid').fadeOut().get(0).pause();
        $('.wrap-bg-full-vid').fadeIn();
        $('.video-overlay').fadeIn();
        $('#bgfullvid').get(0).play();
    });

    $('#video-overlay').click( function() {
        var video = $('#bgfullvid');
        $(video).get(0).paused ? $(video).get(0).play() : $(video).get(0).pause();
    });
});

$(window).resize(function () {
    resizeImg();
});
$(window).scroll(function () {
    if ($('#playvid').scrollTop() < 400) {
        $('#bgvid').get(0).play();
    }
});

function resizeImg() {
    $("#hp-slideshow .slide").height($(window).height()-120);
}


