$(document).ready(function(){
	//Load Global Variables from script file: /common/scripts/globalvars.asp
	mf = window.membersfirst || {};
	//end load global variables
	
	//load current user id of the logged in member as a variable we can use below in JSON calls
	// The user id is stored as a data attribute on the div.memberprofile-details using a token in the advpage template
	var uidofCurrentUser = parseInt(mf.userId);
	var uidofViewedProfile = parseInt($('.memberprofile-details').attr("data-profile-id"));
	var userMemberNumber = mf.userMemberNumber;
	//create a new settings object from the total storage plugin
	//var settings = new Store("memdirectorysettings");  
	
	/* Check for Empty Data Areas and Clean Up */
	
	var locationIconText = $('.memberprofile-user-location').text();
	if (locationIconText == ", ") {
		$('.memberprofile-user-location').text("Location Hidden");
	}
	
	var twitterLinkHref = $('.memberprofile-user-twitter a').attr("href");
	if (twitterLinkHref == "") {
		$('.memberprofile-user-twitter').hide();
	}
	
	var linkedinLinkHref = $('.memberprofile-user-linkedin a').attr("href");
	if (linkedinLinkHref == "") {
		$('.memberprofile-user-linkedin').hide();
	}
	
	var facebookLinkHref = $('.memberprofile-user-facebook a').attr("href");
	if (facebookLinkHref == "") {
		$('.memberprofile-user-facebook').hide();
	}
	
	var emailLinkHref = $('.memberprofile-user-email a').text();
	if (emailLinkHref == "") {
		$('.memberprofile-user-email').html("Not Available");
	}
	
	
	
	if (!$('.memberprofile-user-activities a').length ) {
		$('.memberprofile-user-activities').html('<span style="padding-top:15px;display:block;">No activities or interests have been specified.</span>');
	} else {
	    var str = $(".memberprofile-user-activities").html();
        if (str.charAt(str.length-19) == ",") {
            $(".memberprofile-user-activities").html(str.slice(0, -19));
        }
        
        if ($(".memberprofile-user-activities").height() > 48) {
            $(".memberprofile-user-activities").css("margin-top","9px");
            $(".memberprofile-user-activities-wrap").css("background-image","url(/custom/advpage/memprofile/images/memberprofile-activities-bigger-bg.png)").css("height","102px");
        }
	}
	
	
	if ($(".memberprofile-primary-adr-city-state").text() == ", ") $(".memberprofile-primary-adr-city-state").text("");
	
	
	
	/**************************************
	
	If Currently Logged in User is Looking at their Own profile, hide the add friends button and add the Edit My Profile button
	
	***********************************************/
	if (uidofCurrentUser === uidofViewedProfile) {
		$('a.memberprofile-btn-addfriend').hide();
		$('.memberprofile-details').append('<a href="#" class="memberprofile-btn-edit" title="Edit My Info">Edit My Info</a>');
		$('.memberprofile-details').append('<a href="#" class="memberprofile-btn-edit-cancel" title="Cancel Editing" style="display:none;">Cancel Editing</a>');
		//add edit photo button comment this out to disable
		$('.memberprofile-details').append('<a href="#" class="memberprofile-btn-edit-photo" title="Edit My Photo">Edit My Photo</a>');
	}
	
	

	
	
	
	/* Load Friend/Buddy List from Web Service via JSON and render on page */

	var jsonuserfriendlistURL = 'http://webapi.memfirstweb.net/MemberDirectory/BuddyList/UserInList?HostUserID='+uidofCurrentUser+'&BuddyUserID='+uidofViewedProfile+'&callback=?';
	
	function getFriendList() {
		$.getJSON(jsonuserfriendlistURL, function(data) {
			//remove any existing friend list items in the parent div
			$('.memberprofile-user-friend-lists .memberprofile-user-firend-list-item').remove();
			
			if (data.length == 0) $('.memberprofile-user-friend-lists').html("<p>You have not configured your contact lists yet.<br><a href=\"/club/scripts/member/member_buddylist.asp?NS=MYLOCKER\">Click here</a> to setup.</p>");
			
			$.each(data, function(i, friendList) {
				
				if (friendList.IsBuddy == false) {
				$('.memberprofile-user-friend-lists').append('<div  class="memberprofile-user-firend-list-item"><span>'+friendList.BuddyList_Name+'</span><a class="memberprofile-friendlist-btn memberprofile-friendlist-btn-add" href="#" data-list-id="'+friendList.BuddyList_ID+'">Add to List</a></div>');
				} else if(friendList.IsBuddy == true) {
				$('.memberprofile-user-friend-lists').append('<div  class="memberprofile-user-firend-list-item"><span>'+friendList.BuddyList_Name+'</span><a class="memberprofile-friendlist-btn memberprofile-friendlist-btn-remove"  href="#" data-list-id="'+friendList.BuddyList_ID+'">Remove from List</a></div>');
				}
				
				
			});

		});
		
	}
	
	
	
	/* EVENT HANDLERS */

	$('a.memberprofile-btn-addfriend').click(function(e){
		e.preventDefault();
		getFriendList();
	});
	
	$('a.memberprofile-btn-addfriend').fancybox({
		'hideOnContentClick': false,
		'titleShow' : false
	});

	
	$('a.memberprofile-btn-ghin-scores').fancybox({
		'width'	:	700,
		'height' : 420,
		'titleShow' : false
		
	});
	$('.memberprofile-user-pic-mask a').fancybox({
		'titleShow' : false		
	});
	
	
	
	$('.memberprofile-user-activities-search-link').click(function(e) {
		e.preventDefault();
		var memberProfileActID = $(this).attr("data-act-id");
		store.set("activitiesdropdownSearch", memberProfileActID);
		$('#memberprofile-search-act-field').val(memberProfileActID);
		$('#memberprofile-user-activities-search-form').submit();
	});
	
	
	

	$('.memberprofile-friendlist-btn-add').live('click', function(e) {
		e.preventDefault();
		var friendListID = $(this).attr("data-list-id");
		var addToListURL = '/club/scripts/member/Member_BuddyList_AddUser.asp?page=M&BLID='+friendListID+'&BUID='+uidofViewedProfile;
		$.get(addToListURL, function(data) {
			//console.log(data);
			
		});
		$(this).removeClass("memberprofile-friendlist-btn-add").addClass("memberprofile-friendlist-btn-remove");
	});
	 
	$('.memberprofile-friendlist-btn-remove').live('click', function(e) {
		e.preventDefault();
		var friendListID = $(this).attr("data-list-id");
		var addToListURL = '/club/scripts/member/Member_BuddyList_RemoveUser.asp?page=M&BLID='+friendListID+'&BUID='+uidofViewedProfile;
		$.get(addToListURL, function(data) {
			//console.log(data);
		});
		$(this).removeClass("memberprofile-friendlist-btn-remove").addClass("memberprofile-friendlist-btn-add");
	});
	
	$('.memberprofile-btn-edit-photo').live('click', function(e) {
		e.preventDefault();
		openMemberUpload(uidofViewedProfile, userMemberNumber);
	});
	
	$('.memberprofile-btn-edit').live('click', function(e) {
		e.preventDefault();
		if ($('.memberprofile-edit-form').length < 1) {
			$('.memberprofile-wrap').append('<div class="memberprofile-edit-wrap"><div class="memberprofile-edit-btns-wrap"><a href="#" class="memberprofile-edit-basic-info-btn memberprofile-edit-section-active">Basic Info</a><a href="#" class="memberprofile-edit-pref-btn">Preferences</a></div><div class="memberprofile-edit-form"></div><div class="memberprofile-edit-pref" style="display:none"></div></div>');
			
			var loadprofileEditForm = '/club/scripts/member/member_profile_update.asp?APP=152&NS=MYLOCKER form[name="frmMain"]';
			$('.memberprofile-edit-wrap').hide().find('.memberprofile-edit-form').load(loadprofileEditForm, function() {
				$('.memberprofile-edit-form').prepend('<h2>Update Your Profile</h2>');
				$('.memberprofile-user-content-wrap').fadeOut('fast', function() {
					$('.memberprofile-edit-form').find('form[name="frmMain"]').addClass("memberprofile-form");
					$('.memberprofile-edit-wrap').fadeIn('fast');
					$('.memberprofile-btn-edit').hide();
					$('.memberprofile-btn-edit-cancel').show();
				});
			});
			
		} else {
			$('.memberprofile-user-content-wrap').fadeOut('fast', function() {
				$('.memberprofile-edit-wrap').fadeIn('fast');
				$('.memberprofile-btn-edit').hide();
				$('.memberprofile-btn-edit-cancel').show();
			});
		}
	});

	
	$('.memberprofile-edit-pref-btn').live('click', function(e) {
		e.preventDefault();
		$('.memberprofile-edit-section-active').removeClass("memberprofile-edit-section-active");
		$(this).addClass("memberprofile-edit-section-active");
		$('.memberprofile-edit-form').hide();
		if ($('.memberprofile-edit-pref form').length < 1) {
			$('.memberprofile-edit-pref').load('/club/scripts/member/member_preferences_edit.asp?NS=MYLOCKER&APP=41  form[name="frmMain"]',function() {
				$(this).fadeIn('fast');
			});
		} else {
			$('.memberprofile-edit-pref').show();
		}
		
	});
	
	$('.memberprofile-edit-basic-info-btn').live('click', function(e) {
		e.preventDefault();
		$('.memberprofile-edit-section-active').removeClass("memberprofile-edit-section-active");
		$(this).addClass("memberprofile-edit-section-active");
		$('.memberprofile-edit-pref').hide();
		$('.memberprofile-edit-form').show();
		
	});
	
	$('.memberprofile-btn-edit-cancel').live('click', function(e) {
		e.preventDefault();
		$('.memberprofile-btn-edit').show();
		$('.memberprofile-btn-edit-cancel').hide();
		$('.memberprofile-edit-wrap').hide();
		$('.memberprofile-user-content-wrap').fadeIn('fast');
		
	});
	
	
	
	var openFriendList = store.get("openfriendlist");
	if (openFriendList === true) {
		store.set("openfriendlist", false);
		$('.memberprofile-btn-addfriend').trigger('click');
	}
	
	
	if ($(".memberprofile-user-content-misc").eq(1).html() == "") {
        $(".title-organization").hide();
    }
	
});