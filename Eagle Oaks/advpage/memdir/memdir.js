$(document).ready(function(){
	
		//Load Global Variables from script file: /common/scripts/globalvars.asp
	mf = window.membersfirst || {};
	//end load global variables
	
	//load current club ID from the Global Vars file variables.
	var clubID = mf.clubId;
	

	
	var lastSearchText = $('#searchmessage strong span').html();
	if (lastSearchText == "") {
		$('#searchmessage strong').hide();
	}


	var testSearchLetter  = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	$.each(testSearchLetter, function(index, value) {
		
		if ($('html').hasClass("let_"+value)) {
			$('.memdir-atoz a#letterLink_'+value).addClass("active");
			$('#searchmessage strong span').html(value);
			$('#searchmessage strong').show();
			return false;
		}
	});
	

	if($('input.memberdirectory-search-field').val() == "") {
		$('input.memberdirectory-search-field').css("background-position","left bottom");
	} 
	
	$('input.memberdirectory-search-field').bind('focus', function() {
		$(this).css("background-position","left top");
	});
	
	$('input.memberdirectory-search-field').bind('blur', function() {
		if($(this).val() == "") {
			$(this).css("background-position","left bottom");
		} 
	});
	
	$('input.memberdirectory-search-field').bind('click', function() {
		$(this).css("background-position","left top");
	});
	
	
	$('#memberdirectory-advanced-btn').click(function() {
	  if ($(this).hasClass("memberdirectory-advanced-btn-close")) {
		$(this).removeClass("memberdirectory-advanced-btn-close");
		$(this).attr("title", "Show Advanced Search Options");
	  } else {
		$(this).addClass("memberdirectory-advanced-btn-close");
		$(this).attr("title", "Close Advanced Search Options");
	 }
	  $('div.memdir-advanced-search').toggle();
	});
  
  

	//Get List of Activities from WEB Service and build Dropdown field of activities
	$.getJSON('http://webapi.memfirstweb.net/MemberDirectory/Club/Activities?ClubID='+clubID+'&callback=?', function(data) {
 
		$('.memberdirectory-activity-search').append('<select class="activitiesdropdown" name="SEARCH_ACTIVITY"><option value="">Activities</option></select>');
	
		$.each(data, function(i, activity) {
			if (activity.act_code_show_profile === 1 ) {
				$('.activitiesdropdown').append('<option value="' + activity.Act_ID + '">' + activity.act_code_desc + '</option>');
			}
		});
		if ($('select.activitiesdropdown option').length > 1) {
			$('select.activitiesdropdown').addClass("fancyselect");
			/******
		
			Load previously set session variable and set select dropdown to that value
			this is to preserve the value of the dropdown when the user performs a search.
			
			*********/

			
			var loadedactivitiesdropdownVal = store.get('activitiesdropdownSearch');
			if (loadedactivitiesdropdownVal != null) {
				$('select.activitiesdropdown').val(loadedactivitiesdropdownVal);
			}
			store.remove("activitiesdropdownSearch");
			
			
			/***
			Now add the fancy styled dropdown to the select field
			***/
			$('.fancyselect').dropkick({
			  theme : 'black',
			  width: 120
			});

		} else {
			//do nothing
			$('.memberdirectory-activity-search').hide();
		}
		
		
		

				

	});
	
	
	/*****
	
	When the user clicks the form, save a session storage object with the value of the activities dropdown
	
	****/
	$('#memberdirectory-search-btn').click(function() {
		
		var activitiesdropdownVal = $('.activitiesdropdown').val();
		store.set("activitiesdropdownSearch", activitiesdropdownVal);
	
		
	});
	

	var ghinURL = '/common/handicap/ghin_view.asp?GHIN=';
	
	$('.memberdirectory-user-result').each(function() {
		var userGhin = $(this).attr("data-ghin");
		//console.log(userGhin);
		if (userGhin != "") {
			var ghinURLFull = ghinURL+userGhin;
			$('<a href="'+ghinURLFull+'" class="memberdirectory-user-controls-ghin iframe" title="View Ghin Scores" target="_blank">View Ghin Scores</a>').insertAfter($(this).find('.memberdirectory-user-controls-btns a.memberdirectory-user-controls-emailmember'));
		    if ($(this).find(".memberdirectory-user-controls-emailmember").attr("href") != "mailto:") {
			    $(this).find('.memberdirectory-user-controls-btns').addClass('memberdirectory-3btns');
			} else {
			    $(this).find(".memberdirectory-user-controls-btns").css("width","77px");
			}
		}
		
		//verify if email doesn't exists
		if ($(this).find(".memberdirectory-user-controls-emailmember").attr("href") == "mailto:") {
		    $(this).find(".memberdirectory-user-controls-emailmember").before("<div class=\"memberdirectory-user-controls-no-email\"></div>");
		    $(this).find(".memberdirectory-user-controls-emailmember").hide();
		    
		    if (userGhin == "") {
		        $(this).find(".memberdirectory-user-controls-btns").css("width","47px");
		    }
		}
		
		//treat email length size
		if ($(this).find(".memberdirectory-user-email-content").text().length > 27) {
		    $(this).find(".memberdirectory-user-email-content").text($(this).find(".memberdirectory-user-email-content").text().substr(0,24)+"...");
		}
		
	});
	
		
	$('a.memberdirectory-user-controls-ghin').fancybox({
		'width'	:	700,
		'height' : 420,
		'titleShow' : false
		
	});
	
	
	
	$('.memberdirectory-user-controls-addfriend').click(function() {	
		store.set("openfriendlist", true);
	});
	
	
});