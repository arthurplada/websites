$(document).ready(function() {
    //$('.cycle').cycle();
    $('a.fancy').fancybox();


    if(DetectIpad()) {
        $(".notie").addClass("ipad-fix");
    }

    
/*MAIN NAVIGATION*/   
    $('ul.main_nav li.dropdown').hover(function() {
        $(this).find("ul.subnav").stop(true,false).slideDown('fast');
    }, function() {
        $(this).find("ul.subnav").stop(true,false).delay(100).slideUp('fast');
    });
    $("ul.main_nav li.dropdown ul li a").hover(function(){
        $(this).parent("li").addClass("hover");
        $(this).parent("li").children("ul").css("top",($(this).offset().top-87));
    }, function(){
        $(this).parent("li").removeClass("hover");
    });
        

/*WEATHER*/
    if ($("#box-weather").length) {
        $.simpleWeather({
            zipcode: "93923",
            unit: 'f',
            success: function(weather) {
                $("#box-weather").append('<div class="weatherpic"><img width="180" src="'+weather.image+'" /></div>');
                $("#box-weather").append('<h1>'+weather.temp+' &deg;F</h1>');
                $("#box-weather").append("<span>"+weather.currently+"</span>");

                $("#box-weather").append('<a href="'+weather.link+'" target="_blank">View Forecast &raquo;</a>');
            },
            error: function(error) {
                $("#box-weather").html('<p>'+error+'</p>');
            }
        });
    }

/*PLACEHODLER*/
	$('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
        	input.val('');
        	input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
        	input.addClass('placeholder');
        	input.val(input.attr('placeholder'));
        }
    }).blur().parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
        	var input = $(this);
        	if (input.val() == input.attr('placeholder')) {
        		input.val('');
        	}
        });
    });

/*TESTIMONIAL SECTION - PUBLIC*/
$(".regular_testimonials .wrap_testimonials").live("click", function() {

        if ($(this).hasClass("open_testimonials")) {

            $(this).animate({
                height: 40
            }, 1000, function() {
                $(this).removeClass("open_testimonials");
                $(this).find("h3 i").removeClass("fa-minus-circle");
                $(this).find("h3 i").addClass("fa-plus-circle");
            });

        } else {

            var height = $(this).height() + 40 +  $(this).find(".testimonial_open").height();

            $(this).animate({
                height: height
            }, 1000, function() {
                $(this).addClass("open_testimonials");
                $(this).find("h3 i").removeClass("fa-plus-circle");
                $(this).find("h3 i").addClass("fa-minus-circle");
            });

        }

    });



/*PAGE TITLES*/
//PUBLIC SIDE TITLE SECTION
	$('html.ns_au h1.current_section_title').text("About The Preserve");
		$('html.ns_story h1.current_section_title').text("About The Preserve");
	$('html.ns_re h1.current_section_title').text("Real Estate");
        $('html.ns_adr h1.current_section_title').text("Real Estate");
        $('html.ns_plc h1.current_section_title').text("Preserve Land Company");
        $('html.ns_adr h1.current_section_title').text("Architecture Design Review");
	$('html.ns_mem h1.current_section_title').text("Membership");
	$('html.ns_pland h1.current_section_title').text("Santa Lucia Conservancy");
	$('html.ns_life h1.current_section_title').text("Amenities & Events");
		$('html.ns_ph h1.current_section_title').text("Recreation");
		$('html.ns_pg h1.current_section_title').text("Preserve Golf Club");
		$('html.ns_phike h1.current_section_title').text("Recreation");
		$('html.ns_psport h1.current_section_title').text("Recreation");
//PRIVATE SIDE TITLE SECTION
	$('html.ns_mylocker h1.current_section_title').text("Member Home");
		$('html.acct h1.current_section_title').text("Member Home");
		$('html.ns_ci h1.current_section_title').text("Community Information");
        $('html.ns_m h1.current_section_title').text("Membership");
        $('html.ns_pcf h1.current_section_title').text("Member Home");
        $('html.ns_acct h1.current_section_title').text("My Account");
            /*h2*/$('<h2>Calendar</h2>').insertBefore('html.ns_mylocker .cal_printable_view_wrap.cal_printlink');
	$('html.ns_d h1.current_section_title').text("Dining & Social");
        $('html.ns_hrh h1.current_section_title').text("Hacienda & Ranch House Lodging");
	$('html.ns_l h1.current_section_title').text("Golf & Recreation");
		$('html.ns_g h1.current_section_title').text("Golf");
		$('html.ns_h h1.current_section_title').text("Fitness");
        $('html.ns_sc h1.current_section_title').text("Summer Camps");
		$('html.ns_t h1.current_section_title').text("Tennis");
        $('html.ns_p h1.current_section_title').text("Pool");
        $('html.ns_ml h1.current_section_title').text("Moore's Lake");
		$('html.ns_e h1.current_section_title').text("Equestrian");
		$('html.ns_trails h1.current_section_title').text("Trails");
	$('html.ns_hoa h1.current_section_title').text("Community");
		$('html.ns_rs h1.current_section_title').text("Resident Services");
		$('html.ns_dr h1.current_section_title').text("Design Review");
		$('html.ns_csd h1.current_section_title').text("Community Services District");
        $('html.ns_land h1.current_section_title').text("Santa Lucia Conservancy");
        $('html.ns_real h1.current_section_title').text("Real Estate");



	//MAIN NAV ACTIVE STATES
	$('html.ns_au ul.main_nav li#AU').addClass("active");
		$('html.ns_story ul.main_nav li#AU').addClass("active");
	$('html.ns_re ul.main_nav li#RE').addClass("active");
        $('html.ns_adr ul.main_nav li#RE').addClass("active");
        $('html.ns_plc ul.main_nav li#RE').addClass("active");
	$('html.ns_mem ul.main_nav li#MEM').addClass("active");
	$('html.ns_pland ul.main_nav li#PLAND').addClass("active");
	$('html.ns_life ul.main_nav li#LIFE').addClass("active");
		$('html.ns_ph ul.main_nav li#LIFE').addClass("active");
		$('html.ns_pg ul.main_nav li#LIFE').addClass("active");
		$('html.ns_phike ul.main_nav li#LIFE').addClass("active");
		$('html.ns_psport ul.main_nav li#LIFE').addClass("active");



/*MRM CSS STYLES*/

/*PUBLIC*/

/*FORMS*/
    $("#recaptcha_widget_div").parent().parent().parent().parent().addClass('CapturaContainer');
    $("html.club_scripts_contact_contact_info font h1:contains('Contact Us')").replaceWith('<h2>Contact Us</h2>');
    $(".club_scripts_contact_contact_info font h1:contains('Get More Info')").replaceWith('<h2>Get More Info</h2>');
    $("html.club_scripts_contact_contact_info form span:contains('* Bold Fields are Required')").parent().parent().parent().parent().css('float','left').css('width','100%');

/*NOT NEEDED*/
    /* 
    $("html.club_scripts_imagealbum_view_albums .albumtitle").after( "<hr class='public'>" );
    $("font b:contains('All Image Albums')").wrap('<h2/>').css('font-weight','normal');
    $(".club_scripts_imagealbum_view_albums_list h2:contains('All Image Albums')").after( "<hr class='public'>" );
    $(".club_scripts_contact_contact_info h2:contains('Get More Info')").after( "<hr class='public'>" );
    $("html.club_scripts_realestate_restprop_list font b:contains('View Property List')").wrap('<h2/>').css('font-weight','normal');
    */


/*PRIVATE*/
    $("img[src*='/club/images/1x1.gif']").hide();
    $(".right_content table tr td div.back_button").parent().parent().hide();

/*MY ACCOUNT & STATEMENTS*/
    $('html.club_scripts_account_view_account .right_content br').first().hide();
    $("html.club_scripts_account_view_account font b:contains('View Account Statements')").replaceWith('<h2>View Account Statements</h2>');
    $('html.club_scripts_account_view_account .right_content table font b:contains("Sorry but there is no statement information on file for your account.")').css('font-weight','normal').parent().removeAttr('face').removeAttr('size');
    $("html.ns_acct .private .right_content form font table ").find("td[bgcolor=#536D23]").attr("bgcolor","");
    $('html.club_scripts_member_member_profile .memberprofile-wrap form ').find('td[bgcolor="#536D23"]').find('font[color="#000000"]').attr('color','#fff');

/*MAIN CONTENT HR*/
    $("html.club_scripts_clubpers_view_clubpers_list .private hr.public").hide();
    $("html.club_scripts_imagealbum_view_albums_list .private hr.public").hide();

/*CALENDAR*/
    $("html.club_scripts_calendar_weekly_calendar .mainContent.clearfix").show();
    $('html.club_scripts_calendar_weekly_calendar table.cal_main tr.day_title td.cal_day_label a span.cal_today').parent().parent().addClass('today_wrap');
    $('html.club_scripts_calendar_view_club_calendaritem .right_content table td[bgcolor=#536D23] font').removeAttr('face').removeAttr('color').removeAttr('size').wrap('<h2 class="titledetail" />');
    $('html.club_scripts_calendar_view_club_calendaritem .right_content table td[bgcolor=#536D23]').removeAttr('bgcolor');
    $('html.club_scripts_calendar_view_club_calendaritem .right_content table td font[color=#536D23]').removeAttr('color').removeAttr('face').removeAttr('size');

    $("html.club_scripts_contact_contact_info .private .right_content form font table ").find("td[bgcolor=#536D23]").attr("bgcolor","");

});