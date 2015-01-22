$(document).ready(function(){
	
	
	$(function(){
		itemsPerPage = 5;
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

});