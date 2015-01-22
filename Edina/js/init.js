$(document).ready(function() {
    $('a').focus(function() {
        $(this).blur();
    });

    //VIEW CALENDAR FIX
    if ($(".club_scripts_calendar_view_club_calendaritem").length != 0) {
        $(".content-right br:first").remove();
        $(".content-right table:first td:first font[size='5']").replaceWith("<h1>"+$(".content-right table:first td:first font[size='5']").html()+"</h1>");
        $(".content-right h1:first").parent("td").removeAttr("bgcolor");
        $(".content-right table").eq(2).css("margin-top","22px");
        $(".content-right table").eq(3).css("margin-top","22px");
        $(".content-right table").eq(3).find("table:first > tr").eq(1).css("margin-top","22px");
    }

    if ($("#box-weather").length) {
        $.simpleWeather({
            zipcode: "33446",
            unit: 'f',
            success: function(weather) {
                $("#box-weather").append('<div class="weatherpic"><img width="95" src="'+weather.image+'" /></div>');
                $("#box-weather").append('<h2>'+weather.temp+'&deg; F</h2>');
                $("#box-weather").append("<span class='first'>"+weather.currently+"</span>");
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
    $('.closeLogin').click(function() {
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
    if ( $('input.password').val() == "" ) $('label.password').fadeIn();

});