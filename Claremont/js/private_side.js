$(document).ready(function(){
	
	
	$(function(){
		itemsPerPage = 4;
		paginatorStyle = 3;
		paginatorPosition = 'bottom';
		enableGoToPage = false;
	
		$(".side_calendar_list").pagination();
		
	});
	
	$('ul.side_calendar_list li.calendar_item').hover(
	  function () {
		$(this).addClass("hover");
		
	  }, 
	  function () {
		$(this).removeClass("hover");
	  }
	);

	//$('.private-announcements').clone().appendTo('.wrap-announcements .wrap');
	//$('.content-right .private-announcements').remove();

});