$(document).ready(function(){

/******GENERAL******/
$('a').focus(function() { $(this).blur(); });

//placeholder (Need Include - jquery.html5-placeholder-shim.js)
$.placeholder.shim();

$('html.club_scripts_clubpers_view_clubpers div.image_pers img').removeAttr('width').removeAttr('height');

//Back Button
$("img[src*='btn_back.gif']").parent('a').html("Back").wrap('<div class="back_button" />');
$("img[src*='btn_back.gif']").hide();

//Right Image
$("img[src*='/club/images/1x1.gif']").hide();

/******PRIVATE SIDE SECTION PAGE******/
//highlight
$('ul.highlights li').each(function(){
  if ($(this).find('.desc').html().length == "")
    $(this).find('.desc').css("display", "none");
});

//Split List
splitList();

//upcoming events
$("li.remove").remove();

/******PHOTO ALBUMS******/
//Image Album List
    //resize thumbnails
    var image = $('html.club_scripts_imagealbum_view_albums_list .album-cover a img');
    image.each(function() {
        var width = $(this).width();
        var height = $(this).height();      
        if ( width > height ) {
            $(this).height(160);
            $(this).width('auto');
        } else {
            $(this).width(160);
            $(this).height('auto');
        }
    });
    //remove description of none
    var desc = $('html.club_scripts_imagealbum_view_albums_list .album-desc');
    desc.each(function() {
        if ( $(this).text() == "" ) {
            $(this).parent().find('.album-i').remove();
            $(this).remove();
        }
    });
    //hover description view
    $('html.club_scripts_imagealbum_view_albums_list .album-cover').hover(function() {
        $(this).parent().find('.album-desc').stop(true,true).fadeIn('fast');
        $(this).parent().find('.album-i').stop(true,true).fadeOut('fast');
    }, function() {
        //do nothing
    });
    $('html.club_scripts_imagealbum_view_albums_list .album-desc').hover(function() {
        //do nothing
    }, function() {
        $(this).parent().find('.album-desc').stop(true,true).fadeOut('fast');
        $(this).parent().find('.album-i').stop(true,true).fadeIn('fast');
    });
    $('html.club_scripts_imagealbum_view_albums_list .album-desc').click(function() {
        $(this).parent().find('.album-cover a img').click();
    });

//Image Album View    
    // Resize <a> and <img> to fit content
    var contentWidth = $('html.club_scripts_imagealbum_view_albums .iat-gallery').parent().parent().width();
    var x = contentWidth/3.3;
    var y = (contentWidth - (x * 3))/3;
    $('html.club_scripts_imagealbum_view_albums .iat-gallery a').css("margin-right",y-6).css("margin-bottom",y-6);
    $('html.club_scripts_imagealbum_view_albums .iat-gallery a img').load(function() {
        $('.iat-gallery a').each(function() {
            var w = $(this).find("img").width();
            var h = $(this).find("img").height();
            if ( w < h ) {
                $(this).find("img").width(x);
                $(this).find("img").height("auto");
            } else if ( h < w ) {
                $(this).find("img").height(x);
                $(this).find("img").width("auto");
            } else {
                $(this).find("img").height(x);
                $(this).find("img").width("auto");
            }
            $(this).width(x);
            $(this).height(x);
        });
    });


    $(document).ajaxSuccess(function() {
        $(".iat-item").fancybox();
    });
    
//Business Directory
$( ".businessCard" ).click(function( event ) {
    if(event.target.nodeName != "A") {
        window.location.href = $(this).find("h3 a").attr("href");    
    }
});

//ClubPersonell Directory
$( ".clubPersonnelCard" ).click(function( event ) {
    if(event.target.nodeName != "A") {
        if( $(this).find("h3 a").attr("href") ){
        window.location.href = $(this).find("h3 a").attr("href");
        }
    }
});
$('.clubPersonnelCard .clubPersonnelContentWrap h3 a').parent().parent().parent().addClass('hover');


/******MRM PAGE FIXES******/
//request forms
$('html.club_scripts_contact_contact_info .content-right form font[face="arial"]').removeAttr('face').removeAttr('color').removeAttr('size');
$('html.club_scripts_contact_contact_info .content-right table span:contains("* Bold Fields are Required")').removeAttr('style').css('font-weight','bold');

//scorecard
$('html.club_scripts_golf_view_course_scorecard .content-right br').first().hide();
$('html.club_scripts_golf_view_course_scorecard font b:contains("View Course Scorecard")').wrap('<h1/>');
$('html.club_scripts_golf_view_course_scorecard font b:contains("View Course Scorecard")').parent().removeAttr('size').removeAttr('face').removeAttr('color');
$('html.club_scripts_golf_view_course_scorecard font[size="1"]').removeAttr('size');

//account statements
$('html.club_scripts_account_view_account .content-right br').first().hide();
$('html.club_scripts_account_view_account .content-right table[width="600"] br').first().hide();
$('html.club_scripts_account_view_account .content-right font b:contains("View Account Statements")').wrap('<h1/>'); 
$('html.club_scripts_account_view_account .content-right table font[face="arial"]').removeAttr('face').removeAttr('color').attr('size','3');
$('html.club_scripts_account_view_account .content-right table[width="100%"] font').removeAttr('size');

//site search
$('html.club_scripts_search_search .content-right br').first().hide();
$('html.club_scripts_search_search .content-right font b:contains("Site Search")').wrap('<h1/>');
$('html.club_scripts_search_search .content-right font b:contains("Site Search")').replaceWith("Site Search");

//surveys
$('html.club_scripts_survey_survey_list .content-right br').first().hide();
$('html.club_scripts_survey_survey_list .content-right font b:contains("Survey Archive")').wrap('<h1/>').css('font-weight','normal');
$('html.club_scripts_survey_survey_list .content-right table[width="600"] tr:first font b').wrap('<h2/>').parent().parent().parent().parent().addClass('title');
$('html.club_scripts_survey_survey_list .content-right table[width="600"]').attr('width','100%');

//MESSAGE BOARD
$('html.club_scripts_msgboard_msgboard_list .content-right br').first().hide();
$('html.club_scripts_msgboard_msgboard_list .content-right font b:contains("Club Message Board")').wrap('<h1/>').css('font-weight','normal');

//CALENDAR
/*full calendar page*/
$('<h1>Calendar</h1>').prependTo('html.club_scripts_calendar_weekly_calendar .content-right');
$('html.club_scripts_calendar_weekly_calendar td a span:contains("Today")').parent().parent().addClass('today');
$('html.club_scripts_calendar_weekly_calendar table td font[face="arial"]').removeAttr('face');

var currentURL = parseUri(window.location).file;
if (currentURL == "weekly_calendar.asp" ) {
    var contentContainer = $('div.content-right');
    contentContainer.hide();
    $('div.content-right table:first').addClass("cal_printlink");
    $('div.content-right form[name|="frmMain"] table:first').addClass("cal_nav");
    $('div.content-right form[name|="frmMain"] table:nth-child(2)').addClass("cal_main");
    $('table.cal_main tr:nth-child(odd)').addClass("day_title");
    $('table.cal_main tr:nth-child(even)').addClass("day_box");
    $('div.content-right form[name|="frmPersCal"] table:first').addClass("cal_add_title");
    $('div.content-right form[name|="frmPersCal"] table:nth-child(3)').addClass("cal_add_form");
    $('div.content-right form[name|="frmPersCal"]').addClass("personal_calendar_entry");
    
    var calBack = $("img[src*='icon_Back.gif']");
    calBack.parent('a').addClass("cal_back_link");
    calBack.parent('a').html("« Back");
    var calNext = $("img[src*='icon_Next.gif']");
    calNext.parent('a').addClass("cal_next_link");
    calNext.parent('a').html("Next »");

    $('.day_title td a font').each(function(index) {
        var current = $(this);
        var linkText = current.html();
        if (linkText == "Today") {
            current.parent().addClass("today");
        }
        current.parent().html(linkText);

    });
    $('.today').parent().addClass("today_title");

    $('table.cal_add_form input[type|="submit"]').addClass("form_btn");
    $('table.cal_add_form input[type|="reset"]').addClass("form_btn");
    
    contentContainer.show();
}


//VIEW CALENDAR FIX
if ($(".club_scripts_calendar_view_club_calendaritem").length != 0) {
    $(".content-right br:first").remove();
    $(".content-right table:first td:first font[size='5']").replaceWith("<h1>"+$(".content-right table:first td:first font[size='5']").html()+"</h1>");
    $(".content-right h1:first").parent("td").removeAttr("bgcolor");
    $(".content-right table").eq(2).css("margin-top","22px");
    $(".content-right table").eq(3).css("margin-top","22px");
    $(".content-right table").eq(3).find("table:first > tr").eq(1).css("margin-top","22px");
    $(".content-right table").removeAttr("size").find("td font[size='3']").wrap("<p/>")
}

/*calendar detail*/
$('html.club_scripts_calendar_detail_calendar .content-right table[width="600"]').attr('width','100%');
$('html.club_scripts_calendar_detail_calendar .content-right table td:contains("Select Calendar Event Category:")').parent().parent().parent().attr('width','100%');
$('html.club_scripts_calendar_detail_calendar .content-right table[width="100%"] font[face="arial"]').removeAttr('face');
$('html.club_scripts_calendar_detail_calendar .content-right table td[colspan="4"]').parent().addClass('line');
$('html.club_scripts_calendar_detail_calendar .content-right table td font').removeAttr('size')
/*daily calendar*/
$('html.club_scripts_calendar_daily_calendar table tr td img[src="/club/images/Calendar/top.gif"]').parent().parent().parent().parent().hide();



//COURSE TOUR
var currentURL = parseUri(window.location).file;
if (currentURL == "view_course.asp" ) {
    $('div.content-right').find('table td font big').parent().parent().html("<p class='courseintrotext'><strong>Click on the hole number to view specific hole information.</strong></p>");
    $(".content-right").find("font[color='#008000']").attr("color","#5E7360");
}

//COURSE TOUR - HOLE
var currentURL = parseUri(window.location).file;
if (currentURL == "View_Course_Hole.asp" ) {
    $(".content-right").find("td[bgcolor='#CEFFCE']").attr("bgcolor","#CCCCCC");
    $(".content-right").find("td[bgcolor='#333399']").attr("bgcolor","#5E7360");
    $(".content-right").find("font[color='#CEFFCE']").attr("color","#FFFFFF");
    $(".content-right").find("table[bgcolor='#CEFFCE']").removeAttr("bgcolor","").removeAttr("border");
    $(".content-right").find("font[color='#008000']").attr("color","#5E7360");
    $(".content-right").find("hr[color='#008000']").attr("color","#5E7360");
    $(".content-right").find("td[bgcolor='#ceffce']").attr("bgcolor","#CCCCCC");
    $(".content-right").find("td[bgcolor='#333399']").attr("bgcolor","#5E7360");
    $(".content-right").find("font[color='#ceffce']").attr("color","#FFFFFF");
    $(".content-right").find("table[bgcolor='#ceffce']").removeAttr("bgcolor","").removeAttr("border");
    $(".content-right").find("font[color='#008000']").attr("color","#5E7360");
}

});

function splitList() {
    var num_cols = 3,
    container = $('.split-list'),
    listItem = 'li',
    listClass = 'sub-list';

    container.each(function() {

        if($(this).attr("columns") != "") {
            num_cols = $(this).attr("columns");
        }

        var listWidth = 100 / num_cols;

        var items_per_col = new Array(),
        items = $(this).find(listItem),
        min_items_per_col = Math.floor(items.length / num_cols),
        difference = items.length - (min_items_per_col * num_cols);
        for (var i = 0; i < num_cols; i++) {
            if (i < difference) {
                items_per_col[i] = min_items_per_col + 1;
            } else {
                items_per_col[i] = min_items_per_col;
            }
        }
        for (var i = 0; i < num_cols; i++) {
            $(this).append($('<ul ></ul>').addClass(listClass).width(listWidth+"%"));
            for (var j = 0; j < items_per_col[i]; j++) {
                var pointer = 0;
                for (var k = 0; k < i; k++) {
                    pointer += items_per_col[k];
                }
                $(this).find('.' + listClass).last().append(items[j + pointer]);
            }
        }
    });
}


function parseUri (str) {
    var o   = parseUri.options,
        m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
        uri = {},
        i   = 14;
    while (i--) uri[o.key[i]] = m[i] || "";

    uri[o.q.name] = {};
    uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
        if ($1) uri[o.q.name][$1] = $2;
    });

    return uri;
};

parseUri.options = {
    strictMode: false,
    key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
    q:   {
        name:   "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
};