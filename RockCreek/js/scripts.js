function parseUri (str) {
	var	o   = parseUri.options,
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




$(document).ready(function(){

	$('.logintitle').hover(
	  function () {
	    $(this).addClass("hover");
	  }, 
	  function () {
	  $(this).removeClass("hover");
	});

	//social config 
    $('.animate').hover(function() {
        $(this).animate({'background-position-y':'0px'});
    }, function() {
        $(this).animate({'background-position-y':'5px'});        
    });

    //Social Form Request

	var hnameInput = $("form.signUpForm input.name");
	var hnameLabel = $("form.signUpForm label.name");
	var hemailInput = $("form.signUpForm input.email");
	var hemailLabel = $("form.signUpForm label.email");
	var hzipInput = $("form.signUpForm input.zip");
	var hzipLabel = $("form.signUpForm label.zip");

	$(hnameInput).focus(function() {
		if ( $(hnameInput).val() == "") {
			$(hnameLabel).fadeOut();
		}
	});
	$(hnameInput).blur(function() {
		if ( $(hnameInput).val() == "") {
			$(hnameLabel).fadeIn();
		}
	});
	$(hemailInput).focus(function() {
		if ( $(hemailInput).val() == "") {
			$(hemailLabel).fadeOut();
		}
	});
	$(hemailInput).blur(function() {
		if ( $(hemailInput).val() == "") {
			$(hemailLabel).fadeIn();
		}
	});
	$(hzipInput).focus(function() {
		if ( $(hzipInput).val() == "") {
			$(hzipLabel).fadeOut();
		}
	});
	$(hzipInput).blur(function() {
		if ( $(hzipInput).val() == "") {
			$(hzipLabel).fadeIn();
		}
	}); 

	//login modal
    $('.btn-login').click(function() {
        $('.login-popup').fadeIn('fast');
        $('.login-overlay').fadeIn('fast');
    });
    $('.closeButton').click(function() {
        $('.login-popup').fadeOut('fast');
        $('.login-overlay').fadeOut('fast');
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
	
	
	var currentURL = parseUri(window.location).file;
	if (currentURL == "view_course.asp" ) {
		$('div.content-right').find('table td font big').parent().parent().html("<p class='courseintrotext'><strong>Click on the hole number to view specific hole information.</strong></p>");
		$(".content-right").find("font[color=#008000]").attr("color","#5E7360");
	}

	var currentURL = parseUri(window.location).file;
	if (currentURL == "View_Course_Hole.asp" ) {
		$(".content-right").find("td[bgcolor=#CEFFCE]").attr("bgcolor","#CCCCCC");
		$(".content-right").find("td[bgcolor=#333399]").attr("bgcolor","#5E7360");
		
		$(".content-right").find("font[color=#CEFFCE]").attr("color","#FFFFFF");
		
		$(".content-right").find("table[bgcolor=#CEFFCE]").removeAttr("bgcolor","").removeAttr("border");
		$(".content-right").find("font[color=#008000]").attr("color","#5E7360");
		$(".content-right").find("hr[color=#008000]").attr("color","#5E7360");
		
		
		$(".content-right").find("td[bgcolor=#ceffce]").attr("bgcolor","#CCCCCC");
		$(".content-right").find("td[bgcolor=#333399]").attr("bgcolor","#5E7360");
		
		$(".content-right").find("font[color=#ceffce]").attr("color","#FFFFFF");
		
		$(".content-right").find("table[bgcolor=#ceffce]").removeAttr("bgcolor","").removeAttr("border");
		$(".content-right").find("font[color=#008000]").attr("color","#5E7360");
	}
	

	var currentURL = parseUri(window.location).file;
	if (currentURL == "weekly_calendar.asp" ) {
			var contentContainer = $('div.content-right');
			contentContainer.hide();
			$('div.content-right table:first').addClass("cal_printlink");
			$('div.content-right form[name|=frmMain] table:first').addClass("cal_nav");
			$('div.content-right form[name|=frmMain] table:nth-child(2)').addClass("cal_main");
			$('table.cal_main tr:nth-child(odd)').addClass("day_title");
			$('table.cal_main tr:nth-child(even)').addClass("day_box");
			$('div.content-right form[name|=frmPersCal] table:first').addClass("cal_add_title");
			$('div.content-right form[name|=frmPersCal] table:nth-child(3)').addClass("cal_add_form");
			$('div.content-right form[name|=frmPersCal]').addClass("personal_calendar_entry");
			
			var calBack = $("img[src*='icon_Back.gif']");
			calBack.parent('a').addClass("cal_back_link");
			calBack.parent('a').html("« Back");
			var calNext = $("img[src*='icon_Next.gif']");
			calNext.parent('a').addClass("cal_next_link");
			calNext.parent('a').html("Next »");
			
			/*
			$('.day_box td a font').each(function(index) {
				var current = $(this);
				var linkText = current.html();
				current.parent().html(linkText);
			});*/
			
			
			
			$('.day_title td a font').each(function(index) {
				var current = $(this);
				var linkText = current.html();
				if (linkText == "Today") {
					current.parent().addClass("today");
				}
				current.parent().html(linkText);

			});
			$('.today').parent().addClass("today_title");
			
			$('table.cal_add_form input[type|=submit]').addClass("form_btn");
			$('table.cal_add_form input[type|=reset]').addClass("form_btn");
			
			contentContainer.show();
			/*contentContainer.animate({
				opacity: 1
			  }, 500, function() {
				// Animation complete.
			  });*/
	}
	
	
	var backButton = $("img[src*='btn_back.gif']");
	backButton.hide();
	backButton.parent('a').wrap('<div class="back_button" />');
	backButton.parent('a').html("Back");

	var RightImage = $("img[src*='/club/images/1x1.gif']");
	RightImage.hide();

});


