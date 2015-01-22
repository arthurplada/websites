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
            zipcode: "29422",
            unit: 'f',
            success: function(weather) {
                $("#box-weather").append('<div class="weatherpic"><img width="150" src="'+weather.image+'" /></div>');
                $("#box-weather").append('<h2>'+weather.temp+'&deg; F</h2>');
                $("#box-weather").append("<span class='first'>"+weather.currently+"</span>");
                $("#box-weather").append('<a href="'+weather.link+'" target="_blank">Forecast &raquo;</a>');
            },
            error: function(error) {
                $("#box-weather").html('<p>'+error+'</p>');
            }
        });
    }

    //login modal
    $(".nav-login").hover(function() {
        
        var divHover = $('.memberLogin');
        
        $('.memberLogin').fadeIn('fast');
        $('.closeLogin').fadeIn('fast');


    }, function() {

        var isHover = false;
        var divHover = $('.memberLogin');
        divHover.hover(function() {
          isHover = true;
        },
        function () {
            $('.memberLogin').fadeOut('fast');
            $('.closeLogin').fadeOut('fast');
        });

        setTimeout(function() {
            if(isHover == false) {
                $('.memberLogin').fadeOut('fast');
                $('.closeLogin').fadeOut('fast');
            }
        }, 500);
        clearInterval();

    });
    


    $('label.username').click(function() {
        if ( $('input.username').val() == "" )
        $('label.username').fadeOut();
        $('input.username').focus();
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
    
    $('label.password').click(function() {
        if ( $('input.password').val() == "" )
        $('label.password').fadeOut();
        $('input.password').focus();
    });
    $('input.password').focus(function() {
        if ( $('input.password').val() == "" )
        $('label.password').fadeOut();
    });
    $('input.password').blur(function() {
        if ( $('input.password').val() == "" )
        $('label.password').fadeIn();
    });
    if ( $('input.password').val() == "" ) $('label.password').fadeIn();
    

    //IP Newsletter    
    $('input.name').focus(function() {
        if ( $('input.name').val() == "Name" )
        $('input.name').val("");
    });
    $('input.name').blur(function() {
        if ( $('input.name').val() == "" )
        $('input.name').val("Name");
    });    
    
    $('input.email').focus(function() {
        if ( $('input.email').val() == "Email" )
        $('input.email').val("");
    });
    $('input.email').blur(function() {
        if ( $('input.email').val() == "" )
        $('input.email').val("Email");
    });

    //private page title
    if ($( "html" ).hasClass( "ns_g" ) || $( "html" ).hasClass( "ns_ser" ) || $( "html" ).hasClass( "ns_gmer" )) { 
       $('.welcome-back h1').html('Golf');
   };
    if ($( "html" ).hasClass( "ns_d" )) {
        $('.welcome-back h1').html('Dining');
    };
    if ($( "html" ).hasClass( "ns_soc" )) {
        $('.welcome-back h1').html('Social');
    };
    if ($( "html" ).hasClass( "ns_hw" ) || $( "html" ).hasClass( "ns_tsp" ) || $( "html" ).hasClass( "ns_rcf" ) || $( "html" ).hasClass( "ns_ss" )) {
        $('.welcome-back h1').html('Health & Wellness');
    };
    if ($( "html" ).hasClass( "ns_yp" )) {
        $('.welcome-back h1').html('Youth Programming');
    };
    if ($( "html" ).hasClass( "ns_ci" )) {
        $('.welcome-back h1').html('Club Information');
    };

});